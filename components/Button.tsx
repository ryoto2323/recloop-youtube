import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'rec';
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  glow = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 transition-all duration-300 ease-out tracking-wider text-base font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";
  
  const variants = {
    primary: "bg-persimmon text-white hover:bg-opacity-90",
    outline: "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
    ghost: "text-navy-900 hover:text-persimmon underline decoration-1 underline-offset-4",
    rec: "bg-navy-900 text-white border border-red-900/30 hover:bg-black group"
  };

  const glowStyles = glow ? "shadow-[0_0_20px_rgba(202,92,59,0.4)] hover:shadow-[0_0_30px_rgba(202,92,59,0.6)]" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${glowStyles} ${className}`}
      {...props}
    >
      {variant === 'rec' && (
        <>
          {/* Pulsing REC Ring */}
          <span className="absolute inset-0 border-2 border-red-600 rounded-sm opacity-0 group-hover:opacity-100 animate-pulse-slow"></span>
          {/* REC Dot */}
          <span className="mr-3 relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
        </>
      )}
      {children}
    </button>
  );
};