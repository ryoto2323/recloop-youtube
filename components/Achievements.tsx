import React, { useState, useEffect, useRef } from 'react';
import { Section } from './Section';
import { Achievement } from '../types';
import { MoveRight } from 'lucide-react';

// Animated Counter Component
const CountUp: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function: easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

export const Achievements: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollableWidth = scrollWidth - clientWidth;
      const progress = scrollableWidth > 0 ? (scrollLeft / scrollableWidth) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const data: Achievement[] = [
    {
      id: 1,
      title: "実績① ブランドリユース企業",
      platforms: "TikTok / Instagram運用",
      purpose: "宅配買取サービス利用者増加 / 企業認知拡大",
      role: "戦略設計 / アカウント設計 / オリジナル企画 / 撮影・編集 / 運用 / インフルエンサーキャスティング",
      metricsText: "841万回 / 10.6万回 / 6万回再生 ほか万再生超え多数",
      mainValue: 841,
      result: "サービス利用者増加・企業認知の大幅拡大"
    },
    {
      id: 2,
      title: "実績② 飲食・サービス店舗",
      platforms: "TikTok運用",
      purpose: "店舗集客 / 店舗認知拡大",
      role: "戦略設計 / アカウント設計 / 企画 / 撮影・編集 / 運用",
      metricsText: "98万回 / 55万回 / 22万回再生 ほか万再生超え多数",
      mainValue: 98,
      result: "地域での認知拡大・集客に成功。SNS経由で指名・採用応募も発生"
    },
    {
      id: 3,
      title: "実績③ 飲食・サービス店舗",
      platforms: "TikTok / Instagram運用",
      purpose: "店舗集客 / 認知拡大",
      role: "戦略設計 / アカウント設計 / 企画 / 撮影・編集 / 運用",
      metricsText: "90万回 / 12万回再生 ほか万再生超え多数",
      mainValue: 90,
      result: "地域での認知拡大・集客に成功。副次的に採用応募者も獲得"
    },
    {
      id: 4,
      title: "実績④ 飲食・サービス店舗",
      platforms: "TikTok運用",
      purpose: "店舗集客 / 地域No.1の知名度獲得",
      role: "戦略設計 / アカウント設計 / 企画 / 撮影・編集 / 運用",
      metricsText: "29万回 / 11万回再生 ほか万再生超え多数",
      mainValue: 29,
      result: "地域での知名度向上と集客に成功。副次的に採用応募も発生"
    },
    {
      id: 5,
      title: "実績⑤ 美容サロン店舗",
      platforms: "TikTok / Instagram運用",
      purpose: "認知拡大・来店",
      role: "モデルキャスティング / 企画 / 撮影・編集 / 運用",
      metricsText: "15万回 / 1万回再生超",
      mainValue: 15,
      result: "認知拡大・来店実績を獲得"
    }
  ];

  return (
    <Section id="achievements" className="bg-navy-900 text-white" fullWidth grid={false}>
      {/* Dark Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-700 pb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-wide leading-tight">
            「見たくなる動画」を作るプロです。<br className="hidden md:block"/>
            <span className="text-xl md:text-2xl text-gray-400 font-medium mt-2 block">TikTok / Instagramのショート動画で、数字を出してきた運用実績があります。</span>
          </h2>
        </div>
        
        {/* Scroll Hint (Desktop) */}
        <div className="hidden md:flex items-center gap-2 text-gray-400 text-xs font-bold tracking-widest uppercase">
            <span>Scroll</span>
            <MoveRight className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Horizontal Scroll Area - Cards */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full overflow-x-auto hide-scrollbar pb-12 px-6 relative z-10 cursor-grab active:cursor-grabbing"
      >
        <div className="flex space-x-6 w-max mx-auto md:mx-0 md:px-[calc((100vw-80rem)/2)]">
          {data.map((item) => (
            <div key={item.id} className="w-[300px] md:w-[400px] bg-paper text-navy-900 flex flex-col shrink-0 relative group shadow-xl h-auto min-h-[500px] transition-transform duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              
              {/* Card Header */}
              <div className="bg-navy-800 text-white p-6 border-b border-navy-900">
                <span className="inline-block px-2 py-1 border border-white/30 text-[10px] tracking-widest mb-2 font-bold">{item.platforms}</span>
                <h3 className="font-bold text-lg font-serif leading-snug">{item.title}</h3>
              </div>
              
              {/* Main Visual - Big Number */}
              <div className="p-6 md:p-8 bg-white border-b border-gray-100 text-center relative overflow-hidden">
                <p className="text-xs font-bold text-gray-500 mb-2 tracking-widest uppercase">1動画の再生数</p>
                <div className="flex items-baseline justify-center">
                  <span className="font-num text-7xl md:text-8xl font-bold tracking-tighter leading-none text-navy-900">
                    <CountUp end={item.mainValue} duration={2000 + item.id * 200} />
                  </span>
                  <span className="font-serif text-xl font-bold text-gray-600 ml-1">万回</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 font-medium">{item.metricsText}</p>
                
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-persimmon to-transparent opacity-50"></div>
              </div>

              {/* Detailed Specs */}
              <div className="p-6 md:p-8 space-y-4 flex-grow bg-paper text-sm md:text-base">
                <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">目的</p>
                    <p className="font-bold text-navy-900 leading-relaxed">{item.purpose}</p>
                </div>
                
                <div className="w-full h-px bg-gray-200"></div>
                
                <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">担当</p>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{item.role}</p>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                <div className="bg-white border-l-4 border-persimmon p-3 shadow-sm">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">結果</p>
                    <p className="font-bold text-navy-900 text-sm leading-relaxed">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Progress Bar (Architectural Style) */}
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
         <div className="w-full h-px bg-gray-800 relative">
            <div 
                className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-persimmon transition-all duration-300 ease-out"
                style={{ width: `${Math.max(scrollProgress, 5)}%` }} // Minimum 5% visible
            ></div>
         </div>
      </div>

      {/* Bridge Text Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 mt-12 md:mt-20">
        <div className="bg-navy-800 border border-navy-700 p-8 md:p-12 text-center md:text-left relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-persimmon opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <p className="font-serif text-lg md:text-2xl text-white font-bold leading-relaxed mb-6">
                「視聴者が見たくなる動画作り」のノウハウを、<br className="hidden md:block"/>
                企業の信用資産づくりへ転用します。
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-loose tracking-wide font-medium">
                激戦区のショート動画で数字を出してきた、<br className="md:hidden"/>
                <span className="text-white border-b border-gray-500 mx-1">「刺さる構成・見せ場設計・インタビュー設計」</span>。<br className="hidden md:block"/>
                このノウハウを、今回の「1日密着の会社紹介ドキュメンタリー動画」に落とし込みます。<br className="hidden md:block"/>
                視聴者を飽きさせず、最後まで見てもらえる動画へ仕上げます。
            </p>
        </div>
      </div>
    </Section>
  );
};