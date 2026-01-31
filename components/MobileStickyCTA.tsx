import React, { useEffect, useState } from 'react';
import { Calendar, MessageCircle, Star } from 'lucide-react';

export const MobileStickyCTA: React.FC = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // 1. スクロール検知：ファーストビュー（約500px）を過ぎたら表示許可
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    
    // 2. お問い合わせフォーム検知：フォームが見えたら非表示
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px"
      }
    );

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // スクロールしており、かつコンタクトフォームが見えていない時だけ表示
  const isVisible = hasScrolled && !isContactVisible;

  return (
    <>
      {/* Mobile & PC Sticky Bar Wrapper */}
      {/* z-index must be lower than OpeningLoader (99999) but higher than everything else */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-[9999] transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
      >
        
        {/* --- Mobile View (Default) --- */}
        <div className="md:hidden w-full bg-navy-900/95 backdrop-blur-md border-t border-navy-800 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
          <div 
            className="p-3 flex gap-3 items-center"
            style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
          >
              {/* Secondary CTA: LINE - Updated for better balance */}
              <a 
                  href="https://lin.ee/ziuLB8o" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[32%] bg-[#06C755] text-white h-14 rounded-full flex flex-col items-center justify-center shadow-lg active:scale-95 transition-transform shrink-0 border border-white/10"
                  aria-label="LINEで相談"
              >
                  <MessageCircle size={20} fill="currentColor" className="mb-0.5" />
                  <span className="text-[10px] font-bold leading-none tracking-wide transform scale-90 sm:scale-100 whitespace-nowrap">LINEで相談する</span>
              </a>

              {/* Primary CTA: REC Button Style */}
              <button 
                  className="flex-1 bg-white text-navy-900 h-14 rounded-full flex items-center justify-between px-2 pl-5 pr-2 shadow-[0_0_15px_rgba(0,0,0,0.2)] active:scale-[0.98] transition-all border-2 border-gray-200 group relative overflow-hidden"
                  onClick={scrollToContact}
              >
                  {/* Text Container */}
                  <div className="flex flex-col items-start z-10">
                      <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider leading-none mb-0.5">Start Recording</span>
                      <span className="text-sm font-bold text-navy-900 leading-none">空き日程を確認する</span>
                  </div>

                  {/* REC Circle */}
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center relative shadow-inner shrink-0 group-hover:bg-red-500 transition-colors">
                      {/* Inner Ring Pulse */}
                      <div className="absolute inset-0 border-2 border-white/50 rounded-full animate-ping opacity-75"></div>
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
              </button>
          </div>
        </div>

        {/* --- PC View (Desktop Sticky Bar) --- */}
        <div className="hidden md:flex w-full bg-navy-900/95 backdrop-blur-md border-t border-navy-800 shadow-[0_-4px_30px_rgba(0,0,0,0.3)] items-center justify-between py-4 px-12 h-20">
           
           {/* Left: Copy & Offer */}
           <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <p className="text-white font-serif font-bold text-lg tracking-wide flex items-center gap-2">
                   <Star className="w-4 h-4 text-persimmon fill-current animate-pulse" />
                   毎月5社限定モニター募集中
                </p>
                <p className="text-gray-400 text-xs tracking-wider">
                   採用・集客・認知拡大を「ドキュメンタリー動画」で解決
                </p>
              </div>
              <div className="h-8 w-px bg-gray-700"></div>
              <div className="text-white font-bold">
                 <span className="text-sm text-gray-400 mr-2 line-through">¥150,000</span>
                 <span className="text-2xl font-num text-persimmon">¥50,000</span>
                 <span className="text-xs ml-1">(税込)</span>
              </div>
           </div>

           {/* Right: Actions */}
           <div className="flex items-center gap-4">
              <a 
                  href="https://lin.ee/ziuLB8o" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#06C755] text-white py-2.5 px-6 flex items-center gap-2 text-sm font-bold hover:opacity-90 transition-opacity rounded-sm"
              >
                  <MessageCircle size={18} fill="currentColor" />
                  <span>LINEで相談</span>
              </a>
              <button 
                  className="bg-persimmon text-white py-2.5 px-8 flex items-center gap-2 text-base font-bold shadow-[0_0_20px_rgba(202,92,59,0.5)] hover:bg-white hover:text-persimmon transition-all rounded-sm group"
                  onClick={scrollToContact}
              >
                  {/* REC Dot */}
                  <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse group-hover:bg-red-600 transition-colors"></span>
                  <span>空き日程を確認する</span>
              </button>
           </div>
        </div>

      </div>
    </>
  );
};