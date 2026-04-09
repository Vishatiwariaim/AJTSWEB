import { Link } from 'react-router-dom';

const ACCESSORIES = [
  { name: 'Keyboard & Mouse (Wired)' },
  { name: 'Keyboard & Mouse (Wireless)' },
  { name: 'Monitor 21.5"' },
  { name: 'Monitor 27" 4K' },
  { name: 'Webcam HD 1080p' },
  { name: 'Headset with Mic' },
  { name: 'Printer (Inkjet)' },
  { name: 'Printer (Laser)' },
  { name: 'External SSD 1TB' },
  { name: 'USB Hub (7-port)' },
  { name: 'UPS 600VA' },
  { name: 'Network Switch 8-port' },
];

export default function AccessoriesPage() {
  return (
    <main style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh' }} id="accessories-page">
      <div style={{ background: 'var(--dark-2)', padding: '64px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-tag">Peripherals & Add-ons</span>
          <h1 className="section-title">Computer / Laptop <span>Accessories</span></h1>
          <p className="section-desc">
            Complete your rental setup with our range of peripherals and accessories. All available on rental basis.
          </p>
        </div>
      </div>
      <div className="container" style={{ padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {ACCESSORIES.map((a, i) => (
            <div className="glass-card" key={i} style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{a.name}</div>
              </div>
              <Link to="/contact" className="product-btn" id={`acc-${i}-enquire`}>Rent</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
