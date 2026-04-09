import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo" id="footer-logo">
              <div className="logo-icon">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="flg1" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#6c3eff"/>
                      <stop offset="55%" stopColor="#a855f7"/>
                      <stop offset="100%" stopColor="#f0b429"/>
                    </linearGradient>
                    <linearGradient id="flg2" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#9b74ff"/>
                      <stop offset="100%" stopColor="#f0b429"/>
                    </linearGradient>
                    <filter id="fglow">
                      <feGaussianBlur stdDeviation="1.5" result="blur"/>
                      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  <polygon points="17,2 30,9.5 30,24.5 17,32 4,24.5 4,9.5" fill="url(#flg1)" opacity="0.18"/>
                  <polygon points="17,2 30,9.5 30,24.5 17,32 4,24.5 4,9.5" fill="none" stroke="url(#flg2)" strokeWidth="1.4"/>
                  <rect x="11" y="11" width="12" height="12" rx="2.5" fill="url(#flg1)" opacity="0.9" filter="url(#fglow)"/>
                  <line x1="14" y1="11" x2="14" y2="8" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="17" y1="11" x2="17" y2="8" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="20" y1="11" x2="20" y2="8" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="14" y1="23" x2="14" y2="26" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="17" y1="23" x2="17" y2="26" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="20" y1="23" x2="20" y2="26" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="11" y1="14" x2="8" y2="14" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="11" y1="17" x2="8" y2="17" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="11" y1="20" x2="8" y2="20" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="23" y1="14" x2="26" y2="14" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="23" y1="17" x2="26" y2="17" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="23" y1="20" x2="26" y2="20" stroke="url(#flg2)" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="17" cy="17" r="2.5" fill="white" opacity="0.95" filter="url(#fglow)"/>
                  <circle cx="17" cy="17" r="1.2" fill="#f0b429"/>
                </svg>
              </div>
              <div className="logo-text">
                <div className="logo-title">AJTS</div>
                <div className="logo-sub">Computer Rentals</div>
              </div>
            </Link>
            <p>
              Top Computers Rental Near Me. AJTS Computer Rental Services provides
              premium IT hardware and support solutions for businesses across the region.
            </p>
            <div className="footer-social">
              <a href="#" className="social-btn" id="footer-fb" aria-label="Facebook">f</a>
              <a href="#" className="social-btn" id="footer-tw" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-btn" id="footer-li" aria-label="LinkedIn">in</a>
              <a href="https://wa.me/917033418005" target="_blank" rel="noopener noreferrer" className="social-btn social-btn-wa" id="footer-wa" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" id="footer-home">Home</Link></li>
              <li><Link to="/products" id="footer-products">Our Products</Link></li>
              <li><Link to="/accessories" id="footer-accessories">Accessories</Link></li>
              <li><Link to="/repair" id="footer-repair">PC & Laptop Repair</Link></li>
              <li><Link to="/about" id="footer-about">About Us</Link></li>
              <li><Link to="/contact" id="footer-contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/#services" id="footer-rental">IT Equipment Rental</Link></li>
              <li><Link to="/#services" id="footer-cloud">IT & Cloud Support</Link></li>
              <li><Link to="/#services" id="footer-cyber">Cybersecurity</Link></li>
              <li><Link to="/#services" id="footer-network">Server & Network</Link></li>
              <li><Link to="/repair" id="footer-repair-svc">PC/Laptop Repair</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+917033418005" id="footer-tel">📞 +91 7033418005</a></li>
              <li>
                <a href="https://wa.me/917033418005" target="_blank" rel="noopener noreferrer" id="footer-wa-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: +91 7033418005
                </a>
              </li>
              <li><a href="mailto:info@ajtscomputers.com" id="footer-mail">✉️ info@ajtscomputers.com</a></li>
              <li><a href="https://maps.google.com/?q=Phase+8B+Mohali+Punjab" target="_blank" rel="noopener noreferrer" id="footer-addr">📍 Phase 8B, Mohali, Punjab</a></li>
              <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>🕐 Mon–Sat: 9AM – 7PM</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} AJTS Computer Rental Services. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" id="footer-privacy">Privacy Policy</a>
            <a href="#" id="footer-terms">Terms of Service</a>
            <a href="#" id="footer-sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
