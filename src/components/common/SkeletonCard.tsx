import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="w-full glass-card rounded-2xl p-5 md:p-6 animate-pulse">
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Thumbnail Image Skeleton */}
        <div className="w-full md:w-72 lg:w-80 h-48 md:h-52 bg-slate-800/60 rounded-xl flex-shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Content Skeleton */}
        <div className="flex-1 flex flex-col justify-between py-1">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-5 w-24 bg-slate-800/80 rounded-full" />
              <div className="h-4 w-28 bg-slate-800/60 rounded" />
            </div>
            <div className="h-7 w-3/4 bg-slate-700/70 rounded-lg mb-2" />
            <div className="h-4 w-1/2 bg-slate-800/60 rounded mb-4" />
            <div className="space-y-2 mb-4">
              <div className="h-4 w-full bg-slate-800/50 rounded" />
              <div className="h-4 w-5/6 bg-slate-800/50 rounded" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-slate-800 rounded-full" />
              <div className="h-6 w-20 bg-slate-800 rounded-full" />
              <div className="h-6 w-16 bg-slate-800 rounded-full" />
            </div>
            <div className="h-8 w-28 bg-slate-700/80 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
