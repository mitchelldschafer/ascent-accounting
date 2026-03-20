import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ServicesPanel from '../components/ServicesPanel';
import AboutPanel from '../components/AboutPanel';
import Philosophy from '../components/Philosophy';
import Process from '../components/Process';
import SocialProof from '../components/SocialProof';
import Insights from '../components/Insights';

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-surface text-text">
      <Hero />
      <Features />
      <ServicesPanel />
      <AboutPanel />
      <Philosophy />
      <Process />
      <SocialProof />
      <Insights />
    </div>
  );
}
