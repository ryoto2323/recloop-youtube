import React from 'react';
import { Section } from './Section';

export const Target: React.FC = () => {
  return (
    <Section className="bg-navy-900 text-white py-16 md:py-24 border-t border-navy-800">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-20 text-center md:text-left">
        
        {/* Left: Heading */}
        <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-5xl font-serif font-bold leading-tight mb-8 break-keep">
            どんな業種でも<br/>
            <span className="inline-block mt-2">
                <span className="text-persimmon font-medium italic text-3xl md:text-6xl">見たい裏側</span>
                <span className="pl-1 md:pl-3">があります。</span>
            </span>
            </h2>
            
            {/* Industry List - Clean Architectural Style */}
            <div className="space-y-4">
                <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase border-b border-gray-800 pb-2">
                    Industry Examples
                </p>
                <p className="font-serif text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide break-keep">
                    建設 <span className="text-gray-700 mx-2">/</span> 工場 <span className="text-gray-700 mx-2">/</span> 飲食 <span className="text-gray-700 mx-2">/</span> 美容 <span className="text-gray-700 mx-2">/</span> 不動産 <span className="text-gray-700 mx-2">/</span> IT <span className="text-gray-700 mx-2">/</span> 介護...
                </p>
            </div>
        </div>

        {/* Right: Emotional Statement */}
        <div className="w-full md:w-1/2 relative">
           <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 hidden md:block"></div>
           <div className="md:pl-12 pt-4">
               
               {/* Handwritten "Truth" Statement */}
               <div className="relative inline-block text-center md:text-left">
                   <p className="text-white leading-tight break-keep">
                     <span className="font-hand text-3xl md:text-5xl">「うちは地味だから…」</span><br/>
                     <span className="font-serif font-bold text-2xl md:text-4xl mt-3 inline-block">ほど信用に直結して強いです。</span>
                   </p>
                   {/* Underline accent */}
                   <div className="w-full h-px bg-gradient-to-r from-persimmon to-transparent mt-4 opacity-70"></div>
               </div>
           </div>
        </div>

      </div>
    </Section>
  );
};