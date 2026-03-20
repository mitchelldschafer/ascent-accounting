import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ShufflerCard({ title, description }) {
  const [cards, setCards] = useState([
    { id: 1, type: 'Fixed-Fee Retainer', detail: 'No hourly surprises.' },
    { id: 2, type: 'Transparent Scope', detail: 'Clearly defined deliverables.' },
    { id: 3, type: 'Value-Based Pricing', detail: 'Aligned with your growth.' }
  ]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-surface border border-obsidian/5 rounded-[2rem] p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-500 h-full flex flex-col">
      <h3 className="font-heading font-bold text-xl text-obsidian mb-2">{title}</h3>
      <p className="font-ui text-sm text-graphite/70 mb-8">{description}</p>
      
      <div className="relative flex-grow flex items-end justify-center h-48 mt-auto">
        {cards.map((card, idx) => {
          const isTop = idx === 0;
          return (
            <div 
              key={card.id} 
              className={`absolute w-full p-4 rounded-xl border transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                ${isTop ? 'bg-obsidian text-slate-white border-white/10 z-30 translate-y-0 scale-100 shadow-lg' : 
                idx === 1 ? 'bg-background border-obsidian/10 z-20 translate-y-4 scale-95 shadow-sm opacity-80' : 
                'bg-slate-white border-obsidian/5 z-10 translate-y-8 scale-90 opacity-50'}`}
            >
              <div className="font-ui font-semibold text-sm mb-1">{card.type}</div>
              <div className="font-ui text-xs opacity-70">{card.detail}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TypewriterCard({ title, description }) {
  const facts = [
    "Over $50M in tax savings identified.",
    "Proactive multi-entity structuring.",
    "R&D tax credit optimization."
  ];
  const [text, setText] = useState("");
  const [factIndex, setFactIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFact = facts[factIndex];
    let timeoutId;

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setFactIndex((prev) => (prev + 1) % facts.length);
        timeoutId = setTimeout(() => {}, 500);
      } else {
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 30);
      }
    } else {
      if (text === currentFact) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentFact.slice(0, text.length + 1));
        }, 50);
      }
    }
    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, factIndex, facts]);

  return (
    <div className="bg-surface border border-obsidian/5 rounded-[2rem] p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-500 h-full flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-heading font-bold text-xl text-obsidian">{title}</h3>
        <div className="flex items-center gap-1.5 bg-amber/10 text-amber font-mono text-[10px] uppercase px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
          Verified
        </div>
      </div>
      <p className="font-ui text-sm text-graphite/70 mb-8">{description}</p>
      
      <div className="mt-auto bg-obsidian text-amber font-mono text-sm leading-relaxed p-6 rounded-xl relative min-h-[100px] flex items-center shadow-inner">
        <span>{text}<span className="inline-block w-[8px] h-[15px] bg-amber ml-1 animate-pulse align-middle"></span></span>
      </div>
    </div>
  );
}

function TimelineCard({ title, description }) {
  const container = useRef(null);
  
  useGSAP(() => {
    gsap.fromTo('.timeline-step', { y: 50, opacity: 0 }, { 
scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      },
      x: -15,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
 y: 0, opacity: 1, clearProps: 'all' 
});
  }, { scope: container });

  const steps = ["Discovery", "Strategy", "Execution", "Review"];

  return (
    <div ref={container} className="bg-surface border border-obsidian/5 rounded-[2rem] p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-500 h-full flex flex-col">
      <h3 className="font-heading font-bold text-xl text-obsidian mb-2">{title}</h3>
      <p className="font-ui text-sm text-graphite/70 mb-8">{description}</p>
      
      <div className="mt-auto flex flex-col gap-5 relative pt-4">
        <div className="absolute left-[7px] top-6 bottom-4 w-[2px] bg-obsidian/10"></div>
        {steps.map((step, idx) => (
          <div key={idx} className="timeline-step flex items-center gap-4 relative z-10">
            <div className="w-4 h-4 rounded-full bg-slate-white border-[3px] border-amber shadow-sm flex-shrink-0"></div>
            <div className="font-ui font-medium text-obsidian text-sm">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background relative z-20 -mt-10 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-obsidian mb-4">
            The Ascent Standard.
          </h2>
          <p className="font-ui text-lg text-graphite/60 max-w-2xl">
            We don't just calculate history. We architect futures. This requires a fundamentally different approach to the client relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <ShufflerCard 
            title="Transparent Pricing" 
            description="Engagement scope shuffler ensuring no billable-hour surprises. Every deliverable is priced upfront."
          />
          <TypewriterCard 
            title="Proactive Strategy" 
            description="We look forward, not backward. Continuous monitoring of tax obligations and financial health."
          />
          <TimelineCard 
            title="Dedicated Advisory" 
            description="Partner-led engagements with a rigorous, repeatable protocol for financial clarity."
          />
        </div>
      </div>
    </section>
  );
}
