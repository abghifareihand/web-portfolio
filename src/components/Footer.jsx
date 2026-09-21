import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
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
      <div className="site-container footer-inner">
        {/* Left: Branding & Status */}
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: 'var(--text-primary)', 
            fontWeight: 600, 
            marginBottom: '6px',
            fontFamily: 'var(--font-mono)'
          }}>
            <Terminal size={16} color="#38bdf8" />
            <span>{personalData.handle}</span>
          </div>
          <div className="footer-system-status">
            <span className="status-dot"></span>
            <span>All systems operational &bull; {personalData.location}</span>
          </div>
        </div>

        {/* Center: Tech Note */}
        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} {personalData.name}. &nbsp;All rights reserved.
        </div>

        {/* Right: Scroll to Top */}
        <button 
          type="button" 
          onClick={scrollToTop} 
          className="btn btn-secondary btn-sm"
          title="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}