import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px (past hero)
      const shouldShow = window.scrollY > 500;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-[120%]'
      }`}
    >
        {/* Blur Backdrop */}
        <div className="absolute inset-0 bg-navy-900/90 backdrop-blur-md border-t border-navy-800 shadow-2xl"></div>

        <div className="relative z-10 flex gap-3">
            {/* Secondary CTA: LINE Consult */}
            <a 
                href="#" // Insert LINE URL here later
                className="flex-1 bg-[#06C755] text-white py-3 px-4 flex items-center justify-center gap-2 text-sm font-bold active:bg-opacity-90 transition-colors shadow-lg"
            >
                <MessageCircle size={18} fill="currentColor" className="text-white" />
                <span>LINEで相談</span>
            </a>

            {/* Primary CTA: Schedule */}
            <button 
                className="flex-[1.5] bg-persimmon text-white py-3 px-4 flex items-center justify-center gap-2 text-sm font-bold shadow-[0_0_15px_rgba(202,92,59,0.4)] active:scale-95 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <Calendar size={18} />
                <span>空き日程を確認</span>
            </button>
        </div>
    </div>
  );
};