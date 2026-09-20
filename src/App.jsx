import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { CheckCircle2 } from 'lucide-react';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [modalConfig, setModalConfig] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleOpenProject = (project, tab = 'details') => {
    setModalConfig({ project, initialTab: tab });
  };

  return (
    <div className="portfolio-app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero onShowToast={showToast} />
        <ProjectsSection onSelectProject={handleOpenProject} />
        <ExperienceSection />
        <ContactSection onShowToast={showToast} />
      </main>

      <Footer />

      {modalConfig && (
        <ProjectModal 
          project={modalConfig.project} 
          initialTab={modalConfig.initialTab}
          onClose={() => setModalConfig(null)} 
        />
      )}

      {toastMessage && (
        <div className="toast-notice" role="status" aria-live="polite">
          <CheckCircle2 size={18} color="#38bdf8" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}