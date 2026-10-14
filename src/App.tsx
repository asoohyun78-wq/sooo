import React from 'react';
import { Header } from './components/common/Header';
import { IntroSection } from './components/sections/IntroSection';
import { ProfileSection } from './components/sections/ProfileSection';
import { ProjectSection } from './components/sections/ProjectSection';
import { HobbySection } from './components/sections/HobbySection';
import { SitemapFooter } from './components/sections/SitemapFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 selection:bg-fuchsia-500/30 selection:text-fuchsia-200 antialiased overflow-x-hidden">
      {/* Global Top Floating Navigation */}
      <Header />

      {/* Main Single-Page Sections strictly following the required order: */}
      {/* 1. Intro -> 2. Profile -> 3. Project -> 4. Hobby -> 5. Sitemap */}
      <main>
        {/* Section 1: Intro (Spline 3D iframe + "길동의 포트폴리오") */}
        <IntroSection />

        {/* Section 2: Profile (내 소개, 자격증 GTQ/정보처리기사, 스킬 ChatGPT/PPT/Illustrator) */}
        <ProfileSection />

        {/* Section 3: Project (5개 프로젝트 가로 배너 세로 배치, 플레이스홀더, 모달, 스켈레톤 UI, 동적 렌더링) */}
        <ProjectSection />

        {/* Section 4: Hobby (직무와 연계된 라이프스타일 및 관심사) */}
        <HobbySection />
      </main>

      {/* Section 5: Sitemap & Footer (Resume PDF 다운로드 및 사이트맵 링크) */}
      <SitemapFooter />
    </div>
  );
};

export default App;
