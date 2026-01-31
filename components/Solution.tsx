import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { Camera, Film, Mic, Sparkles } from 'lucide-react';

export const Solution: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="bg-white relative">
      <Section className={`bg-white transition-all duration-1000 ${isVisible ? 'animate-clear-vision' : 'opacity-0'}`}>
        {/* Flash Effect Overlay */}
        <div className={`absolute inset-0 bg-white z-20 pointer-events-none transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-0' : 'opacity-100'}`}></div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
          
          {/* Text Side */}
          <div className="flex-1 flex flex-col justify-center space-y-8 md:space-y-10 order-2 md:order-1 w-full">
            <div className="border-l-4 border-navy-900 pl-4 md:pl-6 relative">
              <Sparkles className="absolute -top-6 -left-2 w-6 h-6 text-persimmon animate-pulse" />
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-navy-900 mb-4 md:mb-6 tracking-wide leading-tight">
                御社の1日を、<br className="hidden md:block"/>そのまま。
              </h2>
              <p className="text-base md:text-xl text-navy-900/80 font-medium tracking-wide leading-relaxed">
                裏側1日密着ドキュメンタリーが<br/>
                最強の会社紹介になる。
              </p>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-loose text-sm md:text-base font-medium">
              <p>
                「仕事のリアル」「プロセス」「本音」「トップの想い」。<br/>
                これらを1日密着で撮影し、一本のストーリーに仕立てます。
              </p>
              <div className="bg-paper p-5 md:p-6 rounded-sm border-l-2 border-persimmon shadow-lg transform transition-transform hover:scale-105 duration-300">
                  <p className="mb-2">
                      ご用意いただくのは<strong className="text-navy-900 text-base md:text-lg mx-1 font-hand">「いつもの現場」</strong>だけ。
                  </p>
                  <p className="text-xs md:text-sm leading-loose">
                      演技や台本は一切不要です。<br className="hidden md:block"/>
                      普段どおりに業務をしていただき、カメラマンが横から気になった点を質問します。
                      立ち話に答えるくらいの、軽い感覚で大丈夫です。
                  </p>
              </div>
            </div>
          </div>

          {/* Visual Side: Documentary Metaphor */}
          <div className="flex-1 w-full flex items-center justify-center relative py-4 md:py-8 order-1 md:order-2">
            {/* Frame/Viewfinder Layout */}
            <div className="relative w-full max-w-sm aspect-[4/3] border-2 border-navy-900 p-4 flex flex-col items-center justify-center bg-transparent group">
               
               {/* Corner Markers */}
               <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-navy-900 -mt-1 -ml-1 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
               <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-navy-900 -mt-1 -mr-1 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
               <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-navy-900 -mb-1 -ml-1 transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
               <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-navy-900 -mb-1 -mr-1 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>

               {/* Center Content */}
               <div className="text-center space-y-3 md:space-y-4 z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-navy-900 shadow-inner">
                      <Film size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-navy-900">日常の可視化</h3>
                  <div className="flex justify-center gap-4 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Camera size={12}/> REC</span>
                      <span className="flex items-center gap-1"><Mic size={12}/> AUDIO</span>
                  </div>
               </div>

               {/* Background Stripes */}
               <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.03)_10px,rgba(0,0,0,0.03)_20px)] -z-0"></div>
            </div>
            
            {/* Floating Tag */}
            <div className="absolute bottom-0 left-0 md:-left-8 bg-white border border-gray-200 py-2 px-4 md:py-3 md:px-6 shadow-xl transform translate-y-1/2 animate-bounce">
               <p className="text-sm md:text-lg font-bold text-navy-900 tracking-wide font-hand">
                  演技・台本 NG
               </p>
            </div>
          </div>

        </div>
        
        <div className="mt-16 md:mt-24 text-left md:text-center max-w-3xl mx-auto border-t border-gray-100 pt-8 md:pt-12">
          <p className="font-serif text-lg md:text-2xl text-navy-900 font-medium animate-focus-in delay-500 text-center">
            「何も特別なことはしていない」
          </p>
          <p className="text-sm md:text-lg text-gray-700 mt-4 leading-loose tracking-wide">
              そう思われる日常の中にこそ、第三者が本当に見たい<br/>
              <strong className="font-hand text-xl md:text-2xl text-navy-900 mx-1">信頼の根拠</strong>が詰まっています。
          </p>
        </div>
      </Section>
    </div>
  );
};