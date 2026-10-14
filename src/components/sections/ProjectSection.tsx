import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/projectsData';
import type { Project } from '../../data/projectsData';
import { SkeletonCard } from '../common/SkeletonCard';
import { ProjectModal } from './ProjectModal';
import { 
  FolderKanban, 
  ExternalLink, 
  Calendar, 
  FileCode, 
  Image as ImageIcon,
  RefreshCw
} from 'lucide-react';

export const ProjectSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Simulate smooth skeleton UI loading transition on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="project" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 mb-3 tracking-wider uppercase">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            실무 프로젝트 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">포트폴리오</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            가로 배너를 클릭하시면 상세 기획 의도와 성과를 확인하실 수 있습니다.
          </p>
        </div>

        {/* Skeleton UI Demo Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 900);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-colors"
            title="스켈레톤 UI 로딩 상태 다시 확인"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
            <span>스켈레톤 UI 시뮬레이션</span>
          </button>
          <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 font-mono">
            총 {projectsData.length}개 프로젝트 (동적 렌더링)
          </span>
        </div>
      </div>

      {/* Projects Vertical Stack of Horizontal Banners */}
      <div className="space-y-6">
        {isLoading ? (
          // Render Skeleton UI
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          // Dynamic Project Banners
          projectsData.map((project) => {
            const hasError = imageErrors[project.id];
            const showRealImage = project.imageSrc && !hasError;

            return (
              <div
                key={project.id}
                onClick={() => handleOpenModal(project)}
                className="w-full glass-card glass-card-hover rounded-2xl p-5 md:p-6 cursor-pointer group transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent glow line on top border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col md:flex-row gap-6 items-stretch">
                  {/* Left: Thumbnail Preview / Placeholder with File Name Label */}
                  <div className="w-full md:w-80 lg:w-96 h-48 md:h-52 rounded-xl overflow-hidden flex-shrink-0 relative border border-white/10 bg-slate-900 group-hover:border-fuchsia-500/40 transition-colors">
                    {showRealImage ? (
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        onError={() => handleImageError(project.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      // Clean Wireframe Placeholder
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900 relative">
                        {/* Background tech grid pattern */}
                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                          <ImageIcon className="w-6 h-6 text-fuchsia-400" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200 mb-1">
                          미리보기 이미지 영역
                        </span>

                        {/* File Name Tag specified for easy user replacement */}
                        <div className="mt-1 px-2.5 py-1 rounded bg-black/60 border border-cyan-400/30 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-sm">
                          <FileCode className="w-3 h-3 text-cyan-400" />
                          <span>{project.placeholderFilename}</span>
                        </div>
                      </div>
                    )}

                    {/* Project Index Badge */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white font-bold">
                      0{project.id}
                    </div>
                  </div>

                  {/* Right: Content Details */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      {/* Category & Period */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 text-xs font-semibold border border-fuchsia-500/30">
                          {project.category}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-fuchsia-300 transition-colors tracking-tight line-clamp-1 mb-1">
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-xs sm:text-sm font-medium text-cyan-400 mb-3 line-clamp-1">
                        {project.subtitle}
                      </p>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 mb-4">
                        {project.summary}
                      </p>
                    </div>

                    {/* Bottom: Tools & Action */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-1 text-xs font-semibold text-fuchsia-400 group-hover:text-cyan-400 transition-colors">
                        <span>상세보기</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Detail Modal Component */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
