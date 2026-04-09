import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id:'p1', name:'Desktop PC (Core i5)', spec:'4GB/8GB RAM | 512GB SSD | Win 11', img:'/hero1.png', badge:'Available' },
  { id:'p2', name:'Desktop PC (Core i7)', spec:'16GB RAM | 1TB SSD | Win 11 Pro', img:'/hero1.png', badge:'Popular' },
  { id:'p3', name:'Business Laptop (i5)', spec:'8GB RAM | 256GB SSD | 14"', img:'/hero3.png', badge:'Available' },
  { id:'p4', name:'Business Laptop (i7)', spec:'16GB RAM | 512GB SSD | 15.6"', img:'/hero3.png', badge:'Popular' },
  { id:'p5', name:'Workstation', spec:'Xeon | 32GB ECC RAM | Quadro GPU', img:'/hero2.png', badge:'Enterprise' },
  { id:'p6', name:'Server Rack Unit', spec:'2U Server | 64GB RAM | RAID', img:'/hero2.png', badge:'Enterprise' },
  { id:'p7', name:'Laptop Bundle (10 units)', spec:'Mix of i5/i7 | 8-16GB RAM', img:'/hero3.png', badge:'Bulk' },
  { id:'p8', name:'Network Switch Kit', spec:'24-port managed switch + cables', img:'/service_network.png', badge:'Available' },
];

export default function ProductsPage() {
  return (
    <main style={{ paddingTop: 'var(--nav-h)', minHeight: '100vh' }} id="products-page">
      {/* Page Header */}
      <div style={{ background: 'var(--dark-2)', padding: '64px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-tag">IT Hardware</span>
          <h1 className="section-title">Our <span>Products</span></h1>
          <p className="section-desc">
            Browse our wide range of computers, laptops, servers and networking equipment
            available for rent. All systems are tested and ready to use.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container" style={{ padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {PRODUCTS.map((p) => (
            <div className="product-card" key={p.id} id={p.id}>
              <div className="product-img-wrap">
                <img src={p.img} alt={p.name} />
                <div className="product-img-overlay" />
                <span className="product-badge">{p.badge}</span>
              </div>
              <div className="product-body">
                <div className="product-name">{p.name}</div>
                <div className="product-desc">{p.spec}</div>
                <div className="product-footer">
                  <Link to="/contact" className="product-btn" id={`${p.id}-enquire`}>Enquire →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
