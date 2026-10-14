import React from 'react';
import { hobbiesData } from '../../data/hobbiesData';
import { 
  Heart, 
  PenTool, 
  LayoutGrid, 
  BookOpen, 
  HeartPulse, 
  Sparkles 
} from 'lucide-react';

export const HobbySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-fuchsia-400" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-cyan-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-fuchsia-400" />;
    }
  };

  return (
    <section id="hobby" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient light */}
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-fuchsia-400 mb-3 tracking-wider uppercase">
          <Heart className="w-3.5 h-3.5" />
          <span>Interests & Lifestyle</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          개인 관심사 및 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">라이프스타일</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
          일상 속 꾸준한 취미와 루틴을 통해 업무의 디테일과 긍정적인 에너지를 유지합니다.
        </p>
      </div>

      {/* Grid of Hobby Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbiesData.map((hobby) => (
          <div
            key={hobby.id}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-fuchsia-500/40 hover:-translate-y-1.5 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getIcon(hobby.iconName)}
              </div>

              <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                {hobby.category}
              </span>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
                {hobby.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {hobby.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                직무 연계 역량
              </span>
              <p className="text-xs font-medium text-slate-400 leading-snug">
                {hobby.relevance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
