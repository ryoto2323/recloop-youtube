import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Star, Video, Scissors, Image, FileText } from 'lucide-react';

export const Price: React.FC = () => {
  return (
    <Section id="price" className="bg-[#f2f0eb] relative overflow-hidden">
      {/* Background Texture (Rough Cardboard/Paper) */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] mix-blend-multiply pointer-events-none z-0"></div>
      
      {/* Vertical Rhythm Decoration */}
      <div className="hidden md:block absolute top-0 right-10 h-full writing-vertical-rl text-[120px] font-serif font-bold text-gray-400/10 select-none pointer-events-none z-0">
         特別価格
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Paper Card with realistic shadow */}
        <div className="border-none p-8 md:p-16 text-center relative bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] transform rotate-[0.5deg]">
          
          {/* Inner Frame */}
          <div className="absolute inset-4 border-2 border-navy-900/10 pointer-events-none"></div>
          <div className="absolute inset-5 border border-navy-900/10 pointer-events-none"></div>

          {/* Decorative Corner Seals */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-persimmon/50"></div>
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-persimmon/50"></div>

          <div className="mb-6 md:mb-8">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-navy-900 mb-4 uppercase">
                Special Invitation
            </h2>
            <h3 className="font-serif text-2xl md:text-4xl font-bold text-navy-900 mt-4 leading-tight">
              メディア立ち上げ記念<br/>
              モニター特別価格
            </h3>
          </div>

          <div className="my-16 md:my-24 relative inline-block">
             <div className="bg-navy-900 text-white px-4 py-1 inline-flex items-center gap-2 mb-4 shadow-md">
               <Star className="w-3 h-3 fill-current" />
               <span className="text-xs font-bold tracking-widest">毎月5社限定</span>
               <Star className="w-3 h-3 fill-current" />
             </div>
             
             <div className="flex flex-col items-center">
                 <p className="text-gray-400 line-through text-lg md:text-xl font-serif mb-2 decoration-gray-400/50">通常 ¥150,000</p>
                 <div className="text-6xl md:text-8xl font-num font-bold text-navy-900 tracking-tighter leading-none relative">
                   <span className="absolute -left-6 top-0 text-2xl text-gray-400">¥</span>
                   50,000
                 </div>
                 <p className="text-sm font-bold text-gray-500 mt-2 tracking-wide">(税込・交通費別)</p>
             </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-8 max-w-sm mx-auto"></div>

          {/* Inclusions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-100">
                  <Video className="w-6 h-6 text-persimmon mb-2" strokeWidth={1.5} />
                  <span className="text-[11px] md:text-xs font-bold text-navy-900">長尺動画 1本</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-100">
                  <Scissors className="w-6 h-6 text-persimmon mb-2" strokeWidth={1.5} />
                  <span className="text-[11px] md:text-xs font-bold text-navy-900">ショート ×3本</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-100">
                  <Image className="w-6 h-6 text-persimmon mb-2" strokeWidth={1.5} />
                  <span className="text-[11px] md:text-xs font-bold text-navy-900">サムネイル</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded border border-gray-100">
                  <FileText className="w-6 h-6 text-persimmon mb-2" strokeWidth={1.5} />
                  <span className="text-[11px] md:text-xs font-bold text-navy-900">企画・構成</span>
              </div>
          </div>

          <div className="space-y-3 md:space-y-4 text-sm md:text-base text-navy-900 mb-10 font-bold font-serif">
             <p>追加費用原則なし</p>
             <p>撮影後 1〜2週間で納品</p>
             <p>無料修正 2回まで対応</p>
          </div>

          <Button 
            variant="primary" 
            className="w-full md:w-auto px-16 py-4 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all" 
            glow
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            モニター空き枠を確認する
          </Button>

          <p className="text-xs text-red-800/70 mt-8 font-medium font-serif tracking-wide">
            ※枠が埋まり次第、予告なく終了いたします。
          </p>

        </div>
      </div>
    </Section>
  );
};