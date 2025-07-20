#!/bin/bash
# 포트폴리오 수동 업데이트 스크립트

echo "🔄 Starting portfolio update..."

# GitHub 토큰 확인
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ GITHUB_TOKEN environment variable is required"
    echo "Set it with: export GITHUB_TOKEN=your_token_here"
    exit 1
fi

# Python 의존성 설치
echo "📦 Installing Python dependencies..."
pip install requests beautifulsoup4 lxml

# 포트폴리오 스캔 실행
echo "🔍 Scanning repositories..."
python scripts/auto_portfolio_scanner.py

# 변경사항 확인
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Changes detected, building and deploying..."
    
    # Git 설정
    git config --local user.email "your-email@example.com"
    git config --local user.name "Portfolio Auto Update"
    
    # 변경사항 커밋
    git add .
    git commit -m "🔄 Auto update portfolio data - $(date '+%Y-%m-%d %H:%M:%S')

- Scanned GitHub repositories for new deployments
- Updated project data with latest information

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
    
    # 빌드
    npm run build
    
    # 푸시
    git push origin master
    
    echo "✅ Portfolio updated and deployed!"
else
    echo "ℹ️  No changes detected"
fi