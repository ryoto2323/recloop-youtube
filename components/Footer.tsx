import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-gray-500 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <img 
            src="https://github.com/ryoto2323/recloop-youtube/blob/main/uragawalogo.png?raw=true&v=small" 
            alt="URAGAWA 裏側1日密着ドキュメンタリー" 
            className="h-[32px] w-auto object-contain mx-auto md:mx-0 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="text-sm tracking-wider">
          &copy; {new Date().getFullYear()} URAGAWA Documentary. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};