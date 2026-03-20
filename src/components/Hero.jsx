import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef();

  useGSAP(() => {
    // GSAP staggered fade-up animation for all text parts
    gsap.from('.hero-anim', {
      y: 35,
      opacity: 0,
      duration: 1.2,
      stagger: 0.09,
      ease: 'power3.out',
      delay: 0.2, // slight delay on initial load
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-[100dvh] bg-obsidian flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Architectural Glass Building"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
        />
        {/* Deep primary-to-transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl pt-24 text-slate-white">
        <h1 className="flex flex-col gap-2">
          <span className="hero-anim font-heading font-bold text-lg md:text-xl lg:text-2xl text-slate-white/70 tracking-tight">
            Capital without clarity
          </span>
          <span className="hero-anim font-drama italic text-6xl md:text-8xl lg:text-[7rem] leading-[1.1] md:leading-[1.05] tracking-tight text-white mix-blend-plus-lighter">
            is <span className="text-amber not-italic">noise.</span>
          </span>
        </h1>
        
        <div className="hero-anim mt-10 md:mt-14 flex flex-col sm:flex-row items-baseline sm:items-center gap-6">
          <a href="#contact" className="relative group overflow-hidden bg-amber text-obsidian px-8 py-4 rounded-full font-ui text-base font-semibold hover:scale-[1.02] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
            <span className="relative z-10">Schedule Consultation</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
          </a>
          
          <div className="font-mono text-[10px] sm:text-xs text-slate-white/50 flex flex-wrap items-center gap-3 uppercase tracking-wider">
            <span>Est. 2012</span>
            <span className="w-1 h-1 rounded-full bg-slate-white/30"></span>
            <span>500+ Engagements</span>
            <span className="w-1 h-1 rounded-full bg-slate-white/30"></span>
            <span>CPA Advisory</span>
          </div>
        </div>
      </div>
    </section>
  );
}
