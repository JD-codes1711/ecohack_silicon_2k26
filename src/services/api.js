// API service for handling all backend interactions
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const apiService = {
  // Bin related API calls
  getBins: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/bins`);
      if (!response.ok) throw new Error('Failed to fetch bins');
      return await response.json();
    } catch (error) {
      console.error('Error fetching bins:', error);
      throw error;
    }
  },

  getBinById: async (binId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bins/${binId}`);
      if (!response.ok) throw new Error('Failed to fetch bin');
      return await response.json();
    } catch (error) {
      console.error('Error fetching bin:', error);
      throw error;
    }
  },

  updateBinStatus: async (binId, status) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bins/${binId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Failed to update bin status');
      return await response.json();
    } catch (error) {
      console.error('Error updating bin status:', error);
      throw error;
    }
  },

  // Simulation related API calls
  startSimulation: async (params) => {
    try {
      const response = await fetch(`${API_BASE_URL}/simulation/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });
      if (!response.ok) throw new Error('Failed to start simulation');
      return await response.json();
    } catch (error) {
      console.error('Error starting simulation:', error);
      throw error;
    }
  },

  stopSimulation: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/simulation/stop`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Failed to stop simulation');
      return await response.json();
    } catch (error) {
      console.error('Error stopping simulation:', error);
      throw error;
    }
  },

  getSimulationStatus: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/simulation/status`);
      if (!response.ok) throw new Error('Failed to fetch simulation status');
      return await response.json();
    } catch (error) {
      console.error('Error fetching simulation status:', error);
      throw error;
    }
  },
};
