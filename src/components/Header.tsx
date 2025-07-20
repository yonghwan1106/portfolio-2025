import React from 'react';
import { Trophy, Globe, Lightbulb, Target } from 'lucide-react';
import { Project } from '../types';

interface HeaderProps {
  projects: Project[];
}

const Header: React.FC<HeaderProps> = ({ projects }) => {
  // 통계 계산
  const totalProjects = projects.length;
  const liveProjects = projects.filter(p => p.is_live).length;
  const averageQuality = projects.reduce((sum, p) => sum + (p.quality_score || 50), 0) / totalProjects;
  const successRate = (liveProjects / totalProjects) * 100;
  return (
    <header className="gradient-bg text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            박용환
          </h1>
          <p className="text-xl mb-6 text-blue-100 animate-fade-in">
            아이디어를 현실로 만드는 공모전 전문가
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              📧 sanoramyun8@gmail.com
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              📱 010-7939-3123
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              🏢 크리에이티브 넥서스
            </span>
          </div>
        </div>

        {/* 주요 성과 통계 */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center glass-effect rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <Lightbulb className="w-8 h-8 text-yellow-300" />
            </div>
            <div className="text-2xl font-bold mb-1">{totalProjects}</div>
            <div className="text-blue-100 text-sm">총 프로젝트</div>
          </div>
          
          <div className="text-center glass-effect rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <Globe className="w-8 h-8 text-green-300" />
            </div>
            <div className="text-2xl font-bold mb-1">{liveProjects}</div>
            <div className="text-blue-100 text-sm">라이브 사이트</div>
          </div>
          
          <div className="text-center glass-effect rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <Target className="w-8 h-8 text-purple-300" />
            </div>
            <div className="text-2xl font-bold mb-1">{averageQuality.toFixed(1)}</div>
            <div className="text-blue-100 text-sm">평균 품질점수</div>
          </div>
          
          <div className="text-center glass-effect rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <Trophy className="w-8 h-8 text-orange-300" />
            </div>
            <div className="text-2xl font-bold mb-1">{successRate.toFixed(1)}%</div>
            <div className="text-blue-100 text-sm">성공률</div>
          </div>
        </div>

        {/* 전문 분야 */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">전문 분야</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '공모전 발굴 및 분석',
              '아이디어 개발 및 최적화', 
              '제안서 작성 지원',
              '웹사이트 구현',
              '전략적 지원'
            ].map((skill) => (
              <span 
                key={skill}
                className="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
