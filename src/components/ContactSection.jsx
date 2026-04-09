import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          {/* Left */}
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">
              Let's Talk <span>IT Solutions</span>
            </h2>
            <p className="section-desc">
              Ready to rent equipment or need IT support? Our team is available
              to help you find the perfect solution for your business needs.
            </p>

            <div className="contact-cards">
              <div className="contact-card" id="contact-phone">
                <div className="cc-icon">📞</div>
                <div>
                  <div className="cc-label">Phone</div>
                  <div className="cc-value"><a href="tel:+917033418005" style={{color:'inherit'}}>+91 7033418005</a></div>
                </div>
              </div>
              <div className="contact-card" id="contact-whatsapp">
                <div className="cc-icon" style={{color:'#25D366'}}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="cc-label">WhatsApp</div>
                  <div className="cc-value"><a href="https://wa.me/917033418005" target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>+91 7033418005</a></div>
                </div>
              </div>
              <div className="contact-card" id="contact-email">
                <div className="cc-icon">✉️</div>
                <div>
                  <div className="cc-label">Email</div>
                  <div className="cc-value"><a href="mailto:info@ajtscomputers.com" style={{color:'inherit'}}>info@ajtscomputers.com</a></div>
                </div>
              </div>
              <div className="contact-card" id="contact-location">
                <div className="cc-icon">📍</div>
                <div>
                  <div className="cc-label">Location</div>
                  <div className="cc-value">Phase 8B, Mohali, Punjab</div>
                </div>
              </div>
              <div className="contact-card" id="contact-hours">
                <div className="cc-icon">🕐</div>
                <div>
                  <div className="cc-label">Working Hours</div>
                  <div className="cc-value">Mon–Sat: 9:00 AM – 7:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-wrap" id="contact-form-wrap">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="form-title">Request a Quote</h3>
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="cf-name">Full Name *</label>
                      <input
                        id="cf-name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cf-phone">Phone Number</label>
                      <input
                        id="cf-phone"
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email">Email Address *</label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-service">Service Needed</label>
                    <select
                      id="cf-service"
                      name="service"
                      className="form-control"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="rental">IT Equipment Rental</option>
                      <option value="cloud">IT & Cloud Support</option>
                      <option value="cyber">Cybersecurity</option>
                      <option value="network">Server & Network Support</option>
                      <option value="repair">PC & Laptop Repair</option>
                      <option value="accessories">Computer Accessories</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-message">Message *</label>
                    <textarea
                      id="cf-message"
                      name="message"
                      className="form-control"
                      placeholder="Describe your requirements..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary" id="cf-submit" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Enquiry
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
