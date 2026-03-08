import './globals.css'

export const metadata = {
  title: 'Power AI — AI Employees That Actually Work',
  description: 'We build, deploy, and manage custom AI employees for your business. 90% cheaper than hiring. Works 24/7. Gets smarter every month.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="container">
            <a href="/" className="nav-logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                {/* Robot head */}
                <ellipse cx="20" cy="20" rx="14" ry="11" fill="url(#logoGrad)" opacity="0.9"/>
                {/* Antenna */}
                <line x1="20" y1="9" x2="20" y2="4" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="20" cy="3" r="2.5" fill="#c084fc"/>
                {/* Eyes */}
                <ellipse cx="14.5" cy="19.5" rx="2.5" ry="2" fill="#030014"/>
                <ellipse cx="25.5" cy="19.5" rx="2.5" ry="2" fill="#030014"/>
                {/* Smile */}
                <path d="M15 25 Q20 29 25 25" stroke="#030014" strokeWidth="2" strokeLinecap="round" fill="none"/>
                {/* Body hint */}
                <path d="M16 31 Q20 35 24 31" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
              <span className="nav-logo-text">Power<span>AI</span></span>
            </a>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/hire">Hire AI</a></li>
              <li><a href="/token">$PowerAI</a></li>
              <li><a href="https://x.com/PowerAiX" target="_blank" rel="noopener noreferrer">@PowerAiX</a></li>
            </ul>
            <a href="#cta" className="nav-cta">Get Started</a>
            <button className="nav-toggle" aria-label="Menu">&#9776;</button>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <a href="/" className="nav-logo" style={{marginBottom: 8, display: 'inline-flex'}}>
                  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                    <ellipse cx="20" cy="20" rx="14" ry="11" fill="url(#logoGrad2)" opacity="0.9"/>
                    <line x1="20" y1="9" x2="20" y2="4" stroke="url(#logoGrad2)" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="20" cy="3" r="2.5" fill="#c084fc"/>
                    <ellipse cx="14.5" cy="19.5" rx="2.5" ry="2" fill="#030014"/>
                    <ellipse cx="25.5" cy="19.5" rx="2.5" ry="2" fill="#030014"/>
                    <path d="M15 25 Q20 29 25 25" stroke="#030014" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M16 31 Q20 35 24 31" stroke="url(#logoGrad2)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  </svg>
                  <span className="nav-logo-text">Power<span>AI</span></span>
                </a>
                <p>AI employees that actually work. Built, deployed, and managed for your business.</p>
              </div>
              <div>
                <h4>Product</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/hire">Hire AI</a></li>
                  <li><a href="/token">$PowerAI</a></li>
                  <li><a href="/mart">PAI Mart</a></li>
                </ul>
              </div>
              <div>
                <h4>Community</h4>
                <ul>
                  <li><a href="https://x.com/PowerAiX" target="_blank" rel="noopener noreferrer">@PowerAiX</a></li>
                  <li><a href="/dashboard">Dashboard</a></li>
                </ul>
              </div>
              <div>
                <h4>Network</h4>
                <ul>
                  <li>Base Chain</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; 2026 Power AI. All rights reserved.
            </div>
          </div>
        </footer>

        {/* ElevenLabs ConvAI Widget */}
        <elevenlabs-convai agent-id="agent_01jxkz2fxdef9arn6b0mfpnqa1"></elevenlabs-convai>
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      </body>
    </html>
  )
}
