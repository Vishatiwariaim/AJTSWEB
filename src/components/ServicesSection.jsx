import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'rental',
    icon: '💻',
    iconClass: 'si-blue',
    img: '/service_rental.png',
    title: 'IT Equipment Rental',
    desc:
      'Rent high-performance desktops, laptops, servers and peripherals on daily, weekly or monthly plans. Ideal for events, offices and project-based work.',
    features: ['Desktops & Laptops', 'Printers & Scanners', 'Event Bulk Rental', 'Same-Day Delivery'],
  },
  {
    id: 'cloud',
    icon: '☁️',
    iconClass: 'si-cyan',
    img: '/service_cloud.png',
    title: 'IT & Cloud Support',
    desc:
      'Complete cloud migration, management and IT helpdesk support. We ensure your infrastructure runs 24/7 with proactive monitoring and expert assistance.',
    features: ['Cloud Migration', '24/7 Monitoring', 'Remote & On-site Support', 'SLA Guaranteed'],
  },
  {
    id: 'cyber',
    icon: '🛡️',
    iconClass: 'si-purple',
    img: '/service_cyber.png',
    title: 'Cybersecurity',
    desc:
      'Protect your business from threats with our comprehensive cybersecurity solutions — from endpoint protection to penetration testing and security audits.',
    features: ['Threat Detection', 'Endpoint Security', 'Firewall Management', 'Security Audits'],
  },
  {
    id: 'network',
    icon: '🖧',
    iconClass: 'si-green',
    img: '/service_network.png',
    title: 'Server & Network Support',
    desc:
      'Professional server setup, maintenance and network infrastructure management. We handle hardware, configuration, and ongoing support for your business.',
    features: ['Server Setup & Rack', 'Network Design', 'VPN & Firewall', 'Disaster Recovery'],
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <span className="section-tag">What We Offer</span>
        <h2 className="section-title">
          Our <span>Core Services</span>
        </h2>
        <p className="section-desc">
          From IT equipment rental to cloud infrastructure, AJTS delivers comprehensive
          technology services to power your business growth.
        </p>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article className="service-card" key={s.id} id={`service-${s.id}`}>
              <div className={`service-icon ${s.iconClass}`}>{s.icon}</div>
              <img className="service-img" src={s.img} alt={s.title} />
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>

              {/* Feature list */}
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                {s.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      borderRadius: 999,
                      background: 'rgba(10,109,232,0.1)',
                      border: '1px solid rgba(10,109,232,0.2)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="service-link" id={`service-link-${s.id}`}>
                Learn More <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
