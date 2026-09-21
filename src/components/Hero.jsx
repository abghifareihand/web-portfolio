import React, { useState } from 'react';
import { 
  FileText,
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './TechIcons';
import { getPersonalData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onShowToast }) {
  const { lang, t } = useLanguage();
  const personal = getPersonalData(lang);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast(`${t('hero.copiedEmail')}${personal.email}`);
    }
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <section id="about" className="section-wrapper hero-section">
      <div className="site-container">
        {/* Availability & Location Badges */}
        <div className="hero-badge-row">
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>{personal.availability}</span>
          </div>
        </div>

        {/* Main Engineer Headline */}
        <h1 className="hero-title">
          {t('hero.headlinePart1')} <br />
          <span className="text-gradient">{t('hero.headlinePart2')}</span>
        </h1>

        {/* Bio / Value Proposition */}
        <p className="hero-bio">
          {t('hero.greeting')} <strong style={{ color: 'var(--text-primary)' }}>{personal.name}</strong> — {personal.role}. {personal.tagline}
        </p>

        {/* Action Buttons: Primary CTA Row + Secondary Social Row */}
        <div className="hero-actions-container">
          {/* Row 1: Primary Action Button (Resume) */}
          <div className="hero-primary-action">
            <a 
              href={personal.resumeUrl || "#"} 
              target={personal.resumeUrl && personal.resumeUrl !== '#' ? "_blank" : undefined}
              rel="noreferrer" 
              className="btn btn-primary hero-resume-btn"
              onClick={(e) => {
                if (!personal.resumeUrl || personal.resumeUrl === '#') {
                  e.preventDefault();
                  if (onShowToast) onShowToast(t('hero.resumeNotLinked'));
                }
              }}
              title={t('hero.viewResume')}
            >
              <FileText size={16} />
              <span>{t('hero.viewResume')}</span>
              <ArrowUpRight size={15} className="resume-arrow-icon" />
            </a>
          </div>

          {/* Row 2: Secondary Social Links (GitHub & LinkedIn) */}
          <div className="hero-secondary-actions">
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary"
              title="View GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary"
              title="View LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="hero-metrics-grid">
          {personal.metrics.map((metric, idx) => (
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