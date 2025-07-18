import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ReportPage } from './pages/ReportPage';
import { MapPage } from './pages/MapPage';
import { TrackingPage } from './pages/TrackingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NGOPage } from './pages/NGOPage';
import { AuthProvider } from './contexts/AuthContext';
import { ReportsProvider } from './contexts/ReportsContext';

function App() {
  return (
    <AuthProvider>
      <ReportsProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-warm-50 to-earth-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/report" element={<ReportPage />} />
              
              <Route path="/tracking" element={<TrackingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/ngo" element={<NGOPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ReportsProvider>
    </AuthProvider>
  );
}

export default App;