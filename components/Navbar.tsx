import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '特徴', href: '#mission' },
    { label: '実績', href: '#achievements' },
    { label: '納品物', href: '#package' },
    { label: '料金', href: '#price' },
    { label: 'フロー', href: '#flow' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass border-b border-gray-200 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Text - Japanese friendly */}
        <div className="flex items-center gap-3">
          <div className="relative w-3 h-3">
             <div className="absolute inset-0 bg-red-600 rounded-full animate-pulse"></div>
             <div className="absolute inset-0 bg-red-600 rounded-full opacity-50 animate-ping"></div>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold tracking-widest text-lg leading-none ${isScrolled ? 'text-navy-900' : 'text-white mix-blend-difference'}`}>
              URAGAWA
            </span>
            <span className={`text-[10px] font-bold mt-1 tracking-wider ${isScrolled ? 'text-gray-500' : 'text-gray-300 mix-blend-difference'}`}>
              裏側密着ドキュメンタリー
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-bold tracking-widest hover:text-persimmon transition-colors ${isScrolled ? 'text-navy-900' : 'text-navy-900 md:text-white md:mix-blend-difference'}`}
            >
              {link.label}
            </a>
          ))}
          <Button 
            variant="outline" 
            className={`!py-2 !px-6 border-opacity-30 font-bold text-sm ${isScrolled ? 'border-navy-900 text-navy-900' : 'border-white text-white hover:bg-white hover:text-navy-900'}`}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            空き日程を確認
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-navy-900" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-navy-900' : 'text-white mix-blend-difference'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-paper z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-10 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xl font-bold text-navy-900 tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            variant="primary" 
            className="mt-8"
            onClick={() => {
              setIsOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            空き日程を確認する
          </Button>
        </div>
      )}
    </nav>
  );
};