import React, { useState } from 'react';
import { Terminal, Menu, X, Sun, Moon } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="site-container navbar-container">
        {/* Brand Moniker */}
        <a href="#about" className="nav-brand" onClick={closeMenu}>
          <div className="nav-brand-icon">
            <Terminal size={18} />
          </div>
          <span>{personalData.handle}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Status Pill, Theme Toggle, & Action */}
        <div className="nav-actions">
          <div className="status-pill nav-status-pill">
            <span className="status-dot"></span>
            <span>Open for Mobile Roles</span>
          </div>

          {/* Dark / Light Theme Toggle */}
          <button
            type="button"
            className="icon-btn theme-toggle-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a href="#contact" className="btn btn-secondary btn-sm">
            Contact
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="nav-mobile-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-menu">
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px' }}>
            <div className="status-pill" style={{ width: 'fit-content' }}>
              <span className="status-dot"></span>
              <span>Available for Hire</span>
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={onToggleTheme}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}