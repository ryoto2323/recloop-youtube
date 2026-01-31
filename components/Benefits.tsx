import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { TrendingUp, TrendingDown, Scale, Clock, Users, Briefcase } from 'lucide-react';

export const Benefits: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (graphRef.current) {
      observer.observe(graphRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-paper relative overflow-hidden">
      {/* Vertical Rhythm Decoration */}
      <div className="hidden md:block absolute top-0 left-10 h-full writing-vertical-rl text-[120px] font-serif font-bold text-gray-200/40 select-none pointer-events-none z-0">
         投資対効果
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-serif font-bold text-navy-900 leading-relaxed mb-6">
                <span className="inline-block">
                    動画は「消費」ではなく、<span className="text-persimmon border-b-2 border-persimmon pb-1">「投資」</span>です。
                </span>
            </h2>
            <p className="text-gray-700 font-medium text-sm md:text-base">
                一度作れば、あなたの代わりに24時間365日営業し続けます。
            </p>
        </div>

        {/* ROI Graph Section */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-24" ref={graphRef}>
            <div className="bg-white p-6 md:p-10 shadow-lg border border-gray-100 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-navy-900"></div>
                <h3 className="text-lg font-bold text-navy-900 mb-8 flex items-center gap-2">
                    <TrendingUp className="text-persimmon" />
                    <span>導入効果イメージ (ROI)</span>
                </h3>
                
                {/* SVG Graph */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9] relative">
                    <svg viewBox="0 0 800 300" className="w-full h-full overflow-visible">
                        {/* Grid Lines */}
                        <line x1="0" y1="280" x2="800" y2="280" stroke="#eee" strokeWidth="2" />
                        <line x1="0" y1="0" x2="0" y2="280" stroke="#eee" strokeWidth="2" />
                        
                        {/* Labels */}
                        <text x="780" y="295" fontSize="12" fill="#999" textAnchor="end">時間</text>
                        <text x="10" y="20" fontSize="12" fill="#999">価値 / コスト</text>

                        {/* Cost Line (Going Down) */}
                        <path 
                            d="M0,50 Q400,100 800,250" 
                            fill="none" 
                            stroke="#94a3b8" 
                            strokeWidth="3" 
                            strokeDasharray="8 4" 
                            className="transition-all duration-[2s] ease-linear"
                            style={{ opacity: isVisible ? 1 : 0.3 }}
                        />
                        <text x="700" y="240" fontSize="14" fill="#64748b" fontWeight="bold" className={`transition-opacity duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>従来の説明コスト</text>

                        {/* Asset Line (Going Up) - Animated */}
                        <path 
                            d="M0,250 Q400,200 800,20" 
                            fill="none" 
                            stroke="#CA5C3B" 
                            strokeWidth="4" 
                            strokeDasharray="900"
                            strokeDashoffset={isVisible ? 0 : 900}
                            className="transition-all duration-[2.5s] ease-out"
                        />
                        <circle 
                            cx="800" 
                            cy="20" 
                            r="6" 
                            fill="#CA5C3B" 
                            className={`transition-all duration-500 delay-[2.5s] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                        />
                        <text 
                            x="700" 
                            y="40" 
                            fontSize="16" 
                            fill="#CA5C3B" 
                            fontWeight="bold"
                            className={`transition-opacity duration-1000 delay-[2.2s] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        >
                            動画の資産価値
                        </text>
                        
                        {/* Area under Asset curve - Fade In */}
                        <path 
                            d="M0,250 Q400,200 800,20 L800,280 L0,280 Z" 
                            fill="url(#gradientAsset)" 
                            className={`transition-opacity duration-[2s] delay-500 ${isVisible ? 'opacity-20' : 'opacity-0'}`}
                        />
                        
                        <defs>
                            <linearGradient id="gradientAsset" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#CA5C3B"/>
                                <stop offset="100%" stopColor="#fff"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>

        {/* Comparison Cards (Balance) */}
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                
                {/* Left: Before (Cost) */}
                <div className="bg-gray-100 p-8 md:p-12 rounded-sm border border-gray-200 relative group">
                    <div className="absolute top-4 left-4 bg-gray-300 text-gray-600 text-xs font-bold px-3 py-1 uppercase">Before</div>
                    <div className="mt-8 text-center opacity-60 group-hover:opacity-100 transition-opacity">
                        <Scale className="w-16 h-16 mx-auto text-gray-400 mb-6" />
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-600 mb-2">労働集約型の営業</h3>
                        <p className="text-gray-500 text-sm mb-8">毎回同じ説明、価格競争、ミスマッチ...</p>
                        
                        <ul className="text-left space-y-4 max-w-xs mx-auto text-gray-600">
                            <li className="flex items-center gap-3">
                                <TrendingDown className="w-5 h-5 shrink-0" />
                                <span>説明するたびに時間が奪われる</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Users className="w-5 h-5 shrink-0" />
                                <span>採用・集客の質が安定しない</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right: After (Asset) */}
                <div className="bg-white p-8 md:p-12 rounded-sm border-t-4 border-persimmon shadow-xl relative transform md:-translate-y-4 md:scale-105 z-10">
                    <div className="absolute top-4 left-4 bg-persimmon text-white text-xs font-bold px-3 py-1 uppercase">After</div>
                    <div className="mt-8 text-center">
                        <Briefcase className="w-16 h-16 mx-auto text-persimmon mb-6" />
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-900 mb-2">自動化された信頼構築</h3>
                        <p className="text-navy-900/70 text-sm mb-8">動画があなたの分身として魅力を伝える</p>
                        
                        <ul className="text-left space-y-4 max-w-xs mx-auto text-navy-900 font-medium">
                            <li className="flex items-center gap-3 bg-paper p-3 rounded-sm">
                                <Clock className="w-5 h-5 text-persimmon shrink-0" />
                                <span>説明コスト <span className="text-persimmon font-bold">ゼロ</span> へ</span>
                            </li>
                            <li className="flex items-center gap-3 bg-paper p-3 rounded-sm">
                                <Users className="w-5 h-5 text-persimmon shrink-0" />
                                <span>人柄で選ばれ <span className="text-persimmon font-bold">相見積もり回避</span></span>
                            </li>
                            <li className="flex items-center gap-3 bg-paper p-3 rounded-sm">
                                <TrendingUp className="w-5 h-5 text-persimmon shrink-0" />
                                <span>採用ミスマッチ <span className="text-persimmon font-bold">激減</span></span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </Section>
  );
};