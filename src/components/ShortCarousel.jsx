import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 1,
    img: '/hero1.png',
    badge: 'For Rent',
    name: 'High-End Desktop PC',
    desc: 'Intel Core i7/i9 | 16–32 GB RAM | SSD | Win 11 Pro',
  },
  {
    id: 2,
    img: '/hero3.png',
    badge: 'Popular',
    name: 'Business Laptop',
    desc: 'Thin & light | Intel i5/i7 | 8–16 GB RAM | 256 GB SSD',
  },
  {
    id: 3,
    img: '/hero2.png',
    badge: 'Enterprise',
    name: 'Workstation Server',
    desc: 'Xeon Processor | 64 GB ECC RAM | RAID Storage',
  },
  {
    id: 4,
    img: '/service_rental.png',
    badge: 'Bulk',
    name: 'Laptop Bundle Pack',
    desc: '10–100 laptops for events, exams & training',
  },
  {
    id: 5,
    img: '/service_network.png',
    badge: 'Infrastructure',
    name: 'Network Equipment',
    desc: 'Managed switches, routers, firewalls for enterprise',
  },
];

const VISIBLE = 3;

export default function ShortCarousel() {
  const [offset, setOffset] = useState(0);
  const maxOffset = PRODUCTS.length - VISIBLE;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  return (
    <section className="short-carousel-section" id="products-carousel">
      <div className="container">
        <div className="short-carousel-header">
          <span className="section-tag">Our Systems</span>
          <h2 className="section-title">
            Featured <span>Rental Systems</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Rent premium IT hardware — desktops, laptops, servers and networking equipment
            for your office, event or project with flexible plans.
          </p>
        </div>

        <div className="short-carousel-track-wrap">
          <div
            className="short-carousel-track"
            style={{
              transform: `translateX(calc(-${offset} * (260px + 22px)))`,
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            {PRODUCTS.map((p) => (
              <div key={p.id} className="short-carousel-item">
                <div className="product-card">
                  <div className="product-img-wrap">
                    <img src={p.img} alt={p.name} />
                    <div className="product-img-overlay" />
                    <span className="product-badge">{p.badge}</span>
                  </div>
                  <div className="product-body">
                    <div className="product-name">{p.name}</div>
                    <div className="product-desc">{p.desc}</div>
                    <div className="product-footer">
                      <Link to="/contact" className="product-btn" id={`product-btn-${p.id}`}>
                        Enquire →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="short-carousel-nav">
          <button className="sc-prev" id="sc-prev" onClick={prev} disabled={offset === 0} aria-label="Previous product">
            ‹
          </button>
          <div className="sc-dots">
            {Array.from({ length: maxOffset + 1 }).map((_, i) => (
              <button
                key={i}
                className={`sc-dot${i === offset ? ' active' : ''}`}
                id={`sc-dot-${i}`}
                onClick={() => setOffset(i)}
                aria-label={`Go to product ${i + 1}`}
              />
            ))}
          </div>
          <button className="sc-next" id="sc-next" onClick={next} disabled={offset === maxOffset} aria-label="Next product">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
