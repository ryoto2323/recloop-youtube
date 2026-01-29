import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-gray-500 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-serif font-bold tracking-widest text-white text-lg">URAGAWA</span>
          <span className="text-xs tracking-[0.2em] ml-2">Documentary</span>
        </div>
        <div className="text-sm tracking-wider">
          &copy; {new Date().getFullYear()} URAGAWA Documentary. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};