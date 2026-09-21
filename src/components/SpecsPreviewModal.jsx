import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './TechIcons';
import { useLanguage } from '../context/LanguageContext';

export default function SpecsPreviewModal({ project, onClose, onOpenCaseStudy }) {
  const { t } = useLanguage();

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const highlights = project.highlights || project.architecturePoints || [];

  return (
    <div className="specs-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="specs-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button Top Right */}
        <button 
          type="button" 
          className="specs-modal-close-btn" 
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="specs-modal-header">
          <div className="specs-badge-row">
            <span className="card-badge-category">{project.categoryLabel}</span>
            <span className="specs-header-year">{project.year}</span>
          </div>
          <h2 className="specs-modal-title">{project.title}</h2>
        </div>

        {/* SECTION 1: PROJECT SUMMARY & OVERVIEW */}
        <div className="specs-section">
          <h3 className="specs-section-label">{t('specsModal.summaryOverview')}</h3>
          <p className="specs-summary-text">{project.summary}</p>
        </div>

        <div className="specs-divider" />

        {/* SECTION 2: KEY ARCHITECTURAL HIGHLIGHTS */}
        <div className="specs-section">
          <h3 className="specs-section-label">{t('specsModal.archHighlights')}</h3>
          <ul className="specs-highlights-list">
            {highlights.map((item, idx) => (
              <li key={idx} className="specs-highlight-item">
                <CheckCircle2 size={16} className="specs-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="specs-divider" />

        {/* SECTION 3: TECHNOLOGY STACK & TAGS */}
        <div className="specs-section">
          <h3 className="specs-section-label">{t('specsModal.techStackTags')}</h3>
          <div className="specs-tags-row">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="specs-modal-footer">
          <div className="specs-footer-actions">
            {project.github && project.github !== '#' && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary btn-sm specs-github-btn"
                title="View GitHub Repository"
              >
                <GithubIcon size={15} />
                <span>{t('specsModal.btnGithub')}</span>
              </a>
            )}

            <button 
              type="button" 
              className="btn btn-primary btn-sm specs-case-study-cta"
              onClick={() => onOpenCaseStudy(project)}
            >
              <span>{t('specsModal.btnFullCaseStudy')}</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

