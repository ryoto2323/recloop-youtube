import React from 'react';
import { Section } from './Section';

export const Problem: React.FC = () => {
  return (
    <Section className="bg-[#f5f5f5] flex items-center justify-center relative overflow-hidden py-32 md:py-64">
      {/* Visual Effects (Subtler for brightness) */}
      {/* 1. Very Light Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.03)_100%)] z-10"></div>
      
      {/* 2. Light Static Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')] z-0 mix-blend-multiply"></div>

      <div className="w-full max-w-4xl mx-auto relative z-20 px-6">
        
        {/* Changed to text-center for both mobile and desktop for better balance */}
        <div className="text-center space-y-16 md:space-y-24">
          <div className="space-y-8 md:space-y-10">
            <h2 className="text-lg md:text-3xl font-serif text-navy-900 font-medium leading-loose tracking-wide break-keep">
              多くの企業は、ちゃんとやっています。<br/>
              <br/>
              広告を出す。求人も出す。営業もかける。<br/>
              <br/>
              それでも中々成果が伸びないのは、<br className="md:hidden" />努力不足ではありません。
            </h2>
          </div>

          <div className="py-10 relative">
             <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-40 bg-gray-300"></div>
             
             <div className="flex flex-col items-center gap-8">
                {/* Changed to whitespace-nowrap to ensure single line on mobile */}
                <span className="text-navy-900 font-hand font-bold text-3xl md:text-7xl border-b-4 border-red-600/80 pb-2 inline-block transform -rotate-1 relative group whitespace-nowrap">
                    <span className="relative z-10">「中身が見えていない」</span>
                    {/* Glitch Effect Shadows (Subtler) */}
                    <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-600 opacity-40 animate-glitch translate-x-[2px]">「中身が見えていない」</span>
                    <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-600 opacity-40 animate-glitch translate-x-[-2px] animation-delay-100">「中身が見えていない」</span>
                </span>
                
                <h3 className="text-xl md:text-3xl font-serif font-bold text-navy-900 tracking-wide leading-relaxed mt-4 text-center break-keep">
                  中身を見せる戦略を<br className="md:hidden"/>取り入れてないからです。
                </h3>
             </div>
          </div>

          <div className="max-w-3xl mx-auto text-navy-900 text-sm md:text-lg text-center font-medium leading-loose tracking-wide break-keep">
            <p className="mb-16 md:mb-24 opacity-90">
              Webサイトが綺麗でも、パンフレットが立派でも、<br className="hidden md:block"/>
              本当に知りたいのはそこじゃない。<br className="hidden md:block"/>
              <br className="block md:hidden" />
              <br className="block md:hidden" />
              「どんな人が」「どんな想いで」<br />
              「どんな感じで働いているのか」<br />
              この現場の手触りが見えない限り<br />
              いまの求職者も、顧客も<br />
              心は動きにくい時代です。
            </p>
            
            <div className="bg-white p-8 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden text-center transform rotate-1">
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-100/50 rotate-1 shadow-sm border-l border-r border-gray-200"></div>
                
                <p className="font-bold text-gray-600 text-sm md:text-base mb-6 leading-relaxed break-keep">
                  だから、不信感や迷いを一気に消す<br className="md:hidden" />
                  最短手段はひとつ。
                </p>
                <div className="relative z-10 space-y-4">
                    <p className="text-lg md:text-2xl font-bold text-navy-900 break-keep">
                    作り込んだPRではなく、
                    </p>
                    <p className="font-hand text-2xl md:text-5xl text-navy-900 border-b-2 border-red-600 inline-block pb-2 mb-2 whitespace-nowrap">
                    “現場のリアル”を見せること。
                    </p>
                    <p className="text-base md:text-lg text-navy-900 font-bold border-t border-gray-200 pt-6 mt-4 inline-block w-full max-w-lg leading-relaxed break-keep">
                    それが、認知・集客・採用・取引先を<br className="md:hidden" />
                    まとめて動かします。
                    </p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};