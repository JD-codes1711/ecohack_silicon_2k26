
import React from 'react';
import { WasteBin, BinStatus } from '../types';

interface BinCardProps {
  bin: WasteBin;
}

export const BinCard: React.FC<BinCardProps> = ({ bin }) => {
  // 2. Status Derivation Logic (Mandatory)
  const getDerivedStatus = (fillPercentage: number, isOnline: boolean): BinStatus => {
    if (!isOnline) return BinStatus.DISCONNECTED;
    if (fillPercentage > 75) return BinStatus.FULL;
    if (fillPercentage > 40) return BinStatus.MEDIUM;
    return BinStatus.EMPTY;
  };

  const status = getDerivedStatus(bin.fillLevel, bin.isOnline);

  const statusColors = {
    [BinStatus.EMPTY]: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    [BinStatus.MEDIUM]: 'bg-amber-100 text-amber-700 border-amber-200',
    [BinStatus.FULL]: 'bg-red-100 text-red-700 border-red-200',
    [BinStatus.DISCONNECTED]: 'bg-slate-200 text-slate-600 border-slate-300 animate-pulse'
  };

  const barColors = {
    [BinStatus.EMPTY]: 'bg-emerald-500',
    [BinStatus.MEDIUM]: 'bg-amber-500',
    [BinStatus.FULL]: 'bg-red-500',
    [BinStatus.DISCONNECTED]: 'bg-slate-400'
  };

  return (
    <div className={`bg-white rounded-3xl p-6 border transition-all duration-300 ${
      status === BinStatus.FULL ? 'border-red-200 shadow-lg ring-1 ring-red-50' : 
      status === BinStatus.DISCONNECTED ? 'border-slate-300 grayscale-[0.5]' : 'border-slate-200 shadow-sm'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="min-w-0">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{bin.id}</span>
          <h4 className="text-sm font-bold text-slate-800 truncate mt-1">{bin.location}</h4>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
           <p className="text-[10px] font-bold text-slate-400 uppercase">Distance</p>
           <p className="text-lg font-black text-slate-800">{bin.distance}<span className="text-xs font-medium ml-0.5">cm</span></p>
        </div>
        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-right">
           <p className="text-[10px] font-bold text-slate-400 uppercase">Capacity</p>
           <p className={`text-lg font-black ${status === BinStatus.FULL ? 'text-red-600' : 'text-slate-800'}`}>
             {bin.fillLevel}%
           </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${barColors[status]}`}
            style={{ width: `${Math.min(100, Math.max(0, bin.fillLevel))}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex items-center gap-1.5 min-w-0">
           {bin.isOnline ? (
             <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
             </svg>
           ) : (
             <svg className="w-3.5 h-3.5 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
             </svg>
           )}
           <span className="text-[10px] font-medium text-slate-400 uppercase truncate">
             Last Refreshed: {bin.lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
           </span>
        </div>
        
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div className="w-4 h-2 bg-slate-200 rounded-[1px] relative border border-slate-300">
            <div 
              className={`h-full rounded-[1px] ${bin.batteryLevel < 20 ? 'bg-red-500' : 'bg-emerald-500'}`} 
              style={{ width: `${bin.batteryLevel}%` }}
            ></div>
          </div>
          <span className={`text-[10px] font-bold ${bin.batteryLevel < 20 ? 'text-red-500' : 'text-slate-500'}`}>
            {bin.batteryLevel}%
          </span>
        </div>
      </div>
    </div>
  );
};
