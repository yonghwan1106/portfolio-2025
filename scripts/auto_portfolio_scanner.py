#!/usr/bin/env python3
"""
자동 포트폴리오 스캐너
GitHub API를 사용하여 새로운 레포지토리와 배포를 자동으로 감지하고 portfolio 데이터를 업데이트합니다.
"""

import os
import json
import requests
import time
from datetime import datetime, timezone
from typing import Dict, List, Any, Optional

class AutoPortfolioScanner:
    def __init__(self):
        self.github_token = os.environ.get('GITHUB_TOKEN')
        if not self.github_token:
            raise ValueError("GITHUB_TOKEN environment variable is required")
        
        self.username = "yonghwan1106"
        self.headers = {
            'Authorization': f'token {self.github_token}',
            'Accept': 'application/vnd.github.v3+json'
        }
        self.session = requests.Session()
        self.session.headers.update(self.headers)
        
    def get_all_repositories(self) -> List[Dict]:
        """GitHub API로 모든 레포지토리 가져오기"""
        repos = []
        page = 1
        per_page = 100
        
        while True:
            url = f"https://api.github.com/users/{self.username}/repos"
            params = {
                'page': page,
                'per_page': per_page,
                'sort': 'updated',
                'direction': 'desc'
            }
            
            response = self.session.get(url, params=params)
            if response.status_code != 200:
                print(f"Error fetching repositories: {response.status_code}")
                break
                
            page_repos = response.json()
            if not page_repos:
                break
                
            repos.extend(page_repos)
            page += 1
            
            # API 레이트 리밋 방지
            time.sleep(0.1)
            
        return repos
    
    def auto_categorize(self, repo_name: str, description: str) -> str:
        """레포지토리명과 설명을 분석하여 자동으로 카테고리 분류"""
        name_lower = repo_name.lower()
        desc_lower = description.lower()
        text = f"{name_lower} {desc_lower}"
        
        # 카테고리 키워드 매핑
        category_keywords = {
            'AI/디지털': ['ai', 'smart', 'digital', 'platform', 'tech', 'data', 'startup', 'innovation'],
            '환경': ['carbon', 'eco', 'energy', 'marine', 'environment', 'green', 'climate'],
            '농업': ['agriculture', 'farm', 'agri', 'food', 'crop'],
            '안전': ['safety', 'security', 'emergency', 'protection'],
            '관광': ['tourism', 'travel', 'tourist', 'heritage', 'culture'],
            '청년': ['youth', 'young', 'student', 'startup'],
            '지자체': ['city', 'county', 'district', 'local', 'municipal', 'policy', 'government'],
            '규제혁신': ['regulation', 'deregulation', 'reform', 'policy'],
            '문화': ['culture', 'heritage', 'art', 'museum', 'festival']
        }
        
        # 키워드 매칭으로 카테고리 결정
        for category, keywords in category_keywords.items():
            for keyword in keywords:
                if keyword in text:
                    return category
        
        return '기타'
    
    def check_deployment_url(self, url: str) -> Dict[str, Any]:
        """URL 접근 가능성 확인"""
        try:
            response = requests.get(url, timeout=10, allow_redirects=True)
            return {
                'status': 'live' if response.status_code == 200 else 'error',
                'response_code': response.status_code,
                'content_length': len(response.content) if response.status_code == 200 else 0
            }
        except Exception as e:
            return {
                'status': 'not_found',
                'response_code': None,
                'error': str(e)
            }
    
    def scan_repository_deployments(self, repo: Dict) -> Dict[str, Any]:
        """개별 레포지토리의 배포 상태 스캔"""
        repo_name = repo['name']
        deployments = []
        platforms = {}
        
        # GitHub Pages 확인
        github_pages_url = f"https://{self.username}.github.io/{repo_name}/"
        github_status = self.check_deployment_url(github_pages_url)
        platforms['github'] = {
            'url': github_pages_url if github_status['status'] == 'live' else '',
            'status': github_status['status'],
            'response_code': github_status.get('response_code')
        }
        
        if github_status['status'] == 'live':
            deployments.append({
                'platform': 'github_pages',
                'url': github_pages_url,
                'response_code': github_status['response_code'],
                'content_length': github_status.get('content_length', 0)
            })
        
        # Vercel 확인
        vercel_url = f"https://{repo_name}.vercel.app/"
        vercel_status = self.check_deployment_url(vercel_url)
        platforms['vercel'] = {
            'url': vercel_url if vercel_status['status'] == 'live' else '',
            'status': vercel_status['status'],
            'response_code': vercel_status.get('response_code')
        }
        
        if vercel_status['status'] == 'live':
            deployments.append({
                'platform': 'vercel',
                'url': vercel_url,
                'response_code': vercel_status['response_code'],
                'content_length': vercel_status.get('content_length', 0)
            })
        
        # Render 확인
        render_url = f"https://{repo_name}.onrender.com/"
        render_status = self.check_deployment_url(render_url)
        platforms['render'] = {
            'url': render_url if render_status['status'] == 'live' else '',
            'status': render_status['status'],
            'response_code': render_status.get('response_code')
        }
        
        if render_status['status'] == 'live':
            deployments.append({
                'platform': 'render',
                'url': render_url,
                'response_code': render_status['response_code'],
                'content_length': render_status.get('content_length', 0)
            })
        
        # 주요 배포 URL 결정
        primary_url = ''
        primary_platform = ''
        if deployments:
            # 우선순위: Vercel > GitHub Pages > Render
            for platform in ['vercel', 'github_pages', 'render']:
                for deployment in deployments:
                    if deployment['platform'] == platform:
                        primary_url = deployment['url']
                        primary_platform = platform
                        break
                if primary_url:
                    break
        
        # 품질 점수 계산 (간단한 휴리스틱)
        quality_score = 50  # 기본 점수
        if deployments:
            quality_score += 20  # 배포 가능한 프로젝트
        if len(deployments) > 1:
            quality_score += 10  # 다중 플랫폼 배포
        if repo.get('stargazers_count', 0) > 0:
            quality_score += 10  # 스타가 있는 프로젝트
        if repo.get('description'):
            quality_score += 5   # 설명이 있는 프로젝트
        
        quality_score = min(quality_score, 95)  # 최대 95점
        
        # 자동 카테고리 분류
        category = self.auto_categorize(repo_name, repo.get('description', ''))
        
        return {
            'id': repo_name,
            'name': repo_name,
            'scan_date': datetime.now(timezone.utc).isoformat(),
            'deployments': deployments,
            'platforms': platforms,
            'total_deployments': len(deployments),
            'primary_url': primary_url,
            'primary_platform': primary_platform,
            'is_live': len(deployments) > 0,
            'category': category,
            'title': repo_name,
            'description': repo.get('description', ''),
            'github_url': repo['html_url'],
            'quality_score': quality_score,
            'stars': repo.get('stargazers_count', 0),
            'updated_at': repo.get('updated_at', ''),
            'created_at': repo.get('created_at', '')
        }
    
    def load_existing_data(self) -> Dict:
        """기존 포트폴리오 데이터 로드"""
        try:
            with open('projects_scan_result_final.json', 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            return {
                'scan_info': {
                    'scan_date': datetime.now(timezone.utc).isoformat(),
                    'total_projects': 0,
                    'scanner_version': '3.0'
                },
                'projects': []
            }
    
    def save_data(self, data: Dict):
        """포트폴리오 데이터 저장"""
        with open('projects_scan_result_final.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    
    def run_scan(self):
        """전체 스캔 실행"""
        print("🚀 Starting automatic portfolio scan...")
        
        # 기존 데이터 로드
        existing_data = self.load_existing_data()
        existing_projects = {p['name']: p for p in existing_data.get('projects', [])}
        
        # GitHub 레포지토리 가져오기
        print("📡 Fetching repositories from GitHub API...")
        repos = self.get_all_repositories()
        print(f"Found {len(repos)} repositories")
        
        new_projects = []
        live_count = 0
        
        for i, repo in enumerate(repos, 1):
            repo_name = repo['name']
            print(f"[{i}/{len(repos)}] Scanning {repo_name}...")
            
            # 레포지토리 스캔
            project_data = self.scan_repository_deployments(repo)
            
            # 기존 데이터가 있으면 특정 필드 유지
            if repo_name in existing_projects:
                existing = existing_projects[repo_name]
                # 수동으로 설정된 정보는 유지
                project_data['category'] = existing.get('category', '기타')
                if existing.get('title') != existing.get('name'):
                    project_data['title'] = existing['title']
                if existing.get('description') and existing['description'] != repo.get('description', ''):
                    project_data['description'] = existing['description']
            
            if project_data['is_live']:
                new_projects.append(project_data)
                live_count += 1
                print(f"  ✅ Live deployments: {project_data['total_deployments']}")
            
            # API 레이트 리밋 방지
            time.sleep(0.2)
        
        # 결과 저장
        result_data = {
            'scan_info': {
                'scan_date': datetime.now(timezone.utc).isoformat(),
                'total_projects': live_count,
                'scanner_version': '3.0',
                'auto_scan': True
            },
            'projects': new_projects
        }
        
        self.save_data(result_data)
        
        print(f"\n✅ Scan completed!")
        print(f"📊 Total repositories: {len(repos)}")
        print(f"🚀 Live deployments: {live_count}")
        print(f"💾 Data saved to projects_scan_result_final.json")
        
        return live_count

if __name__ == '__main__':
    try:
        scanner = AutoPortfolioScanner()
        scanner.run_scan()
    except Exception as e:
        print(f"❌ Error: {e}")
        exit(1)