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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`w-full py-16 md:py-32 lg:py-40 relative overflow-hidden ${className}`}
    >
      {/* Architectural Grid Lines Overlay */}
      {grid && (
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50 mix-blend-multiply"></div>
      )}
      
      {/* Blueprint Drawing Animations */}
      {/* Top Line */}
      <div className={`absolute top-0 left-4 md:left-12 h-px bg-navy-900/10 transition-all duration-1000 ease-out delay-100 ${isVisible ? 'w-[calc(100%-2rem)] md:w-[calc(100%-6rem)]' : 'w-0'}`}></div>
      {/* Bottom Line */}
      <div className={`absolute bottom-0 right-4 md:right-12 h-px bg-navy-900/10 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'w-[calc(100%-2rem)] md:w-[calc(100%-6rem)]' : 'w-0'}`}></div>
      {/* Left Line */}
      <div className={`absolute top-0 bottom-0 left-4 md:left-12 w-px bg-navy-900/10 transition-all duration-1000 ease-out delay-500 ${isVisible ? 'h-full' : 'h-0'}`}></div>
      {/* Right Line */}
      <div className={`absolute top-0 bottom-0 right-4 md:right-12 w-px bg-navy-900/10 transition-all duration-1000 ease-out delay-700 ${isVisible ? 'h-full' : 'h-0'}`}></div>

      {fullWidth ? (
        <div className={`relative z-10 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {children}
        </div>
      ) : (
        <div className={`max-w-7xl mx-auto px-5 md:px-12 relative z-10 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {children}
        </div>
      )}
    </section>
  );
};