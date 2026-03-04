export default function TokenPage() {
  return (
    <main>
      <div className="token-header">
        <div className="container">
          <h1>PowerAI Token</h1>
          <p className="ticker">$PowerAI</p>
          <p style={{color: 'var(--text-muted)', marginTop: '20px'}}>
            The utility token for the Power AI ecosystem
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="token-stats">
            <div className="token-stat">
              <h4>Price</h4>
              <div className="value">$0.0042</div>
            </div>
            <div className="token-stat">
              <h4>Market Cap</h4>
              <div className="value">$4.2M</div>
            </div>
            <div className="token-stat">
              <h4>Total Supply</h4>
              <div className="value">1B</div>
            </div>
            <div className="token-stat">
              <h4>Holders</h4>
              <div className="value">1,247</div>
            </div>
            <div className="token-stat">
              <h4>24h Volume</h4>
              <div className="value">$42K</div>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <a href="#" className="cta-btn">Buy $PowerAI</a>
          </div>

          <div style={{marginTop: '60px', padding: '30px', background: 'var(--bg-card)', borderRadius: '15px', border: '1px solid var(--border)'}}>
            <h3 style={{marginBottom: '20px'}}>Token Contract</h3>
            <p style={{color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', wordBreak: 'break-all'}}>
              0x742d35Cc6634C0532925a3b844Bc9e7595f0b2d1
            </p>
            <p style={{color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '15px'}}>
              Network: Base
            </p>
          </div>

          <div style={{marginTop: '40px', padding: '30px', background: 'var(--bg-card)', borderRadius: '15px', border: '1px solid var(--border)'}}>
            <h3 style={{marginBottom: '20px'}}>Token Utilities</h3>
            <ul style={{color: 'var(--text-muted)', listStyle: 'none'}}>
              <li style={{padding: '10px 0', borderBottom: '1px solid var(--border)'}}>• Governance voting rights</li>
              <li style={{padding: '10px 0', borderBottom: '1px solid var(--border)'}}>• Premium feature access</li>
              <li style={{padding: '10px 0', borderBottom: '1px solid var(--border)'}}>• Staking rewards</li>
              <li style={{padding: '10px 0'}}>• PAI Mart discounts</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}