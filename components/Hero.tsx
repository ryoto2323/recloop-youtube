import React from 'react';
import { Button } from './Button';
import { ArrowRight, Video, Scissors } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden border-b border-gray-200 bg-navy-900">
      
      {/* Background Texture & Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col md:flex-row h-auto md:h-screen">
        
        {/* Left: Vertical Typography (Japanese Cinematic Style) */}
        <div className="w-full md:w-[60%] lg:w-[65%] p-6 pt-24 md:p-20 flex flex-col justify-center items-center md:items-start text-white relative">
            
            {/* Catchphrase Area - Vertical Writing (Desktop) */}
            <div className="hidden md:flex flex-row-reverse gap-12 items-start h-[400px] lg:h-[500px]">
                <h1 className="writing-vertical-rl text-6xl lg:text-7xl font-serif font-bold tracking-widest leading-loose h-full text-white drop-shadow-2xl animate-focus-in delay-100">
                    信用されるのは
                    <span className="mt-8 text-persimmon font-hand text-[1.1em] scale-110 origin-top">「嘘のない動画」</span>
                    です。
                </h1>
                <h2 className="writing-vertical-rl text-3xl lg:text-4xl font-serif font-medium tracking-widest leading-loose h-full text-gray-400 pt-12 animate-focus-in">
                   飾られたPR動画は<br/>信用されない。
                </h2>
            </div>

            {/* Mobile: Horizontal Fallback - Optimized Sizing */}
            <div className="md:hidden text-center space-y-4 py-8 animate-focus-in w-full">
                <p className="text-gray-400 font-serif text-base tracking-widest">飾られたPR動画は、信用されない。</p>
                <h1 className="text-3xl font-serif font-bold leading-normal tracking-wide">
                    信用されるのは<br/>
                    <span className="text-persimmon border-b border-persimmon pb-1 font-hand text-4xl inline-block mt-3">「嘘のない動画」</span><br/>
                    です。
                </h1>
            </div>

            {/* Sub copy & Tag */}
            <div className="mt-8 md:mt-0 md:absolute md:bottom-20 md:left-20 max-w-md space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Recording Real Life</span>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium tracking-wide">
                    仕事の裏側に1日密着。<br/>
                    採用・集客に繋がる会社紹介ドキュメンタリー。
                </p>
            </div>
        </div>

        {/* Right: Offer Card (Modern Overlay) */}
        <div className="w-full md:w-[40%] lg:w-[35%] bg-paper relative flex flex-col border-l border-gray-800">
            {/* Diagonal Cut Effect (CSS) */}
            <div className="absolute top-0 bottom-0 -left-12 w-12 bg-gradient-to-r from-transparent to-paper hidden md:block"></div>

            <div className="flex-1 flex flex-col justify-center px-6 py-10 md:px-12 relative z-10">
                <div className="space-y-6 md:space-y-8">
                    <div className="inline-block bg-navy-900 text-white px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest">
                        毎月5社限定モニター
                    </div>

                    <div className="space-y-1">
                        <div className="flex items-end gap-2 text-gray-400 line-through font-serif">
                            <span className="text-xs md:text-sm">通常価格</span>
                            <span className="text-base md:text-lg">¥150,000</span>
                        </div>
                        <div className="flex items-baseline text-navy-900">
                            <span className="text-6xl md:text-7xl font-num font-bold tracking-tighter leading-none">50,000</span>
                            <span className="text-base md:text-lg font-bold ml-2">円 (税込)</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 p-5 md:p-6 shadow-sm space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center text-navy-900 shrink-0">
                                <Video size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Main Content</p>
                                <p className="font-bold text-navy-900 text-sm md:text-base">1日密着・長尺動画</p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-gray-100"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center text-navy-900 shrink-0">
                                <Scissors size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Shorts</p>
                                <p className="font-bold text-navy-900 text-sm md:text-base">切り抜き動画 ×3本</p>
                            </div>
                        </div>
                    </div>

                    <Button 
                        variant="rec"
                        className="w-full shadow-xl" 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        空き日程を確認する
                    </Button>
                    <p className="text-center text-[10px] md:text-xs text-gray-500 font-medium">
                        相談のみ・見積もりのみOK
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};