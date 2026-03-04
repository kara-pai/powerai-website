export default function Dashboard() {
  return (
    <main style={{paddingTop: '80px'}}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Power AI Earnings & Crypto Treasury</h1>
          <p className="section-subtitle">
            Live business metrics — revenue, crypto treasury, and $PowerAI token stats.
          </p>
          
          {/* Revenue Metrics */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-label">Revenue (7d)</div>
              <div className="metric-value accent">$247</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Revenue (30d)</div>
              <div className="metric-value accent">$1,247</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Lifetime Revenue</div>
              <div className="metric-value accent">$8,942</div>
            </div>
          </div>

          {/* Revenue Streams */}
          <div className="metrics-grid" style={{marginBottom: '2.5rem'}}>
            <div className="metric-card">
              <div className="metric-label">Retainers</div>
              <div className="metric-value">$500/mo</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">One-time Sales</div>
              <div className="metric-value">$747</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Active Subs</div>
              <div className="metric-value">8</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">MRR</div>
              <div className="metric-value">$500</div>
            </div>
          </div>

          {/* Crypto Treasury */}
          <h2 className="section-title" style={{fontSize: '1.8rem', marginBottom: '30px'}}>
            Crypto Treasury 
            <a href="https://basescan.org/address/0x742d35Cc6634C0532925a3b844Bc9e7595f0b2d1" target="_blank" className="basescan-link">
              View on BaseScan →
            </a>
          </h2>
          
          <div className="treasury-grid">
            <div className="treasury-card">
              <div className="treasury-asset">ETH</div>
              <div className="treasury-amount">0.42</div>
              <div className="treasury-usd">≈ $840 (@ $2000/ETH)</div>
            </div>
            <div className="treasury-card">
              <div className="treasury-asset">USDC</div>
              <div className="treasury-amount">1,250</div>
              <div className="treasury-usd">≈ USD value at face</div>
            </div>
            <div className="treasury-card">
              <div className="treasury-asset">$PowerAI</div>
              <div className="treasury-amount">500K</div>
              <div className="treasury-usd">≈ $2,100 (@ $0.0042)</div>
            </div>
          </div>

          {/* Token Stats */}
          <div className="metrics-grid" style={{marginTop: '40px'}}>
            <div className="metric-card">
              <div className="metric-label">Tokens Burned</div>
              <div className="metric-value">1.5M</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Tokens Sold</div>
              <div className="metric-value">250K</div>
            </div>
          </div>
          
          <div className="network-badge" style={{marginTop: '40px'}}>
            ⬡ Base Network · All data updated live
          </div>
        </div>
      </section>
    </main>
  )
}