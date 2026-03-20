import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const phases = [
  {
    num: "01",
    title: "Financial Discovery Audit",
    desc: "A rigorous deep dive into your entire financial architecture, entity structure, past returns, and current ledger. We find the gaps."
  },
  {
    num: "02",
    title: "Strategic Blueprint",
    desc: "We deliver a comprehensive forward-looking tax and capital strategy. From trust structuring to R&D credits, this is your map to optimization."
  },
  {
    num: "03",
    title: "Execution & Monitoring",
    desc: "Seamless implementation. We take over payroll, bookkeeping, and year-round compliance, ensuring the blueprint becomes reality."
  }
];

export default function Process() {
  const container = useRef(null);
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.process-card');
    
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      // Animate the inner card of the PREVIOUS card when the NEXT card scrolls over it
      gsap.to(card.querySelector('.card-inner'), {
        scale: 0.91,
        opacity: 0.45,
        filter: 'blur(10px)',
        scrollTrigger: {
          trigger: cards[i + 1],
          start: 'top bottom', // when next card enters view
          end: 'top top', // when next card touches top
          scrub: true,
        }
      });
    });
  }, { scope: container });

  return (
    <section className="process-container w-full bg-surface pb-32 relative z-20" ref={container}>
      {/* Header section before stacking starts */}
      <div className="w-full py-24 px-6 md:px-12 lg:px-24 bg-surface relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber mb-6">
            <span className="w-6 h-[1px] bg-amber"></span>
            Methodology
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-obsidian">
            The Engagement Protocol.
          </h2>
        </div>
      </div>

      <div className="w-full relative">
        {phases.map((phase, idx) => (
          <div 
            key={idx} 
            className="process-card sticky top-0 w-full h-[100dvh] flex items-center justify-center p-6 pt-24"
            style={{ zIndex: 10 + idx }}
          >
            <div className="card-inner max-w-5xl w-full h-full max-h-[600px] bg-near-white border border-obsidian/5 rounded-[3rem] p-12 md:p-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-2 gap-12 items-center origin-top">
              
              <div className="hidden md:flex aspect-square w-full max-w-sm ml-auto bg-obsidian rounded-[2rem] items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,155,58,0.1),transparent_70%)] opacity-50"></div>
                
                {/* Visual motif */}
                <div className="relative z-10 w-32 h-32 border-[1px] border-amber/30 rounded-full flex items-center justify-center">
                   <div className="absolute w-[180%] h-[1px] bg-gradient-to-r from-transparent via-amber/50 to-transparent rotate-45"></div>
                   <div className="absolute w-[180%] h-[1px] bg-gradient-to-r from-transparent via-amber/50 to-transparent -rotate-45"></div>
                   <div className="w-12 h-12 border-[2px] border-amber/80 rounded-sm rotate-45 bg-obsidian z-20"></div>
                </div>

              </div>

              <div>
                <div className="font-mono text-4xl md:text-6xl text-obsidian/10 mb-6 font-bold tracking-tighter">
                  {phase.num}
                </div>
                <h3 className="font-heading font-bold text-3xl md:text-4xl text-obsidian mb-6">
                  {phase.title}
                </h3>
                <p className="font-ui text-lg md:text-xl text-graphite/70 leading-relaxed">
                  {phase.desc}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
