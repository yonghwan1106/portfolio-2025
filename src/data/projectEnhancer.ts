import { Project } from '../types';

interface EnhancedProjectInfo {
  title: string;
  description: string;
  category: string;
}

const projectEnhancements: Record<string, EnhancedProjectInfo> = {
  'customs-validation-demo': {
    title: '청년농업인 스마트농업 창업 원스톱 플랫폼 데모',
    description: '2025년 농식품 규제혁신 공모전 제출한 청년농업인 스마트농업 창업 원스톱 플랫폼을 구축 아이디어의 실제 작동 모습을 보여주는 프로토타입입니다.',
    category: '농업'
  },
  'ai-strategic-tech-classifier-2025': {
    title: '부산 금정구 고령사회기부제 지정기부사업 아이디어 공모',
    description: 'VR/AR 기술을 활용한 가상 금정구 고향 체험 플랫폼 - 부산광역시 금정구 고령사회기부제 지정기부사업 아이디어 공모 제출서',
    category: 'AI/디지털'
  },
  'portfolio-hub': {
    title: '1인 크리에이터 통합 서비스톡 플랫폼 웹사이트',
    description: '대구광역시 규제혁신 아이디어 공모전 제안서 구현 - 1인 크리에이터들의 복잡한 서비스톡 절차를 간소화하는 통합 플랫폼',
    category: '규제혁신'
  },
  'KOMIPO-energy-island-platform': {
    title: 'KOMIPO 에너지 섬악 웹런치 플랫폼',
    description: '2025년 KOMIPO 대학원 시정평택 아이디어 공모전 - 계절외취 에너지 섬악 웹런치를 통한 시정 창여형 경환 보호 플랫폼',
    category: '환경'
  },
  'gyeonggi-smart-carbon-platform': {
    title: '경기도 생성형AI 공공데이터 창업경진대회',
    description: '생성형 AI와 경기도 공공데이터를 활용한 상경 본석 및 탄소 상담 컴슬팅 서비스 - AI 기반 개인 탄소 본석 및 탄소중립 컨설팅 서비스',
    category: 'AI/디지털'
  },
  'jung-gu-smart-carbon-platform': {
    title: 'Jung-gu Smart Carbon Care Platform',
    description: '2025 Seoul Jung-gu Policy Idea Competition - AI 기반 개인 탄소관리 탄소중립 관리 및 중소 실현 플랫폼',
    category: '환경'
  },
  'namyangju-smart-city-platform': {
    title: '남양주시 스마트시티 통합 플랫폼',
    description: '남양주시 정착 아이디어 공모전 - 시민 승차의 스마트시티 서비스 통합 플랫폼 구현 서민 창여형 스마트 방화',
    category: '지자체'
  },
  'smart-city-forest-platform': {
    title: '스마트시티 혁신 허브 플랫폼',
    description: 'IoT와 AI 기술을 활용한 스마트시티 솔루션 통합 플랫폼 - 도시 환경 혁상을 위한 시민 참여형 혁신 생태계',
    category: 'AI/디지털'
  },
  'korean-agriculture-innovation-platform': {
    title: '전국 농업 창업 아이디어 공모전',
    description: '농업 혁신을 통한 지속가능한 농업 생태계 구축 - 스마트팜과 ICT 기술을 결합한 차세대 농업 창업 모델',
    category: '농업'
  },
  'daily-vibes': {
    title: '일상 감정 추적 및 분석 플랫폼',
    description: '개인의 일상 감정을 추적하고 분석하여 정신 건강 관리를 돕는 웹 애플리케이션 - 감정 패턴 분석과 개인화된 건강 관리 서비스',
    category: '관광'
  },
  'smart_voice_guard': {
    title: 'AI 기반 음성 피싱 탐지 시스템',
    description: '딥러닝과 음성인식 기술을 활용한 실시간 피싱 전화 탐지 및 차단 시스템 - 고령자 대상 전화사기 예방 솔루션',
    category: '안전'
  },
  'korea-night-market-platform': {
    title: '전국 야시장 통합 관리 플랫폼',
    description: '전국 야시장 정보를 통합 관리하고 상인과 고객을 연결하는 디지털 플랫폼 - 지역 경제 활성화와 관광 산업 발전',
    category: '관광'
  },
  'busan-geumjeong-vr-platform': {
    title: '부산 금정구 VR 고향 체험 플랫폼',
    description: 'VR/AR 기술을 활용한 가상 금정구 고향 체험 서비스 - 고령자를 위한 디지털 고향 방문 및 추억 공유 플랫폼',
    category: 'AI/디지털'
  },
  'gangwon-ocean-cleanup': {
    title: '강원도 해양 쓰레기 AI 분류 시스템',
    description: '강원도 해안가 해양 쓰레기를 AI로 자동 분류하고 관리하는 환경 보호 시스템 - 지속가능한 해양 환경 관리',
    category: '환경'
  },
  'seoul-youth-startup-hub': {
    title: '서울시 청년 창업 지원 허브',
    description: '서울시 청년 창업가를 위한 원스톱 지원 서비스 플랫폼 - 창업 교육, 자금 지원, 네트워킹을 통합한 창업 생태계',
    category: '청년'
  },
  'incheon-smart-port': {
    title: '인천항 스마트 물류 최적화 시스템',
    description: '인천항의 물류 흐름을 AI로 최적화하여 효율성을 높이는 스마트 포트 시스템 - IoT와 빅데이터 기반 항만 관리',
    category: 'AI/디지털'
  },
  'daegu-cultural-heritage': {
    title: '대구 문화유산 디지털 아카이브',
    description: '대구 지역의 문화유산을 디지털로 보존하고 시민들과 공유하는 문화 플랫폼 - AR/VR 기술로 역사 체험 서비스',
    category: '문화'
  },
  'ulsan-industrial-safety': {
    title: '울산 산업단지 안전 모니터링 시스템',
    description: '울산 산업단지의 안전사고를 예방하기 위한 IoT 기반 실시간 모니터링 시스템 - 산업 안전과 근로자 보호',
    category: '안전'
  },
  'IdeaVault': {
    title: '아이디어 금고 - 창의적 아이디어 관리 플랫폼',
    description: '개인과 팀의 창의적 아이디어를 체계적으로 저장, 관리, 발전시키는 디지털 아이디어 뱅크 시스템',
    category: 'AI/디지털'
  },
  'safenergy-platform': {
    title: '안전한 에너지 통합 관리 플랫폼',
    description: '신재생 에너지의 안전한 생산과 배급을 통합 관리하는 스마트 에너지 플랫폼 - 지속가능한 에너지 생태계 구축',
    category: '환경'
  },
  'smartkids': {
    title: '스마트 키즈 - 아동 성장 관리 플랫폼',
    description: '아이들의 성장과 학습을 체계적으로 관리하고 부모와 교육자를 연결하는 통합 아동 케어 시스템',
    category: '청년'
  },
  'media_compass_prototype': {
    title: '미디어 컴퍼스 - 뉴스 신뢰도 검증 시스템',
    description: 'AI 기반 뉴스 및 미디어 신뢰도 검증 시스템 - 가짜뉴스 탐지와 정보 품질 평가 서비스',
    category: 'AI/디지털'
  },
  'geunnae-residence': {
    title: '근내 레지던스 - 스마트 주거 관리 시스템',
    description: '주민 편의와 안전을 위한 스마트 아파트 관리 시스템 - IoT 기반 통합 주거 서비스',
    category: '지자체'
  },
  'labor_safety_smart_manager': {
    title: '노동 안전 스마트 매니저',
    description: '작업장 안전사고 예방을 위한 AI 기반 실시간 모니터링 시스템 - 산업 현장 안전 관리 솔루션',
    category: '안전'
  },
  'BlueCarbon_Monitor': {
    title: '블루카본 모니터링 시스템',
    description: '해양 생태계의 탄소 흡수량을 모니터링하고 관리하는 환경 보호 시스템 - 기후변화 대응 해양 탄소 관리',
    category: '환경'
  },
  'Hwaseong_Birth_Policy_Contest_2025': {
    title: '화성시 출산 정책 아이디어 공모전 2025',
    description: '화성시 저출산 문제 해결을 위한 혁신적인 출산 장려 정책 제안 - 가족 친화적 도시 환경 조성',
    category: '지자체'
  },
  'AI_Smart_Procurement_Advisor': {
    title: 'AI 스마트 조달 어드바이저',
    description: '공공조달 과정을 AI로 최적화하여 투명성과 효율성을 높이는 스마트 조달 시스템',
    category: 'AI/디지털'
  },
  'TONGYEONG_INTEGRITY_CONTEST_2025': {
    title: '통영시 청렴 문화 확산 공모전 2025',
    description: '통영시 공직자와 시민의 청렴 의식 향상을 위한 디지털 플랫폼 - 투명한 행정 문화 조성',
    category: '지자체'
  },
  'kodit-global-bridge-demo': {
    title: 'KODIT 글로벌 브릿지 데모',
    description: '중소기업의 글로벌 진출을 지원하는 종합 플랫폼 - 수출입 지원과 해외 파트너 매칭 서비스',
    category: '규제혁신'
  },
  'EcoChallenge_KOMIPO': {
    title: 'KOMIPO 에코 챌린지 플랫폼',
    description: '시민 참여형 환경 보호 챌린지 플랫폼 - 탄소 중립 실천과 친환경 라이프스타일 확산',
    category: '환경'
  },
  'Goryeong_Policy_Proposal_2025': {
    title: '고령군 정책 제안 공모전 2025',
    description: '고령군 지역 발전을 위한 혁신적인 정책 아이디어 제안 - 지역 특성을 활용한 발전 전략',
    category: '지자체'
  },
  'BUSAN_GEUMJEONG_HOMETOWN_DONATION_CONTEST_2025': {
    title: '부산 금정구 고향사랑기부제 공모전 2025',
    description: '부산 금정구 고향사랑기부제를 활용한 지역 발전 아이디어 - 지역 경제 활성화와 주민 복지 향상',
    category: '지자체'
  },
  'AgriFood_Regulation_Innovation_2025': {
    title: '농식품 규제혁신 공모전 2025',
    description: '농식품 분야의 불필요한 규제를 개선하여 농업 혁신과 경쟁력 강화를 위한 정책 제안',
    category: '농업'
  },
  'Gangwon_Marine_Tourism_Contest': {
    title: '강원도 해양관광 활성화 공모전',
    description: '강원도 동해안 해양관광 자원을 활용한 관광 상품 개발과 지역 경제 활성화 방안',
    category: '관광'
  },
  'damyang_regulation_innovation_contest': {
    title: '담양군 규제혁신 아이디어 공모전',
    description: '담양군 지역 발전을 위한 규제혁신 아이디어 제안 - 지역 특성을 살린 혁신적인 정책 개발과 규제 개선 방안',
    category: '지자체'
  },
  'jung-gu-smart-carbon-care': {
    title: '중구 스마트 탄소 케어 플랫폼',
    description: '서울 중구 지역의 탄소 중립 실현을 위한 스마트 탄소 관리 시스템 - AI 기반 개인 맞춤형 탄소 저감 솔루션',
    category: '환경'
  },
  'DAEGU_REGULATION_INNOVATION_CONTEST_2025': {
    title: '대구시 규제혁신 아이디어 공모전 2025',
    description: '대구시 혁신 성장을 위한 규제혁신 아이디어 공모 - 지역 특화 산업 육성과 기업 활동 지원을 위한 규제 개선',
    category: '지자체'
  },
  'Gyeonggi_GenAI_PublicData_Startup': {
    title: '경기도 생성형AI 공공데이터 창업경진대회',
    description: '경기도 공공데이터와 생성형 AI를 활용한 창업 아이디어 - 데이터 기반 혁신 서비스 개발과 지역 경제 활성화',
    category: 'AI/디지털'
  },
  'Yangpyeong_County_Development_Ideas': {
    title: '양평군 지역발전 아이디어 공모전',
    description: '양평군의 지속가능한 발전을 위한 창의적 아이디어 제안 - 자연 친화적 관광과 지역 경제 활성화 방안',
    category: '지자체'
  },
  'Northern_GC_Public_Safety_Policy': {
    title: '강북구 공공안전 정책 제안',
    description: '강북구 주민 안전 강화를 위한 공공안전 정책 아이디어 - 스마트 기술을 활용한 지역 안전망 구축',
    category: '안전'
  },
  'navermap': {
    title: '네이버맵 연동 지역정보 서비스',
    description: '네이버맵 API를 활용한 지역 맞춤형 정보 제공 서비스 - 실시간 위치 기반 편의시설 및 관광정보 통합 플랫폼',
    category: 'AI/디지털'
  },
  'gunpo-digital-healthcare-zone': {
    title: '군포시 디지털 헬스케어 특구',
    description: '군포시 디지털 헬스케어 산업 육성을 위한 특구 조성 아이디어 - 의료 혁신과 건강관리 서비스 통합 생태계',
    category: '지자체'
  },
  'Northern_GG_Public_Safety_Policy': {
    title: '강북구 공공안전 정책 제안',
    description: '강북구 주민 안전 강화를 위한 공공안전 정책 아이디어 - 스마트 기술을 활용한 지역 안전망 구축',
    category: '안전'
  },
  'Ulsan_Regulatory_Reform': {
    title: '울산시 규제개혁 아이디어 공모전',
    description: '울산시 산업 혁신과 경쟁력 강화를 위한 규제개혁 아이디어 - 산업단지 규제 완화와 기업 활동 지원',
    category: '규제혁신'
  },
  'mokpo_idea': {
    title: '목포시 지역발전 아이디어 공모전',
    description: '목포시의 해양 관광과 문화유산을 활용한 지역 경제 활성화 아이디어 - 서남권 중심도시 발전 전략',
    category: '지자체'
  },
  'circular_economy_smart_community': {
    title: '순환경제 스마트 커뮤니티 플랫폼',
    description: '지역 기반 순환경제 실현을 위한 스마트 커뮤니티 플랫폼 - 자원 순환과 지속가능한 생활 생태계',
    category: '환경'
  },
  'Incheon_Tourism_Digital_Platform': {
    title: '인천시 관광 디지털 플랫폼',
    description: '인천시 관광산업 디지털 혁신을 위한 통합 플랫폼 - 항만도시 특성을 활용한 관광 콘텐츠 개발',
    category: '관광'
  },
  'Jangseong_Forest_Wellness_Platform': {
    title: '장성군 산림휴양 웰니스 플랫폼',
    description: '장성군의 풍부한 산림자원을 활용한 웰니스 관광 플랫폼 - 치유의 숲과 건강관리 서비스 연계',
    category: '관광'
  },
  'FarmStay_Naju_Experience': {
    title: '나주시 농촌체험 팜스테이 플랫폼',
    description: '나주시 농촌 관광 활성화를 위한 팜스테이 예약 및 체험 플랫폼 - 농촌과 도시를 연결하는 디지털 브릿지',
    category: '농업'
  },
  'CircularEconomy_NeighborGrid': {
    title: '이웃그리드 순환경제 플랫폼',
    description: '지역 주민 간 자원 공유와 순환경제를 실현하는 이웃 네트워크 플랫폼 - 지속가능한 공동체 경제 모델',
    category: '환경'
  },
  'bucheon_idea': {
    title: '부천시 혁신 아이디어 공모전',
    description: '부천시 도시혁신과 시민 삶의 질 향상을 위한 아이디어 공모 - 문화도시 부천의 창의적 발전 방안',
    category: '지자체'
  },
  'pet': {
    title: '반려동물 통합 케어 플랫폼',
    description: '반려동물의 건강관리, 병원 예약, 용품 구매를 통합한 원스톱 펫케어 서비스 플랫폼',
    category: 'AI/디지털'
  },
  'Env_data_AirGuardian-Project': {
    title: '에어가디언 - 환경데이터 대기질 모니터링',
    description: '실시간 대기질 모니터링과 환경데이터 분석을 통한 시민 건강 보호 시스템 - IoT 기반 대기환경 관리',
    category: '환경'
  },
  'yeosu-expo-2026-revenue-ideas': {
    title: '여수엑스포 2026 수익창출 아이디어',
    description: '2026 여수세계박람회 성공적 개최를 위한 혁신적 수익모델 개발 - 해양 관광과 연계한 지속가능한 수익구조',
    category: '관광'
  },
  'taeback': {
    title: '태백시 폐광지역 재생 프로젝트',
    description: '태백시 폐광지역의 관광자원화와 지역경제 활성화 방안 - 산업유산을 활용한 창조적 도시재생',
    category: '지자체'
  },
  'Haman_Industrial_Attraction_Strategy_2025': {
    title: '함안군 기업유치 전략 2025',
    description: '함안군 산업단지 조성과 기업유치를 위한 종합 전략 - 경남 서부권 산업 허브 구축 방안',
    category: '지자체'
  },
  'FallSense_ElderCare_ICT_Competition': {
    title: '폴센스 고령자 낙상감지 ICT 시스템',
    description: '고령자 안전을 위한 AI 기반 낙상 감지 및 응급 대응 시스템 - 스마트 헬스케어 안전망',
    category: '안전'
  },
  'ChangnyeongFarmFusion_2025': {
    title: '창녕군 농업융합 혁신사업 2025',
    description: '창녕군 농업과 ICT 기술 융합을 통한 스마트팜 육성 사업 - 6차 산업화 농업 혁신 모델',
    category: '농업'
  },
  'SafetySync': {
    title: '세이프티싱크 - 통합 안전관리 시스템',
    description: '다양한 안전 시설과 서비스를 통합한 스마트 안전관리 플랫폼 - 실시간 위험 감지와 대응 시스템',
    category: '안전'
  },
  'plugsafe': {
    title: '플러그세이프 - 전기안전 모니터링',
    description: '가정용 전기 안전을 위한 스마트 플러그 모니터링 시스템 - IoT 기반 전기화재 예방 솔루션',
    category: '안전'
  },
  'CheongJu_C_Culture_Cafe': {
    title: '청주시 문화카페 네트워크',
    description: '청주시 지역 문화 활성화를 위한 문화카페 네트워크 플랫폼 - 시민 문화 공간 확대와 예술가 지원',
    category: '문화'
  },
  'population_policy': {
    title: '인구정책 데이터 분석 플랫폼',
    description: '저출산 고령화 대응을 위한 인구정책 데이터 분석 및 정책 제안 시스템 - 데이터 기반 인구정책 수립',
    category: '지자체'
  },
  'anseong': {
    title: '안성시 농업관광 융합 플랫폼',
    description: '안성시 농업과 관광을 연계한 6차 산업 활성화 플랫폼 - 안성맞춤 농촌관광 브랜드 구축',
    category: '농업'
  },
  'mogefdatacontest': {
    title: '여성가족부 데이터 활용 공모전',
    description: '여성가족부 공공데이터를 활용한 성평등 정책 아이디어 공모 - 데이터 기반 여성 정책 혁신',
    category: 'AI/디지털'
  },
  'port_ai': {
    title: '항만 AI 물류 최적화 시스템',
    description: '인공지능을 활용한 스마트 항만 물류 최적화 플랫폼 - 항만 운영 효율성과 자동화 혁신',
    category: 'AI/디지털'
  },
  'guro_gfestival': {
    title: '구로구 G-페스티벌 디지털 플랫폼',
    description: '구로구 지역축제 G-페스티벌의 디지털 혁신 플랫폼 - 시민 참여형 축제 운영과 지역 문화 활성화',
    category: '문화'
  },
  'telecom-proposal': {
    title: '통신업계 혁신 제안서',
    description: '통신산업 규제개선과 5G/6G 시대 대응을 위한 정책 제안 - 통신 인프라 혁신과 디지털 전환',
    category: '규제혁신'
  },
  'pochun': {
    title: '포천시 관광 활성화 전략',
    description: '포천시 자연관광 자원을 활용한 관광산업 육성 방안 - 힐링 관광과 체험 프로그램 개발',
    category: '관광'
  },
  'jangseong': {
    title: '장성군 황룡강 생태관광 플랫폼',
    description: '장성군 황룡강 일대의 생태관광 활성화를 위한 디지털 플랫폼 - 생태보전과 관광 상생 모델',
    category: '관광'
  },
  'night_market': {
    title: '전국 야시장 통합 플랫폼',
    description: '전국 야시장 정보 통합과 상인-고객 연결 서비스 - 야시장 문화 활성화와 지역경제 상생',
    category: '관광'
  },
  'chungbook1': {
    title: '충북 지역혁신 플랫폼',
    description: '충청북도 지역혁신과 균형발전을 위한 통합 정책 플랫폼 - 내륙권 경쟁력 강화 전략',
    category: '지자체'
  },
  'drone_robot': {
    title: '드론-로봇 융합 배송 시스템',
    description: '드론과 지상 로봇을 결합한 혁신적 무인 배송 시스템 - 라스트마일 배송 혁신과 물류 자동화',
    category: 'AI/디지털'
  },
  'bus_occupancy': {
    title: '버스 승차 혼잡도 AI 분석 시스템',
    description: '실시간 버스 승차 인원과 혼잡도를 AI로 분석하는 대중교통 최적화 시스템 - 스마트 배차 서비스',
    category: 'AI/디지털'
  },
  'barrior_free': {
    title: '배리어프리 도시환경 플랫폼',
    description: '장애인과 교통약자를 위한 무장벽 도시환경 구축 플랫폼 - 접근성 향상과 포용적 도시설계',
    category: '안전'
  },
  'open_center': {
    title: '영등포구 공공시설 야간개방 플랫폼',
    description: '영등포구 공공시설의 야간 개방 확대를 통한 시민 편의 증진 서비스 - 공공자원 활용 최적화',
    category: '지자체'
  },
  'test': {
    title: '테스트 프로젝트',
    description: '개발 테스트 및 프로토타입 검증을 위한 실험적 프로젝트 - 새로운 기술과 아이디어 검증',
    category: '기타'
  },
  'Supper': {
    title: '슈퍼 - 지역상권 연결 플랫폼',
    description: '지역 슈퍼마켓과 소상공인을 연결하는 동네상권 활성화 플랫폼 - 지역경제 순환과 상생협력',
    category: 'AI/디지털'
  },
  'work24': {
    title: 'Work24 - 24시간 업무 협업 플랫폼',
    description: '시간과 장소에 구애받지 않는 24시간 업무 협업 도구 - 원격근무와 디지털 워크플로우 최적화',
    category: 'AI/디지털'
  }
};

// 자동 한국어 제목/설명 생성 함수
function generateKoreanInfo(projectName: string, githubDescription: string): EnhancedProjectInfo {
  const name = projectName.toLowerCase();
  
  // 지역명 매핑
  const regions: Record<string, string> = {
    'seoul': '서울시', 'busan': '부산시', 'daegu': '대구시', 'incheon': '인천시',
    'gwangju': '광주시', 'daejeon': '대전시', 'ulsan': '울산시',
    'gyeonggi': '경기도', 'gangwon': '강원도', 'chungbuk': '충북', 'chungnam': '충남',
    'jeonbuk': '전북', 'jeonnam': '전남', 'gyeongbuk': '경북', 'gyeongnam': '경남',
    'jeju': '제주도', 'sejong': '세종시',
    'yangpyeong': '양평군', 'goryeong': '고령군', 'damyang': '담양군',
    'hwaseong': '화성시', 'tongyeong': '통영시', 'gunpo': '군포시',
    'geumjeong': '금정구', 'junggu': '중구', 'jung-gu': '중구'
  };
  
  // 키워드 매핑
  const keywords: Record<string, { title: string; category: string; description: string }> = {
    'ai': { title: 'AI', category: 'AI/디지털', description: '인공지능 기술을 활용한' },
    'smart': { title: '스마트', category: 'AI/디지털', description: '스마트 기술 기반의' },
    'carbon': { title: '탄소 관리', category: '환경', description: '탄소 중립을 위한' },
    'regulation': { title: '규제혁신', category: '규제혁신', description: '규제 개선을 통한' },
    'innovation': { title: '혁신', category: '규제혁신', description: '혁신적인 아이디어로' },
    'contest': { title: '공모전', category: '기타', description: '공모전 참여 프로젝트' },
    'startup': { title: '창업', category: 'AI/디지털', description: '창업 지원을 위한' },
    'safety': { title: '안전', category: '안전', description: '안전 강화를 위한' },
    'tourism': { title: '관광', category: '관광', description: '관광 활성화를 위한' },
    'healthcare': { title: '헬스케어', category: 'AI/디지털', description: '건강관리 서비스' },
    'policy': { title: '정책', category: '지자체', description: '정책 개발을 위한' },
    'marine': { title: '해양', category: '환경', description: '해양 환경 보호를 위한' },
    'agriculture': { title: '농업', category: '농업', description: '농업 혁신을 통한' },
    'youth': { title: '청년', category: '청년', description: '청년 지원을 위한' },
    'birth': { title: '출산', category: '지자체', description: '출산 장려를 위한' },
    'energy': { title: '에너지', category: '환경', description: '에너지 관리를 위한' },
    'platform': { title: '플랫폼', category: 'AI/디지털', description: '통합 플랫폼' },
    'digital': { title: '디지털', category: 'AI/디지털', description: '디지털 혁신을 통한' }
  };
  
  // 지역명 추출
  let regionName = '';
  for (const [key, value] of Object.entries(regions)) {
    if (name.includes(key)) {
      regionName = value;
      break;
    }
  }
  
  // 키워드 추출
  const foundKeywords: string[] = [];
  let category = '기타';
  for (const [key, info] of Object.entries(keywords)) {
    if (name.includes(key)) {
      foundKeywords.push(info.title);
      if (category === '기타') category = info.category;
    }
  }
  
  // 제목 생성
  let title = '';
  if (regionName && foundKeywords.length > 0) {
    title = `${regionName} ${foundKeywords.slice(0, 2).join(' ')} 프로젝트`;
  } else if (foundKeywords.length > 0) {
    title = `${foundKeywords.slice(0, 2).join(' ')} 플랫폼`;
  } else {
    title = projectName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
  
  // 설명 생성
  let description = '';
  if (githubDescription) {
    description = githubDescription;
  } else {
    const descKeywords = foundKeywords.slice(0, 3);
    if (regionName && descKeywords.length > 0) {
      description = `${regionName} 지역의 ${descKeywords.join(', ')} 분야 혁신을 위한 디지털 플랫폼 서비스`;
    } else if (descKeywords.length > 0) {
      description = `${descKeywords.join(', ')} 분야의 혁신적인 솔루션을 제공하는 웹 애플리케이션`;
    } else {
      description = '혁신적인 아이디어를 구현한 웹 기반 서비스 플랫폼';
    }
  }
  
  return { title, description, category };
}

export function enhanceProject(project: Project): Project {
  const enhancement = projectEnhancements[project.name];
  
  if (enhancement) {
    return {
      ...project,
      title: enhancement.title,
      description: enhancement.description,
      category: enhancement.category
    };
  }
  
  // 수동 정보가 없으면 자동 생성
  const autoGenerated = generateKoreanInfo(project.name, project.description);
  return {
    ...project,
    title: autoGenerated.title,
    description: autoGenerated.description,
    category: autoGenerated.category
  };
}

export function enhanceProjectList(projects: Project[]): Project[] {
  return projects.map(enhanceProject);
}