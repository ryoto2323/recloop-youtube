import React from 'react';
import { Section } from './Section';

export const Package: React.FC = () => {
  return (
    <Section id="package" className="bg-white relative">
      {/* Vertical Rhythm Decoration */}
      <div className="hidden md:block absolute top-0 left-10 h-full writing-vertical-rl text-[120px] font-serif font-bold text-gray-100 select-none pointer-events-none z-0">
         制作内容
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">パッケージ内容</h2>
        <p className="text-gray-700 text-lg font-medium leading-loose">撮影・編集・メディア掲載まで。<br/>これ全部込み。フルパッケージで納品します。</p>
      </div>

      <div className="max-w-5xl mx-auto relative mt-20 md:mt-0 z-10">
        {/* Central "Box" - The Package Core */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div className="w-64 h-64 border-4 border-navy-900 flex flex-col items-center justify-center bg-white z-10 shadow-lg transition-transform duration-500 hover:scale-105">
            <span className="font-serif font-bold text-2xl text-navy-900 mb-2">全部込み</span>
            <span className="font-bold text-sm text-gray-600">フルパッケージ</span>
          </div>
        </div>

        {/* Connector Lines (Desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-1/2 h-px bg-gray-300 -z-10"></div>
        <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-px bg-gray-300 -z-10"></div>
        <div className="hidden md:block absolute top-0 left-1/2 w-px h-1/2 bg-gray-300 -z-10"></div>
        <div className="hidden md:block absolute bottom-0 left-1/2 w-px h-1/2 bg-gray-300 -z-10"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:h-[600px]">
          
          {/* Item 1 */}
          <div className="md:col-start-1 md:row-start-1 flex flex-col items-center md:items-end md:justify-center text-center md:text-right md:pr-12 md:pb-12 group cursor-default">
             <div className="bg-paper p-8 md:p-6 md:bg-white md:border md:border-gray-100 md:shadow-sm md:group-hover:shadow-xl md:group-hover:-translate-y-2 transition-all duration-300">
               <h3 className="font-serif font-bold text-xl text-navy-900 mb-3 border-b border-gray-300 pb-2 inline-block">01. YouTube長尺動画</h3>
               <p className="text-base text-navy-900 font-bold mb-2">内容に合わせた最適尺</p>
               <p className="text-sm text-gray-700">準備 → 業務風景 → 本音インタビュー</p>
             </div>
          </div>

          {/* Item 2 */}
          <div className="md:col-start-3 md:row-start-1 flex flex-col items-center md:items-start md:justify-center text-center md:text-left md:pl-12 md:pb-12 group cursor-default">
            <div className="bg-paper p-8 md:p-6 md:bg-white md:border md:border-gray-100 md:shadow-sm md:group-hover:shadow-xl md:group-hover:-translate-y-2 transition-all duration-300">
              <h3 className="font-serif font-bold text-xl text-navy-900 mb-3 border-b border-gray-300 pb-2 inline-block">02. 切り抜きショート</h3>
              <p className="text-base text-navy-900 font-bold mb-2">× 3本 (TikTok/Reels/Shorts)</p>
              <p className="text-sm text-gray-700">スマホで見られやすい縦型動画</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="md:col-start-2 md:row-start-2 flex flex-col items-center justify-start pt-8 md:pt-16 group cursor-default">
             <div className="bg-paper p-8 md:bg-white md:border md:border-gray-100 md:shadow-sm md:group-hover:shadow-xl md:group-hover:-translate-y-2 transition-all duration-300 text-center w-full max-w-sm mx-auto">
               <h3 className="font-serif font-bold text-xl text-navy-900 mb-4 border-b border-gray-300 pb-2 inline-block">03. 制作・運用サポート</h3>
               <ul className="text-base text-gray-700 space-y-3 inline-block text-left font-medium">
                 <li>・企画・構成作成</li>
                 <li>・1日密着撮影（拘束時間制限なし）</li>
                 <li className="whitespace-nowrap">・フル編集（カット/テロップ/BGM/整音）</li>
                 <li>・YouTubeサムネイル作成</li>
               </ul>
             </div>
          </div>

        </div>
      </div>
    </Section>
  );
};