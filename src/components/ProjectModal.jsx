import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  ShieldAlert, 
  Layers 
} from 'lucide-react';
import { GithubIcon } from './TechIcons';

export default function ProjectModal({ project, onClose }) {
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close case study dialog"
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

        {/* Problem vs Solution Section */}
        <div className="modal-section">
          <div className="modal-section-title">
            <ShieldAlert size={16} />
            <span>Challenge & Problem Statement</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '14px', fontSize: '0.92rem', lineHeight: '1.6' }}>
            {project.problem}
          </p>

          <div className="modal-section-title">
            <Cpu size={16} />
            <span>Engineering Approach & Architecture</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
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
                <li key={idx}>{point}</li>
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

        {/* Action Footer */}
        <div className="project-actions" style={{ marginTop: '24px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <span>Live Preview / Repo</span>
                <ExternalLink size={14} />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={14} />
                <span>Source Code</span>
              </a>
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
  );
}
