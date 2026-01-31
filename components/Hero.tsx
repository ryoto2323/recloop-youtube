import React, { useRef, useState, useEffect } from 'react';
import { Button } from './Button';
import { Video, Scissors, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Default to false if not autoplay
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Default muted
  const [currentTime, setCurrentTime] = useState("00:00:00");
  
  // Performance: Throttle time updates to avoid excessive re-renders
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    // Initial Play Attempt (Autoplay emulation)
    if(videoRef.current) {
        videoRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch(() => {
            setIsPlaying(false); // Blocked by browser policy
        });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const now = Date.now();
      // Only update state every ~100ms (approx 10fps for UI) to save CPU
      if (now - lastUpdateRef.current < 100) return;
      lastUpdateRef.current = now;

      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
      
      // Format Timecode HH:MM:SS:FF (Fake frames)
      const h = Math.floor(current / 3600).toString().padStart(2, '0');
      const m = Math.floor((current % 3600) / 60).toString().padStart(2, '0');
      const s = Math.floor(current % 60).toString().padStart(2, '0');
      const f = Math.floor((current % 1) * 30).toString().padStart(2, '0');
      setCurrentTime(`${h}:${m}:${s}:${f}`);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
      if(!videoRef.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const seekTime = (clickX / width) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      // Force update immediately on seek
      lastUpdateRef.current = 0; 
      handleTimeUpdate();
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row border-b border-gray-200 bg-navy-900">
      
      {/* Left: Catchphrase Area + Video Background */}
      <div className="w-full md:w-[60%] lg:w-[65%] relative flex flex-col justify-center overflow-hidden bg-navy-900 min-h-[60vh] md:min-h-screen">
        
        {/* === Background Video Layer (Scoped to Left Column) === */}
        {/* Custom Player UI Implementation */}
        <div className="absolute inset-0 z-0 w-full h-full bg-navy-900 group">
            <video 
              ref={videoRef}
              src="https://stlead-company.com/fv.mp4/fv.mp4"
              className="absolute inset-0 w-full h-full object-cover grayscale" 
              style={{ objectPosition: 'center center' }}
              playsInline
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
            />
            
            {/* Brand Tint Overlay - Increased Opacity for Visibility */}
            <div className="absolute inset-0 bg-navy-900/80 pointer-events-none z-1 transition-opacity duration-500 group-hover:bg-navy-900/70"></div>
            
            {/* Grid Texture */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-2"></div>

            {/* Custom Control Bar (Engineering Polish) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col gap-2 pointer-events-auto transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                {/* Progress Line */}
                <div 
                    className="w-full h-1 bg-white/20 cursor-pointer relative group/seek"
                    onClick={handleSeek}
                >
                    <div className="absolute top-0 left-0 h-full bg-persimmon" style={{ width: `${progress}%` }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full opacity-0 group-hover/seek:opacity-100 transition-opacity" style={{ left: `${progress}%` }}></div>
                </div>
                
                <div className="flex items-center justify-between text-white/80 font-num text-xs tracking-widest">
                    <div className="flex items-center gap-4">
                        <button onClick={togglePlay} className="hover:text-white transition-colors focus:outline-none">
                            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
                        </button>
                        <button onClick={toggleMute} className="hover:text-white transition-colors focus:outline-none">
                            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                        <span>{currentTime}</span>
                    </div>
                    <div>
                        <span className="uppercase text-[10px]">Raw Footage</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Container - Unified Horizontal Layout */}
        <div className="relative z-10 w-full h-full p-6 pt-28 md:p-20 flex flex-col justify-center items-center text-white pointer-events-none">
            
            {/* Unified Horizontal Layout for All Devices */}
            <div className="w-full px-4 text-center pointer-events-auto flex flex-col items-center justify-center gap-8 md:gap-14 py-10 animate-focus-in">
                {/* Sub Copy: 1 Line, Comfortably Sized */}
                <p className="text-white font-serif text-[15px] md:text-xl lg:text-2xl tracking-[0.12em] border-b border-white/60 pb-3 md:pb-5 drop-shadow-lg whitespace-nowrap">
                    飾られたPR動画は<span className="text-[1.3em] font-medium ml-1">もう誰も信じない</span>
                </p>

                {/* Main Copy: 2 Lines */}
                <h1 className="font-serif font-bold leading-normal drop-shadow-2xl">
                    <span className="block text-white text-[26px] md:text-5xl lg:text-6xl tracking-widest mb-4 md:mb-8">
                        信用されるのは
                    </span>
                    <span className="block whitespace-nowrap">
                        <span className="text-persimmon font-hand text-[32px] md:text-6xl lg:text-7xl relative">
                            「リアルを映す動画」
                            {/* Adjusted underline position */}
                            <span className="absolute bottom-[3px] md:bottom-[6px] left-0 w-full h-[1.5px] md:h-[3px] bg-persimmon opacity-80"></span>
                        </span>
                        <span className="text-white text-[26px] md:text-5xl lg:text-6xl ml-1 font-bold">です。</span>
                    </span>
                </h1>
            </div>

            {/* Sub copy & Tag */}
            <div className="mt-12 md:mt-0 md:absolute md:bottom-24 md:left-12 max-w-md space-y-6 text-center md:text-left pointer-events-auto mix-blend-screen">
                <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase drop-shadow-md">Recording Real Life</span>
                </div>
                <p className="text-gray-100 text-base md:text-lg leading-loose font-medium tracking-wide drop-shadow-md">
                    仕事の裏側に1日密着<br/>
                    採用・集客に繋がる会社紹介ドキュメンタリー
                </p>
            </div>
        </div>
      </div>

      {/* Right: Offer Card (Modern Overlay) */}
      <div className="w-full md:w-[40%] lg:w-[35%] bg-paper relative flex flex-col border-l border-gray-800 z-10 min-h-[40vh] md:min-h-screen">
            {/* Diagonal Cut Effect (CSS) */}
            <div className="absolute top-0 bottom-0 -left-12 w-12 bg-gradient-to-r from-transparent to-paper hidden md:block"></div>

            <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-12 relative z-10">
                <div className="space-y-6 md:space-y-8 max-w-md mx-auto md:max-w-none">
                    <div className="inline-block bg-navy-900 text-white px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest">
                        毎月5社限定モニター
                    </div>

                    <div className="space-y-1">
                        <div className="flex items-end gap-2 text-gray-400 line-through font-serif">
                            <span className="text-xs md:text-sm">通常価格</span>
                            <span className="text-base md:text-lg">¥150,000</span>
                        </div>
                        <div className="flex items-baseline text-navy-900">
                            {/* Shimmer Effect on 50,000 */}
                            <span 
                                className="text-5xl md:text-7xl font-num font-bold tracking-tighter leading-none relative inline-block bg-gradient-to-r from-navy-900 via-gray-500 to-navy-900 bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer"
                            >
                                50,000
                            </span>
                            <span className="text-sm md:text-lg font-bold ml-2">円 (税込)</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 p-5 md:p-6 shadow-sm space-y-4 rounded-sm">
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

                    <div className="hidden md:block">
                        <Button 
                            variant="rec"
                            className="w-full shadow-xl" 
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            空き日程を確認する
                        </Button>
                        <p className="text-center text-[10px] md:text-xs text-gray-500 font-medium mt-4">
                            相談のみ・見積もりのみOK
                        </p>
                    </div>
                    {/* Mobile Only Note */}
                    <p className="md:hidden text-center text-[10px] text-gray-500 font-medium">
                        ※お申し込みはページ下部のフォームより
                    </p>
                </div>
            </div>
      </div>
    </section>
  );
};