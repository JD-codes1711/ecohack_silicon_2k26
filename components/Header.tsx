
import React from 'react';
import { NavigationPage } from '../types';

interface HeaderProps {
  activePage: NavigationPage;
  systemOnline?: boolean;
  userName?: string;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, systemOnline = true, userName, onLogout }) => {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-20">
      <div className="min-w-0">
        <h2 className="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
          {activePage}
          {activePage === NavigationPage.DASHBOARD && (
            <span className="bg-emerald-500 text-white text-[9px] px-2 py-0.5 rounded uppercase font-black">Live</span>
          )}
        </h2>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Smart Campus Waste Infrastructure</p>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Network Status</p>
            <div className="flex items-center gap-1.5 justify-end">
               <span className={`text-[11px] font-bold ${systemOnline ? 'text-emerald-600' : 'text-red-600'}`}>
                 {systemOnline ? 'IOT MESH: ACTIVE' : 'IOT MESH: FAULT'}
               </span>
               <span className={`w-2 h-2 rounded-full ${systemOnline ? 'bg-emerald-500' : 'bg-red-500 animate-pulse'}`}></span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-slate-50 border border-slate-200 p-1.5 rounded-2xl pl-4 flex items-center gap-3">
            <div className="text-right leading-tight hidden lg:block">
              <p className="text-[11px] font-black text-slate-800">{userName || 'Campus Admin'}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase">Green-Inno Team</p>
            </div>
            <div className="w-9 h-9 bg-slate-200 rounded-xl border border-slate-300 flex items-center justify-center overflow-hidden">
              <img src={`https://picsum.photos/seed/${userName || 'smart'}/80`} alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
          
          <button 
            onClick={onLogout}
            className="p-2.5 bg-slate-100 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl border border-slate-200 transition-colors"
            title="Sign Out"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
