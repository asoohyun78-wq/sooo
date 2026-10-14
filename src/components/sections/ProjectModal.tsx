import React, { useState } from 'react';
import type { Project } from '../../data/projectsData';
import { Modal } from '../common/Modal';
import { 
  Calendar, 
  CheckCircle2, 
  Layers, 
  FileCode, 
  Tag, 
  Lightbulb, 
  TrendingUp, 
  Image as ImageIcon 
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [imageError, setImageError] = useState(false);

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`[Project #${project.id}] ${project.title}`}>
      <div className="space-y-8 pb-4">
        {/* Top Badges & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-300 font-semibold text-xs border border-fuchsia-500/30">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-medium text-xs border border-cyan-500/30 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              기여도: {project.contribution}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.period}</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {project.title}
          </h2>
          <p className="mt-2 text-base text-slate-300 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Visual Preview / Placeholder Area */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 group">
          {project.imageSrc && !imageError ? (
            <img
              src={project.imageSrc}
              alt={project.title}
              onError={() => setImageError(true)}
              className="w-full h-64 sm:h-80 object-cover"
            />
          ) : (
            <div className="w-full h-64 sm:h-80 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ImageIcon className="w-8 h-8 text-fuchsia-400" />
              </div>
              <p className="text-base font-semibold text-white mb-1">
                프로젝트 이미지 미리보기 영역
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-xs font-mono text-cyan-300 border border-white/15 mt-1">
                <FileCode className="w-3.5 h-3.5" />
                <span>대체 파일명: public/images/projects/{project.placeholderFilename}</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 max-w-md">
                위 경로에 해당 파일명의 이미지를 저장하시면 자동으로 실제 이미지로 대체됩니다.
              </p>
            </div>
          )}
        </div>

        {/* Project Background & Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>추진 배경 및 문제점</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.details.background}
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>프로젝트 목표</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.details.objective}
            </p>
          </div>
        </div>

        {/* Process Flow */}
        <div>
          <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-fuchsia-400" />
            <span>수행 단계 및 핵심 프로세스</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.details.process.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-fuchsia-400 mb-1 block">
                    STEP 0{idx + 1}
                  </span>
                  <h5 className="text-sm font-bold text-white mb-2">{step.step}</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes & Results */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 border border-fuchsia-500/20">
          <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>주요 성과 및 개선 결과</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
            {project.details.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Used */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs text-slate-400 mr-2 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            <span>활용 도구:</span>
          </span>
          {project.tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Modal Footer / Close Action */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-semibold text-white transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </Modal>
  );
};
