import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Journey & Impact</span>
          </div>
          <h2 className="section-title">Work Experience & Track Record</h2>
          <p className="section-desc">
            Professional background designing production mobile architectures, improving frame rates and app stability, and publishing cross-platform apps to global app stores.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-dot"></span>

              <div className="timeline-meta">
                <span className="timeline-period">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {item.period}
                </span>
                <span className="timeline-company">• {item.company}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  ({item.location} • {item.type})
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
      </div>
    </section>
  );
}
