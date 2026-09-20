import React, { useState } from 'react';
import { 
  ArrowDown, 
  Copy, 
  Check, 
  MapPin, 
  ExternalLink, 
  Smartphone 
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero({ onShowToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast(`Email copied: ${personalData.email}`);
    }
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <section id="hero" className="section-wrapper hero-section">
      <div className="site-container">
        {/* Availability & Location Badges */}
        <div className="hero-badge-row">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>{personalData.availability}</span>
          </div>
          <div className="hero-location">
            <MapPin size={14} />
            <span>{personalData.location}</span>
          </div>
        </div>

        {/* Main Engineer Headline */}
        <h1 className="hero-title">
          Building Fluid, Scalable & <br />
          <span className="text-gradient">High-Performance Mobile Apps.</span>
        </h1>

        {/* Bio / Value Proposition */}
        <p className="hero-bio">
          Hi, I am <strong style={{ color: 'var(--text-primary)' }}>{personalData.name}</strong> ({personalData.nickname}) — {personalData.role}. {personalData.tagline}
        </p>

        {/* Core Tech Stack */}
        <div className="hero-tech-strip">
          <span className="hero-tech-label">Core Stack:</span>
          {['Flutter', 'Dart', 'BLoC', 'Riverpod', 'Clean Architecture', 'REST APIs', 'Firebase', 'Isar'].map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span>Explore Featured Apps</span>
            <ArrowDown size={16} />
          </a>

          <button 
            type="button" 
            onClick={handleCopyEmail} 
            className="btn btn-secondary"
            title="Copy email to clipboard"
          >
            {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
            <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
          </button>

          <a 
            href={personalData.github} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-ghost"
          >
            <span>GitHub Profile</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="hero-metrics-grid">
          {personalData.metrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-detail">{metric.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
