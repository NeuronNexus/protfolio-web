import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ initials, navItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">{initials}</div>
        <ul className="hidden md:flex gap-8">
          {navItems.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 text-sm">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-4 px-6 space-y-4 pb-4">
          {navItems.map(item => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="block text-gray-600 hover:text-gray-900"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}