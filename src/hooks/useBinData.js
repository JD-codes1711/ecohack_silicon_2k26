import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export function useBinData() {
  const [bins, setBins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBins = async () => {
      try {
        setLoading(true);
        const data = await apiService.getBins();
        setBins(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch bins:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBins();
  }, []);

  const updateBinStatus = async (binId, status) => {
    try {
      await apiService.updateBinStatus(binId, status);
      // Refresh bins after update
      const updatedBins = await apiService.getBins();
      setBins(updatedBins);
    } catch (err) {
      setError(err.message);
      console.error('Failed to update bin status:', err);
    }
  };

  return { bins, loading, error, updateBinStatus };
}
