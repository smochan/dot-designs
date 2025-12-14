import React, { useState } from 'react';
import { Menu, X, Box, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Process', href: '#process' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'AI Design', href: '#advisor' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-studio-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-gold-500 rounded-lg text-black group-hover:scale-110 transition-transform">
            <Box size={24} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">DOT<span className="text-gold-500">DESIGNS</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gold-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:bg-gold-500 dark:hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/20">
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-studio-900 border-t border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-300 shadow-xl ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-gold-500"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full py-3 bg-gold-500 text-black font-bold rounded-lg mt-2">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};