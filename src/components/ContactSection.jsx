import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare,
  ExternalLink
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
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-card">
            <div>
              <div className="status-pill" style={{ marginBottom: '20px' }}>
                <span className="status-dot"></span>
                <span>{personalData.availability}</span>
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>
                Direct Channels
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', marginBottom: '20px' }}>
                I typically respond within 24 hours on business days.
              </p>

              <div className="contact-direct-items">
                {/* Email Box */}
                <div className="contact-item-box">
                  <div className="contact-item-detail">
                    <Mail size={18} color="#38bdf8" />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Official Email</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {personalData.email}
                      </div>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={handleCopyEmail}
                    className="btn btn-ghost btn-sm"
                    title="Copy email address"
                  >
                    {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="contact-item-box">
                  <div className="contact-item-detail">
                    <MapPin size={18} color="#818cf8" />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Current Location</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                        {personalData.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '32px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Professional Profiles & Repositories:
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href={personalData.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary btn-sm"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={personalData.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary btn-sm"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
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
                ● Direct Redirect
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '20px' }}>
              Fill in your message below to open directly in Gmail compose with details prefilled. No third-party API or secret key needed.
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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Send Message via Gmail</span>
                    <ExternalLink size={16} />
                  </button>

                  <button 
                    type="button"
                    onClick={openMailto}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Mail size={14} />
                    <span>Or open with Default Mail Client</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
