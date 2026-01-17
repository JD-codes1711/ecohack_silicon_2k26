
export enum BinStatus {
  EMPTY = 'Empty',
  MEDIUM = 'Medium',
  FULL = 'Full',
  DISCONNECTED = 'Disconnected'
}

export interface WasteBin {
  id: string;
  location: string;
  fillLevel: number; 
  distance: number; 
  lastUpdated: Date;
  batteryLevel: number;
  isOnline: boolean; 
}

export interface SystemLog {
  id: string;
  timestamp: Date;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
}

export enum NavigationPage {
  LANDING = 'Landing',
  LOGIN = 'Login',
  SIGNUP = 'Signup',
  PROJECT_PITCH = 'Project Pitch',
  DASHBOARD = 'Dashboard',
  COMMUNITY = 'Community Hub',
  EDUCATION = 'Awareness & Education',
  SRS = 'System Documentation (SRS)',
  USERS = 'Users',
  REPORTS = 'Reports',
  SETTINGS = 'Settings'
}
