
import React from 'react';

export const ProjectPitch: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      
      {/* 1. Project Snapshot */}
      <section className="text-center space-y-4">
        <div className="flex justify-center items-center gap-3 mb-2">
          <span className="bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
            Live Prototype
          </span>
          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-200">
            Hackathon Entry
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Smart Campus Plastic Waste Monitoring
        </h1>
        <p className="text-xl text-slate-500 font-medium italic">
          "Transforming waste management from a manual chore into a data-driven mission."
        </p>
      </section>

      {/* 2. Problem Statement */}
      <section className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </span>
              The Problem
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-600 font-medium">
                <span className="text-red-500">•</span>
                Inefficient manual checking of bins leads to overflow in busy areas.
              </li>
              <li className="flex gap-3 text-slate-600 font-medium">
                <span className="text-red-500">•</span>
                Wasted fuel and labor as trucks visit half-empty bins.
              </li>
              <li className="flex gap-3 text-slate-600 font-medium">
                <span className="text-red-500">•</span>
                Lack of real-time visibility prevents proactive maintenance.
              </li>
              <li className="flex gap-3 text-slate-600 font-medium">
                <span className="text-red-500">•</span>
                No centralized data to track campus sustainability progress.
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 border border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Visual Insight</p>
            <p className="text-sm text-slate-500 italic">Overflowing bins create health hazards and impact campus aesthetics.</p>
          </div>
        </div>
      </section>

      {/* 3. Our Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-emerald-600 text-white rounded-[2.5rem] p-10 shadow-xl shadow-emerald-900/10">
          <h2 className="text-2xl font-black mb-6">Our Solution</h2>
          <p className="text-emerald-50 leading-relaxed font-medium">
            We've developed a hardware-software integrated ecosystem. Smart bins equipped with ultrasonic sensors report their fill levels wirelessly. This dashboard provides administrators with a single source of truth for all campus waste points.
          </p>
          <div className="mt-8 pt-8 border-t border-emerald-500/30 grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-3xl font-black">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Real-time Data</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black">60%</p>
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Labor Efficiency</p>
            </div>
          </div>
        </div>
        
        {/* 4. How It Works */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10">
          <h2 className="text-xl font-black text-slate-900 mb-8">How It Works</h2>
          <div className="space-y-6">
            <Step num="01" title="Sensing" desc="Ultrasonic sensors detect waste level via sound waves." />
            <Step num="02" title="Processing" desc="ESP32 microcontrollers process and filter the data." />
            <Step num="03" title="Transmission" desc="Data is streamed via a secure IoT Mesh network." />
            <Step num="04" title="Visualization" desc="The Admin Dashboard triggers alerts and status logs." />
          </div>
        </div>
      </section>

      {/* 5. Live vs Future Scope */}
      <section className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
        <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tight">System Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-emerald-400 font-black text-xs uppercase tracking-widest border-b border-slate-800 pb-3">Currently Implemented</h3>
            <ul className="space-y-4">
              <RoadmapItem text="Real-time Telemetry Dashboard" status="live" />
              <RoadmapItem text="Fault & Disconnection Detection" status="live" />
              <RoadmapItem text="Interactive SRS Documentation" status="live" />
              <RoadmapItem text="Live System Console Logs" status="live" />
              <RoadmapItem text="Auth & Role Simulation" status="live" />
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-slate-500 font-black text-xs uppercase tracking-widest border-b border-slate-800 pb-3">Future Expansion</h3>
            <ul className="space-y-4">
              <RoadmapItem text="Route Optimization for Waste Trucks" status="planned" />
              <RoadmapItem text="Mobile App for Ground Staff" status="planned" />
              <RoadmapItem text="Predictive Analytics using AI" status="planned" />
              <RoadmapItem text="Incentive Programs for Students" status="planned" />
              <RoadmapItem text="Multi-Campus Data Aggregator" status="planned" />
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Innovation & Impact */}
      <section className="bg-white border border-slate-200 rounded-[2.5rem] p-10">
        <h2 className="text-2xl font-black text-slate-900 text-center mb-10">Environmental & Operational Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl">🌍</div>
            <h4 className="font-black text-slate-800">Greener Campus</h4>
            <p className="text-xs text-slate-500 px-4">Zero overflow policy leads to better hygiene and aesthetics.</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl">⚡</div>
            <h4 className="font-black text-slate-800">Energy Saved</h4>
            <p className="text-xs text-slate-500 px-4">Reducing unnecessary truck movements saves massive fuel costs.</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl">📊</div>
            <h4 className="font-black text-slate-800">Data Driven</h4>
            <p className="text-xs text-slate-500 px-4">Historical data helps in placing bins where they are needed most.</p>
          </div>
        </div>
      </section>

      {/* 7. Scalability & Vision */}
      <section className="bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-10 text-center space-y-4">
        <h2 className="text-xl font-black text-emerald-900">Scalability & Future Vision</h2>
        <p className="text-sm text-emerald-800/70 max-w-2xl mx-auto leading-relaxed font-medium">
          Our architecture is built for scale. What starts as a campus pilot can easily transition into a "Smart City" waste model. We aim to integrate blockchain for waste traceability and rewarding community participation in a circular economy.
        </p>
      </section>

      {/* Footer Note */}
      <div className="text-center pt-8 border-t border-slate-100">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
          Disclaimer: This is a hackathon prototype designed to demonstrate feasibility.<br/>
          All IoT data shown is simulated to represent real-world sensor behavior.
        </p>
      </div>
    </div>
  );
};

const Step: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="flex gap-4 items-start">
    <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">{num}</span>
    <div>
      <h4 className="text-sm font-black text-slate-800 leading-none mb-1">{title}</h4>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  </div>
);

const RoadmapItem: React.FC<{ text: string; status: 'live' | 'planned' }> = ({ text, status }) => (
  <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
    <span className="text-sm font-medium">{text}</span>
    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full ${
      status === 'live' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'
    }`}>
      {status}
    </span>
  </li>
);
