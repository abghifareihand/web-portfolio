import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Smartphone, 
  FilterX, 
  Eye, 
  ArrowUpRight 
} from 'lucide-react';
import { projectCategories, projectsData } from '../data/portfolioData';

export default function ProjectsSection({ onOpenSpecs, onOpenCaseStudy }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
          <div className="category-tabs-wrapper">
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
          </div>

          <div className="search-bar-wrapper">
            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search project by tech, title or tags..."
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
          <div className="projects-empty-state">
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

        {/* Projects Grid (GAMBAR 1) */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card modern-project-card">
              {/* Card Cover Image with Badges */}
              <div 
                className="card-cover-container"
                onClick={() => onOpenCaseStudy(project)}
                title="View Case Study"
              >
                <img 
                  src={project.coverImage || `/projects/${project.id}/screen1.png`} 
                  alt={`${project.title} Preview`}
                  className="card-cover-img"
                  loading="lazy"
                />

                {/* Floating Top Badges */}
                <div className="card-top-badges">
                  <span className="card-badge-category">{project.categoryLabel}</span>
                  <span className="card-badge-year">{project.year}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="card-body">
                <h3 
                  className="card-title"
                  onClick={() => onOpenCaseStudy(project)}
                >
                  {project.title}
                </h3>

                <p className="card-summary">{project.summary}</p>

                {/* Tech Tags */}
                <div className="card-tags">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span 
                      key={tag} 
                      className="tag-pill"
                      onClick={(e) => { e.stopPropagation(); setSearchQuery(tag); }}
                      title={`Filter by ${tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Action Buttons (GAMBAR 1 FOOTER) */}
              <div className="card-footer-actions">
                <button
                  type="button"
                  className="card-action-btn specs-preview-btn"
                  onClick={() => onOpenSpecs(project)}
                  title="Open quick specifications modal"
                >
                  <Eye size={15} />
                  <span>PREVIEW</span>
                </button>

                <button
                  type="button"
                  className="card-action-btn case-study-action-btn"
                  onClick={() => onOpenCaseStudy(project)}
                  title="Read full project case study"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
