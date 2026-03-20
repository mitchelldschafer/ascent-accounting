import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const insights = [
  {
    title: "The Architecture of Automated Bookkeeping: Eliminating the Monthly Close Delay",
    excerpt: "Modern enterprises can no longer wait 15 days for a backward-looking P&L. By integrating direct API feeds and rule-based reconciliation layers, we are shifting the monthly close from a forensic exercise to a continuous, real-time dashboard...",
    tag: "Operational Finance",
    readTime: "6 Min Read",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Capital Strategy vs. Budgeting: Why Historical Forecasting Fails High-Growth Firms",
    excerpt: "Traditional budgets anchor future growth to past limitations. We examine why zero-based strategic allocation outperforms baseline-plussed budgets in volatile market conditions.",
    tag: "Capital Strategy",
    readTime: "4 Min Read",
    featured: false
  },
  {
    title: "Tax Optimization Through Entity Restructuring",
    excerpt: "Holding company structures and intellectual property segregation are no longer exclusive to the Fortune 500. A look at middle-market tax mitigation strategies.",
    tag: "Tax Architecture",
    readTime: "5 Min Read",
    featured: false
  }
];

export default function Insights() {
  const container = useRef(null);
  
  useGSAP(() => {
    gsap.from('.insight-anim', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: container });

  const featured = insights.find(i => i.featured);
  const secondary = insights.filter(i => !i.featured);

  return (
    <section ref={container} className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface" id="insights">
      <div className="max-w-7xl mx-auto">
        <div className="insight-anim mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div>
             <h2 className="font-heading font-bold text-3xl md:text-5xl text-obsidian mb-4">
               Firm Insights.
             </h2>
             <p className="font-ui text-lg text-graphite/60 max-w-xl">
               Our latest thinking on financial architecture, operational efficiency, and capital preservation.
             </p>
           </div>
           <a href="#insights" className="hidden md:flex items-center gap-2 text-amber font-mono text-sm uppercase tracking-wider group">
             Read All Insights
             <span className="transition-transform group-hover:translate-x-1">→</span>
           </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Article */}
          <div className="insight-anim lg:col-span-8 bg-near-white border border-obsidian/5 rounded-[2rem] overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-500 flex flex-col">
            <div className="h-64 md:h-80 w-full overflow-hidden relative">
              <img src={featured.image} alt="Data dashboard" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-obsidian/10"></div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs text-amber uppercase tracking-wider bg-amber/10 px-3 py-1 rounded-full">{featured.tag}</span>
                  <span className="font-mono text-xs text-graphite/40">{featured.readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-obsidian mb-4">{featured.title}</h3>
                <p className="font-ui text-base text-graphite/70 leading-relaxed max-w-2xl">{featured.excerpt}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-amber font-mono text-sm uppercase tracking-wider">
                Read Article <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>

          {/* Secondary Articles */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {secondary.map((article, idx) => (
              <div key={idx} className="insight-anim bg-background border border-obsidian/5 rounded-[2rem] p-8 group cursor-pointer hover:shadow-lg transition-shadow duration-300 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[10px] text-amber uppercase tracking-wider border border-amber/20 px-2 py-1 rounded-full">{article.tag}</span>
                    <span className="font-mono text-[10px] text-graphite/40">{article.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-obsidian mb-3 leading-snug">{article.title}</h3>
                  <p className="font-ui text-sm text-graphite/60 line-clamp-3">{article.excerpt}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-amber font-mono text-xs uppercase tracking-wider">
                  Read Article <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
