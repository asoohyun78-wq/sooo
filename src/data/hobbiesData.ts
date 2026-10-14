export interface HobbyItem {
  id: number;
  title: string;
  category: string;
  iconName: string;
  description: string;
  tags: string[];
  relevance: string;
}

export const hobbiesData: HobbyItem[] = [
  {
    id: 1,
    title: "디지털 캘리그라피 & 타이포그래피 수집",
    category: "시각적 디테일 & 감각",
    iconName: "PenTool",
    description: "다양한 글꼴과 타이포그래피 레이아웃을 아카이빙하며, 문서의 가독성과 시각적 완성도를 높이는 안목을 기르고 있습니다.",
    tags: ["타이포그래피", "디지털 드로잉", "시각 레이아웃"],
    relevance: "보고서 및 발표 자료 제작 시 시각적 위계와 완성도 향상"
  },
  {
    id: 2,
    title: "생산성 툴 탐색 & 노션 라이프 시스템 구축",
    category: "체계적인 정리 & 기록",
    iconName: "LayoutGrid",
    description: "새로운 생산성 도구와 AI 플러그인을 주기적으로 테스트하며, 일정·할 일·독서 노트를 데이터베이스화하여 관리합니다.",
    tags: ["Notion", "생산성 루틴", "데이터베이스화"],
    relevance: "사무 행정 업무에서 체계적인 아카이빙 및 누락 없는 일정 관리"
  },
  {
    id: 3,
    title: "경제 & 테크 트렌드 아티클 요약 정리",
    category: "지속적인 배움 & 리서치",
    iconName: "BookOpen",
    description: "매주 발행되는 비즈니스/IT 트렌드 뉴스레터를 읽고 ChatGPT와 함께 핵심 3줄 요약 카드로 정리하는 습관을 유지합니다.",
    tags: ["트렌드 리서치", "정보 요약", "비즈니스 인사이트"],
    relevance: "빠른 정보 습득 능력과 상부에 보고할 핵심 요약 역량"
  },
  {
    id: 4,
    title: "실내 조깅 & 마인드풀니스",
    category: "체력 & 스트레스 관리",
    iconName: "HeartPulse",
    description: "꾸준한 유산소 운동으로 기초 체력을 다지고, 업무에 몰입할 수 있는 맑은 집중력과 긍정적인 에너지를 충전합니다.",
    tags: ["자기관리", "체력 증진", "꾸준함"],
    relevance: "장시간 집중을 요하는 사무 업무에서도 안정적인 업무 페이스 유지"
  }
];
