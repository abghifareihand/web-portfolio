import React from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Journey & Background</span>
          </div>
          <h2 className="section-title">Work Experience & Education</h2>
          <p className="section-desc">
            Professional mobile engineering track record across production POS apps, offline-first systems, and a formal Computer Science degree.
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-dot"></span>

              <div className="timeline-meta">
                <span className="timeline-period">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {item.period}
                </span>
                <span className="timeline-company">/ {item.company}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  ({item.location} &bull; {item.type})
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
              Formal Education
            </h3>
          </div>

          <div className="education-cards-grid">
            {educationData.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="education-card-header">
                  <div className="education-icon-box">
                    <GraduationCap size={24} color="#38bdf8" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                      <h4 className="education-institution">{edu.institution}</h4>
                      <span className="status-pill" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                        <span className="status-dot"></span>
                        <span>{edu.status}</span>
                      </span>
                    </div>
                    <div className="education-degree">
                      {edu.degree} &bull; <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{edu.major}</span>
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