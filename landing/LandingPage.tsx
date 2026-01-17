
import React from 'react';
import { NavigationPage } from '../types';

interface LandingPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navigation Bar */}
      <nav className="p-6 lg:px-12 flex justify-between items-center bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <span className="font-black text-xl text-slate-900 tracking-tight uppercase">Smart Campus</span>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => onNavigate(NavigationPage.LOGIN)}
            className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors"
          >
            Login
          </button>
          <button 
            onClick={() => onNavigate(NavigationPage.SIGNUP)}
            className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-shadow hover:shadow-lg hover:shadow-emerald-900/20 active:scale-95 duration-200"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 lg:py-32">
        <div className="mb-6">
          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">
            IoT & Sustainability Pilot
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 max-w-4xl leading-tight">
          Next-Generation <span className="text-emerald-600">Plastic Waste</span> Monitoring for Smart Campuses
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Integrating ESP32-powered ultrasonic sensors with a real-time monitoring dashboard to create a cleaner, data-driven sustainable environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => onNavigate(NavigationPage.SIGNUP)}
            className="px-10 py-4 bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-900/20 hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300"
          >
            Start Monitoring Now
          </button>
          <button 
            onClick={() => onNavigate(NavigationPage.PROJECT_PITCH)}
            className="px-10 py-4 bg-white border border-slate-200 text-slate-700 font-black rounded-2xl hover:bg-slate-50 transition-all duration-300"
          >
            View Project Pitch
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature 
            icon="M13 10V3L4 14h7v7l9-11h-7z" 
            title="Real-time IoT Monitoring" 
            desc="Live telemetry from campus bins directly to your dashboard via optimized mesh networks." 
          />
          <Feature 
            icon="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
            title="Smart Overflow Alerts" 
            desc="Automated warnings when bins exceed 75% capacity, reducing manual check cycles by 60%." 
          />
          <Feature 
            icon="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
            title="Scalable Architecture" 
            desc="Ready for multi-campus deployment with enterprise-grade data handling and fault detection." 
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200 text-center">
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Designed for Green Innovation Hackathon</p>
        <p className="text-[10px] text-slate-400">© 2024 Smart Campus Waste Team • Sustainability Through Connectivity</p>
      </footer>
    </div>
  );
};

const Feature: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="space-y-4">
    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
      </svg>
    </div>
    <h3 className="text-xl font-black text-slate-800 tracking-tight">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);
