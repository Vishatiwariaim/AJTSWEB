import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'Our Products',
    path: '/products',
    children: [
      { label: 'Desktop Computers', path: '/products/desktop' },
      { label: 'Laptops', path: '/products/laptop' },
      { label: 'Workstations', path: '/products/workstation' },
      { label: 'Servers', path: '/products/server' },
    ],
  },
  { label: 'Computer/Laptop Accessories', path: '/accessories' },
  { label: 'PC & Laptop Repair', path: '/repair' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" id="nav-logo">
            <div className="logo-icon">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lg1" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#6c3eff"/>
                    <stop offset="55%" stopColor="#a855f7"/>
                    <stop offset="100%" stopColor="#f0b429"/>
                  </linearGradient>
                  <linearGradient id="lg2" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#9b74ff"/>
                    <stop offset="100%" stopColor="#f0b429"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
                {/* Hexagon outer */}
                <polygon points="17,2 30,9.5 30,24.5 17,32 4,24.5 4,9.5" fill="url(#lg1)" opacity="0.18"/>
                <polygon points="17,2 30,9.5 30,24.5 17,32 4,24.5 4,9.5" fill="none" stroke="url(#lg2)" strokeWidth="1.4"/>
                {/* Inner chip square */}
                <rect x="11" y="11" width="12" height="12" rx="2.5" fill="url(#lg1)" opacity="0.9" filter="url(#glow)"/>
                {/* Chip pin lines */}
                <line x1="14" y1="11" x2="14" y2="8" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="17" y1="11" x2="17" y2="8" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="20" y1="11" x2="20" y2="8" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="14" y1="23" x2="14" y2="26" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="17" y1="23" x2="17" y2="26" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="20" y1="23" x2="20" y2="26" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="11" y1="14" x2="8" y2="14" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="11" y1="17" x2="8" y2="17" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="11" y1="20" x2="8" y2="20" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="23" y1="14" x2="26" y2="14" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="23" y1="17" x2="26" y2="17" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="23" y1="20" x2="26" y2="20" stroke="url(#lg2)" strokeWidth="1.2" strokeLinecap="round"/>
                {/* Center dot */}
                <circle cx="17" cy="17" r="2.5" fill="white" opacity="0.95" filter="url(#glow)"/>
                <circle cx="17" cy="17" r="1.2" fill="#f0b429"/>
              </svg>
            </div>
            <div className="logo-text">
              <div className="logo-title">AJTS</div>
              <div className="logo-sub">Computer Rentals</div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.label} className="nav-dropdown">
                  <span
                    className={`nav-link${location.pathname.startsWith(item.path) ? ' active' : ''}`}
                    style={{ cursor: 'default' }}
                  >
                    {item.label} <span className="dropdown-arrow">▾</span>
                  </span>
                  <div className="dropdown-menu">
                    {item.children.map((c) => (
                      <Link key={c.label} to={c.path} id={`nav-${c.label.replace(/\s+/g,'-').toLowerCase()}`}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={`nav-link${location.pathname === item.path ? ' active' : ''}`}
                    id={`nav-${item.label.replace(/\s+/g,'-').toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link to="/contact" className="nav-cta" id="nav-get-quote">Get a Quote</Link>
            <button
              className="nav-hamburger"
              id="nav-hamburger"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Menu"
            >
              <span/>
              <span/>
              <span/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} id="mobile-menu">
        {NAV_ITEMS.map((item) => (
          <Link key={item.label} to={item.path} id={`mob-${item.label.replace(/\s+/g,'-').toLowerCase()}`}>
            {item.label}
          </Link>
        ))}
        <Link to="/contact" className="btn-primary" style={{ marginTop: 8 }} id="mob-get-quote">
          Get a Quote
        </Link>
      </div>
    </>
  );
}
