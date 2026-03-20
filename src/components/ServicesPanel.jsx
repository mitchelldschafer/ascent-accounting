import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  {
    title: "Tax Strategy & Planning",
    desc: "We don't just file returns; we engineer tax outcomes. Multi-entity structuring, trust distributions, and forward-looking mitigation strategies designed for high-growth enterprises.",
    featured: true
  },
  {
    title: "Virtual CFO Services",
    desc: "Executive-level financial leadership without the overhead. We align your capital structure, cash flow forecasting, and operational metrics with your long-term exit or growth strategy.",
    featured: false
  },
  {
    title: "Full-Cycle Bookkeeping",
    desc: "Impeccable financial hygiene. Real-time ledger management, automated reconciliations, and audit-ready financials that withstand the deepest diligence processes.",
    featured: false
  },
  {
    title: "IRS Audit Representation",
    desc: "Unwavering protection when facing regulatory scrutiny. We manage all correspondence, negotiations, and defense strategy, standing between you and the agency.",
    featured: false
  },
  {
    title: "Payroll Management",
    desc: "Seamless, compliant compensation execution. From multi-state tax withholding to benefits integration, we ensure your workforce is paid precisely and flawlessly.",
    featured: false
  }
];

export default function ServicesPanel() {
  const container = useRef(null);
  
  useGSAP(() => {
    gsap.fromTo('.service-anim', { y: 50, opacity: 0 }, { 
scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
 y: 0, opacity: 1, clearProps: 'all' 
});
  }, { scope: container });

  const featured = services.find(s => s.featured);
  const secondary = services.filter(s => !s.featured);

  return (
    <section ref={container} className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="service-anim mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-obsidian mb-4">
              Practice Areas.
            </h2>
            <p className="font-ui text-lg text-graphite/60 border-l-2 border-amber pl-4">
              Specialized financial intelligence for private enterprises and family offices.<br/>We focus narrowly so we can execute deeply.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Card */}
          <div className="service-anim lg:col-span-12 bg-obsidian text-slate-white rounded-[2rem] p-10 md:p-14 flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="max-w-3xl">
              <h3 className="font-heading font-bold text-2xl md:text-4xl text-amber mb-6">{featured.title}</h3>
              <p className="font-ui text-lg md:text-xl text-slate-white/80 leading-relaxed mb-12">
                {featured.desc}
              </p>
            </div>
            <Link to="/services" className="flex items-center gap-3 text-amber font-mono text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 w-max">
              <span>Learn More</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Secondary Cards in 2 columns */}
          {secondary.map((srv, idx) => (
            <div key={idx} className="service-anim lg:col-span-6 bg-background border border-obsidian/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between group cursor-pointer hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-obsidian mb-4">{srv.title}</h3>
                <p className="font-ui text-base text-graphite/70 mb-8 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
              <Link to="/services" className="relative z-10 flex items-center gap-3 text-amber font-mono text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 w-max">
                <span>Learn More</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber/5 rounded-full blur-2xl group-hover:bg-amber/10 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
