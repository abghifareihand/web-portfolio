import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './TechIcons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="site-container footer-container">
        {/* Top Header Row: Brand & Status Badge */}
        <div className="footer-header-row">
          <div className="footer-brand">
            <Terminal size={16} color="var(--accent-cyan)" />
            <span>{personalData.handle}</span>
          </div>

          <div className="footer-status-pill">
            <span className="status-dot"></span>
            <span>All systems operational</span>
          </div>
        </div>

        <div className="footer-divider-line"></div>

        {/* Bottom Row: Actions & Copyright */}
        <div className="footer-bottom-row">
          <p className="footer-copyright-text">
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>

          <div className="footer-actions-cluster">
            <div className="footer-socials">
              <a 
                href={personalData.github} 
                target="_blank" 
                rel="noreferrer" 
                className="icon-btn" 
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a 
                href={personalData.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="icon-btn" 
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>

            <button 
              type="button" 
              onClick={scrollToTop} 
              className="btn btn-secondary btn-sm footer-top-btn"
              title="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}