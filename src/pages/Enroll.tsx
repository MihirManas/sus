import React, { useState } from 'react';

export default function Enroll() {
  const [currentCtc, setCurrentCtc] = useState(6);
  
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24 px-5 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading mb-6 tracking-tight">
            Calculate Your <span className="text-blood">Leverage</span>
          </h1>
          <p className="text-xl text-white/70 font-body max-w-2xl mx-auto">
            See how mastering multi-agent architectures and building your personal AI OS compounds your salary.
          </p>
        </div>

        {/* ROI Calculator */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl">
          <h3 className="text-2xl font-heading mb-8">Interactive Career ROI Calculator</h3>
          
          <div className="mb-12">
            <label className="block text-white/70 font-body mb-4">Your Current CTC: ₹{currentCtc} LPA</label>
            <input 
              type="range" 
              min="3" 
              max="25" 
              value={currentCtc}
              onChange={(e) => setCurrentCtc(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blood"
            />
            <div className="flex justify-between text-white/40 text-sm mt-2 font-body">
              <span>₹3 LPA</span>
              <span>₹12 LPA</span>
              <span>₹25 LPA</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-white/60 font-body mb-2">Projected AI-Powered CTC</p>
              <div className="text-4xl font-heading text-green-500 mb-2">₹{currentCtc + 11} LPA</div>
              <p className="text-white/40 text-sm font-body">Potential Annual Increase: +₹11.0 Lakhs / year</p>
            </div>
            <div>
              <p className="text-white/60 font-body mb-2">Investment ROI</p>
              <div className="text-4xl font-heading text-blood mb-2">220X</div>
              <p className="text-white/40 text-sm font-body">On ₹4,999 Enrollment</p>
            </div>
          </div>
        </div>

        {/* Guarantee and Pricing */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-blood/30 bg-blood/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-heading mb-4">First-Weekend Guarantee</h3>
            <p className="text-white/70 font-body mb-6">
              Attend the live sessions and experience the training firsthand. Agar tumhe achha nahi lagega, simply let us know by Sunday for an instant 100% money-back refund. No questions asked.
            </p>
          </div>
          
          <div className="border border-white/10 bg-white/5 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <div className="text-blood font-heading tracking-widest text-sm mb-2 uppercase">Limited Live Intake</div>
            <div className="text-4xl font-heading mb-2">₹4,999</div>
            <p className="text-white/50 font-body text-sm mb-8">Next batch opens at ₹7,999</p>
            <button className="w-full bg-blood hover:bg-blood-light text-white font-heading py-4 rounded-xl transition-colors text-xl shadow-lg shadow-blood/20">
              Secure 1 of 30 Seats
            </button>
          </div>
        </div>

        <div className="text-center font-body text-white/50">
          <p>Have a Question Before Joining?</p>
          <a href="mailto:workribhususmita@gmail.com" className="text-white underline hover:text-blood transition-colors mt-2 block">
            workribhususmita@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
