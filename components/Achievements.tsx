import React, { useState, useEffect, useRef } from 'react';
import { Section } from './Section';
import { Achievement } from '../types';

// Animated Counter Component
const CountUp: React.FC<{ end: number; duration?: number; delay?: number }> = ({ end, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

export const Achievements: React.FC = () => {
  // Update with provided data
  const data: Achievement[] = [
    { 
      id: 1, 
      title: "ブランドリユース企業", 
      platforms: "TikTok / Instagram運用", 
      purpose: "宅配買取サービス利用者増加 / 企業認知拡大", 
      role: "戦略設計 / アカウント設計 / オリジナル企画 / 撮影・編集 / 運用 / インフルエンサーキャスティング", 
      metricsText: "万回再生", 
      mainValue: 841, 
      result: "サービス利用者増加・指名検索増加・企業認知の大幅拡大" 
    },
    { 
      id: 2, 
      title: "飲食・サービス店舗", 
      platforms: "TikTok運用", 
      purpose: "店舗集客 / 店舗認知拡大", 
      role: "戦略設計 / アカウント設計 / 企画 / 撮影・編集 / 運用", 
      metricsText: "万回再生", 
      mainValue: 98, 
      result: "地域での認知拡大・集客に成功。SNS経由で指名・採用応募も発生" 
    },
    { 
      id: 3, 
      title: "飲食・サービス店舗", 
      platforms: "TikTok / Instagram運用", 
      purpose: "店舗集客 / 認知拡大", 
      role: "戦略設計 / アカウント設計 / 企画 / 撮影・編集 / 運用", 
      metricsText: "万回再生", 
      mainValue: 90, 
      result: "地域での認知拡大・集客に成功。副次的に採用応募者も獲得" 
    },
    { 
      id: 4, 
      title: "飲食・サービス店舗", 
      platforms: "TikTok運用", 
      purpose: "店舗集客 / 地域No.1の知名度獲得", 
      role: "戦略設計 / アカウント設計 / 企画 / 撮影・編集 / 運用", 
      metricsText: "万回再生", 
      mainValue: 29, 
      result: "地域での知名度向上と集客に成功。副次的に採用応募も発生" 
    },
    { 
      id: 5, 
      title: "美容サロン店舗", 
      platforms: "TikTok / Instagram運用", 
      purpose: "認知拡大・来店", 
      role: "モデルキャスティング / 企画 / 撮影・編集 / 運用", 
      metricsText: "万回再生超", 
      mainValue: 15, 
      result: "認知拡大・来店実績を獲得" 
    },
  ];

  // Duplicate data for smooth infinite scroll
  const marqueeData = [...data, ...data];

  return (
    <Section id="achievements" className="bg-navy-900 text-white overflow-hidden" fullWidth grid={false}>
      {/* Dark Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-700 pb-8 text-center md:text-left">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-5xl font-serif font-bold mb-6 tracking-wide leading-tight break-keep">
            私たちは<br />
            <span className="text-persimmon">「見たくなる動画」</span>を作るプロです。
            <span className="text-lg md:text-xl text-gray-400 font-medium mt-4 block leading-relaxed">
                ショート動画で800万回再生超え<br/>
                その「構成力」を、企業の信用資産づくりへ。
            </span>
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Area */}
      <div className="relative w-full py-10 md:py-20 bg-navy-800/50 border-y border-navy-700 transform -skew-y-2 origin-left scale-105">
        
        {/* Row 1: Left Direction */}
        {/* Added will-change-transform for mobile performance */}
        <div className="flex w-max animate-marquee space-x-8 md:space-x-12 hover:pause will-change-transform">
           {marqueeData.map((item, index) => (
             <div key={`row1-${index}`} className="flex-shrink-0 w-[320px] md:w-[500px] bg-paper text-navy-900 p-6 md:p-8 shadow-2xl skew-y-2 border-l-4 border-persimmon relative group overflow-hidden flex flex-col justify-between">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500"></div>

                <div className="relative z-10">
                    {/* Header: Platform & Title */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col items-start gap-1 max-w-[60%]">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest bg-navy-900 text-white px-2 py-1 truncate max-w-full">{item.platforms}</span>
                            <span className="text-xs md:text-sm font-bold text-gray-500 truncate w-full">{item.title}</span>
                        </div>
                        <div className="text-right flex-1 pl-2">
                            <div className="flex flex-col gap-1 items-end">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Purpose</span>
                                <span className="text-[10px] md:text-xs font-bold bg-gray-200 px-2 py-0.5 text-gray-700 text-right leading-tight block">{item.purpose}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Metrics */}
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="font-num text-6xl md:text-8xl font-bold tracking-tighter leading-none text-navy-900 group-hover:scale-105 transition-transform duration-300 origin-left">
                            {item.mainValue}
                        </span>
                        <span className="font-serif text-lg md:text-xl font-bold text-gray-600">{item.metricsText}</span>
                    </div>

                    {/* Footer: Result & Role */}
                    <div className="border-t border-gray-200 pt-4 space-y-3">
                        <p className="font-bold text-sm md:text-base leading-relaxed flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-persimmon rounded-full mt-2 shrink-0"></span>
                            <span>{item.result}</span>
                        </p>
                        <div className="bg-gray-50 p-2 rounded border border-gray-100">
                            <p className="text-[10px] md:text-xs text-gray-500 font-medium leading-relaxed">
                                <span className="font-bold text-navy-900 mr-1">担当:</span>
                                {item.role}
                            </p>
                        </div>
                    </div>
                </div>
             </div>
           ))}
        </div>

        {/* Row 2: Right Direction (Background effect) */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-10">
             <div className="w-[200vw] h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)] animate-marquee-reverse will-change-transform"></div>
        </div>

      </div>

      {/* Bridge Text */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 mt-24 text-center">
         <p className="text-gray-300 text-sm md:text-base leading-loose tracking-wide font-medium text-left md:text-center">
             激戦区のショート動画で数字を出してきた、「刺さる構成・見せ場設計・インタビュー設計」。<br className="hidden md:block"/>
             このノウハウを、今回の「1日密着の会社紹介ドキュメンタリー動画」に落とし込みます。<br className="hidden md:block"/>
             視聴者を飽きさせず、最後まで見てもらえる動画へ仕上げます。
         </p>
      </div>
    </Section>
  );
};