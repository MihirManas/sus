import React from 'react';

export default function Curriculum() {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24 px-5 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading mb-6 tracking-tight">
          The 4-Week <br/> <span className="text-blood">Implementation Roadmap</span>
        </h1>
        <p className="text-xl text-white/70 font-body mb-16">
          Over 4 weeks, you'll go from learning how modern AI systems work to building your own portfolio of AI applications and a complete AI-Powered Engineer Operating System.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
            <div className="text-4xl text-blood font-heading mb-2">4</div>
            <div className="text-white/70 font-body">Weeks</div>
          </div>
          <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
            <div className="text-4xl text-blood font-heading mb-2">16</div>
            <div className="text-white/70 font-body">Live Build Sessions</div>
          </div>
          <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
            <div className="text-4xl text-blood font-heading mb-2">32</div>
            <div className="text-white/70 font-body">Hours Of Live Building</div>
          </div>
          <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
            <div className="text-4xl text-blood font-heading mb-2">9</div>
            <div className="text-white/70 font-body">Portfolio Projects</div>
          </div>
        </div>

        <h2 className="text-3xl font-heading mb-8">Advanced AI Engineering Skills You'll Master</h2>
        <div className="flex flex-wrap gap-3 font-body">
          {['Prompt Engineering', 'Context Engineering', 'Agents', 'Memory Systems', 'RAG', 'Vector Databases', 'Evaluations (Evals)', 'Guardrails', 'Observability', 'Knowledge Graphs', 'Cost Optimization', 'Multi-Agent Systems'].map(skill => (
            <span key={skill} className="px-4 py-2 border border-blood/30 bg-blood/10 rounded-full text-white/90">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-24 p-8 border border-blood/30 bg-blood/5 rounded-3xl text-center">
          <h3 className="text-2xl font-heading mb-4">Most Engineers Will Spend The Next 4 Weeks Consuming AI Content.</h3>
          <p className="text-blood font-heading text-xl">You'll Spend The Next 4 Weeks Building AI Systems.</p>
        </div>
      </div>
    </div>
  );
}
