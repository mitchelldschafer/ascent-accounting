import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterCTA() {
  return (
    <div className="w-full">
      {/* Consultation CTA */}
      <section id="contact" className="bg-obsidian w-full py-32 px-6 flex flex-col items-center text-center">
        <h2 className="font-drama italic text-5xl md:text-7xl text-slate-white mb-4">
          Ready to have a real conversation?
        </h2>
        <p className="font-ui text-lg md:text-xl text-slate-white/70 mb-10">
          Confidential. No obligation. Partner-led.
        </p>
        <a href="#contact" className="bg-amber text-obsidian px-8 py-4 rounded-full font-ui text-base font-semibold hover:scale-[1.02] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
          Schedule Consultation
        </a>
        <p className="font-ui text-sm text-slate-white/50 mt-6 hidden md:block">
          Or call us directly: (303) 555-0100
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-obsidian rounded-t-[3rem] px-8 pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-heading font-bold text-3xl text-slate-white mb-2">Ascent Accounting</h3>
            <p className="font-ui text-slate-white/60 mb-8 max-w-sm">
              We guide privately held businesses through their most consequential decisions. M&A, succession, capital strategy — executed with precision.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-amber">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
              Available for Confidential Consultation
            </div>
          </div>
          <div>
            <h4 className="font-ui font-semibold text-slate-white mb-4">Practice Areas</h4>
            <ul className="flex flex-col gap-3 font-ui text-sm text-slate-white/60">
              <li><a href="#services" className="hover:text-amber transition-colors">Tax Strategy & Planning</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">Virtual CFO Services</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">Full-Cycle Bookkeeping</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">Payroll Management</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-ui font-semibold text-slate-white mb-4">Office</h4>
            <p className="font-ui text-sm text-slate-white/60 mb-2">
              100 Financial Way, Suite 400<br/>Denver, CO 80202
            </p>
            <p className="font-ui text-sm text-slate-white/60">(303) 555-0100</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 font-ui text-xs text-slate-white/40">
            <a href="#" className="hover:text-slate-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-white transition-colors">Terms of Engagement</a>
            <a href="#" className="hover:text-slate-white transition-colors">Disclaimer</a>
          </div>
          <p className="font-mono text-[11px] text-slate-white/30">
            Advisory services provided by Ascent Accounting. Prior results do not guarantee similar outcomes.
          </p>
        </div>
      </footer>
    </div>
  );
}
