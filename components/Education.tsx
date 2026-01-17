
import React from 'react';

export const AwarenessEducation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">
          Awareness & Impact
        </span>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">The Future of Waste is Smart</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Understanding the problem is the first step toward a cleaner campus. 
          Our platform bridges the gap between technology and sustainability.
        </p>
      </section>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContentBlock 
          title="The Problem" 
          icon="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          color="red"
        >
          <p className="text-sm text-slate-600 leading-relaxed">
            Campus waste management often relies on manual inspection, leading to overflow, health hazards, and inefficient labor use. Plastic takes up to 500 years to decompose, making immediate collection critical.
          </p>
        </ContentBlock>

        <ContentBlock 
          title="The Solution" 
          icon="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          color="emerald"
        >
          <p className="text-sm text-slate-600 leading-relaxed">
            By using IoT sensors (ESP32 + Ultrasonic), we turn passive bins into active data nodes. We monitor fill levels in real-time, allowing staff to empty bins exactly when needed—saving time and energy.
          </p>
        </ContentBlock>
      </div>

      {/* Full Width Visual/Story Section */}
      <div className="bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-16 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-slate-800 leading-tight">Why Smart Bins Matter</h2>
            <ul className="space-y-4">
              <ListItem icon="✅" text="Prevents unhygienic bin overflow in public areas." />
              <ListItem icon="✅" text="Reduces fuel consumption for waste collection trucks." />
              <ListItem icon="✅" text="Promotes responsible disposal habits among students." />
              <ListItem icon="✅" text="Provides data-driven insights for campus planning." />
            </ul>
          </div>
          <div className="bg-emerald-50 border-4 border-white shadow-xl rounded-[2rem] p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-1 bg-emerald-300 rounded-full"></div>
            <h4 className="text-emerald-800 font-black uppercase text-xs tracking-widest">Our Vision</h4>
            <p className="text-emerald-700/80 text-sm italic font-medium">
              "To create a fully autonomous, zero-waste ecosystem that inspires every campus to go green through the power of data and technology."
            </p>
            <div className="w-16 h-1 bg-emerald-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Simple Image/Illustration Placeholders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <IllustrationPlaceholder title="IoT Sensor Kit" />
        <IllustrationPlaceholder title="Mesh Network Map" />
        <IllustrationPlaceholder title="Waste Recovery Center" />
      </div>

      <div className="pt-12 text-center border-t border-slate-100">
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Designed for Green Innovation Hackathon 2024</p>
      </div>
    </div>
  );
};

const ContentBlock: React.FC<{ title: string; icon: string; color: 'red' | 'emerald'; children: React.ReactNode }> = ({ title, icon, color, children }) => (
  <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm group hover:border-emerald-200 transition-all">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color === 'red' ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-500'}`}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} /></svg>
    </div>
    <h3 className="text-xl font-black text-slate-800">{title}</h3>
    {children}
  </div>
);

const ListItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-4 items-start">
    <span className="text-lg">{icon}</span>
    <span className="text-sm text-slate-600 font-medium">{text}</span>
  </li>
);

const IllustrationPlaceholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl h-32 flex items-center justify-center p-4">
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">{title}<br/><span className="font-medium lowercase opacity-50">[Illustration Placeholder]</span></p>
  </div>
);
