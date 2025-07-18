import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser } from '../utils/api';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'ngo' | 'volunteer'; // you can add more roles if backend supports
  avatar?: string;
  phone?: string;
  organization?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: Partial<User> & { email: string; password: string }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user and token from localStorage on app start
    const storedUser = localStorage.getItem('straysafe_user');
    const storedToken = localStorage.getItem('straysafe_token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      // Optionally: verify token validity here or refresh token if backend supports it
    }
    setIsLoading(false);
  }, []);

  const mapBackendUserToUser = (data: any): User => ({
    id: data._id,
    name: data.name,
    email: data.email,
    role: data.role || 'citizen', // default role if backend does not send role
    avatar: data.avatar,
    phone: data.phone,
    organization: data.organization,
  });

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const data = await loginUser({ email, password });
      const mappedUser = mapBackendUserToUser(data);

      localStorage.setItem('straysafe_token', data.token);
      localStorage.setItem('straysafe_user', JSON.stringify(mappedUser));
      setUser(mappedUser);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: Partial<User> & { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const data = await registerUser(userData);
      const mappedUser = mapBackendUserToUser(data);

      localStorage.setItem('straysafe_token', data.token);
      localStorage.setItem('straysafe_user', JSON.stringify(mappedUser));
      setUser(mappedUser);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('straysafe_user');
    localStorage.removeItem('straysafe_token');
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
