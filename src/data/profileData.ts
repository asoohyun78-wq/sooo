export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  description: string;
  badge: string;
}

export interface Skill {
  name: string;
  category: string;
  level: string;
  percent: number;
  description: string;
  tags: string[];
}

export interface ProfileInfo {
  name: string;
  englishName: string;
  jobTitle: string;
  birthDate: string;
  tagline: string;
  bio: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  certificates: Certificate[];
  skills: Skill[];
}

export const profileData: ProfileInfo = {
  name: "이수현",
  englishName: "Suhyeon Lee",
  jobTitle: "사무직 (사무행정 / 기획보조 / 경영지원)",
  birthDate: "2007년 10월 1일",
  tagline: "AI 도구와 정교한 문서 기획력으로 업무의 가치를 높이는 인재",
  bio: [
    "반갑습니다! 꼼꼼한 문서 작성과 디지털 툴 활용 능력을 갖춘 사무직 지원자 이수현입니다.",
    "생성형 AI(ChatGPT)를 활용한 업무 프로세스 단축과 정돈된 시각 자료(PowerPoint, Illustrator) 제작에 강점이 있습니다.",
    "정보처리기사와 GTQ 자격증을 기반으로 논리적인 데이터 정리와 직관적인 비주얼 커뮤니케이션을 동시에 실현합니다."
  ],
  contact: {
    email: "suhyeon.lee@example.com",
    phone: "010-1234-5678",
    location: "대한민국 서울특별시"
  },
  certificates: [
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "최신 취득",
      description: "IT 시스템 및 데이터베이스 기초 이해, 논리적 업무 분석 및 전산 사무 처리 역량 공인",
      badge: "국가기술자격"
    },
    {
      name: "GTQ (그래픽기술자격)",
      issuer: "한국생산성본부(KPC)",
      date: "최신 취득",
      description: "사내 공문, 보고서 인포그래픽, 시각 발표 자료 및 디지털 홍보물 제작 능력 공인",
      badge: "국가공인자격"
    }
  ],
  skills: [
    {
      name: "ChatGPT (챗지피티)",
      category: "AI & 업무 자동화",
      level: "고급 (Advanced)",
      percent: 92,
      description: "정밀한 프롬프트 엔지니어링을 통한 보고서 초안 작성, 방대한 자료 요약, 엑셀 수식 작성 및 이메일 템플릿 자동화",
      tags: ["프롬프트 최적화", "문서 초안 작성", "자료 리서치", "엑셀 수식 도출"]
    },
    {
      name: "PowerPoint (파워포인트)",
      category: "문서 기획 & 발표 자료",
      level: "전문가 (Master)",
      percent: 95,
      description: "가독성이 뛰어난 사내 보고서, 사업 제안서, 교육용 프레젠테이션 디자인 및 데이터 시각화 템플릿 제작",
      tags: ["보고서 디자인", "슬라이드 마스터", "인포그래픽", "제안서 기획"]
    },
    {
      name: "Illustrator (일러스트레이터)",
      category: "비주얼 그래픽 디자인",
      level: "중상급 (Proficient)",
      percent: 88,
      description: "사내 공지용 카드뉴스, 다이어그램, 로고 및 벡터 인포그래픽 제작으로 텍스트 위주의 문서를 직관적으로 개선",
      tags: ["벡터 그래픽", "카드뉴스 디자인", "다이어그램 제작", "사내 홍보물"]
    }
  ]
};
