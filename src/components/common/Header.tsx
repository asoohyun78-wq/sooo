import React, { useState, useEffect } from 'react';
import { Download, Menu, X, FileText, Sparkles } from 'lucide-react';

interface HeaderProps {
  onDownloadResume?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDownloadResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Intro', href: '#intro' },
    { name: 'Profile', href: '#profile' },
    { name: 'Project', href: '#project' },
    { name: 'Hobby', href: '#hobby' },
    { name: 'Sitemap', href: '#sitemap' },
  ];

  const handleDownload = () => {
    if (onDownloadResume) {
      onDownloadResume();
    } else {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = '이수현_이력서_포트폴리오.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090A0F]/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#intro"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-cyan-500 p-[1px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#090A0F] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-fuchsia-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white group-hover:text-fuchsia-300 transition-colors">
                길동의 포트폴리오
              </span>
              <span className="ml-2 text-xs text-slate-400 border border-slate-700 rounded-full px-2 py-0.5">
                사무직 지원자 이수현
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button: Resume Download */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-500 hover:to-cyan-400 text-white shadow-md shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF 다운로드</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleDownload}
              aria-label="Download Resume"
              className="p-2 rounded-lg bg-fuchsia-600/20 text-fuchsia-300 border border-fuchsia-500/30"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090A0F]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownload();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white"
              >
                <FileText className="w-4 h-4" />
                <span>Resume PDF 다운로드</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
