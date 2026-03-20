import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutPanel() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.manifesto-word', { y: 20, opacity: 0 }, { 
scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      rotateX: -20,
      stagger: 0.05,
      duration: 0.8,
      ease: 'power3.out',
 y: 0, opacity: 1, clearProps: 'all' 
});

    gsap.fromTo('.story-text', { y: 30, opacity: 0 }, { 
scrollTrigger: {
        trigger: container.current,
        start: 'top 65%',
      },
      duration: 1,
      ease: 'power2.out',
      delay: 0.2,
 y: 0, opacity: 1, clearProps: 'all' 
});
  }, { scope: container });

  const statement = "Accounting should be a proactive strategy, not a reactive compliance exercise.";
  const words = statement.split(' ');

  return (
    <section ref={container} className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-near-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Oversized Typographic Statement */}
        <div className="w-full lg:w-5/12 perspective-1000">
          <h2 className="font-drama italic text-4xl md:text-5xl lg:text-6xl text-obsidian leading-[1.15]">
            {words.map((word, idx) => {
              const cleanWord = word.replace(',', '');
              const hasComma = word.includes(',');
              const highlight = cleanWord.toLowerCase() === 'proactive' || cleanWord.toLowerCase() === 'strategy';
              return (
                <span key={idx} className="manifesto-word inline-block mr-[0.3em] origin-bottom">
                  <span className={highlight ? "text-amber" : "text-obsidian"}>{cleanWord}</span>
                  {hasComma && <span className="text-obsidian">,</span>}
                </span>
              );
            })}
          </h2>
          <div className="mt-12 opacity-80 mix-blend-multiply group w-full max-w-sm rounded-[2rem] overflow-hidden">
             {/* Unsplash interior treated with preset color matrix logic */}
             <img 
               src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1740&auto=format&fit=crop"
               alt="Ascent Accounting Office Architecture"
               className="w-full h-auto object-cover grayscale sepia-[.3] hue-rotate-[-30deg] contrast-125 transition-transform duration-1000 group-hover:scale-105"
             />
          </div>
        </div>

        {/* Right Side: Origin Story */}
        <div className="w-full lg:w-7/12 story-text lg:pt-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber mb-8">
            <span className="w-6 h-[1px] bg-amber"></span>
            Firm Philosophy
          </div>
          
          <div className="font-ui text-lg md:text-xl text-graphite/80 leading-relaxed space-y-6">
            <p>
              Ascent Accounting was founded on a simple observation: most businesses only hear from their CPA when taxes are due. They are paying for a historian, not an architect.
            </p>
            <p>
              We believed that a truly valuable advisory firm should eliminate surprises. We saw a gap in the market for a firm that integrated real-time bookkeeping with forward-looking tax planning, bringing institutional-grade financial strategy to privately held businesses.
            </p>
            <p className="font-heading font-semibold text-obsidian border-l-4 border-amber pl-4">
              By aligning your capital structure, tax obligations, and operational metrics into a single cohesive strategy, we give owners the clarity they need to scale with absolute confidence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
