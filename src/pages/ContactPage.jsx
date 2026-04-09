import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <main style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh' }} id="contact-page">
      <div style={{ background: 'var(--dark-2)', padding: '64px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-tag">Reach Out</span>
          <h1 className="section-title">Contact <span>Us</span></h1>
          <p className="section-desc">
            Get in touch for rentals, repairs, IT support or any other queries. We're here to help!
          </p>
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
