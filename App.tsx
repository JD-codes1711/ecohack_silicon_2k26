
import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { SRSViewer } from './components/SRSViewer';
import { FutureScope } from './components/FutureScope';
import { CommunityHub } from './components/Community';
import { AwarenessEducation } from './components/Education';
import { LandingPage } from './landing/LandingPage';
import { LoginPage } from './auth/LoginPage';
import { SignupPage } from './auth/SignupPage';
import { ChatbotAssistant } from './chatbot/ChatbotAssistant';
import { ProjectPitch } from './components/ProjectPitch';
import { NavigationPage, WasteBin, SystemLog } from './types';
import { MOCK_BINS } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);
  const [currentPage, setCurrentPage] = useState<NavigationPage>(NavigationPage.LANDING);
  
  // Single Source of Truth for the Active Bin
  const [activeBin, setActiveBin] = useState<WasteBin>({
    ...MOCK_BINS[0],
    distance: 12.4,
    lastUpdated: new Date(),
    isOnline: true
  });
  
  const [logs, setLogs] = useState<SystemLog[]>([]);

  // Auth Persistence Check
  useEffect(() => {
    const session = sessionStorage.getItem('smart_campus_auth');
    if (session) {
      const userData = JSON.parse(session);
      setCurrentUser(userData);
      setIsAuthenticated(true);
      setCurrentPage(NavigationPage.DASHBOARD);
    }
  }, []);

  const handleLogin = (userData: { name: string; email: string }) => {
    sessionStorage.setItem('smart_campus_auth', JSON.stringify(userData));
    setCurrentUser(userData);
    setIsAuthenticated(true);
    setCurrentPage(NavigationPage.DASHBOARD);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('smart_campus_auth');
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentPage(NavigationPage.LANDING);
  };

  const addLog = useCallback((message: string, type: 'info' | 'warning' | 'success' | 'error') => {
    const newLog: SystemLog = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      message,
      type
    };
    setLogs(prev => [newLog, ...prev].slice(0, 10));
  }, []);

  // System Health & Connection Simulation for BIN-001
  useEffect(() => {
    if (!isAuthenticated) return;
    const POLL_INTERVAL = 5000; 
    const DISCONNECT_THRESHOLD = 30000; 

    const checkConnectivity = () => {
      const now = new Date();
      const timeSinceLastUpdate = now.getTime() - activeBin.lastUpdated.getTime();
      const shouldBeOffline = timeSinceLastUpdate > DISCONNECT_THRESHOLD;
      
      if (shouldBeOffline && activeBin.isOnline) {
        addLog(`Sensor ${activeBin.id} connection timeout. Check network mesh.`, 'error');
        setActiveBin(prev => ({ ...prev, isOnline: false }));
      } else if (!shouldBeOffline && !activeBin.isOnline) {
        addLog(`Sensor ${activeBin.id} re-established connection.`, 'success');
        setActiveBin(prev => ({ ...prev, isOnline: true }));
      }
    };

    const interval = setInterval(checkConnectivity, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [addLog, isAuthenticated, activeBin.id, activeBin.lastUpdated, activeBin.isOnline]);

  // Live Telemetry Simulation for BIN-001
  useEffect(() => {
    if (!isAuthenticated) return;
    const demoInterval = setInterval(() => {
      setActiveBin(prev => {
        // Random fluctuation in fill level
        const delta = (Math.random() * 2 - 0.8); // Slightly bias towards filling
        const newFill = Math.min(100, Math.max(0, prev.fillLevel + delta));
        const newDistance = parseFloat((20 * (1 - newFill/100)).toFixed(2));
        
        if (Math.random() > 0.7) {
          addLog(`[TELEMETRY] ${prev.id} sync successful. Fill: ${Math.round(newFill)}%`, 'info');
        }

        return {
          ...prev,
          fillLevel: Math.round(newFill),
          distance: newDistance,
          lastUpdated: new Date(),
          isOnline: true
        };
      });
    }, 4000);
    return () => clearInterval(demoInterval);
  }, [isAuthenticated, addLog]);

  const renderContent = () => {
    if (!isAuthenticated) {
      switch (currentPage) {
        case NavigationPage.LOGIN:
          return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
        case NavigationPage.SIGNUP:
          return <SignupPage onSignup={handleLogin} onNavigate={setCurrentPage} />;
        case NavigationPage.PROJECT_PITCH:
          return (
            <div className="min-h-screen bg-slate-50 flex flex-col">
              <nav className="p-6 lg:px-12 flex justify-between items-center bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <span className="font-black text-xl text-slate-900 tracking-tight uppercase">Smart Campus</span>
                </div>
                <button 
                  onClick={() => setCurrentPage(NavigationPage.LANDING)}
                  className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-emerald-900/20"
                >
                  Back to Landing
                </button>
              </nav>
              <div className="p-8"><ProjectPitch /></div>
            </div>
          );
        case NavigationPage.LANDING:
        default:
          return <LandingPage onNavigate={setCurrentPage} />;
      }
    }

    switch (currentPage) {
      case NavigationPage.DASHBOARD:
        return <Dashboard bin={activeBin} logs={logs} />;
      case NavigationPage.PROJECT_PITCH:
        return <ProjectPitch />;
      case NavigationPage.COMMUNITY:
        return <CommunityHub />;
      case NavigationPage.EDUCATION:
        return <AwarenessEducation />;
      case NavigationPage.SRS:
        return <SRSViewer />;
      case NavigationPage.USERS:
      case NavigationPage.REPORTS:
      case NavigationPage.SETTINGS:
        return <FutureScope page={currentPage} />;
      default:
        return <Dashboard bin={activeBin} logs={logs} />;
    }
  };

  if (isAuthenticated) {
    return (
      <div className="flex h-screen bg-slate-50 overflow-hidden">
        <Sidebar 
          currentPage={currentPage} 
          onNavigate={setCurrentPage} 
        />
        <div className="flex-1 flex flex-col min-w-0 relative">
          <Header 
            activePage={currentPage} 
            systemOnline={activeBin.isOnline}
            userName={currentUser?.name}
            onLogout={handleLogout}
          />
          <main className="flex-1 overflow-y-auto p-4 lg:p-8">
            {renderContent()}
          </main>
          <footer className="bg-white border-t border-slate-200 p-4 text-center text-xs text-slate-500">
            <p>© 2024 Smart Campus • Admin: {currentUser?.name} • Active Node: {activeBin.id}</p>
          </footer>
          <ChatbotAssistant />
        </div>
      </div>
    );
  }

  return <>{renderContent()}</>;
};

export default App;
