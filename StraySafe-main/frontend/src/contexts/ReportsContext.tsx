import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchReports, createReport } from '../utils/api'; // your api calls

export interface Location {
  lat: number;
  lng: number;
  address?: string;
}

export interface StrayReport {
  id: string;
  title: string;
  description: string;
  location: Location;
  photos: string[];
  status: 'reported' | 'in-progress' | 'resolved'; // match your backend enums
  urgency: 'low' | 'medium' | 'high' | 'critical';
  tags: string[];
  reportedBy: string;
  createdAt: string; // Use ISO string for consistency with backend
  updatedAt: string;
  assignedNGO?: string;
  updates: Array<{
    id: string;
    message: string;
    timestamp: string;
    author: string;
    photos?: string[];
  }>;
}

interface ReportsContextType {
  reports: StrayReport[];
  addReport: (report: Omit<StrayReport, 'id' | 'createdAt' | 'updatedAt' | 'updates'>) => Promise<void>;
  updateReport: (id: string, updates: Partial<StrayReport>) => void; // implement backend update later
  addUpdate: (reportId: string, update: Omit<StrayReport['updates'][0], 'id' | 'timestamp'>) => void; // backend update later
  getReportById: (id: string) => StrayReport | undefined;
  getNearbyReports: (location: Location, radius: number) => StrayReport[];
}

const ReportsContext = createContext<ReportsContextType | undefined>(undefined);

export const useReports = () => {
  const context = useContext(ReportsContext);
  if (!context) {
    throw new Error('useReports must be used within a ReportsProvider');
  }
  return context;
};

// Optional fallback mock data
const mockReports: StrayReport[] = [
  // (You can keep your existing mockReports here if you want fallback)
];

export const ReportsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reports, setReports] = useState<StrayReport[]>(mockReports);

  // Fetch reports from backend when context loads
  useEffect(() => {
    const loadReports = async () => {
      try {
        const data = await fetchReports();
        setReports(data);
      } catch (error) {
        console.error('Failed to fetch reports from API, using fallback mock data.', error);
        setReports(mockReports); // optional: fallback to mock
      }
    };
    loadReports();
  }, []);

  // Add report via API, then update state
  const addReport = async (
    newReport: Omit<StrayReport, 'id' | 'createdAt' | 'updatedAt' | 'updates'>
  ) => {
    try {
      const token = localStorage.getItem('straysafe_token');
      if (!token) throw new Error('Authentication token missing');

      const createdReport = await createReport(newReport, token);
      setReports(prev => [createdReport, ...prev]);
    } catch (error) {
      console.error('Failed to add report', error);
      throw error; // so UI can show error message
    }
  };

  // TODO: Implement backend update for reports
  const updateReport = (id: string, updates: Partial<StrayReport>) => {
    setReports(prev =>
      prev.map(report => (report.id === id ? { ...report, ...updates, updatedAt: new Date().toISOString() } : report))
    );
  };

  // TODO: Implement backend update for adding report updates
  const addUpdate = (
    reportId: string,
    update: Omit<StrayReport['updates'][0], 'id' | 'timestamp'>
  ) => {
    setReports(prev =>
      prev.map(report =>
        report.id === reportId
          ? {
              ...report,
              updates: [
                ...report.updates,
                { ...update, id: Date.now().toString(), timestamp: new Date().toISOString() },
              ],
              updatedAt: new Date().toISOString(),
            }
          : report
      )
    );
  };

  const getReportById = (id: string) => reports.find(report => report.id === id);

  const getNearbyReports = (location: Location, radius: number) => {
    // Simple Euclidean distance calculation
    return reports.filter(report => {
      const distance = Math.sqrt(
        Math.pow(report.location.lat - location.lat, 2) + Math.pow(report.location.lng - location.lng, 2)
      );
      return distance <= radius;
    });
  };

  const value: ReportsContextType = {
    reports,
    addReport,
    updateReport,
    addUpdate,
    getReportById,
    getNearbyReports,
  };

  return <ReportsContext.Provider value={value}>{children}</ReportsContext.Provider>;
};
