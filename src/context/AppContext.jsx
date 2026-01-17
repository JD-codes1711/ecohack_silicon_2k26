import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [simulationActive, setSimulationActive] = useState(false);
  const [selectedBin, setSelectedBin] = useState(null);
  const [theme, setTheme] = useState('light');

  const value = {
    simulationActive,
    setSimulationActive,
    selectedBin,
    setSelectedBin,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
