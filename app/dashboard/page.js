export default function Dashboard() {
  const revenueData = [
    { day: 'Mon', amount: 120 },
    { day: 'Tue', amount: 180 },
    { day: 'Wed', amount: 150 },
    { day: 'Thu', amount: 220 },
    { day: 'Fri', amount: 280 },
    { day: 'Sat', amount: 190 },
    { day: 'Sun', amount: 247 }
  ]
  
  const maxAmount = 300 // Set max for consistent scaling

  return (
    <main style={{paddingTop: '80px'}}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Power AI Earnings & Crypto Treasury</h1>
          <p className="section-subtitle">
            Live business metrics — revenue, crypto treasury, and $PowerAI token stats.
          </p>
          
          {/* Column Chart */}
          <div className="dashboard-card" style={{marginBottom: '40px', padding: '30px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px'}}>
              <h3 style={{fontSize: '1.3rem'}}>Revenue This Week</h3>
              <div style={{color: 'var(--primary)', fontWeight: '600'}}>+18% vs last week</div>
            </div>
            
            {/* Bar Chart */}
            <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '200px', gap: '10px', padding: '0 10px'}}>
              {revenueData.map((d, i) => {
                const heightPercent = (d.amount / maxAmount) * 100
                return (
                  <div key={i} style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
                    <div style={{fontWeight: '600', color: 'var(--primary)', marginBottom: '8px'}}>${d.amount}</div>
                    <div style={{
                      width: '100%',
                      maxWidth: '50px',
                      height: heightPercent + '%',
                      minHeight: '20px',
                      background: 'linear-gradient(180deg, var(--primary) 0%, rgba(0,255,136,0.3) 100%)',
                      borderRadius: '8px 8px 0 0',
                      animation: 'glowPulse 2s ease-in-out infinite',
                      animationDelay: (i * 0.15) + 's'
                    }}></div>
                    <div style={{marginTop: '10px', fontSize: '0.8rem', color: 'var(--text-muted)'}}>{d.day}</div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Revenue Metrics */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-label">Revenue (7d)</div>
              <div className="metric-value accent">$1,387</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Revenue (30d)</div>
              <div className="metric-value accent">$4,942</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Lifetime Revenue</div>
              <div className="metric-value accent">$12,847</div>
            </div>
          </div>

          <div className="metrics-grid" style={{marginBottom: '2.5rem'}}>
            <div className="metric-card">
              <div className="metric-label">Retainers</div>
              <div className="metric-value">$2,500/mo</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">One-time Sales</div>
              <div className="metric-value">$2,442</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Active Subs</div>
              <div className="metric-value">12</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">MRR</div>
              <div className="metric-value">$2,500</div>
            </div>
          </div>

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
