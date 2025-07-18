// src/utils/api.ts

const BASE_URL = "http://localhost:5000/api"; // Change when deploying to Render

// Interfaces
interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface ReportData {
  title: string;
  description: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  tags: string[];
  photos: string[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  reportedBy: string;
}

// Login user
export const loginUser = async (credentials: LoginCredentials) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return await response.json();
};

// Register user
export const registerUser = async (data: RegisterData) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return await response.json();
};

// Create report (requires auth token)
export const createReport = async (data: ReportData, token: string) => {
  const response = await fetch(`${BASE_URL}/reports`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create report");
  }

  return await response.json();
};

// Fetch all reports
export const fetchReports = async () => {
  const response = await fetch(`${BASE_URL}/reports`);
  if (!response.ok) {
    throw new Error("Failed to fetch reports");
  }
  return await response.json();
};
