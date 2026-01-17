
import React from 'react';
import { NavigationPage } from '../types';

interface FutureScopeProps {
  page: NavigationPage;
}

export const FutureScope: React.FC<FutureScopeProps> = ({ page }) => {
  const contentMap: Record<string, { title: string; desc: string; icon: React.ReactNode; items: any[] }> = {
    [NavigationPage.USERS]: {
      title: "Users & Access Control",
      desc: "This module will manage campus staff, operators, and stakeholders in future versions.",
      icon: <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" /></svg>,
      items: [
        { name: "John Doe", role: "Campus Supervisor", status: "Admin" },
        { name: "Maintenance Team", role: "Field Operators", status: "Staff" }
      ]
    },
    [NavigationPage.REPORTS]: {
      title: "Data Analytics & Reports",
      desc: "This module will provide historical waste data, trends, and sustainability analytics.",
      icon: <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      items: [
        { name: "Weekly Waste Summary", type: "PDF Export" },
        { name: "Bin Utilization Heatmap", type: "Visual Chart" }
      ]
    },
    [NavigationPage.SETTINGS]: {
      title: "System Configuration",
      desc: "Configuration features for sensor thresholds and notification rules are planned for future releases.",
      icon: <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>,
      items: [
        { name: "Critical Threshold", val: "85%" },
        { name: "Polling Frequency", val: "5 Seconds" }
      ]
    }
  };

  const data = contentMap[page] || { title: page, desc: "Coming soon...", icon: null, items: [] };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-200">
            Concept Preview
          </span>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-emerald-50 rounded-2xl mb-2">
            {data.icon}
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">{data.title}</h1>
          <p className="text-slate-500 max-w-lg text-lg leading-relaxed">{data.desc}</p>
          <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            Not implemented in prototype
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.items.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 opacity-60">
            <h4 className="text-sm font-black text-slate-800 mb-1">{item.name}</h4>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              {item.role || item.type || item.val}
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center p-8">
        <p className="text-slate-400 text-xs font-medium italic">
          This layout demonstrates system scalability for full campus deployment.
        </p>
      </div>
    </div>
  );
};
