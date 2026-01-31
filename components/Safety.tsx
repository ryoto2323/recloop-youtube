import React from 'react';
import { Section } from './Section';
import { ShieldCheck, EyeOff, FileCheck, Lock } from 'lucide-react';

export const Safety: React.FC = () => {
  return (
    <Section className="bg-[#f0f0f2] relative overflow-hidden">
        {/* Background Texture (File Folder Grain) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <div className="inline-block border-2 border-red-800/50 text-red-800/50 px-3 py-1 text-xs font-bold tracking-[0.2em] mb-4 uppercase rotate-[-2deg]">
             Top Secret
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-navy-900 leading-tight">
            公開が不安な方へ。<br/>
            <span className="relative inline-block">
                <span className="relative z-10">「完全承認制」</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200/50 -z-0 -rotate-1"></span>
            </span>
            で進めます。
          </h2>
        </div>

        {/* Confidential Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          
          {/* Card 1: Approval */}
          <div className="bg-[#fdfbf7] p-8 border-t-4 border-navy-900 shadow-md relative group overflow-hidden transition-transform hover:-translate-y-1">
             <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileCheck size={64} />
             </div>
             <h3 className="font-bold text-lg mb-4 text-navy-900 font-serif flex items-center gap-2">
                <span className="w-6 h-6 bg-navy-900 text-white flex items-center justify-center text-xs rounded-full">1</span>
                完全承認制
             </h3>
             <p className="text-sm text-gray-700 leading-relaxed font-medium">
                お客様の
                <span className="relative inline-block group-hover:text-red-600 transition-colors mx-1 font-bold border-b border-gray-400 border-dashed">
                   校了 (OK)
                </span>
                が出るまで、<br/>
                1秒たりとも公開しません。
             </p>
             {/* Stamp Effect */}
             <div className="absolute bottom-4 right-4 border-2 border-red-600 text-red-600 font-bold text-sm px-2 py-1 -rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150 group-hover:scale-100">
                APPROVED
             </div>
          </div>

          {/* Card 2: Privacy (Redacted Effect) */}
          <div className="bg-[#fdfbf7] p-8 border-t-4 border-navy-900 shadow-md relative group overflow-hidden transition-transform hover:-translate-y-1">
             <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <EyeOff size={64} />
             </div>
             <h3 className="font-bold text-lg mb-4 text-navy-900 font-serif flex items-center gap-2">
                <span className="w-6 h-6 bg-navy-900 text-white flex items-center justify-center text-xs rounded-full">2</span>
                映せないものは撮らない
             </h3>
             <p className="text-sm text-gray-700 leading-relaxed font-medium">
                事前に
                <span className="relative inline-block mx-1 align-bottom group cursor-help">
                   <span className="absolute inset-0 bg-navy-900 group-hover:w-0 transition-all duration-300 ease-out z-10"></span>
                   <span className="relative z-0 bg-yellow-100 px-1 text-navy-900 font-bold">NG項目</span>
                </span>
                （PC画面、伝票等）を<br/>
                すり合わせ、撮影を回避します。
             </p>
          </div>

          {/* Card 3: Mosaic */}
          <div className="bg-[#fdfbf7] p-8 border-t-4 border-navy-900 shadow-md relative group overflow-hidden transition-transform hover:-translate-y-1">
             <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck size={64} />
             </div>
             <h3 className="font-bold text-lg mb-4 text-navy-900 font-serif flex items-center gap-2">
                <span className="w-6 h-6 bg-navy-900 text-white flex items-center justify-center text-xs rounded-full">3</span>
                モザイク処理対応
             </h3>
             <p className="text-sm text-gray-700 leading-relaxed font-medium">
                万が一の映り込みも、編集で<br/>
                <span className="blur-[2px] group-hover:blur-0 transition-all duration-300 bg-gray-200 px-1">ボカシ処理</span>
                や音声カットにて<br/>
                安全に対応いたします。
             </p>
          </div>

        </div>

        {/* Rights Section - Certificate Style */}
        <div className="relative bg-navy-900 text-white p-8 md:p-12 overflow-hidden border-[6px] border-double border-gray-600 outline outline-1 outline-offset-4 outline-navy-900 mx-auto max-w-4xl shadow-2xl">
          {/* Background Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
          
          {/* Seal Watermark */}
          <div className="absolute top-1/2 right-10 w-48 h-48 border-[4px] border-white/10 rounded-full flex items-center justify-center -translate-y-1/2 pointer-events-none rotate-12">
             <div className="text-white/10 text-xs tracking-widest uppercase font-bold text-center">
                Official<br/>License<br/>Granted
             </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                 <Lock className="w-5 h-5 text-persimmon" />
                 <h3 className="font-serif text-xl md:text-2xl font-medium tracking-wide">権利・二次利用について</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-loose font-serif">
                納品データは<span className="text-white border-b border-persimmon mx-1 font-bold">「無期限・無制限」</span>で二次利用可能です。<br className="hidden md:block"/>
                自社サイト、SNS、広告、採用媒体などに自由にお使いください。
              </p>
            </div>
            
            <div className="flex-shrink-0">
               <div className="border-2 border-persimmon text-persimmon px-6 py-2 text-xl font-bold font-serif tracking-widest uppercase rotate-[-5deg] shadow-[0_0_15px_rgba(202,92,59,0.3)] bg-navy-900/80 backdrop-blur-sm">
                  Rights Free
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};