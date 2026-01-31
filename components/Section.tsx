import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  grid?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  fullWidth = false,
  grid = true 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.15 } // Trigger when 15% visible for better reveal timing
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Performance Optimized Parallax (Direct DOM Manipulation)
    // Avoids React state updates and re-renders on scroll
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (gridRef.current && sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            // Only update if near viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
               // Calculate lightweight parallax value
               const scrollY = window.scrollY;
               gridRef.current.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Disable parallax on touch devices for maximum performance if preferred,
    // but here we use optimized transform which is generally safe.
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`w-full py-16 md:py-32 lg:py-40 relative overflow-hidden ${className}`}
    >
      {/* Architectural Grid Lines Overlay with Parallax */}
      {grid && (
        <div 
            ref={gridRef}
            className="absolute inset-0 pointer-events-none opacity-50 mix-blend-multiply will-change-transform"
            style={{ 
                backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
                // Initial style, updated via JS ref
                transform: 'translate3d(0, 0, 0)'
            }}
        ></div>
      )}
      
      {/* Blueprint Drawing Animations */}
      {/* Top Line */}
      <div className={`absolute top-0 left-4 md:left-12 h-px bg-navy-900/10 transition-all duration-1000 ease-out delay-100 ${isVisible ? 'w-[calc(100%-2rem)] md:w-[calc(100%-6rem)]' : 'w-0'}`}></div>
      {/* Bottom Line */}
      <div className={`absolute bottom-0 right-4 md:left-12 h-px bg-navy-900/10 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'w-[calc(100%-2rem)] md:w-[calc(100%-6rem)]' : 'w-0'}`}></div>
      {/* Left Line */}
      <div className={`absolute top-0 bottom-0 left-4 md:left-12 w-px bg-navy-900/10 transition-all duration-1000 ease-out delay-500 ${isVisible ? 'h-full' : 'h-0'}`}></div>
      {/* Right Line */}
      <div className={`absolute top-0 bottom-0 right-4 md:right-12 w-px bg-navy-900/10 transition-all duration-1000 ease-out delay-700 ${isVisible ? 'h-full' : 'h-0'}`}></div>

      {/* Content with Blur Reveal Effect */}
      {fullWidth ? (
        <div className={`relative z-10 transition-opacity duration-1000 ${isVisible ? 'animate-blur-reveal' : 'opacity-0'}`}>
          {children}
        </div>
      ) : (
        <div className={`max-w-7xl mx-auto px-5 md:px-12 relative z-10 transition-opacity duration-1000 ${isVisible ? 'animate-blur-reveal' : 'opacity-0'}`}>
          {children}
        </div>
      )}
    </section>
  );
};