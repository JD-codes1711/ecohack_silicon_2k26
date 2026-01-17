
import React from 'react';
import { WasteBin, SystemLog, BinStatus } from '../types';
import { BinCard } from './BinCard';

interface DashboardProps {
  bin: WasteBin;
  logs: SystemLog[];
}

export const Dashboard: React.FC<DashboardProps> = ({ bin, logs }) => {
  const isFull = bin.fillLevel > 75 && bin.isOnline;
  const isDisconnected = !bin.isOnline;

  return (
    <div className="space-y-8 max-w-[1280px] mx-auto">
      {/* Refined Stats for Single Bin Focus */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Node" value={bin.id} icon="cube" color="emerald" />
        <StatCard title="Status Alert" value={isFull ? "URGENT" : "STABLE"} icon="exclamation" color={isFull ? 'red' : 'emerald'} />
        <StatCard title="Node Connection" value={isDisconnected ? "OFFLINE" : "LIVE"} icon="shield" color={isDisconnected ? 'red' : 'blue'} />
        <StatCard title="Node Battery" value={`${bin.batteryLevel}%`} icon="heart" color={bin.batteryLevel < 20 ? 'red' : 'emerald'} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Authoritative Single Bin Monitoring */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
              Live IoT Node: {bin.id}
            </h3>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Real-time Data Stream</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <BinCard bin={bin} />
            </div>
          </div>

          {/* Quick Context for Single Bin */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 flex items-start gap-4">
            <div className="p-3 bg-white rounded-2xl shadow-sm">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-black text-emerald-900 uppercase tracking-tight">Active Node Context</h4>
              <p className="text-xs text-emerald-800/70 mt-1 leading-relaxed">
                Currently monitoring the <strong>{bin.location}</strong>. For this prototype, all dashboard analytics and alerts are derived directly from this hardware unit to ensure 1:1 fidelity with the physical sensor.
              </p>
            </div>
          </div>
        </div>

        {/* Side Panel: System Control & Logs */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 mb-6 tracking-widest uppercase">Node Hub: {bin.id}</h3>
            <div className="space-y-5">
              <HealthItem label="ESP32 Processing" status={bin.isOnline ? "stable" : "check_faults"} />
              <HealthItem label="Sensor Calibration" status="active" />
              <HealthItem label="LoRa/Mesh Bridge" status={bin.isOnline ? "connected" : "retry_sync"} />
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100">
               <p className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-wide">Link Quality (Current Node)</p>
               <div className="flex items-center gap-3">
                  <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: bin.isOnline ? '96%' : '12%' }}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-700">{bin.isOnline ? '96%' : '12%'}</span>
               </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 shadow-xl flex flex-col h-[400px]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold text-emerald-400 tracking-widest uppercase">Node Console Output</h3>
              <span className="text-[10px] text-slate-500 font-mono">ID: {bin.id}</span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar font-mono">
              {logs.length === 0 ? (
                <div className="py-10 text-center opacity-30">
                  <p className="text-[10px] text-white italic">Awaiting node broadcast...</p>
                </div>
              ) : (
                logs.map(log => (
                  <div key={log.id} className="text-[11px] leading-relaxed border-l-2 border-slate-700 pl-3 py-1">
                    <div className="flex justify-between mb-1">
                       <span className={`font-bold ${
                         log.type === 'error' ? 'text-red-400' : 
                         log.type === 'warning' ? 'text-amber-400' : 'text-emerald-400'
                       }`}>
                         [{log.type.toUpperCase()}]
                       </span>
                       <span className="text-slate-500 text-[9px]">
                         {log.timestamp.toLocaleTimeString([], { hour12: false })}
                       </span>
                    </div>
                    <p className="text-slate-300">{log.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: string | number; icon: string; color: 'blue' | 'red' | 'emerald' }> = ({ title, value, icon, color }) => {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600',
    red: 'bg-red-50 text-red-600',
    emerald: 'bg-emerald-50 text-emerald-600'
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-emerald-200 transition-colors">
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
        <h4 className="text-xl font-black text-slate-800 tracking-tight">{value}</h4>
      </div>
      <div className={`p-3 rounded-2xl ${colorMap[color]}`}>
        {icon === 'cube' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
        {icon === 'exclamation' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
        {icon === 'shield' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
        {icon === 'heart' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
      </div>
    </div>
  );
};

const HealthItem: React.FC<{ label: string, status: string }> = ({ label, status }) => (
  <div className="flex items-center justify-between">
    <span className="text-xs font-bold text-slate-600">{label}</span>
    <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border ${
      status === 'stable' || status === 'active' || status === 'connected' 
        ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
        : 'bg-red-50 text-red-600 border-red-100'
    }`}>{status}</span>
  </div>
);
