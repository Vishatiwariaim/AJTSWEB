import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-inner">
          {/* Image */}
          <div className="about-img-wrap">
            <img src="/hero1.png" alt="AJTS office and computer rental services" />
            <div className="about-img-overlay" />
            <div className="about-stats-float">
              <div className="stat-chip">
                <span className="num">500+</span>
                <span className="lbl">Clients Served</span>
              </div>
              <div className="stat-chip">
                <span className="num">12+</span>
                <span className="lbl">Years Experience</span>
              </div>
              <div className="stat-chip">
                <span className="num">99%</span>
                <span className="lbl">Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <span className="section-tag">About AJTS</span>
            <h2 className="section-title">
              Your Trusted <span>IT Partner</span> in the Region
            </h2>
            <p className="section-desc">
              AJTS Computer Rental Services has been the go-to IT solutions provider for
              businesses, startups, event organizers and institutions. We offer flexible
              rentals, expert tech support and enterprise-grade infrastructure services.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">🚀</div>
                <div className="feature-text">
                  <strong>Fast Delivery & Setup</strong>
                  <span>Same-day or next-day delivery across the region. Ready-to-use systems.</span>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🔧</div>
                <div className="feature-text">
                  <strong>Expert Maintenance</strong>
                  <span>In-house certified technicians for PC, laptop and server repairs.</span>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">📋</div>
                <div className="feature-text">
                  <strong>Flexible Rental Plans</strong>
                  <span>Daily, weekly, monthly and long-term contracts available.</span>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🛡️</div>
                <div className="feature-text">
                  <strong>Cybersecurity First</strong>
                  <span>All rented systems are sanitized, updated and secured before delivery.</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/about" className="btn-primary" id="about-learn-more">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn-outline" id="about-contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
