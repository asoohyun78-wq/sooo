import React, { useState } from 'react';
import { Sparkles, Compass } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section
      id="intro"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* 3D Spline Iframe Background / Hero Showcase */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Subtle background glow effect behind 3D object */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Spline 3D Embed */}
        <iframe
          src="https://my.spline.design/trackerbot-cnKXbtEkma2iWK5vJq1V8qEI/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full object-cover scale-100 sm:scale-105 transition-opacity duration-700"
          title="Spline 3D Interactive Model"
          onLoad={() => setIframeLoaded(true)}
          style={{ opacity: iframeLoaded ? 1 : 0.4 }}
        />

        {/* Vignette / Overlay Gradients for smooth blending into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-[#090A0F]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      </div>

      {/* Hero Center Overlay Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center mt-12 pointer-events-none">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 pointer-events-auto shadow-lg shadow-black/40">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">
            Interactive 3D Portfolio & Resume
          </span>
        </div>

        {/* Main Required Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
            길동의 포트폴리오
          </span>
        </h1>

        {/* Subtitle / Candidate Identity */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 max-w-2xl mb-8 leading-relaxed drop-shadow-md">
          생성형 AI와 세련된 비주얼 기획력으로 업무의 효율을 극대화하는{' '}
          <span className="text-fuchsia-400 font-semibold border-b border-fuchsia-400/50">
            사무직 지원자 이수현
          </span>
          입니다.
        </p>

        {/* CTA Quick Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
          <a
            href="#profile"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-500 hover:to-cyan-400 text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Compass className="w-4 h-4" />
            <span>프로필 & 역량 확인</span>
          </a>
          <a
            href="#project"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          >
            <span>프로젝트 쇼케이스 보기</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#profile"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-slate-400 hover:text-white transition-colors group cursor-pointer"
        aria-label="Scroll to Profile section"
      >
        <span className="text-xs font-medium tracking-widest uppercase mb-1 group-hover:text-fuchsia-300 transition-colors">
          Scroll Down
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1 group-hover:border-fuchsia-400 transition-colors">
          <div className="w-1.5 h-2.5 bg-fuchsia-400 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
