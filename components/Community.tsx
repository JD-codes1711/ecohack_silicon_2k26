
import React from 'react';

export const CommunityHub: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 flex gap-2">
          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-200">
            Admin View
          </span>
          <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-slate-200">
            Prototype / Future Scope
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="p-5 bg-emerald-50 rounded-2xl border-4 border-white shadow-sm">
            <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Community Activity Overview</h1>
            <p className="text-slate-500 text-sm font-medium mt-1">
              Monitoring citizen participation, reported issues, and eco-incentive engagement across the campus.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Section: Feed & Complaints (8 columns) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* 1. Activity Feed */}
          <section className="space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-4 bg-emerald-500 rounded-full"></div>
              Recent Campus Activity
            </h3>
            <div className="space-y-4">
              <FeedCard 
                user="Eco-Warriors Club" 
                role="Verified Org" 
                type="Awareness"
                content="Our hostel block reduced plastic waste by 25% this month! Thanks to everyone using the smart bins correctly. Let's aim for 30% next month! 🌿"
                points={15}
                time="2h ago"
              />
              <FeedCard 
                user="Rahul Sharma" 
                role="Volunteer" 
                type="Update"
                content="Just spotted the maintenance team clearing BIN-003 after the dashboard alert. Real-time efficiency in action! 🚛💨"
                points={5}
                time="5h ago"
              />
            </div>
          </section>

          {/* 2. Reported Garbage Issues (Admin Monitoring) */}
          <section className="space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-4 bg-red-500 rounded-full"></div>
              Reported Garbage Issues
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ReportCard 
                location="Hostel Block A - Rear Entrance"
                reporter="Anita Desai"
                severity="High"
                status="Reported"
                image="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=400&q=80"
                time="45m ago"
              />
              <ReportCard 
                location="Cafeteria Main Deck"
                reporter="Karthik R."
                severity="Medium"
                status="Resolved"
                image="https://images.unsplash.com/photo-1605600611220-b796b44d1100?auto=format&fit=crop&w=400&q=80"
                time="3h ago"
              />
            </div>
          </section>

        </div>

        {/* Sidebar: Chat & Leaderboard (4 columns) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* 3. Community Discussion (Read Only) */}
          <section className="space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-4 bg-blue-500 rounded-full"></div>
              Discussion (Read Only)
            </h3>
            <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm h-[320px] flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                <ChatMessage user="Rahul S." message="Overflowing bin near library foyer. Need attention!" time="10:15" />
                <ChatMessage user="Staff Member" message="Acknowledged. Team is on the way." time="10:20" />
                <ChatMessage user="Anita D." message="Cleanup drive at 4 PM today. Meet at central park!" time="11:05" />
                <ChatMessage user="Siddharth" message="Reported some plastic litter near cafeteria." time="11:30" />
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase italic">Admin Monitor Mode • Messaging Disabled</p>
              </div>
            </div>
          </section>

          {/* 4. Eco Leaderboard */}
          <section className="space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-4 bg-amber-500 rounded-full"></div>
              Top Contributors
            </h3>
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
              <LeaderboardItem rank={1} name="Anita Desai" points={450} badge="Hero" />
              <LeaderboardItem rank={2} name="Karthik R." points={320} badge="Watcher" />
              <LeaderboardItem rank={3} name="CSE Hostel B" points={210} badge="Unit" />
              <div className="pt-4 border-t border-slate-100 text-center">
                <p className="text-[9px] text-slate-400 font-bold uppercase leading-relaxed">
                  Eco-points are a gamified incentive<br/>planned for full deployment.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

const FeedCard: React.FC<{ user: string; role: string; content: string; type: string; points: number; time: string }> = ({ user, role, content, type, points, time }) => (
  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-md transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 font-black text-xs">
          {user.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-black text-slate-800">{user}</h4>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{role}</span>
            <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full ${
              type === 'Awareness' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 
              type === 'Update' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-red-50 text-red-600 border border-red-100'
            }`}>
              {type}
            </span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-slate-400 font-medium italic block">{time}</span>
        <span className="text-[10px] font-black text-emerald-600 mt-1 block">+{points} Points</span>
      </div>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed">{content}</p>
  </div>
);

const ReportCard: React.FC<{ location: string; reporter: string; severity: string; status: string; image: string; time: string }> = ({ location, reporter, severity, status, image, time }) => (
  <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-md transition-all">
    <div className="h-32 bg-slate-200 relative">
      <img src={image} alt="Reported garbage" className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-md shadow-sm border ${
          severity === 'High' ? 'bg-red-600 text-white border-red-700' : 'bg-amber-500 text-white border-amber-600'
        }`}>
          {severity} Severity
        </span>
      </div>
    </div>
    <div className="p-4 space-y-3">
      <div>
        <h4 className="text-xs font-black text-slate-800 leading-tight">{location}</h4>
        <p className="text-[10px] font-medium text-slate-400 mt-0.5">Reported by {reporter} • {time}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full ${status === 'Resolved' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{status}</span>
        </div>
        <button className="text-[9px] font-black text-emerald-600 uppercase tracking-widest hover:underline">View Detail</button>
      </div>
    </div>
  </div>
);

const ChatMessage: React.FC<{ user: string; message: string; time: string }> = ({ user, message, time }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between">
      <span className="text-[10px] font-black text-slate-800">{user}</span>
      <span className="text-[9px] text-slate-400 font-medium">{time}</span>
    </div>
    <div className="bg-slate-50 border border-slate-100 rounded-2xl px-4 py-2 text-xs text-slate-600 leading-relaxed">
      {message}
    </div>
  </div>
);

const LeaderboardItem: React.FC<{ rank: number; name: string; points: number; badge: string }> = ({ rank, name, points, badge }) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center gap-3">
      <span className="text-xs font-black text-slate-300 w-4">#{rank}</span>
      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-600">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="text-xs font-black text-slate-800">{name}</h4>
        <p className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">{badge}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-[10px] font-black text-slate-800">{points} pts</p>
    </div>
  </div>
);
