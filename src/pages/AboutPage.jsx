import AboutSection from '../components/AboutSection';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh' }} id="about-page">
      <div style={{ background: 'var(--dark-2)', padding: '64px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-tag">Who We Are</span>
          <h1 className="section-title">About <span>AJTS</span></h1>
          <p className="section-desc">
            Learn more about AJTS Computer Rental Services and our mission to provide the best IT solutions near you.
          </p>
        </div>
      </div>
      <AboutSection />
    </main>
  );
}
