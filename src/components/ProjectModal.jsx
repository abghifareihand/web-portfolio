import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  ShieldAlert, 
  Layers,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Image as ImageIcon,
  FileText,
  Lock,
  Smartphone
} from 'lucide-react';
import { GithubIcon } from './TechIcons';

export default function ProjectModal({ project, initialTab = 'details', onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab || 'details');
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Touch swipe states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const screenshots = project?.screenshots || [];
  const hasScreenshots = screenshots.length > 0;

  useEffect(() => {
    setActiveTab(initialTab || 'details');
    setActiveImageIdx(0);
    setIsFullscreen(false);
  }, [project, initialTab]);

  // Handle ESC and Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
      if (hasScreenshots) {
        if (e.key === 'ArrowRight') {
          setActiveImageIdx((prev) => (prev + 1) % screenshots.length);
        } else if (e.key === 'ArrowLeft') {
          setActiveImageIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isFullscreen, hasScreenshots, screenshots.length]);

  if (!project) return null;

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIdx((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      // Swiped left -> next
      nextImage();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      prevImage();
    }
  };

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
        <div 
          className={`modal-content ${activeTab === 'screenshots' ? 'modal-content-wide' : ''}`} 
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>

          {/* Modal Header */}
          <div className="modal-header">
            <div className="modal-badge-row">
              <span className="project-category">{project.categoryLabel}</span>
              <span className="project-status">{project.year} • {project.status}</span>
            </div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="project-summary">{project.summary}</p>
          </div>

          {/* TAB SWITCHER */}
          <div className="modal-tab-nav">
            <button
              type="button"
              className={`modal-tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              <FileText size={15} />
              <span>Project Details & Architecture</span>
            </button>

            <button
              type="button"
              className={`modal-tab-btn ${activeTab === 'screenshots' ? 'active' : ''}`}
              onClick={() => setActiveTab('screenshots')}
            >
              <ImageIcon size={15} />
              <span>App Screenshots ({screenshots.length})</span>
            </button>
          </div>

          {/* TAB 1: PROJECT DETAILS (NO SCREENSHOTS) */}
          {activeTab === 'details' && (
            <div className="modal-details-view">
              {/* Problem vs Solution Section */}
              <div className="modal-section">
                <div className="modal-section-title">
                  <ShieldAlert size={16} />
                  <span>Challenge & Problem Statement</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.94rem', lineHeight: '1.65' }}>
                  {project.problem}
                </p>

                <div className="modal-section-title">
                  <Cpu size={16} />
                  <span>Engineering Approach & Architecture</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.65' }}>
                  {project.solution}
                </p>
              </div>

              {/* Impact & Key Metrics */}
              <div className="modal-section">
                <div className="modal-section-title">
                  <CheckCircle2 size={16} />
                  <span>Measurable Impact & Metrics</span>
                </div>
                <div className="metric-pill-row">
                  {project.keyMetrics.map((metric, i) => (
                    <div key={i} className="metric-pill">
                      <CheckCircle2 size={16} />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Points */}
              <div className="modal-section">
                <div className="modal-section-title">
                  <Layers size={16} />
                  <span>Core Patterns & System Design</span>
                </div>
                <div className="project-arch-box">
                  <ul className="arch-box-list">
                    {project.architecturePoints.map((point, idx) => (
                      <li key={idx}>
                        <span className="arch-bullet-icon">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Breakdown */}
              <div className="modal-section">
                <div className="modal-section-title">
                  <span>Stack & Dependencies</span>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SCREENSHOTS GALLERY */}
          {activeTab === 'screenshots' && (
            <div className="modal-gallery-view">
              {hasScreenshots ? (
                <div className="modal-gallery-wrapper">
                  {/* Gallery Viewport with Swipe Support */}
                  <div 
                    className="gallery-main-view"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <img 
                      src={screenshots[activeImageIdx]} 
                      alt={`${project.title} Screenshot ${activeImageIdx + 1}`}
                      className="gallery-active-img"
                      onClick={() => setIsFullscreen(true)}
                      title="Click to view full size zoom"
                    />

                    {/* Navigation Prev / Next */}
                    {screenshots.length > 1 && (
                      <>
                        <button 
                          type="button"
                          className="gallery-nav-btn prev-btn" 
                          onClick={prevImage}
                          aria-label="Previous screenshot"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button 
                          type="button"
                          className="gallery-nav-btn next-btn" 
                          onClick={nextImage}
                          aria-label="Next screenshot"
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    )}

                    {/* Top Bar on Image: Counter & Zoom */}
                    <div className="gallery-top-bar">
                      <span className="gallery-counter">
                        <Smartphone size={13} />
                        <span>Screenshot {activeImageIdx + 1} of {screenshots.length}</span>
                      </span>
                      <button 
                        type="button"
                        className="gallery-zoom-btn"
                        onClick={() => setIsFullscreen(true)}
                        title="Open Fullscreen HD Zoom"
                      >
                        <Maximize2 size={13} />
                        <span>Zoom Fullscreen</span>
                      </button>
                    </div>

                    <div className="gallery-swipe-hint">
                      <span>Click image to zoom • Swipe / Arrow keys to browse</span>
                    </div>
                  </div>

                  {/* Thumbnails Row */}
                  {screenshots.length > 1 && (
                    <div className="gallery-thumbnails">
                      {screenshots.map((imgUrl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`gallery-thumb-item ${activeImageIdx === idx ? 'active' : ''}`}
                          onClick={() => setActiveImageIdx(idx)}
                          title={`View screenshot ${idx + 1}`}
                        >
                          <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
                          <span className="thumb-idx">{idx + 1}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
                  <ImageIcon size={32} style={{ marginBottom: '8px', opacity: 0.5 }} />
                  <p>No screenshots uploaded yet for this project.</p>
                </div>
              )}
            </div>
          )}

          {/* Action Footer */}
          <div className="project-actions" style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary btn-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github ? (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary btn-sm"
                >
                  <GithubIcon size={14} />
                  <span>Source Code</span>
                </a>
              ) : (
                <span style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '0.8rem', 
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)' 
                }}>
                  <Lock size={13} />
                  <span>Private Client Project</span>
                </span>
              )}
            </div>
            <button 
              type="button" 
              onClick={onClose} 
              className="btn btn-ghost btn-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* FULLSCREEN / ZOOM LIGHTBOX WITH FULL SWIPE & NAVIGATION */}
      {isFullscreen && hasScreenshots && (
        <div 
          className="fullscreen-lightbox" 
          onClick={() => setIsFullscreen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar */}
          <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-title-box">
              <span className="lightbox-project-name">{project.title}</span>
              <span className="lightbox-counter">
                Screenshot {activeImageIdx + 1} / {screenshots.length}
              </span>
            </div>

            <div className="lightbox-actions">
              <span className="lightbox-shortcut-hint">Swipe or use ← → to browse</span>
              <button 
                className="lightbox-close-btn" 
                onClick={() => setIsFullscreen(false)}
                title="Close fullscreen (Esc)"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Left Arrow Button */}
          {screenshots.length > 1 && (
            <button 
              type="button"
              className="lightbox-arrow-btn lightbox-prev"
              onClick={prevImage}
              title="Previous screenshot (←)"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Main Large Image */}
          <div className="lightbox-image-container" onClick={(e) => e.stopPropagation()}>
            <img 
              src={screenshots[activeImageIdx]} 
              alt={`${project.title} Screenshot Fullscreen ${activeImageIdx + 1}`} 
              className="lightbox-image"
            />
          </div>

          {/* Right Arrow Button */}
          {screenshots.length > 1 && (
            <button 
              type="button"
              className="lightbox-arrow-btn lightbox-next"
              onClick={nextImage}
              title="Next screenshot (→)"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Bottom Thumbnails Strip */}
          {screenshots.length > 1 && (
            <div className="lightbox-bottom-strip" onClick={(e) => e.stopPropagation()}>
              {screenshots.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`lightbox-thumb ${activeImageIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveImageIdx(idx)}
                  title={`View screenshot ${idx + 1}`}
                >
                  <img src={imgUrl} alt={`Thumb ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}