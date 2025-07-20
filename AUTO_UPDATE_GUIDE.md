# 포트폴리오 자동 업데이트 가이드

새로운 GitHub 레포지토리가 생성될 때마다 포트폴리오가 자동으로 업데이트되도록 설정되었습니다.

## 🔄 자동 업데이트 시스템

### 1. 스케줄 기반 자동 업데이트
- **실행 시간**: 매일 한국시간 오전 9시 (UTC 자정)
- **작동 방식**: GitHub Actions가 자동으로 실행
- **확인 방법**: [Actions 탭](https://github.com/yonghwan1106/portfolio-2025/actions)에서 실행 상태 확인

### 2. 수동 업데이트 (즉시 업데이트)
GitHub에서 수동으로 업데이트를 실행할 수 있습니다:

1. [Actions 탭](https://github.com/yonghwan1106/portfolio-2025/actions) 이동
2. "Auto Update Portfolio" 워크플로우 선택
3. "Run workflow" 버튼 클릭
4. 실행 완료까지 약 3-5분 소요

## 🎯 자동 감지 기능

### 지원하는 배포 플랫폼
- **GitHub Pages**: `https://yonghwan1106.github.io/{repo-name}/`
- **Vercel**: `https://{repo-name}.vercel.app/`
- **Render**: `https://{repo-name}.onrender.com/`

### 자동 분석 항목
- ✅ 새로운 레포지토리 자동 감지
- ✅ 배포 상태 실시간 확인
- ✅ 다중 플랫폼 배포 감지
- ✅ 품질 점수 자동 계산
- ✅ 프로젝트 정보 업데이트

## 📝 새 프로젝트 추가 시 권장사항

### 1. 레포지토리 이름 규칙
```
good-project-name        ✅ 추천
my_awesome_project       ✅ 추천
MyAwesomeProject         ⚠️  가능하지만 소문자 권장
project with spaces      ❌ 피하세요
```

### 2. 배포 후 확인사항
새 프로젝트를 배포한 후:
1. 배포 URL이 정상 작동하는지 확인
2. 다음날 오전 9시 이후 포트폴리오 사이트 확인
3. 또는 수동 업데이트 실행

### 3. 프로젝트 정보 향상
더 나은 표시를 위해 다음을 추가하세요:

**GitHub 레포지토리에서:**
- 📝 Repository Description 작성
- ⭐ README.md 파일 추가
- 🏷️ Topics 태그 설정

**포트폴리오에서 한국어 제목/설명 추가:**
1. `src/data/projectEnhancer.ts` 파일 수정
2. 새 프로젝트 정보 추가:
```typescript
'your-repo-name': {
  title: '한국어 프로젝트 제목',
  description: '상세한 한국어 설명...',
  category: '카테고리'
}
```

## 🔧 로컬에서 수동 업데이트

로컬 환경에서 업데이트하려면:

### 1. 환경 설정
```bash
# GitHub 토큰 설정 (한번만)
export GITHUB_TOKEN=your_github_token_here
```

### 2. 스크립트 실행
```bash
# 자동 업데이트 실행
./scripts/update_portfolio.sh

# 또는 Python 스크립트만 실행
python scripts/auto_portfolio_scanner.py
```

## 📊 업데이트 로그 확인

### GitHub Actions 로그
- [Actions 탭](https://github.com/yonghwan1106/portfolio-2025/actions)에서 실행 기록 확인
- 각 실행의 상세 로그 확인 가능

### 성공 시 자동 액션
1. 새로운 배포 사이트 감지
2. `projects_scan_result_final.json` 파일 업데이트
3. 자동 커밋 및 푸시
4. 포트폴리오 사이트 자동 배포
5. [https://yonghwan1106.github.io/portfolio-2025/](https://yonghwan1106.github.io/portfolio-2025/) 업데이트 완료

## 🎨 커스터마이징

### 스캔 주기 변경
`.github/workflows/auto-update.yml` 파일에서 cron 설정 변경:
```yaml
schedule:
  # 매주 월요일 오전 9시
  - cron: '0 0 * * 1'
  # 매 6시간마다
  - cron: '0 */6 * * *'
```

### 새로운 배포 플랫폼 추가
`scripts/auto_portfolio_scanner.py`에서 플랫폼 확인 로직 추가

---

이제 새로운 레포지토리를 만들고 배포하기만 하면 **자동으로 포트폴리오에 반영**됩니다! 🎉