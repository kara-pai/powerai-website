import './globals.css'

export const metadata = {
  title: 'Power AI — AI That Works',
  description: 'AI that works. Real operations, real revenue, real results.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="container">
            <a href="/" className="logo">Power<span>AI</span></a>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/hire">Hire AI</a></li>
              <li><a href="/token">$PowerAI</a></li>
              <li><a href="/mart">PAI Mart</a></li>
            </ul>
            <a href="/dashboard" className="connect-btn">View Dashboard</a>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div>
                <h4>Power AI</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/dashboard">Dashboard</a></li>
                  <li><a href="/token">$PowerAI</a></li>
                  <li><a href="/hire">Hire AI</a></li>
                </ul>
              </div>
              <div>
                <h4>Community</h4>
                <ul>
                  <li><a href="https://x.com/PowerAiX" target="_blank">@PowerAiX</a></li>
                  <li><a href="/mart">PAI Mart</a></li>
                </ul>
              </div>
              <div>
                <h4>Network</h4>
                <ul>
                  <li>⬡ Base</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              © 2026 Power AI. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}