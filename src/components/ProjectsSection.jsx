import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Smartphone, 
  FilterX, 
  Eye, 
  ArrowUpRight,
  ArrowUpDown 
} from 'lucide-react';
import { getProjectCategories, getProjectsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectsSection({ onOpenSpecs, onOpenCaseStudy }) {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' | 'oldest'

  const projectCategories = useMemo(() => getProjectCategories(lang), [lang]);
  const projectsData = useMemo(() => getProjectsData(lang), [lang]);

  const filteredProjects = useMemo(() => {
    // 1. Filter by category and search query
    const list = projectsData.filter((project) => {
      const matchCategory = 
        activeCategory === 'all' || project.category === activeCategory;
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchCategory;

      const matchName = project.title.toLowerCase().includes(query);
      const matchSummary = project.summary.toLowerCase().includes(query);
      const matchTags = project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchCategory && (matchName || matchSummary || matchTags);
    });

    // 2. Sort by date (YYYY-MM) or year, then by name
    return list.slice().sort((a, b) => {
      const dateA = a.date || a.year || '';
      const dateB = b.date || b.year || '';

      if (sortOrder === 'newest') {
        const cmp = dateB.localeCompare(dateA); // Newest date first
        if (cmp !== 0) return cmp;
        return a.title.localeCompare(b.title); // Alphabetical fallback
      } else {
        const cmp = dateA.localeCompare(dateB); // Oldest date first
        if (cmp !== 0) return cmp;
        return a.title.localeCompare(b.title); // Alphabetical fallback
      }
    });
  }, [projectsData, activeCategory, searchQuery, sortOrder]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSortOrder('newest');
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'newest' ? 'oldest' : 'newest'));
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Smartphone size={14} />
            <span>{t('projects.tag')}</span>
          </div>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-desc">
            {t('projects.desc')}
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
            <div className="search-and-sort-group">
              <div className="search-box">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder={t('projects.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search mobile projects by keyword or tech stack"
                />
              </div>

              {/* Sort Toggle Button (Newest <-> Oldest) */}
              <button
                type="button"
                className={`sort-toggle-btn ${sortOrder === 'oldest' ? 'sort-oldest-active' : ''}`}
                onClick={toggleSortOrder}
                title={sortOrder === 'newest' ? t('projects.sortOldest') : t('projects.sortNewest')}
                aria-label="Toggle sort order by year"
              >
                <ArrowUpDown size={14} className="sort-icon" />
                <span className="sort-label-prefix">{t('projects.sortBy')}</span>
                <span className="sort-label-val">
                  {sortOrder === 'newest' ? t('projects.sortNewest') : t('projects.sortOldest')}
                </span>
              </button>
            </div>

            <div className="results-count">
              {t('projects.showing')} <strong>{filteredProjects.length}</strong> {t('projects.of')} {projectsData.length} {t('projects.projectsText')}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="projects-empty-state">
            <FilterX size={36} color="#64748b" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{t('projects.noResultsTitle')}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
              {t('projects.noResultsMatching')} "{searchQuery}".
            </p>
            <button onClick={handleResetFilters} className="btn btn-secondary btn-sm">
              {t('projects.resetFilters')}
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
                title={t('projects.btnCaseStudy')}
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
                  title={t('projects.btnPreview')}
                >
                  <Eye size={15} />
                  <span>{t('projects.btnPreview')}</span>
                </button>

                <button
                  type="button"
                  className="card-action-btn case-study-action-btn"
                  onClick={() => onOpenCaseStudy(project)}
                  title={t('projects.btnCaseStudy')}
                >
                  <span>{t('projects.btnCaseStudy')}</span>
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

