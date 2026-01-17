
import React, { useState } from 'react';
import { NavigationPage } from '../types';

interface SignupPageProps {
  onSignup: (userData: { name: string; email: string }) => void;
  onNavigate: (page: NavigationPage) => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({ onSignup, onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password.length >= 6) {
      const userData = { name, email, password };
      localStorage.setItem(`user_${email}`, JSON.stringify(userData));
      onSignup({ name, email });
    } else {
      setError('Please fill all fields (Password min. 6 characters)');
    }
  };

  return (
    <div className="min-h-screen bg-emerald-600 flex items-center justify-center p-6 font-sans">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-10 border border-emerald-500/10">
        <div className="text-center mb-10">
          <button onClick={() => onNavigate(NavigationPage.LANDING)} className="mb-4 inline-block hover:scale-105 transition-transform">
             <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-2 text-emerald-600 border border-emerald-100 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
             </div>
          </button>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Create Account</h2>
          <p className="text-sm text-slate-600 font-bold">Join the Smart Campus initiative</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              placeholder="Ex: John Doe"
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Campus Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              placeholder="name@university.edu"
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Create Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <div className="bg-red-50 border border-red-100 rounded-xl p-3"><p className="text-xs font-black text-red-600 text-center">{error}</p></div>}

          <button 
            type="submit"
            className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-emerald-900/20 hover:bg-emerald-700 active:scale-[0.98] transition-all"
          >
            Join Initiative
          </button>
        </form>

        <div className="mt-8 text-center border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-600 font-bold">
            Already registered? {' '}
            <button onClick={() => onNavigate(NavigationPage.LOGIN)} className="text-emerald-700 font-black hover:underline underline-offset-4 decoration-2">Sign In</button>
          </p>
        </div>
      </div>
    </div>
  );
};
