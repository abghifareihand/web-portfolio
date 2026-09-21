import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SpecsPreviewModal from './components/SpecsPreviewModal';
import CaseStudyPage from './components/CaseStudyPage';
import FullscreenLightbox from './components/FullscreenLightbox';
import { CheckCircle2 } from 'lucide-react';
import { projectsData } from './data/portfolioData';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [specsModalProject, setSpecsModalProject] = useState(null);
  const [lightboxConfig, setLightboxConfig] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle URL hash changes (e.g. #case-study/quickbite-ecosystem)
  const syncHashToState = useCallback(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#case-study/')) {
      const pid = hash.replace('#case-study/', '');
      const found = projectsData.find((p) => p.id === pid);
      if (found) {
        setActiveCaseStudy(found);
        setSpecsModalProject(null);
        return;
      }
    }
    setActiveCaseStudy(null);
  }, []);

  useEffect(() => {
    syncHashToState();
    window.addEventListener('hashchange', syncHashToState);
    return () => window.removeEventListener('hashchange', syncHashToState);
  }, [syncHashToState]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleOpenCaseStudy = (project) => {
    setSpecsModalProject(null);
    setActiveCaseStudy(project);
    window.location.hash = `case-study/${project.id}`;
  };

  const handleBackToProjects = () => {
    setActiveCaseStudy(null);
    window.history.pushState(null, '', window.location.pathname + '#projects');
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        onBrandClick={() => {
          if (activeCaseStudy) {
            handleBackToProjects();
          }
        }}
      />

      <main>
        {activeCaseStudy ? (
          <CaseStudyPage 
            project={activeCaseStudy}
            onBack={handleBackToProjects}
            onOpenLightbox={(proj, idx) => setLightboxConfig({ project: proj, initialIndex: idx })}
          />
        ) : (
          <>
            <Hero onShowToast={showToast} />
            <ProjectsSection 
              onOpenSpecs={(p) => setSpecsModalProject(p)}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
            <ExperienceSection />
            <ContactSection onShowToast={showToast} />
          </>
        )}
      </main>

      <Footer />

      {/* QUICK SPECS PREVIEW MODAL (GAMBAR 2) */}
      {specsModalProject && (
        <SpecsPreviewModal 
          project={specsModalProject}
          onClose={() => setSpecsModalProject(null)}
          onOpenCaseStudy={handleOpenCaseStudy}
        />
      )}

      {/* FULLSCREEN HD LIGHTBOX WITH ZOOM, PAN, AND SWIPE */}
      {lightboxConfig && (
        <FullscreenLightbox 
          project={lightboxConfig.project}
          initialIndex={lightboxConfig.initialIndex}
          onClose={() => setLightboxConfig(null)}
        />
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="toast-notice" role="status" aria-live="polite">
          <CheckCircle2 size={18} color="#38bdf8" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
