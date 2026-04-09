import { Link } from 'react-router-dom';

const SERVICES_REPAIR = [
  { icon: '🖥️', name: 'Desktop Repair', desc: 'Motherboard, HDD, RAM, PSU replacement and diagnostics.' },
  { icon: '💻', name: 'Laptop Repair', desc: 'Screen replacement, keyboard, charging port, motherboard.' },
  { icon: '💾', name: 'Data Recovery', desc: 'Recover lost data from HDD, SSD, RAID and flash drives.' },
  { icon: '🔤', name: 'OS Installation', desc: 'Windows, Linux installation with drivers and software setup.' },
  { icon: '🦠', name: 'Virus Removal', desc: 'Malware, spyware and virus cleanup with security hardening.' },
  { icon: '🌐', name: 'Networking Issues', desc: 'WiFi, LAN, IP configuration and connectivity troubleshooting.' },
];

export default function RepairPage() {
  return (
    <main style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh' }} id="repair-page">
      <div style={{ background: 'var(--dark-2)', padding: '64px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-tag">Technical Services</span>
          <h1 className="section-title">PC & Laptop <span>Repair</span></h1>
          <p className="section-desc">
            Fast, reliable repair services by certified technicians. Walk-in or on-site pickup available.
          </p>
        </div>
      </div>
      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="services-grid">
          {SERVICES_REPAIR.map((s, i) => (
            <div className="service-card" key={i} id={`repair-${i}`}>
              <div className="service-icon si-blue" style={{ fontSize: '1.8rem' }}>{s.icon}</div>
              <h3 className="service-title">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <Link to="/contact" className="service-link" id={`repair-link-${i}`}>
                Book Service →
              </Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>Need an urgent repair? Call us now!</p>
          <a href="tel:+917033418005" className="btn-primary" id="repair-call">📞 Call Now</a>
        </div>
      </div>
    </main>
  );
}
