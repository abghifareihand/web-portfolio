import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  BookOpen, 
  Smartphone, 
  FilterX 
} from 'lucide-react';
import { GithubIcon } from './TechIcons';
import { projectCategories, projectsData } from '../data/portfolioData';

export default function ProjectsSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchCategory = 
        activeCategory === 'all' || project.category === activeCategory;
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchCategory;

      const matchName = project.title.toLowerCase().includes(query);
      const matchSummary = project.summary.toLowerCase().includes(query);
      const matchTags = project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchCategory && (matchName || matchSummary || matchTags);
    });
  }, [activeCategory, searchQuery]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Smartphone size={14} />
            <span>Mobile Engineering & Production</span>
          </div>
          <h2 className="section-title">Featured Mobile Applications</h2>
          <p className="section-desc">
            Production-grade cross-platform apps, offline-first systems, and architecture case studies built with Flutter and clean code principles.
          </p>
        </div>

        {/* Controls: Category Tabs & Search Bar */}
        <div className="projects-controls">
          <div className="category-tabs">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="search-bar-wrapper">
            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search by tech (e.g. Flutter, BLoC, Firebase, Isar)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search mobile projects by keyword or tech stack"
              />
            </div>

            <div className="results-count">
              Showing <strong>{filteredProjects.length}</strong> of {projectsData.length} projects
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            <FilterX size={36} color="#64748b" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No projects match your query</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
              No mobile projects found matching "{searchQuery}".
            </p>
            <button onClick={handleResetFilters} className="btn btn-secondary btn-sm">
              Reset Filters & Search
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Card Header */}
              <div className="project-header">
                <span className="project-category">{project.categoryLabel}</span>
                <span className="project-status">{project.year} • {project.status}</span>
              </div>

              {/* Title & Summary */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              {/* Architecture Highlight Box */}
              <div className="project-arch-box">
                <div className="arch-box-title">
                  <span>Key Architectural Highlights</span>
                </div>
                <ul className="arch-box-list">
                  {project.architecturePoints.slice(0, 2).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="tech-chip"
                    onClick={() => setSearchQuery(tag)}
                    style={{ cursor: 'pointer' }}
                    title={`Filter by ${tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => onSelectProject(project)}
                >
                  <BookOpen size={14} />
                  <span>Case Study</span>
                </button>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn"
                      title="Open Live Preview or Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
