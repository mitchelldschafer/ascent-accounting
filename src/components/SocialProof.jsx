import React from 'react';

const testimonials = [
  {
    quote: "Ascent caught what three previous firms missed. Our restructuring wasn't just compliant—it unlocked $1.2M in working capital.",
    role: "Founder & CEO",
    industry: "Manufacturing"
  },
  {
    quote: "We don't make a strategic move without ascending it first. Their virtual CFO service operates as an extension of our executive team.",
    role: "Managing Partner",
    industry: "Private Equity"
  },
  {
    quote: "When the IRS initiated their audit, Ascent shielded our operations completely. Not a single day of business interruption.",
    role: "President",
    industry: "Commercial Real Estate"
  }
];

export default function SocialProof() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-near-white relative z-10 rounded-t-[3rem] -mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber mb-6">
            <span className="w-6 h-[1px] bg-amber"></span>
            Validation
            <span className="w-6 h-[1px] bg-amber"></span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-obsidian">
            The standard of trust.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-surface border border-obsidian/5 rounded-[2rem] p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative mb-12">
                <span className="absolute -top-8 -left-4 font-drama italic text-[5rem] text-amber/20 self-start leading-none select-none">"</span>
                <p className="font-drama italic text-xl md:text-2xl text-obsidian relative z-10 leading-relaxed">
                  {t.quote}
                </p>
              </div>
              <div>
                <div className="font-ui font-semibold text-obsidian text-sm">{t.role}</div>
                <div className="font-mono text-xs text-amber uppercase tracking-wider mt-1">{t.industry}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Bar */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 font-mono text-xs text-graphite/40 uppercase tracking-widest border-y border-obsidian/10 py-8 mb-10">
          <span>AICPA Member Firm</span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-obsidian/10"></span>
          <span>$100M+ Optimized Capital</span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-obsidian/10"></span>
          <span>Certified Exit Planning</span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-obsidian/10"></span>
          <span>Top 50 Advisory</span>
        </div>

        <p className="text-center font-ui text-[11px] text-graphite/30 max-w-xl mx-auto">
          Client testimonials used with written consent. Identifying details omitted at client request to preserve confidentiality. Past performance does not guarantee future results.
        </p>
      </div>
    </section>
  );
}
