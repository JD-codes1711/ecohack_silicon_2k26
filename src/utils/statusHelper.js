// Helper functions for status management

export const statusColors = {
  full: '#FF5252',
  warning: '#FFC107',
  normal: '#4CAF50',
  empty: '#9E9E9E',
  error: '#F44336',
};

export const statusLabels = {
  full: 'Full',
  warning: 'Warning',
  normal: 'Normal',
  empty: 'Empty',
  error: 'Error',
};

export const getStatusByPercentage = (percentage) => {
  if (percentage >= 90) return 'full';
  if (percentage >= 70) return 'warning';
  if (percentage >= 30) return 'normal';
  if (percentage > 0) return 'empty';
  return 'error';
};

export const getStatusColor = (status) => {
  return statusColors[status] || statusColors.normal;
};

export const getStatusLabel = (status) => {
  return statusLabels[status] || 'Unknown';
};

export const formatPercentage = (percentage) => {
  return `${Math.round(percentage)}%`;
};

export const isStatusCritical = (status) => {
  return status === 'full' || status === 'error';
};
