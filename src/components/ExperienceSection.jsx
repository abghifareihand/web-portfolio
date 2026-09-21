import React from 'react';
import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { getExperienceData, getEducationData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function ExperienceSection() {
  const { lang, t } = useLanguage();
  const experienceData = getExperienceData(lang);
  const educationData = getEducationData(lang);

  return (
    <section id="experience" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>{t('experience.tag')}</span>
          </div>
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-desc">
            {t('experience.desc')}
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-dot"></span>

              <div className="timeline-meta">
                <span className="timeline-period">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '5px' }} />
                  {item.period}
                </span>

                <span className="timeline-company-badge">
                  {item.company}
                </span>

                <span className="timeline-meta-type">
                  {item.location} &bull; {item.type}
                </span>
              </div>

              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-desc">{item.description}</p>

              {/* Achievements List */}
              <ul className="timeline-achievements">
                {item.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="project-tags">
                {item.stack.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Formal Education Card */}
        <div className="education-wrapper" style={{ marginTop: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <GraduationCap size={20} color="#38bdf8" />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              {t('experience.educationHeading')}
            </h3>
          </div>

          <div className="education-cards-grid">
            {educationData.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="education-card-header">
                  <div className="education-icon-box">
                    <GraduationCap size={24} color="#38bdf8" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="education-top-bar">
                      <div className="education-main-info">
                        <div className="education-name-row">
                          <h4 className="education-institution">{edu.institution}</h4>
                          {edu.location && (
                            <span className="education-location-pill">
                              <MapPin size={12} />
                              <span>{edu.location}</span>
                            </span>
                          )}
                        </div>

                        <div className="education-degree">
                          {edu.degree} &bull; <span className="education-major">{edu.major}</span>
                        </div>
                      </div>

                      <div className="education-badge-col">
                        <span className="status-pill education-status-pill">
                          <span className="status-dot"></span>
                          <span>{t('experience.graduated')} ({edu.period || "2019 – 2023"})</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="education-desc">
                  {edu.description}
                </p>

                <div className="project-tags" style={{ marginTop: '16px' }}>
                  {edu.highlights.map((topic) => (
                    <span key={topic} className="tech-chip" style={{ fontSize: '0.78rem' }}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}