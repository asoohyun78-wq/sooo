import React from 'react';
import { profileData } from '../../data/profileData';
import { 
  User, 
  Calendar, 
  Briefcase, 
  Award, 
  Cpu, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  FileSpreadsheet,
  Palette,
  Bot
} from 'lucide-react';

export const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-fuchsia-400 mb-3 tracking-wider uppercase">
          <User className="w-3.5 h-3.5" />
          <span>About Candidate</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          인사담당자를 위한 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">인재 프로필 요약</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
          기본 인적사항, 보유 자격증, 실무 활용 가능 툴을 한눈에 검토하실 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Candidate Info & Intro (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Main ID Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-fuchsia-500/20 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-fuchsia-500/20 text-fuchsia-300 font-bold text-xs uppercase tracking-wide border border-fuchsia-500/30 mb-2">
                  희망 직무: {profileData.jobTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {profileData.name}
                  <span className="text-sm font-normal text-slate-400 ml-2">({profileData.englishName})</span>
                </h3>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-[1px] flex-shrink-0">
                <div className="w-full h-full bg-[#0D1117] rounded-[15px] flex items-center justify-center">
                  <User className="w-7 h-7 text-cyan-300" />
                </div>
              </div>
            </div>

            {/* Quick Fact Grid */}
            <div className="space-y-3 pb-6 border-b border-white/10 text-sm">
              <div className="flex items-center text-slate-300">
                <Calendar className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-slate-400 w-20">생년월일</span>
                <span className="font-medium text-white">{profileData.birthDate}</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Briefcase className="w-4 h-4 text-fuchsia-400 mr-3 flex-shrink-0" />
                <span className="text-slate-400 w-20">희망 직무</span>
                <span className="font-semibold text-fuchsia-300">사무직 (사무행정 / 기획보조)</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                <span className="text-slate-400 w-20">이메일</span>
                <span className="font-mono text-xs sm:text-sm text-slate-300">{profileData.contact.email}</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                <span className="text-slate-400 w-20">연락처</span>
                <span className="font-mono text-sm text-slate-300">{profileData.contact.phone}</span>
              </div>
            </div>

            {/* Detailed Introduction */}
            <div className="pt-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>내 소개 (Self-Introduction)</span>
              </h4>
              <div className="space-y-2.5 text-sm leading-relaxed text-slate-300">
                {profileData.bio.map((paragraph, index) => (
                  <p key={index} className="relative pl-3.5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-fuchsia-400 before:rounded-full">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Certificates & Skills (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Certificates Block */}
          <div className="glass-card rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">보유 자격증 (Certificates)</h3>
                  <p className="text-xs text-slate-400">직무 적합성 및 공인 전문성 입증</p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                2개 취득
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] text-slate-500">{cert.issuer}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills Block */}
          <div className="glass-card rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center border border-fuchsia-500/30">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">실무 보유 기술 (Key Skills)</h3>
                  <p className="text-xs text-slate-400">사무직무에 최적화된 핵심 툴 역량</p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20 font-medium">
                3개 핵심 툴
              </span>
            </div>

            <div className="space-y-5">
              {profileData.skills.map((skill, index) => {
                const getSkillIcon = () => {
                  if (skill.name.includes('ChatGPT')) return <Bot className="w-4 h-4 text-emerald-400" />;
                  if (skill.name.includes('PowerPoint')) return <FileSpreadsheet className="w-4 h-4 text-amber-400" />;
                  return <Palette className="w-4 h-4 text-fuchsia-400" />;
                };

                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getSkillIcon()}
                        <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                        <span className="text-xs text-slate-400 font-normal">| {skill.category}</span>
                      </div>
                      <span className="text-xs font-semibold text-fuchsia-300">{skill.level}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
