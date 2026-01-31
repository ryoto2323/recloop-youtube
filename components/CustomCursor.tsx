import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const onMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseout', onMouseLeave);
    document.addEventListener('mouseover', onMouseEnter);

    // Add hover listeners to interactive elements
    const handleLinkHover = () => setIsHovering(true);
    const handleLinkLeave = () => setIsHovering(false);

    const attachListeners = () => {
      // Select all interactive elements
      const links = document.querySelectorAll('a, button, input, textarea, select, [role="button"], label');
      links.forEach(link => {
        link.addEventListener('mouseenter', handleLinkHover);
        link.addEventListener('mouseleave', handleLinkLeave);
      });
    };

    attachListeners();
    
    // Re-attach listeners periodically (simple fix for dynamic content)
    const interval = setInterval(attachListeners, 2000);

    return () => {
      window.removeEventListener('resize', checkTouch);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseout', onMouseLeave);
      document.removeEventListener('mouseover', onMouseEnter);
      clearInterval(interval);
      
      const links = document.querySelectorAll('a, button, input, textarea, select, [role="button"], label');
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
      style={{ 
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Main Cursor: Viewfinder Style */}
      <div 
        className={`
          relative -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* Outer Frame (Focus Brackets) */}
        <div className={`
           absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
           ${isHovering ? 'w-16 h-16 border-white bg-white/10' : 'w-8 h-8 border-white/50'}
           ${isClicking ? 'scale-90' : 'scale-100'}
        `}>
           {/* Corner Accents (Viewfinder Marks) */}
           <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-white transition-all duration-300 ${isHovering ? '-translate-x-1 -translate-y-1' : ''}`}></div>
           <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-white transition-all duration-300 ${isHovering ? 'translate-x-1 -translate-y-1' : ''}`}></div>
           <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white transition-all duration-300 ${isHovering ? '-translate-x-1 translate-y-1' : ''}`}></div>
           <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white transition-all duration-300 ${isHovering ? 'translate-x-1 translate-y-1' : ''}`}></div>

           {/* REC Dot (Appears on Hover) */}
           <div className={`
              absolute top-1 right-2 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse transition-opacity duration-300
              ${isHovering ? 'opacity-100' : 'opacity-0'}
           `}></div>
           
           {/* Center Crosshair (Disappears on Hover) */}
           <div className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-white transition-opacity duration-200
              ${isHovering ? 'opacity-0' : 'opacity-100'}
           `}></div>
        </div>

        {/* Text Label (Optional Cinematic Detail) */}
        <div className={`
            absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white tracking-widest whitespace-nowrap transition-opacity duration-300
            ${isHovering ? 'opacity-100' : 'opacity-0'}
        `}>
            REC
        </div>
      </div>
    </div>
  );
};