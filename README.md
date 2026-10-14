# 🌟 길동의 포트폴리오 (사무직 지원자 이수현)

> **React 18 + Vite + Tailwind CSS + Spline 3D** 기반의 인터랙티브 취업 포트폴리오 웹사이트입니다.  
> 채용 담당자가 10초 이내에 지원자의 기본 역량, 공인 자격증, 프로젝트 경험을 한눈에 파악할 수 있도록 최적화되었습니다.

---

## 🚀 빠른 시작 (Getting Started)

### 1. 패키지 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://127.0.0.1:5173/` 접속

### 3. 프로덕션 빌드
```bash
npm run build
```

---

## 📌 주요 섹션 구성 (Information Architecture)

1. **Intro (3D Hero)**: Spline 3D 인터랙티브 배경 + "길동의 포트폴리오" 메인 타이틀
2. **Profile (인재 역량)**:
   - 인적사항: 이수현 (2007.10.01 / 사무직 희망)
   - 자격증: GTQ 자격증, 정보처리기사
   - 핵심 역량(Skill): ChatGPT, PowerPoint, Illustrator
3. **Project (가로 배너 세로 리스트)**:
   - 5대 사무 실무 프로젝트 (클릭 시 상세 모달 팝업)
   - 로딩 스켈레톤 UI 탑재
   - 이미지 플레이스홀더 & 파일명 라벨 표기 (`project-01.png` ~ `project-05.png`)
4. **Hobby (라이프스타일)**: 사무 역량과 연결된 관심사 및 루틴
5. **Sitemap & Footer**: Resume PDF 다운로드 CTA 및 전체 사이트맵 네비게이션

---

## 🖼️ 이미지 및 이력서 교체 가이드

- **프로젝트 이미지**: `public/images/projects/` 폴더에 `project-01.png` ~ `project-05.png` 파일을 저장하면 자동으로 실제 이미지로 대체됩니다.
- **이력서 PDF**: `public/resume.pdf` 파일에 실제 이력서를 덮어쓰시면 상단 및 하단 다운로드 버튼에 즉시 연동됩니다.

---

## 🛠️ 기술 스택
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (Dark Glassmorphism & Neon Theme)
- **3D Graphics**: Spline 3D Embed
- **Icons**: Lucide React
