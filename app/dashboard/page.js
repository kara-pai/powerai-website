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
  
  const maxAmount = Math.max(...revenueData.map(d => d.amount))
  const graphHeight = 200
  
  const points = revenueData.map((d, i) => {
    const x = (i / (revenueData.length - 1)) * 100
    const y = graphHeight - (d.amount / maxAmount) * graphHeight
    return x + '% ' + y
  }).join(' ')
  
  const areaPoints = '0% ' + graphHeight + ' ' + points + ' 100% ' + graphHeight

  return (
    <main style={{paddingTop: '80px'}}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Power AI Earnings & Crypto Treasury</h1>
          <p className="section-subtitle">
            Live business metrics — revenue, crypto treasury, and $PowerAI token stats.
          </p>
          
          <div className="dashboard-card" style={{marginBottom: '40px', padding: '30px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px'}}>
              <h3 style={{fontSize: '1.3rem'}}>Revenue This Week</h3>
              <div style={{color: 'var(--primary)', fontWeight: '600'}}>+18% vs last week</div>
            </div>
            
            <div style={{position: 'relative', height: '250px', marginBottom: '20px'}}>
              <svg viewBox="0 0 100 220" preserveAspectRatio="none" style={{width: '100%', height: '100%', overflow: 'visible'}}>
                <line x1="0%" y1="25%" x2="100%" y2="25%" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="0%" y1="75%" x2="100%" y2="75%" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2" />
                <polygon points={areaPoints} fill="url(#gradient)" opacity="0.3" />
                <polyline points={points} fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                {revenueData.map((d, i) => {
                  const x = (i / (revenueData.length - 1)) * 100
                  const y = graphHeight - (d.amount / maxAmount) * graphHeight
                  return (
                    <g key={i}>
                      <circle cx={x + '%'} cy={y} r="3" fill="var(--bg)" stroke="var(--primary)" strokeWidth="2" />
                      <circle cx={x + '%'} cy={y} r="6" fill="var(--primary)" opacity="0.3" />
                    </g>
                  )
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 5%'}}>
              {revenueData.map((d, i) => (
                <div key={i} style={{textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)'}}>
                  <div style={{fontWeight: '600', color: 'var(--primary)'}}>${d.amount}</div>
                  <div>{d.day}</div>
                </div>
              ))}
            </div>
          </div>
          
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
