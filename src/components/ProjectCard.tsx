import React from 'react';
import { ExternalLink, Award, Code, Smartphone, Star, Globe } from 'lucide-react';
import { Project } from '../types';
import { getQualityColor, shortenDescription } from '../utils';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const qualityColor = getQualityColor(project.quality_score || 50);
  const cardClass = featured 
    ? 'project-card border-primary-200 bg-gradient-to-br from-white to-blue-50'
    : 'project-card';

  const getQualityIcon = (score: number) => {
    if (score >= 80) return <Star className="w-4 h-4 text-yellow-500 fill-current" />;
    if (score >= 60) return <Star className="w-4 h-4 text-yellow-400" />;
    return <Star className="w-4 h-4 text-gray-400" />;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      '농업': 'bg-green-100 text-green-800',
      '환경': 'bg-emerald-100 text-emerald-800',
      '규제혁신': 'bg-red-100 text-red-800',
      'AI/디지털': 'bg-blue-100 text-blue-800',
      '관광': 'bg-yellow-100 text-yellow-800',
      '안전': 'bg-red-100 text-red-800',
      '청년': 'bg-purple-100 text-purple-800',
      '지자체': 'bg-gray-100 text-gray-800',
      '문화': 'bg-pink-100 text-pink-800',
      '기타': 'bg-gray-100 text-gray-600'
    };
    return colors[category] || colors['기타'];
  };

  const getPlatformIcon = (platform: string) => {
    const icons: Record<string, string> = {
      'github': '🐙',
      'github_pages': '🐙',
      'vercel': '▲',
      'render': '🎨'
    };
    return icons[platform] || '🌐';
  };

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      'github': 'bg-gray-100 text-gray-700',
      'github_pages': 'bg-gray-100 text-gray-700',
      'vercel': 'bg-black text-white',
      'render': 'bg-purple-100 text-purple-700'
    };
    return colors[platform] || 'bg-gray-100 text-gray-600';
  };

  const getProjectFeatures = (project: Project): string => {
    const features = [];
    
    if (project.name.includes('ai') || project.name.includes('AI')) {
      features.push('AI 기술 활용');
    }
    if (project.name.includes('smart') || project.name.includes('스마트')) {
      features.push('스마트 시스템');
    }
    if (project.name.includes('validation') || project.name.includes('검증')) {
      features.push('데이터 검증');
    }
    if (project.name.includes('classifier') || project.name.includes('분류')) {
      features.push('자동 분류');
    }
    if (project.name.includes('demo') || project.name.includes('데모')) {
      features.push('데모 사이트');
    }
    if (project.name.includes('hub') || project.name.includes('허브')) {
      features.push('통합 플랫폼');
    }
    if (project.name.includes('vibes') || project.name.includes('감정')) {
      features.push('감정 분석');
    }
    if (project.name.includes('guard') || project.name.includes('보안')) {
      features.push('보안 시스템');
    }
    if (project.name.includes('carbon') || project.name.includes('탄소')) {
      features.push('탄소 관리');
    }
    if (project.name.includes('platform') || project.name.includes('플랫폼')) {
      features.push('플랫폼 서비스');
    }
    
    return features.length > 0 ? features.slice(0, 2).join(', ') : '웹 애플리케이션';
  };

  const getProjectTechStack = (project: Project): string => {
    const techs = [];
    
    if (project.has_js) techs.push('JavaScript');
    if (project.has_css) techs.push('CSS');
    if (project.has_responsive) techs.push('반응형 디자인');
    
    // 프로젝트명으로 기술 스택 추정
    if (project.name.includes('react') || project.name.includes('React')) {
      techs.push('React');
    }
    if (project.name.includes('vue') || project.name.includes('Vue')) {
      techs.push('Vue.js');
    }
    if (project.name.includes('node') || project.name.includes('express')) {
      techs.push('Node.js');
    }
    if (project.name.includes('python') || project.name.includes('flask') || project.name.includes('django')) {
      techs.push('Python');
    }
    
    if (techs.length === 0) {
      return 'HTML, CSS, JavaScript';
    }
    
    return [...new Set(techs)].slice(0, 3).join(', ');
  };

  const getProjectHighlight = (project: Project): string | null => {
    if (project.quality_score >= 90) {
      return '고품질 구현, 완성도 높은 UI/UX';
    }
    if (project.quality_score >= 80) {
      return '안정적인 구현, 우수한 사용자 경험';
    }
    if (project.total_deployments > 1) {
      return '다중 플랫폼 배포, 높은 접근성';
    }
    if (project.is_live) {
      return '실제 서비스 운영 중';
    }
    return null;
  };

  return (
    <div className={cardClass}>
      {featured && (
        <div className="absolute -top-2 -right-2 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          Featured
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
              {project.category}
            </span>
            {project.is_live && (
              <span className="status-live">
                ● Live
              </span>
            )}
          </div>
          
          {/* 배포 플랫폼 표시 */}
          {project.deployments && project.deployments.length > 0 && (
            <div className="flex items-center gap-1 mb-2">
              {project.deployments.map((deployment: any, index: number) => (
                <span 
                  key={index}
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getPlatformColor(deployment.platform)}`}
                  title={`${deployment.platform}: ${deployment.url}`}
                >
                  {getPlatformIcon(deployment.platform)} {deployment.platform === 'github_pages' ? 'GitHub' : deployment.platform}
                </span>
              ))}
              {project.total_deployments > 1 && (
                <span className="text-xs text-gray-500 ml-1">
                  ({project.total_deployments}개 배포)
                </span>
              )}
            </div>
          )}
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {project.title || project.name}
          </h3>
        </div>
        
        <div className="flex items-center gap-2 ml-4">
          <div className={`text-${qualityColor}-600 font-medium text-sm flex items-center gap-1`}>
            {getQualityIcon(project.quality_score || 50)}
            {project.quality_score || 50}
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {shortenDescription(project.description)}
      </p>

      {/* 프로젝트 상세 정보 */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4 text-xs">
        <div className="space-y-2">
          {/* 주요 기능 */}
          <div>
            <span className="font-medium text-gray-700">주요 기능:</span>
            <span className="text-gray-600 ml-1">
              {getProjectFeatures(project)}
            </span>
          </div>
          
          {/* 사용 기술 */}
          <div>
            <span className="font-medium text-gray-700">기술 스택:</span>
            <span className="text-gray-600 ml-1">
              {getProjectTechStack(project)}
            </span>
          </div>
          
          {/* 프로젝트 특징 */}
          {getProjectHighlight(project) && (
            <div>
              <span className="font-medium text-gray-700">특징:</span>
              <span className="text-gray-600 ml-1">
                {getProjectHighlight(project)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 기술 스택 표시 */}
      <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
        {project.has_css && (
          <div className="flex items-center gap-1">
            <Code className="w-3 h-3" />
            CSS
          </div>
        )}
        {project.has_js && (
          <div className="flex items-center gap-1">
            <Code className="w-3 h-3" />
            JS
          </div>
        )}
        {project.has_responsive && (
          <div className="flex items-center gap-1">
            <Smartphone className="w-3 h-3" />
            반응형
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500">
          {new Date(project.scan_date).toLocaleDateString('ko-KR')}
        </div>
        
        {project.primary_url || project.github_url ? (
          <a
            href={project.primary_url || project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
          >
            <span>사이트 보기</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <span className="text-gray-400 text-sm">배포되지 않음</span>
        )}
      </div>

      {/* 수상 정보가 있다면 표시 */}
      {project.award_status !== 'unknown' && project.award_status && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1 text-orange-600 text-sm font-medium">
            <Award className="w-4 h-4" />
            {project.award_status}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
