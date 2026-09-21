import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  MessageSquare,
  ExternalLink,
  ArrowRight,
  MapPin,
  UserCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './TechIcons';
import { personalData } from '../data/portfolioData';

export default function ContactSection({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [redirected, setRedirected] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast(`Email copied: ${personalData.email}`);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const buildSubject = () => {
    return encodeURIComponent(
      formData.name ? `[Portfolio Inquiry] From ${formData.name}` : `[Portfolio Inquiry] Collaboration / Opportunity`
    );
  };

  const buildBody = () => {
    const lines = [
      `Hi Abghi,`,
      ``,
      formData.name ? `Name: ${formData.name}` : '',
      formData.email ? `Email: ${formData.email}` : '',
      ``,
      `Message:`,
      formData.message || `I came across your mobile developer portfolio and would like to connect.`
    ].filter(line => line !== null);
    return encodeURIComponent(lines.join('\n'));
  };

  const openGmail = () => {
    const subject = buildSubject();
    const body = buildBody();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalData.email)}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const openMailto = () => {
    const subject = buildSubject();
    const body = buildBody();
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    openGmail();
    setRedirected(true);

    if (onShowToast) {
      onShowToast('Redirecting to Gmail with prefilled message...');
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Let's Connect & Work Together</h2>
          <p className="section-desc">
            Interested in discussing mobile app engineering opportunities, Flutter consulting, or project collaborations? Reach out through the channels below.
          </p>
        </div>

        <div className="contact-container">
          {/* Left Column: 2 Stacked Cards (Profile Lead Card + Direct Channels Card) */}
          <div className="contact-left-col">
            {/* Top Card: Direct Technical Lead Profile Card (Gambar 2) */}
            <div className="contact-lead-card">
              <div className="lead-card-header">
                <div className="lead-avatar-badge">
                  <span>AF</span>
                </div>
                <div className="lead-meta-info">
                  <div className="lead-category-tag">
                    <UserCheck size={14} />
                    <span>MOBILE DEVELOPER</span>
                  </div>
                  <h3 className="lead-name-title">
                    {personalData.name}
                  </h3>
                </div>
              </div>

              <p className="lead-summary-text">
                Mobile Developer with 2+ years of experience delivering end-to-end client solutions, specializing in Flutter mobile applications and integrated backend ecosystems.
              </p>

              <div className="lead-card-footer">
                <div className="lead-status-indicator">
                  <span className="status-dot"></span>
                  <span>{personalData.availability}</span>
                </div>
              </div>
            </div>

            {/* Bottom Card: Direct Contact Channels */}
            <div className="contact-channels-card">
              <div className="contact-channels-header">
                DIRECT CONTACT CHANNELS
              </div>

              <div className="contact-channel-list">
                {/* Channel 1: Email Dispatch (Click to Copy) */}
                <div 
                  className="contact-channel-row"
                  onClick={handleCopyEmail}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCopyEmail();
                    }
                  }}
                  title="Click to copy email address"
                >
                  <div className="channel-icon-box channel-icon-email">
                    <Mail size={18} />
                  </div>
                  <div className="channel-text-content">
                    <span className="channel-category-label">EMAIL DISPATCH</span>
                    <span className="channel-value-text">{personalData.email}</span>
                  </div>
                  <button 
                    type="button" 
                    className="channel-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyEmail();
                    }}
                    title={copied ? "Copied!" : "Copy email address"}
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check size={17} className="channel-check-icon" />
                    ) : (
                      <Copy size={17} className="channel-copy-icon" />
                    )}
                  </button>
                </div>

                {/* Channel 2: LinkedIn Profile (Arrow link) */}
                <a 
                  href={personalData.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-channel-row"
                  title="Open LinkedIn Profile in new tab"
                >
                  <div className="channel-icon-box channel-icon-linkedin">
                    <LinkedinIcon size={18} />
                  </div>
                  <div className="channel-text-content">
                    <span className="channel-category-label">PROFESSIONAL NETWORK</span>
                    <span className="channel-value-text">linkedin.com/in/abghifareihand</span>
                  </div>
                  <div className="channel-action-btn">
                    <ArrowRight size={17} className="channel-arrow-icon" />
                  </div>
                </a>

                {/* Channel 3: GitHub Repository (Arrow link) */}
                <a 
                  href={personalData.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-channel-row"
                  title="Open GitHub Profile in new tab"
                >
                  <div className="channel-icon-box channel-icon-github">
                    <GithubIcon size={18} />
                  </div>
                  <div className="channel-text-content">
                    <span className="channel-category-label">CODE REPOSITORY</span>
                    <span className="channel-value-text">github.com/abghifareihand</span>
                  </div>
                  <div className="channel-action-btn">
                    <ArrowRight size={17} className="channel-arrow-icon" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '1.25rem' }}>
                Send via Gmail
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.25)', fontFamily: 'var(--font-mono)' }}>
                Direct Redirect
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '20px' }}>
              Fill in your message below to open directly in Gmail compose with details prefilled.
            </p>

            {redirected ? (
              <div style={{
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                textAlign: 'center'
              }}>
                <Check size={36} color="#10b981" style={{ marginBottom: '12px' }} />
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '6px' }}>
                  Gmail Compose Window Triggered!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
                  Your draft has been prepared for <strong style={{ color: 'var(--text-primary)' }}>{personalData.email}</strong>. If your browser blocked popups, click below:
                </p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
                  <button 
                    type="button" 
                    className="btn btn-primary btn-sm"
                    onClick={openGmail}
                  >
                    <ExternalLink size={14} />
                    <span>Open in Gmail Web</span>
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm"
                    onClick={openMailto}
                  >
                    <Mail size={14} />
                    <span>Open Mail App (mailto)</span>
                  </button>
                </div>
                <button 
                  type="button" 
                  className="btn btn-ghost btn-sm" 
                  onClick={() => setRedirected(false)}
                  style={{ fontSize: '0.82rem' }}
                >
                  Edit Message & Send Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Your Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message Details</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Describe your mobile app requirements, Flutter role, or project scope..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={4}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}
                >
                  <span>Send Message</span>
                  <ExternalLink size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
