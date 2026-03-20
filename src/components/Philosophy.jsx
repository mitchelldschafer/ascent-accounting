import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Philosophy() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to('.parallax-bg', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      y: 100,
      ease: 'none'
    });

    gsap.from('.phil-line', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%',
      },
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full py-32 md:py-48 bg-obsidian overflow-hidden flex items-center justify-center text-center">
      {/* Background Image & Texture */}
      <div className="absolute inset-0 -top-[20%] h-[140%] z-0 select-none pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
          alt="Financial Motif"
          className="parallax-bg w-full h-full object-cover opacity-15 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-[#0B0E14]/75"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <p className="phil-line font-ui font-medium text-lg md:text-xl lg:text-2xl text-slate-white/60 mb-6 tracking-wide">
          Most CPA firms focus on: <span className="text-slate-white">historical compliance.</span>
        </p>
        <h2 className="phil-line font-drama italic text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15]">
          We focus on: <span className="text-amber not-italic">architecting outcomes.</span>
        </h2>
      </div>
    </section>
  );
}
