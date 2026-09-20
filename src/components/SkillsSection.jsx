import React from 'react';
import { 
  Smartphone, 
  Layers, 
  Database, 
  Wrench 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return <Smartphone size={18} color="#38bdf8" />;
      case 1:
        return <Layers size={18} color="#818cf8" />;
      case 2:
        return <Database size={18} color="#34d399" />;
      case 3:
        return <Wrench size={18} color="#f59e0b" />;
      default:
        return <Wrench size={18} color="#38bdf8" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Tooling Matrix</h2>
          <p className="section-desc">
            Frameworks, languages, architecture patterns, and DevOps tools I utilize daily to engineer robust cross-platform mobile applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-cat-title">
                {getCategoryIcon(idx)}
                <span>{cat.category}</span>
              </div>
              <p className="skill-cat-desc">{cat.description}</p>

              <div className="skill-items-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-row">
                    <span className="skill-item-name">{skill.name}</span>
                    <span className="skill-item-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
