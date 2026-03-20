import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6 w-full mt-4 transition-all duration-500">
      <nav className={`w-full max-w-7xl px-6 py-4 rounded-full flex items-center justify-between transition-all duration-500
        ${isScrolled ? 'bg-surface/85 backdrop-blur-xl border border-amber/20 shadow-lg text-obsidian' : 'bg-transparent text-slate-white'}`}>
        <Link to="/" className="font-heading font-bold text-2xl tracking-tight">
          Ascent Accounting
        </Link>
        <div className="hidden md:flex gap-8 items-center font-ui text-sm font-medium">
          <a href="#services" className="hover:text-amber transition-colors">Services</a>
          <a href="#about" className="hover:text-amber transition-colors">About</a>
          <a href="#insights" className="hover:text-amber transition-colors">Insights</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:flex items-center gap-2 text-xs font-mono text-amber">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
            Confidential Consultations Available
          </span>
          <a href="#contact" className="relative group overflow-hidden bg-amber text-obsidian px-6 py-2.5 rounded-full font-ui text-sm font-semibold hover:scale-[1.02] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
            <span className="relative z-10">Schedule Consultation</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
