export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  contribution: string;
  placeholderFilename: string; // 예: "project-01.png"
  imageSrc?: string;           // 실제 이미지 경로 (있을 경우 사용)
  summary: string;
  tools: string[];
  keyHighlights: string[];
  details: {
    background: string;
    objective: string;
    process: {
      step: string;
      description: string;
    }[];
    outcomes: string[];
    lessonsLearned: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "사내 표준 업무 보고서 및 프레젠테이션 템플릿 통합 패키지",
    subtitle: "일관된 브랜드 아이덴티티와 가독성을 높인 파워포인트 마스터 템플릿 구축",
    category: "문서 표준화 & 디자인",
    period: "2024.03 - 2024.04 (4주)",
    role: "기획 및 디자인 총괄 (1인 프로젝트)",
    contribution: "100%",
    placeholderFilename: "project-01.png",
    imageSrc: "/images/projects/project-01.png",
    summary: "분산되어 있던 사내 보고 양식을 통일하고, 슬라이드 마스터와 컬러 시스템을 체계화하여 임직원의 보고서 작성 시간을 35% 절감시켰습니다.",
    tools: ["PowerPoint", "Illustrator", "GTQ 활용"],
    keyHighlights: [
      "표준 슬라이드 마스터 20종 레이아웃 설계",
      "가독성을 극대화한 타이포그래피 및 인포그래픽 자산 구축",
      "임직원 가이드라인 PDF 배포"
    ],
    details: {
      background: "부서마다 서로 다른 폰트, 규격, 색상을 사용하여 보고서 작성 시 불필요한 서식 정렬 시간이 소요되고 대외 신뢰도가 저하되는 문제 발생.",
      objective: "누구나 10분 만에 전문적인 보고서를 완성할 수 있는 직관적인 통합 마스터 템플릿 제작.",
      process: [
        {
          step: "현황 분석",
          description: "기존 3개년 보고서 150여 건을 전수 분석하여 가장 빈번하게 쓰이는 5가지 유형(주간보고, 기획안, 실적발표, 공문서, 회의록) 도출."
        },
        {
          step: "디자인 시스템 구축",
          description: "Illustrator를 활용해 명확한 시각 위계(Typography Hierarchy)와 브랜드 컬러 가이드라인을 수립."
        },
        {
          step: "템플릿 개발 & 배포",
          description: "PowerPoint 슬라이드 마스터에 모듈형 다이어그램 30종과 차트 양식을 내장하여 배포."
        }
      ],
      outcomes: [
        "사내 보고서 서식 정리 소요 시간 평균 40분 → 15분으로 62% 단축",
        "사내 파일럿 만족도 설문조사 결과 94.8% 긍정 평가 달성"
      ],
      lessonsLearned: "단순히 예쁜 디자인보다 사용자가 직관적으로 내용을 채워 넣을 수 있는 '사용자 중심의 문서 구조화'의 중요성을 체득했습니다."
    }
  },
  {
    id: 2,
    title: "ChatGPT 프롬프트 기반 일일/주간 업무 보고서 자동화 파이프라인",
    subtitle: "생성형 AI를 활용한 비정형 회의록 요약 및 정형화된 보고서 초안 생성 체계",
    category: "AI & 업무 생산성 혁신",
    period: "2024.05 - 2024.06 (5주)",
    role: "프롬프트 설계 및 프로세스 구축",
    contribution: "100%",
    placeholderFilename: "project-02.png",
    imageSrc: "/images/projects/project-02.png",
    summary: "녹취록이나 거친 메모를 입력하면 핵심 액션 아이템과 이슈를 정돈된 보고 양식으로 자동 변환해주는 맞춤형 프롬프트 라이브러리를 개발했습니다.",
    tools: ["ChatGPT (GPT-4o)", "MS Word", "정보처리기사 활용"],
    keyHighlights: [
      "회의록 요약 및 안건 분류 프롬프트 10종 개발",
      "환각(Hallucination) 방지를 위한 Few-Shot 템플릿 적용",
      "보고서 초안 작성 시간 70% 이상 단축"
    ],
    details: {
      background: "일일 회의와 주간 브리핑 후 결과를 정리하여 상부에 보고하는 과정에서 핵심 내용 누락 및 작성 지연 발생.",
      objective: "정확하고 일관된 형식으로 1분 안에 보고서 초안을 도출하는 프롬프트 엔지니어링 파이프라인 구축.",
      process: [
        {
          step: "프롬프트 구조 설계",
          description: "Role, Context, Constraints, Few-shot Examples를 명확히 구분한 표준 프롬프트 프레임워크 수립."
        },
        {
          step: "테스트 및 검증",
          description: "실제 회의 샘플 30건을 대상으로 요약 정확도와 팩트 일치율을 교차 검증."
        },
        {
          step: "활용 매뉴얼 문서화",
          description: "팀원 누구나 복사-붙여넣기만으로 쓸 수 있는 '원클릭 프롬프트 핸드북' 제작."
        }
      ],
      outcomes: [
        "회의록 정리부터 보고서 발송까지 소요 시간 60분 → 15분 단축",
        "핵심 실행 과제(Action Items) 추적 누락률 0건 달성"
      ],
      lessonsLearned: "AI 툴을 사무 업무에 도입할 때는 명확한 제약 조건(Constraints)과 검증 절차(Human-in-the-loop)가 필수적임을 배웠습니다."
    }
  },
  {
    id: 3,
    title: "신규 입사자 온보딩 가이드북 및 사내 인포그래픽 제작",
    subtitle: "복잡한 사내 규정 및 시스템 이용법을 한눈에 이해하는 비주얼 가이드북",
    category: "비주얼 커뮤니케이션 & 총무/인사",
    period: "2024.07 - 2024.08 (4주)",
    role: "콘텐츠 구성 및 비주얼 그래픽 디자인",
    contribution: "100%",
    placeholderFilename: "project-03.png",
    imageSrc: "/images/projects/project-03.png",
    summary: "텍스트 위주의 방대한 사내 복리후생, 결재 프로세스, 근태 규정을 챕터별 인포그래픽과 인터랙티브 PDF로 재구성하여 온보딩 경험을 혁신했습니다.",
    tools: ["Illustrator", "PowerPoint", "GTQ 활용"],
    keyHighlights: [
      "40페이지 분량의 규정을 12장 핵심 인포그래픽 카드로 압축",
      "결재 라인 및 비품 신청 플로우차트 시각화",
      "하이퍼링크가 포함된 반응형 스마트 PDF 제작"
    ],
    details: {
      background: "신규 입사자 대상 교육 시 두꺼운 텍스트 책자로 인해 규정 숙지율이 낮고, 인사/총무 부서에 반복적인 질의응답이 다수 인입됨.",
      objective: "신규 입사자가 질문 없이도 스스로 업무 환경에 적응할 수 있는 시각 중심의 직관적 온보딩 북 제작.",
      process: [
        {
          step: "사무 규정 분석 및 요약",
          description: "취업규칙, 복무규정, 비용청구 등 핵심 10대 프로세스를 선별하여 단계별 흐름도로 단순화."
        },
        {
          step: "일러스트 및 아이콘 에셋 제작",
          description: "Illustrator를 활용해 친근한 플랫 일러스트레이션과 시각적 안내 아이콘 25종 제작."
        },
        {
          step: "인쇄 및 디지털 배포본 동시 제작",
          description: "실물 책자 인쇄 규격(A5)과 모바일/PC 화면 열람에 최적화된 디지털 PDF 동시 발행."
        }
      ],
      outcomes: [
        "신규 입사자의 사내 결재 시스템 관련 단순 문의 건수 55% 감소",
        "온보딩 만족도 평점 4.9 / 5.0 기록"
      ],
      lessonsLearned: "텍스트를 시각 언어로 치환하는 인포그래픽 역량이 조직 내 커뮤니케이션 비용을 대폭 줄일 수 있음을 체감했습니다."
    }
  },
  {
    id: 4,
    title: "부서별 예산 집행 및 사무용 비품 관리 자동화 리포트",
    subtitle: "엑셀 수식 최적화와 시각화 대시보드로 실시간 재고 및 지출 트렌드 파악",
    category: "경영지원 & 데이터 관리",
    period: "2024.09 - 2024.10 (3주)",
    role: "데이터 설계 및 대시보드 리포트 구현",
    contribution: "100%",
    placeholderFilename: "project-04.png",
    imageSrc: "/images/projects/project-04.png",
    summary: "분기별 비품 지출 내역과 재고 현황을 한눈에 모니터링할 수 있도록 동적 요약 테이블과 대시보드 차트를 설계하여 비품 낭비를 방지했습니다.",
    tools: ["Excel", "ChatGPT (수식 최적화)", "정보처리기사 활용"],
    keyHighlights: [
      "VLOOKUP, INDEX/MATCH, 다중 조건 동적 피벗 테이블 설계",
      "적정 재고 미달 시 자동 알림 표시 조건부 서식 구축",
      "월별 지출 트렌드 비교 대시보드 차트 구현"
    ],
    details: {
      background: "비품 신청과 재고 파악이 수기 기록으로 이루어져 중복 구매가 발생하고 분기별 예산 초과가 빈번히 일어남.",
      objective: "단일 엑셀 시트에서 입출고 관리와 예산 대비 집행률을 실시간으로 추적 가능한 자동화 리포트 구축.",
      process: [
        {
          step: "데이터베이스 정규화",
          description: "정보처리기사 지식을 활용하여 품목 코드, 단가, 공급사, 입출고 일자를 3개 정규화 테이블로 재설계."
        },
        {
          step: "ChatGPT 활용 수식 고도화",
          description: "복잡한 다중 조건 합산(SUMIFS)과 동적 배열 함수(FILTER, UNIQUE)를 적용하여 에러 없는 자동 계산 구현."
        },
        {
          step: "시각화 대시보드 완성",
          description: "경영진 및 부서장이 1초 만에 잔여 예산과 주요 소모품 지출 추이를 볼 수 있는 요약 시트 완성."
        }
      ],
      outcomes: [
        "불필요한 중복 비품 발주 0건으로 분기 소모품 비용 약 18% 절감",
        "월말 재고 조사 소요 시간 2영업일 → 2시간으로 대폭 단축"
      ],
      lessonsLearned: "구조화된 데이터 관리와 적절한 시각화가 결합할 때 의사결정의 속도와 정확도가 극대화된다는 것을 배웠습니다."
    }
  },
  {
    id: 5,
    title: "사내 캠페인 및 공지용 뉴스레터/카드뉴스 템플릿 시리즈",
    subtitle: "전사 공지 열람률을 높이는 감각적인 멀티미디어 카드뉴스 디자인",
    category: "사내 커뮤니케이션 & 디자인",
    period: "2024.10 - 2024.11 (4주)",
    role: "기획, 카피라이팅 및 비주얼 그래픽 디자인",
    contribution: "100%",
    placeholderFilename: "project-05.png",
    imageSrc: "/images/projects/project-05.png",
    summary: "사내 인트라넷과 메신저 공지의 클릭률을 높이기 위해 주제별(보안, 친환경, 사내행사 등) 5종의 카드뉴스 템플릿을 기획·제작했습니다.",
    tools: ["Illustrator", "PowerPoint", "ChatGPT (카피라이팅)"],
    keyHighlights: [
      "직무 교육 및 보안 수칙 관련 5대 테마 카드뉴스 시리즈 제작",
      "클릭을 유도하는 직관적인 헤드라인 카피라이팅",
      "다양한 디스플레이 비율(1:1, 16:9) 대응 템플릿"
    ],
    details: {
      background: "사내 필수 보안 공지 및 캠페인 메일의 열람률이 저조하여 중요 규정이 임직원에게 제대로 전파되지 못함.",
      objective: "스마트폰과 PC 메신저 어디서든 한눈에 들어오는 모바일 친화적 카드뉴스 템플릿 개발.",
      process: [
        {
          step: "카피라이팅 최적화",
          description: "ChatGPT를 활용해 딱딱한 공문서 용어를 임직원의 흥미를 유발하는 3줄 요약 헤드라인으로 가공."
        },
        {
          step: "카드뉴스 디자인",
          description: "Illustrator와 PPT를 병행 사용하여 트렌디한 타이포그래피와 다크 모드에서도 가독성이 우수한 색상 설계."
        },
        {
          step: "사내 메신저 피드 발행",
          description: "슬랙(Slack) 및 사내 인트라넷 피드 규격에 최적화하여 순차 배포."
        }
      ],
      outcomes: [
        "기존 텍스트 공지 대비 공지사항 클릭 및 열람률 140% 상승",
        "보안 교육 이수율 기한 내 100% 달성"
      ],
      lessonsLearned: "정보를 전달할 때 수용자의 디바이스 환경과 시각적 피로도를 고려한 디자인이 결과의 차이를 만든다는 것을 실감했습니다."
    }
  }
];
