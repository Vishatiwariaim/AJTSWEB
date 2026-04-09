import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    img: '/hero1.png',
    badge: 'Top Computer Rental Near Me',
    title: ['Premium IT Equipment', <br key="br"/>, <span key="g" className="gradient-text">Rental Services</span>],
    subtitle:
      'AJTS provides cutting-edge computers, laptops and IT solutions for businesses of all sizes. Flexible rental plans — daily, weekly, monthly.',
    cta: { label: 'Explore Rentals', to: '/products' },
    cta2: { label: 'Get a Quote', to: '/contact' },
  },
  {
    id: 2,
    img: '/hero2.png',
    badge: 'Cloud & Cybersecurity Experts',
    title: ['Securing Your', <br key="br"/>, <span key="g" className="gradient-text">Digital Future</span>],
    subtitle:
      'End-to-end IT & Cloud support, cybersecurity solutions and server/network management — all under one roof with AJTS.',
    cta: { label: 'Our Services', to: '/#services' },
    cta2: { label: 'Talk to Us', to: '/contact' },
  },
  {
    id: 3,
    img: '/hero3.png',
    badge: 'Complete IT Solutions',
    title: ['From Rental to', <br key="br"/>, <span key="g" className="gradient-text">Full IT Support</span>],
    subtitle:
      'Whether you need a single laptop or a full server infrastructure, AJTS Computer Rental Services has you covered with professional expertise.',
    cta: { label: 'View Products', to: '/products' },
    cta2: { label: 'Contact Us', to: '/contact' },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const go = (idx) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => go(current + 1), 5500);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [current]);

  return (
    <section className="hero-carousel" id="hero-carousel">
      {/* Slides */}
      <div
        className="hero-slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className="hero-slide">
            <img src={slide.img} alt={`AJTS - ${slide.badge}`} loading="eager" />
            <div className="hero-overlay">
              <div className="hero-content">
                <div className="hero-badge">
                  <span className="dot" />
                  {slide.badge}
                </div>
                <h1 className="hero-h1">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-btn-row">
                  <Link to={slide.cta.to} className="btn-primary" id={`hero-cta-${slide.id}`}>
                    {slide.cta.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <Link to={slide.cta2.to} className="btn-outline" id={`hero-cta2-${slide.id}`}>
                    {slide.cta2.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        className="carousel-arrow prev"
        id="hero-prev"
        onClick={() => go(current - 1)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="carousel-arrow next"
        id="hero-next"
        onClick={() => go(current + 1)}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="carousel-controls">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            id={`hero-dot-${i}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
