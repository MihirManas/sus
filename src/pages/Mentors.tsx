import React from 'react';

export default function Mentors() {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24 px-5 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading mb-6 tracking-tight">
          Meet Your <span className="text-blood">Mentors</span>
        </h1>
        <p className="text-xl text-white/70 font-body mb-16">
          Learn from educators who have walked the path from Tier-3 roots to IIT Madras and Qualcomm R&D.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <span className="text-9xl">✳︎</span>
          </div>
          
          <ul className="space-y-6 text-lg font-body relative z-10 text-white/80">
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-blood rounded-full"></div>
              GATE CSE Ranker & M.Tech, IIIT Bangalore
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-blood rounded-full"></div>
              Admit from IIT Madras, IIT Bombay
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-blood rounded-full"></div>
              Software Engineer at Qualcomm & Founding Engineer at Startups
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-blood rounded-full"></div>
              179K+ Engineers On Instagram, 50K+ Professionals On LinkedIn
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-blood rounded-full"></div>
              Creator Of 0 To 40 LPA & Expert AI ML Book (3000+ Copies Sold)
            </li>
          </ul>
        </div>

        <h2 className="text-4xl font-heading mb-8">The Pedagogy Breakthrough</h2>
        <h3 className="text-2xl text-blood font-heading mb-12">Why Most AI Courses Fail Software Engineers</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="border border-white/10 p-8 rounded-2xl bg-black">
            <div className="text-blood text-sm font-heading tracking-widest mb-4">CATEGORY 01</div>
            <p className="text-xl font-heading mb-2">Most AI programs</p>
            <p className="text-white/50 font-body">Teach concepts.</p>
          </div>
          <div className="border border-white/10 p-8 rounded-2xl bg-black">
            <div className="text-blood text-sm font-heading tracking-widest mb-4">CATEGORY 02</div>
            <p className="text-xl font-heading mb-2">Most engineering programs</p>
            <p className="text-white/50 font-body">Teach coding.</p>
          </div>
          <div className="border border-white/10 p-8 rounded-2xl bg-black">
            <div className="text-blood text-sm font-heading tracking-widest mb-4">CATEGORY 03</div>
            <p className="text-xl font-heading mb-2">Most career programs</p>
            <p className="text-white/50 font-body">Teach resumes.</p>
          </div>
        </div>

        <div className="border-l-4 border-blood pl-8 py-4">
          <h3 className="text-3xl font-heading mb-4">This Cohort Combines All Three.</h3>
          <p className="text-xl text-white/70 font-body">
            You won't just learn AI. You won't just build projects. You won't just improve your profile.<br/>
            <strong>You'll do all three simultaneously.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
