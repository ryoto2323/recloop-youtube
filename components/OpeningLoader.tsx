import React, { useEffect, useState } from 'react';

export const OpeningLoader: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Session Storage Check: Only show on first visit in the session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    if (hasSeenLoader) {
        setShouldRender(false);
        return;
    }

    // Set flag for future visits
    sessionStorage.setItem('hasSeenLoader', 'true');

    // Start fading out after 1.5 seconds (Reduced from 2.5s)
    const timer1 = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    // Remove from DOM after fade animation completes (Total 2.0s)
    const timer2 = setTimeout(() => {
      setShouldRender(false);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-navy-900 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${isFading ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
         {/* Logo Animation */}
         <div className="mb-8 animate-focus-in">
             <img 
               src="https://github.com/ryoto2323/recloop-youtube/blob/main/uragawalogo.png?raw=true" 
               alt="URAGAWA" 
               className="w-[180px] md:w-[200px] h-auto object-contain"
             />
         </div>
         
         {/* Loading Bar */}
         <div className="w-48 h-px bg-gray-800 mx-auto relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-white animate-marker" style={{ animationDuration: '1s' }}></div>
         </div>
      </div>

      {/* Background Texture Effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')] opacity-5 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};