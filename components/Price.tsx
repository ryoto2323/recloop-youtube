import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Star } from 'lucide-react';

export const Price: React.FC = () => {
  return (
    <Section id="price" className="bg-[#FAF9F6]"> {/* Creamy white background */}
      <div className="max-w-3xl mx-auto">
        <div className="border-4 border-double border-navy-900 p-6 md:p-16 text-center relative bg-white shadow-xl">
          
          {/* Decorative Corner Seals */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-persimmon"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-persimmon"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-persimmon"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-persimmon"></div>

          <div className="mb-6 md:mb-8">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-gray-500 mb-2 border border-gray-300 inline-block px-3 py-1">
                招待状
            </h2>
            <h3 className="font-serif text-xl md:text-3xl font-bold text-navy-900 mt-4 leading-relaxed">
              メディア立ち上げ記念<br className="hidden md:block"/>
              モニター特別価格
            </h3>
          </div>

          <div className="my-8 md:my-12 relative inline-block">
             <div className="flex items-center justify-center gap-2 mb-2 text-persimmon">
               <Star className="w-4 h-4 fill-current" />
               <span className="text-xs md:text-sm font-bold tracking-widest">毎月5社限定</span>
               <Star className="w-4 h-4 fill-current" />
             </div>
             <p className="text-gray-400 line-through text-lg md:text-xl font-serif">通常 150,000円</p>
             <div className="text-5xl md:text-7xl font-num font-bold text-navy-900 tracking-tighter mt-2">
               50,000<span className="text-sm md:text-lg font-bold ml-2 text-gray-600 font-sans">円 (税込)</span>
             </div>
             <div className="bg-paper p-4 mt-6 text-left">
                <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                ※現在、事例とコンテンツを充実させる期間のため、制作費・利益度外視のパートナー価格で提供しています。
                </p>
             </div>
          </div>

          <div className="space-y-3 md:space-y-4 text-sm md:text-base text-navy-900 mb-8 md:mb-10 font-bold">
             <p className="border-b border-gray-100 pb-2">追加費用原則なし（※交通費実費のみ）</p>
             <p className="border-b border-gray-100 pb-2">撮影後納品：1〜2週間</p>
             <p className="border-b border-gray-100 pb-2">無料修正：2回まで</p>
          </div>

          <Button 
            variant="primary" 
            className="w-full md:w-auto px-12 font-bold" 
            glow
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            モニター空き枠を確認する
          </Button>

          <p className="text-xs md:text-sm text-red-500 mt-6 font-medium">
            ※モニター募集は一定数に達し次第終了し、通常価格へ戻します。
          </p>

        </div>
      </div>
    </Section>
  );
};