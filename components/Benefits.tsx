import React from 'react';
import { Section } from './Section';

export const Benefits: React.FC = () => {
  return (
    <Section className="bg-paper">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-xl md:text-3xl font-serif font-bold text-navy-900 leading-relaxed">
          動画1本で、<br className="hidden md:block"/>
          “改善コスト”が下がります。
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        {/* Center Divider for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

        {/* Left: Cost/Pain */}
        <div className="md:pr-16 md:text-right flex flex-col justify-center space-y-8 md:space-y-10 opacity-60">
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[10px] md:text-xs font-bold text-gray-500 bg-gray-200 inline-block px-2 py-1">説明コスト</h3>
            <p className="font-serif text-lg md:text-2xl font-medium">毎回同じ説明をする労力</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[10px] md:text-xs font-bold text-gray-500 bg-gray-200 inline-block px-2 py-1">価格競争</h3>
            <p className="font-serif text-lg md:text-2xl font-medium">価格競争に巻き込まれる</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[10px] md:text-xs font-bold text-gray-500 bg-gray-200 inline-block px-2 py-1">採用ミスマッチ</h3>
            <p className="font-serif text-lg md:text-2xl font-medium">面接後のミスマッチ</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[10px] md:text-xs font-bold text-gray-500 bg-gray-200 inline-block px-2 py-1">信用の壁</h3>
            <p className="font-serif text-lg md:text-2xl font-medium">初回取引の心理的ハードル</p>
          </div>
        </div>

        {/* Right: Benefit/Asset */}
        <div className="md:pl-16 flex flex-col justify-center space-y-8 md:space-y-10">
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[10px] md:text-xs font-bold text-white bg-persimmon inline-block px-2 py-1">資産 01</h3>
            <p className="font-serif text-xl md:text-3xl font-bold text-navy-900">説明が「動画で済む」</p>
            <p className="text-sm text-gray-600 font-medium">初回説明・採用説明・営業説明の時間を削減</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[10px] md:text-xs font-bold text-white bg-persimmon inline-block px-2 py-1">資産 02</h3>
            <p className="font-serif text-xl md:text-3xl font-bold text-navy-900">人柄で指名される</p>
            <p className="text-sm text-gray-600 font-medium">安さではなく、こだわりと物語で選ばれる</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[10px] md:text-xs font-bold text-white bg-persimmon inline-block px-2 py-1">資産 03</h3>
            <p className="font-serif text-xl md:text-3xl font-bold text-navy-900">採用の質が上がる</p>
            <p className="text-sm text-gray-600 font-medium">応募前に理解が進み、ズレが減る</p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-[10px] md:text-xs font-bold text-white bg-persimmon inline-block px-2 py-1">資産 04</h3>
            <p className="font-serif text-xl md:text-3xl font-bold text-navy-900">現場の証拠で安心</p>
            <p className="text-sm text-gray-600 font-medium">管理体制が可視化され、不安が軽くなる</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 md:mt-20 text-center">
        <div className="inline-block border border-navy-900 bg-white px-6 py-4 md:px-8 md:py-6 shadow-sm">
          <p className="font-serif text-base md:text-lg text-navy-900 font-bold">
            24時間365日働き続ける「資産」になります。
          </p>
        </div>
      </div>
    </Section>
  );
};