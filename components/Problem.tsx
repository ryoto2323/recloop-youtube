import React from 'react';
import { Section } from './Section';

export const Problem: React.FC = () => {
  return (
    <Section className="bg-paper flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto relative">
        
        <div className="relative z-10 text-center space-y-12 md:space-y-20">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-lg md:text-4xl font-serif text-gray-500 md:text-gray-400 font-medium leading-relaxed md:leading-loose tracking-wide">
              多くの企業が努力しています。<br className="hidden md:block"/>
              広告、SNS、求人、営業。<br className="hidden md:block"/>
              それでも成果が出ない理由は、<br className="hidden md:block"/>
              <span className="text-navy-900 font-hand font-bold text-2xl md:text-5xl border-b-2 border-gray-200 pb-1 inline-block mt-3 md:mt-4 transform -rotate-1">だいたい同じ</span>です。
            </h2>
          </div>

          <div className="py-8 md:py-12 relative">
             <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-navy-900 opacity-20"></div>
             <h3 className="relative bg-paper inline-block py-6 px-4 md:px-12 text-2xl md:text-5xl font-bold font-serif text-navy-900 tracking-wide leading-tight md:leading-normal border-t border-b border-gray-100">
               御社の「中身」が<br className="hidden md:block"/>
               見えていないから。
             </h3>
          </div>

          <div className="max-w-xl mx-auto text-gray-700 text-base md:text-lg text-justify md:text-center font-medium leading-relaxed md:leading-loose tracking-wide">
            <p className="mb-8 md:mb-10 text-sm md:text-lg">
              Webサイトが綺麗でも、パンフレットが立派でも、<br className="hidden md:block"/>
              「どんな人が、どんな想いで、どんな雰囲気で働いているか」<br className="hidden md:block"/>
              ここが見えない限り、今の時代の求職者や取引先は動きません。
            </p>
            <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-100 relative overflow-hidden text-center">
                {/* Red Marker Effect */}
                <div className="absolute bottom-0 left-0 h-1 bg-red-500/50 animate-marker"></div>
                
                <p className="font-bold text-navy-900 text-base md:text-xl mb-2">
                不信感を払拭する最短手段。
                </p>
                <p className="text-gray-600 relative z-10 text-sm md:text-base">
                それは、作り込んだPRではなく、<br className="md:hidden"/>
                <span className="font-hand text-xl md:text-3xl text-navy-900 mx-1">“現場のリアル”</span>
                の可視化です。
                </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};