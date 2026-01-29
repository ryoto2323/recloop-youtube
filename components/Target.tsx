import React from 'react';
import { Section } from './Section';

export const Target: React.FC = () => {
  return (
    <Section className="bg-navy-900 text-white py-16 md:py-24 border-t border-navy-800">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-20">
        
        {/* Left: Heading */}
        <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8">
            どんな業種でも、<br className="hidden md:block"/>
            <span className="text-persimmon font-medium italic">“見たい裏側”</span>があります。
            </h2>
            
            {/* Industry List - Clean Architectural Style */}
            <div className="space-y-4">
                <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase border-b border-gray-800 pb-2">
                    Industry Examples
                </p>
                <p className="font-serif text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide">
                    建設 <span className="text-gray-700 mx-2">/</span> 工場 <span className="text-gray-700 mx-2">/</span> 飲食 <span className="text-gray-700 mx-2">/</span> 美容 <span className="text-gray-700 mx-2">/</span> 不動産 <span className="text-gray-700 mx-2">/</span> IT <span className="text-gray-700 mx-2">/</span> 介護...
                </p>
            </div>
        </div>

        {/* Right: Emotional Statement */}
        <div className="w-full md:w-1/2 relative">
           <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 hidden md:block"></div>
           <div className="md:pl-12 pt-4">
               <p className="text-gray-400 font-serif text-base md:text-lg mb-8 leading-loose">
                 現場のリアルには必ずドラマがあり、<br className="hidden md:block"/>
                 見たい裏側があります。
               </p>
               
               {/* Handwritten "Truth" Statement */}
               <div className="relative inline-block">
                   <p className="font-hand text-3xl md:text-5xl text-white leading-tight">
                     「うちは地味だから…」ほど、<br className="hidden md:block"/>
                     信用に直結して強いです。
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