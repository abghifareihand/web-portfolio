import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Tag, 
  Lock, 
  ExternalLink, 
  Maximize2, 
  Link2 
} from 'lucide-react';
import { GithubIcon } from './TechIcons';
import { useLanguage } from '../context/LanguageContext';

export default function CaseStudyPage({ project, onBack, onOpenLightbox }) {
  const { t } = useLanguage();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  if (!project) return null;

  const highlights = project.highlights || project.architecturePoints || [];
  const screenshots = project.screenshots || [];
  const coverImg = project.coverImage || (screenshots.length > 0 ? screenshots[0] : '');

  return (
    <div className="case-study-page">
      <div className="site-container">
        {/* Top Back Button */}
        <div className="case-study-top-nav">
          <button 
            type="button" 
            className="case-study-back-btn" 
            onClick={onBack}
            title={t('caseStudy.backBtn')}
          >
            <ArrowLeft size={16} />
            <span>{t('caseStudy.backBtn')}</span>
          </button>
        </div>

        {/* HERO HEADER CARD (GAMBAR 3) */}
        <div className="case-study-hero-card">
          {/* Background image & gradient overlay */}
          <div 
            className="case-study-hero-bg" 
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <div className="case-study-hero-overlay" />

          {/* Hero Content */}
          <div className="case-study-hero-content">
            <div className="case-study-hero-badge-row">
              <span className="card-badge-category">{project.categoryLabel}</span>
              <span className="case-study-badge-year">{project.year}</span>
            </div>

            <h1 className="case-study-hero-title">{project.title}</h1>
            <p className="case-study-hero-desc">{project.summary}</p>

            <div className="case-study-hero-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill tag-pill-hero">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2-COLUMN CONTENT SECTION (GAMBAR 4) */}
        <div className="case-study-content-grid">
          {/* MAIN LEFT COLUMN */}
          <div className="case-study-main-col">
            {/* Card 1: PROJECT OVERVIEW */}
            <div className="case-study-section-card">
              <div className="case-study-section-title-box">
                <span className="title-vertical-bar" />
                <h2 className="case-study-section-heading">{t('caseStudy.projectOverview')}</h2>
              </div>
              <div className="case-study-overview-body">
                {Array.isArray(project.overview) ? (
                  project.overview.map((para, idx) => (
                    <p key={idx} className="case-study-overview-paragraph">
                      {para}
                    </p>
                  ))
                ) : project.overview ? (
                  <p className="case-study-overview-paragraph">{project.overview}</p>
                ) : (
                  <>
                    {project.problem && <p className="case-study-overview-paragraph">{project.problem}</p>}
                    {project.solution && <p className="case-study-overview-paragraph">{project.solution}</p>}
                  </>
                )}
              </div>
            </div>

            {/* Card 2: KEY FEATURES */}
            <div className="case-study-section-card">
              <div className="case-study-section-title-box">
                <span className="title-vertical-bar" />
                <h2 className="case-study-section-heading">{t('caseStudy.keyFeatures')}</h2>
              </div>

              <div className="case-study-features-grid">
                {highlights.map((item, idx) => (
                  <div key={idx} className="feature-card-item">
                    <CheckCircle2 size={18} className="feature-check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR RIGHT COLUMN */}
          <aside className="case-study-sidebar-col">
            {/* Card 1: PROJECT LINKS */}
            <div className="sidebar-card">
              <div className="sidebar-card-header">
                <Link2 size={16} className="sidebar-header-icon" />
                <h3 className="sidebar-title">{t('caseStudy.projectLinks')}</h3>
              </div>
              <div className="sidebar-links-list">
                {project.github ? (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="sidebar-link-btn"
                  >
                    <div className="link-left">
                      <GithubIcon size={16} />
                      <span>{t('caseStudy.sourceCode')}</span>
                    </div>
                    <ArrowRight size={15} />
                  </a>
                ) : (
                  <div className="sidebar-private-note">
                    <Lock size={15} />
                    <span>{t('caseStudy.privateCode')}</span>
                  </div>
                )}

                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="sidebar-link-btn"
                  >
                    <div className="link-left">
                      <ExternalLink size={16} />
                      <span>{t('caseStudy.livePreview')}</span>
                    </div>
                    <ArrowRight size={15} />
                  </a>
                )}
              </div>
            </div>

            {/* Card 2: TECH STACK */}
            <div className="sidebar-card">
              <div className="sidebar-card-header">
                <Tag size={15} className="sidebar-header-icon" />
                <h3 className="sidebar-title">{t('caseStudy.techStack')}</h3>
              </div>
              <div className="sidebar-tags-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: PROJECT INFO */}
            <div className="sidebar-card">
              <div className="sidebar-card-header">
                <Layers size={15} className="sidebar-header-icon" />
                <h3 className="sidebar-title">{t('caseStudy.projectInfo')}</h3>
              </div>
              <div className="sidebar-info-table">
                <div className="info-row">
                  <span className="info-key">{t('caseStudy.category')}</span>
                  <span className="info-val">{project.categoryLabel}</span>
                </div>
                <div className="info-row">
                  <span className="info-key">{t('caseStudy.year')}</span>
                  <span className="info-val">{project.year}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* BOTTOM SECTION: SCREENSHOTS & PREVIEWS (GAMBAR 5) */}
        {screenshots.length > 0 && (
          <div className="case-study-screenshots-card">
            <div className="case-study-section-title-box" style={{ marginBottom: '24px' }}>
              <span className="title-vertical-bar" />
              <h2 className="case-study-section-heading">{t('caseStudy.screenshotsPreviews')}</h2>
            </div>

            <div className="screenshots-gallery-grid">
              {screenshots.map((imgUrl, idx) => (
                <div 
                  key={idx} 
                  className="case-study-screenshot-item"
                  onClick={() => onOpenLightbox(project, idx)}
                  title={t('caseStudy.inspectFullscreen')}
                >
                  <img src={imgUrl} alt={`${project.title} Preview ${idx + 1}`} />
                  <div className="screenshot-zoom-overlay">
                    <Maximize2 size={22} />
                    <span>{t('caseStudy.inspectFullscreen')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Back Button */}
        <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px' }}>
          <button 
            type="button" 
            className="case-study-back-btn" 
            onClick={onBack}
          >
            <ArrowLeft size={16} />
            <span>{t('caseStudy.backBtn')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

