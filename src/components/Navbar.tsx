import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  activeSignal: 'power' | 'control' | 'renewable' | 'all';
  setActiveSignal: (signal: 'power' | 'control' | 'renewable' | 'all') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#industrial' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#F7F3EC]/95 backdrop-blur-md border-b border-[#17130F]/15 py-3 shadow-xs' 
        : 'bg-[#F7F3EC]/80 backdrop-blur-xs py-4 border-b border-[#17130F]/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Zap className="w-5 h-5 text-[#D92D20] fill-[#D92D20]/20" />
            <span className="font-heading font-extrabold tracking-wider text-[#17130F] text-base uppercase">
              R S ARUN NIVETAN
            </span>
          </a>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wide text-[#17130F]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#D92D20] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D92D20] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Dark Rounded CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-5 py-2.5 rounded-full bg-[#17130F] text-white font-mono-tech text-xs font-semibold tracking-wide hover:bg-[#D92D20] transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm group"
            >
              <span>DOWNLOAD RESUME</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#17130F] hover:text-[#D92D20] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F3EC] border-b border-[#17130F]/15 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 font-heading text-sm font-bold tracking-wide text-[#17130F]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#17130F]/10 hover:text-[#D92D20]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={() => { onOpenResume(); setMobileMenuOpen(false); }}
              className="w-full py-3 rounded-full bg-[#17130F] text-white font-mono-tech text-xs font-semibold flex items-center justify-center gap-2"
            >
              <span>DOWNLOAD RESUME</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

