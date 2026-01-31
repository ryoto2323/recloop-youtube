import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // モバイルメニュー展開時の背景スクロールロック
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'achievements', 'package', 'price', 'flow', 'faq'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      // If at top or nothing matches
      if (window.scrollY < 100) setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '特徴', href: '#mission', id: 'mission' },
    { label: '実績', href: '#achievements', id: 'achievements' },
    { label: 'パッケージ', href: '#package', id: 'package' },
    { label: '料金', href: '#price', id: 'price' },
    { label: '制作の流れ', href: '#flow', id: 'flow' },
    { label: 'よくある質問', href: '#faq', id: 'faq' },
  ];

  const scrollToSection = (targetId: string) => {
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 80; // ヘッダー高さ調整に合わせてオフセットを再調整
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        scrollToSection(targetId);
      }, 300);
    } else {
      scrollToSection(targetId);
    }
  };

  const handleContactClick = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        const elem = document.getElementById('contact');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const elem = document.getElementById('contact');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-navy-900 border-b border-navy-800 py-4 md:py-5 shadow-lg transition-all duration-300"
    >
      {/* Header Content */}
      <div className="relative z-[60] max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <div className="relative w-3 h-3">
             <div className="absolute inset-0 bg-red-600 rounded-full animate-pulse"></div>
             <div className="absolute inset-0 bg-red-600 rounded-full opacity-30 animate-ping"></div>
          </div>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
            className="cursor-pointer block transition-opacity hover:opacity-80"
          >
            <img 
              src="https://github.com/ryoto2323/recloop-youtube/blob/main/uragawalogo.png?raw=true&v=small" 
              alt="URAGAWA 裏側1日密着ドキュメンタリー" 
              className="h-[32px] md:h-[42px] w-auto object-contain p-0 m-0"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-bold tracking-widest transition-colors relative group ${activeSection === link.id ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-persimmon transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
          <Button 
            variant="primary" 
            className="!py-2 !px-6 text-sm font-bold shadow-md hover:shadow-[0_0_15px_rgba(202,92,59,0.5)] border border-white/10"
            onClick={handleContactClick}
          >
            空き日程を確認
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          type="button"
          className="md:hidden relative z-[60] p-2 -mr-2 focus:outline-none text-white hover:bg-navy-800 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-navy-900 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>
        
        <div className="flex flex-col items-center space-y-8 w-full px-6 relative z-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xl font-bold tracking-widest w-full text-center py-3 border-b border-white/5 active:bg-white/5 transition-colors ${activeSection === link.id ? 'text-persimmon' : 'text-white'}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            variant="primary" 
            className="mt-8 w-full max-w-xs shadow-xl"
            onClick={handleContactClick}
          >
            空き日程を確認する
          </Button>
        </div>
      </div>
    </nav>
  );
};