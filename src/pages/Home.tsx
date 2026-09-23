import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function useTypewriter(text: string, speed: number = 38, startDelay: number = 600) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    let intervalId: number;

    const startTyping = () => {
      let i = 0;
      intervalId = window.setInterval(() => {
        setDisplayed((prev) => text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    };

    timeoutId = window.setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const isSeekingRef = useRef(false);
  const nextSeekRef = useRef<number | null>(null);
  const prevXRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current || isNaN(videoRef.current.duration)) return;

      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const SENSITIVITY = 0.8;
      const duration = videoRef.current.duration;
      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * duration;

      targetTimeRef.current = Math.max(0, Math.min(duration, targetTimeRef.current + timeOffset));

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        videoRef.current.currentTime = targetTimeRef.current;
      } else {
        nextSeekRef.current = targetTimeRef.current;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSeeked = () => {
    if (nextSeekRef.current !== null && videoRef.current) {
      videoRef.current.currentTime = nextSeekRef.current;
      nextSeekRef.current = null;
    } else {
      isSeekingRef.current = false;
    }
  };

  const { displayed, done } = useTypewriter("The software industry is splitting in two.", 35, 300);
  
  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {
    if (done) {
      const t = setTimeout(() => setShowButtons(true), 400);
      return () => clearTimeout(t);
    }
  }, [done]);

  return (
    <>
      <video
        ref={videoRef}
        src="/hero.mp4"
        className="fixed inset-0 z-0 object-cover w-full h-full"
        style={{ objectPosition: '70% center' }}
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeeked}
      />

      <div className="relative z-10 w-full bg-transparent">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden relative">
          <div className="max-w-4xl relative z-10">
            {/* Top Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-white/50"></div>
              <span className="text-sm font-poppins text-white/60 tracking-widest uppercase">
                The AI-Powered Engineer Accelerator
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-[72px] font-poppins font-bold text-white leading-[1.15] tracking-tight mb-8 min-h-[150px] md:min-h-[170px]">
              {displayed.substring(0, 21)}
              {displayed.length >= 21 && <br className="hidden md:block" />}
              {displayed.substring(21, 25)}
              <span className="text-[#ef4444]">{displayed.substring(25)}</span>
              {!done && <span className="animate-blink inline-block w-[4px] h-[0.9em] bg-white align-middle ml-2"></span>}
            </h1>

            {/* Subheading */}
            <p className={`text-xl sm:text-2xl md:text-[26px] text-white/80 font-poppins font-light mb-12 max-w-3xl leading-relaxed transition-all duration-700 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Become the top 1% who leverage AI systems to 10x their career.
            </p>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-8 transition-all duration-700 delay-200 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link 
                to="/enroll" 
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-poppins font-bold text-[17px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]"
              >
                Secure 1 of 30 Seats (₹4,999)
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              
              <Link 
                to="/curriculum" 
                className="group flex items-center justify-center gap-3 px-2 py-4 text-white font-poppins font-medium text-[17px] transition-all duration-300 hover:text-white/80 relative"
              >
                Explore Curriculum
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="absolute bottom-2 left-2 right-10 h-[1px] bg-white/50 group-hover:bg-white transition-colors"></div>
              </Link>
            </div>
          </div>
        </section>

        {/* The Reality Check Section */}
        <section className="min-h-screen bg-[#050505] text-white px-5 sm:px-8 md:px-10 py-32 border-t border-white/10 relative z-10 overflow-hidden">
          {/* Glowing Background Orbs */}
          <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blood/30 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[150px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading mb-6 tracking-tight">
              If Your Value Is Just Typing Syntax, <br className="hidden md:block"/>
              <span className="text-blood">You Are in the Danger Zone.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-20 max-w-3xl font-body leading-relaxed">
              Tech companies no longer hire 5 junior devs to write boilerplate CRUD. They hire 1 AI-leveraged engineer who directs agents.
            </p>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
              {/* Traditional Dev */}
              <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:-translate-y-2 hover:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-white/50 font-heading tracking-widest text-sm uppercase mb-4 group-hover:text-white/70 transition-colors">The Danger Zone</div>
                <h3 className="text-3xl font-heading mb-8 relative z-10">The Prompt-Copying Coder</h3>
                <ul className="space-y-5 text-white/70 font-body relative z-10">
                  <li className="flex gap-4 items-start">
                    <span className="text-white/40 mt-1">✗</span> 
                    <span>Spends hours writing boilerplate syntax manually</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-white/40 mt-1">✗</span> 
                    <span>Uses AI like a chatbot—copying snippets with zero architecture</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-white/40 mt-1">✗</span> 
                    <span>Resume filled with 2022 tutorial clones that recruiters auto-reject</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-white/40 mt-1">✗</span> 
                    <span>Stuck in service company salary bands (₹3.5–6 LPA)</span>
                  </li>
                </ul>
              </div>

              {/* AI Powered Engineer */}
              <div className="group bg-black/40 backdrop-blur-2xl border border-[#10b981]/30 rounded-3xl p-10 hover:-translate-y-2 hover:border-[#10b981]/60 shadow-[0_8px_32px_rgba(16,185,129,0.15)] hover:shadow-[0_16px_64px_rgba(16,185,129,0.3)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Asterisk Watermark */}
                <div className="absolute -top-4 -right-4 p-8 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-700">
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 10 V90 M10 50 H90 M20 20 L80 80 M20 80 L80 20" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>

                <div className="text-[#10b981] font-heading tracking-widest text-sm uppercase mb-4 relative z-10">The Leverage Zone</div>
                <h3 className="text-3xl font-heading mb-8 relative z-10">The AI-Powered Systems Engineer</h3>
                <ul className="space-y-5 text-white/90 font-body relative z-10">
                  <li className="flex gap-4 items-start">
                    <span className="text-[#10b981] mt-1">✓</span> 
                    <span>Orchestrates a personal AI team (Career, Knowledge & Dev squads)</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-[#10b981] mt-1">✓</span> 
                    <span>Builds production multi-agent systems, RAG vector stores</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-[#10b981] mt-1">✓</span> 
                    <span>Graduates with 9 resume-worthy AI projects & a personal AI OS</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-[#10b981] mt-1">✓</span> 
                    <span>Positioned for high-growth tech companies commanding 25–40+ LPA</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* The 3 Squads */}
            <div className="mt-32">
              <h2 className="text-4xl md:text-5xl font-heading mb-6 tracking-tight text-center">
                Your 3 Specialized <span className="text-blood">AI Squads</span>
              </h2>
              <p className="text-center text-white/70 text-xl max-w-2xl mx-auto mb-16 font-body">
                Collaborative agents purpose-built to accelerate your software engineering career.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:-translate-y-2 hover:border-blood/50 hover:shadow-[0_8px_32px_rgba(138,3,3,0.15)] transition-all duration-500">
                  <h4 className="text-2xl font-heading mb-4 group-hover:text-blood transition-colors">Career Team</h4>
                  <p className="text-white/60 mb-6 font-body">Your 24/7 personal career guidance, resume optimization, and opportunity scout.</p>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li>• AI Career Advisor</li>
                    <li>• AI Hiring Manager</li>
                    <li>• AI Interview Coach</li>
                    <li>• AI Opportunity Engine</li>
                  </ul>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:-translate-y-2 hover:border-blood/50 hover:shadow-[0_8px_32px_rgba(138,3,3,0.15)] transition-all duration-500">
                  <h4 className="text-2xl font-heading mb-4 group-hover:text-blood transition-colors">Knowledge Team</h4>
                  <p className="text-white/60 mb-6 font-body">Your unified technical memory engine indexing your docs, notes, code, and PDFs.</p>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li>• AI Knowledge Assistant</li>
                    <li>• Production RAG engine</li>
                    <li>• Vector retrieval systems</li>
                  </ul>
                </div>

                <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:-translate-y-2 hover:border-blood/50 hover:shadow-[0_8px_32px_rgba(138,3,3,0.15)] transition-all duration-500">
                  <h4 className="text-2xl font-heading mb-4 group-hover:text-blood transition-colors">Engineering Team</h4>
                  <p className="text-white/60 mb-6 font-body">Eliminates repetitive dev toil, generates documentation, and inspects tickets.</p>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li>• Documentation Agent</li>
                    <li>• Debug Agent</li>
                    <li>• JIRA Intelligence Agent</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
