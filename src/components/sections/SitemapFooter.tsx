import React from 'react';
import { profileData } from '../../data/profileData';
import { 
  Download, 
  Map, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';

export const SitemapFooter: React.FC = () => {
  const sitemapLinks = [
    { name: '01. Intro (홈 & 3D 비주얼)', href: '#intro', desc: 'Spline 3D 인터랙티브 인트로' },
    { name: '02. Profile (인재 소개)', href: '#profile', desc: '기본 정보, GTQ/정보처리기사 자격증, 핵심 Skill' },
    { name: '03. Project (프로젝트 5선)', href: '#project', desc: '사무 업무 표준화 및 자동화 프로젝트 상세 모달' },
    { name: '04. Hobby (관심사 & 라이프)', href: '#hobby', desc: '사무 역량과 연결된 일상 루틴 및 취미' },
    { name: '05. Sitemap & Contact', href: '#sitemap', desc: '이력서 다운로드 및 문의처' },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = '이수현_이력서_포트폴리오.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="sitemap" className="relative bg-[#06070B] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-fuchsia-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Big CTA Banner for Resume PDF Download */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-16 text-center relative overflow-hidden border border-fuchsia-500/20 bg-gradient-to-b from-white/[0.04] to-transparent">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-300 text-xs font-semibold mb-4 border border-fuchsia-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>채용 검토용 원클릭 다운로드</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            준비된 사무 인재 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">{profileData.name}</span>의 이력서가 필요하신가요?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            자격증 및 상세 프로젝트 포트폴리오가 포함된 종합 이력서 PDF를 즉시 열람 및 저장하실 수 있습니다.
          </p>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 hover:from-fuchsia-500 hover:to-cyan-400 text-white shadow-xl shadow-fuchsia-500/25 transition-all hover:scale-105 active:scale-95 group"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Resume PDF 이력서 다운로드</span>
          </button>
        </div>

        {/* Sitemap & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Identity & Contact (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tight">길동의 포트폴리오</span>
              <span className="text-xs text-fuchsia-400 border border-fuchsia-500/30 rounded px-2 py-0.5 font-medium">
                사무직 지원
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              인공지능 도구(ChatGPT)와 시각 문서화 툴을 융합하여 체계적인 업무 성과를 창출하는 인재, 이수현입니다.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{profileData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-fuchsia-400" />
                <span>{profileData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{profileData.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Sitemap Navigation Links (7 cols) */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <Map className="w-4 h-4 text-cyan-400" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">사이트맵 (Sitemap)</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sitemapLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 flex items-center justify-between">
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {link.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 Suhyeon Lee (이수현). All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>맨 위로 이동</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
