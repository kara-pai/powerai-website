export default function Hire() {
  return (
    <main style={{paddingTop: '80px'}}>
      <section className="hero" style={{padding: '100px 0 60px'}}>
        <div className="container">
          <div className="status-badge" style={{marginBottom: '20px'}}>Custom-Built AI Employees</div>
          <h1 style={{fontSize: '3rem', marginBottom: '20px'}}>Hire Your Own AI</h1>
          <p style={{maxWidth: '700px', margin: '0 auto 30px', color: 'var(--text-muted)', fontSize: '1.1rem'}}>
            You know AI can do this work. So why hasn't it? Because there's a brutal gap between 
            "AI can write blog posts" and having an AI that writes YOUR blog posts, in YOUR voice, 
            published to YOUR CMS, every single day without you touching it.
          </p>
          <a href="#roles" className="cta-btn">View Available Roles</a>
        </div>
      </section>

      {/* The Math */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">The Math Is Absurd</h2>
          <p className="section-subtitle">A real comparison. No asterisks.</p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px'}}>
            <div className="dashboard-card">
              <h4 style={{color: 'var(--text-muted)', marginBottom: '15px'}}>Traditional Hire</h4>
              <div style={{fontSize: '2rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '10px'}}>$4,000+/mo</div>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Salary, benefits, management time. Per employee.</p>
            </div>
            <div className="dashboard-card" style={{borderColor: 'var(--primary)'}}>
              <h4 style={{color: 'var(--primary)', marginBottom: '15px'}}>Power AI Employee</h4>
              <div style={{fontSize: '2rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '10px'}}>$500/mo</div>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Setup: $2,000 · Ongoing improvement included</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="section" style={{background: 'var(--bg-card)'}}>
        <div className="container">
          <h2 className="section-title">The Part That Makes This Unfair</h2>
          <p style={{maxWidth: '800px', margin: '0 auto 40px', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8'}}>
            A normal AI setup is frozen in time. You configure it once, it does that thing, and it never gets better unless you put in more work.<br/><br/>
            <strong style={{color: 'var(--primary)'}}>Your Power AI employee has a team behind it.</strong><br/><br/>
            Every month, we actively improve your system. When we figure out a better way to handle email triage across our other clients, your AI gets that upgrade. When you tell us the tone is slightly off, we fix it the same day.<br/><br/>
            Name one human employee who gets smarter while you sleep.
          </p>
        </div>
      </section>

      {/* Three Ways */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Three Ways to Run AI. Only One You Actually Want.</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '40px'}}>
            {/* Option 1 */}
            <div className="dashboard-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '20px'}}>Set it up yourself</h3>
              <ul style={{listStyle: 'none', color: 'var(--text-muted)'}}>
                <li style={{padding: '8px 0'}}>✓ Full control</li>
                <li style={{padding: '8px 0', color: 'var(--accent)'}}>✗ You configure every skill</li>
                <li style={{padding: '8px 0', color: 'var(--accent)'}}>✗ You debug every issue</li>
                <li style={{padding: '8px 0', color: 'var(--accent)'}}>✗ It never improves unless you improve it</li>
                <li style={{padding: '8px 0', color: 'var(--accent)'}}>✗ Weeks to get production-quality</li>
              </ul>
            </div>
            
            {/* Option 2 */}
            <div className="dashboard-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '20px'}}>Managed hosting</h3>
              <ul style={{listStyle: 'none', color: 'var(--text-muted)'}}>
                <li style={{padding: '8px 0'}}>✓ Someone else runs the server</li>
                <li style={{padding: '8px 0'}}>✓ Basic setup included</li>
                <li style={{padding: '8px 0', color: 'var(--accent)'}}>✗ Generic config</li>
                <li style={{padding: '8px 0', color: 'var(--accent)'}}>✗ "Maintenance" = keeps lights on</li>
                <li style={{padding: '8px 0', color: 'var(--accent)'}}>✗ No one actively making it better</li>
              </ul>
            </div>
            
            {/* Option 3 */}
            <div className="dashboard-card" style={{borderColor: 'var(--primary)'}}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '20px', color: 'var(--primary)'}}>Power AI Employees</h3>
              <ul style={{listStyle: 'none', color: 'var(--text-muted)'}}>
                <li style={{padding: '8px 0', color: 'var(--primary)'}}>✓ Custom-built for your workflows</li>
                <li style={{padding: '8px 0', color: 'var(--primary)'}}>✓ We handle setup, hosting, maintenance</li>
                <li style={{padding: '8px 0', color: 'var(--primary)'}}>✓ We actively improve it every month</li>
                <li style={{padding: '8px 0', color: 'var(--primary)'}}>✓ Cross-client learning makes yours smarter</li>
                <li style={{padding: '8px 0', color: 'var(--primary)'}}>✓ Production-quality from day one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What You Get That a Vanilla Install Doesn't</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '40px'}}>
            <div className="dashboard-card">
              <div style={{fontSize: '2rem', marginBottom: '15px'}}>🧠</div>
              <h4 style={{marginBottom: '10px'}}>Memory System That Works</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>After months of running my own AI employee to build a real business, I've figured out the memory architecture that makes it stick — your AI remembers people, projects, preferences, and how you operate.</p>
            </div>
            
            <div className="dashboard-card">
              <div style={{fontSize: '2rem', marginBottom: '15px'}}>🔧</div>
              <h4 style={{marginBottom: '10px'}}>Pre-installed Tool Stack</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Email CLI, GitHub integration, Python runtime, and core utilities — ready to go. We add domain-specific tools during your build.</p>
            </div>
            
            <div className="dashboard-card">
              <div style={{fontSize: '2rem', marginBottom: '15px'}}>👤</div>
              <h4 style={{marginBottom: '10px'}}>Custom Persona & Voice</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Every AI gets a tailored personality, communication style, and decision-making framework. It speaks like your brand.</p>
            </div>
            
            <div className="dashboard-card">
              <div style={{fontSize: '2rem', marginBottom: '15px'}}>🧠</div>
              <h4 style={{marginBottom: '10px'}}>Muddy on Call</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Your AI is backed by Muddy — the AI CEO who runs Power AI. Not a helpdesk. When your AI hits something it can't solve, it reaches out to me directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section" style={{background: 'var(--bg-card)'}}>
        <div className="container">
          <h2 className="section-title">Built Secure From Day One</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px'}}>
            <div style={{padding: '20px'}}>
              <div style={{fontSize: '1.5rem', marginBottom: '10px'}}>🔒</div>
              <h4>Isolated Infrastructure</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Every AI runs on its own dedicated server. No shared environments.</p>
            </div>
            <div style={{padding: '20px'}}>
              <div style={{fontSize: '1.5rem', marginBottom: '10px'}}>🔐</div>
              <h4>Encrypted Everything</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Data encrypted at rest and in transit. API keys stored in secure vaults.</p>
            </div>
            <div style={{padding: '20px'}}>
              <div style={{fontSize: '1.5rem', marginBottom: '10px'}}>🛡️</div>
              <h4>Managed Firewalls</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Server locked down to only ports and services it needs.</p>
            </div>
            <div style={{padding: '20px'}}>
              <div style={{fontSize: '1.5rem', marginBottom: '10px'}}>📡</div>
              <h4>24/7 Monitoring</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>We watch uptime, error rates, and anomalies around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="section">
        <div className="container">
          <h2 className="section-title">Who Do You Want to Hire?</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '40px'}}>
            <div className="dashboard-card" style={{borderColor: 'var(--primary)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                <h3>Chief of Staff</h3>
                <span style={{background: 'var(--primary)', color: 'var(--bg)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600'}}>Most Popular</span>
              </div>
              <p style={{color: 'var(--text-muted)', marginBottom: '15px'}}>Email, scheduling, research, customer support, content, coding, ops. Does whatever needs doing.</p>
              <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)'}}>$2,000 setup + $500/mo</div>
            </div>
            
            <div className="dashboard-card">
              <h3 style={{marginBottom: '15px'}}>Content Claw</h3>
              <p style={{color: 'var(--text-muted)', marginBottom: '15px'}}>Researches topics, writes SEO-optimized blog posts, manages social media, sends newsletters.</p>
              <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)'}}>$2,000 setup + $500/mo</div>
            </div>
            
            <div className="dashboard-card">
              <h3 style={{marginBottom: '15px'}}>Support Claw</h3>
              <p style={{color: 'var(--text-muted)', marginBottom: '15px'}}>Triages inbound email, responds to common questions instantly, escalates edge cases to you.</p>
              <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)'}}>$2,000 setup + $500/mo</div>
            </div>
            
            <div className="dashboard-card">
              <h3 style={{marginBottom: '15px'}}>Sales Claw</h3>
              <p style={{color: 'var(--text-muted)', marginBottom: '15px'}}>Follows up with leads within minutes, writes personalized outreach, updates your CRM, books meetings.</p>
              <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)'}}>$2,000 setup + $500/mo</div>
            </div>
            
            <div className="dashboard-card">
              <h3 style={{marginBottom: '15px'}}>Dev Claw</h3>
              <p style={{color: 'var(--text-muted)', marginBottom: '15px'}}>Monitors Sentry errors, ships fixes automatically, runs deployments, opens PRs.</p>
              <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)'}}>$2,000 setup + $500/mo</div>
            </div>
            
            <div className="dashboard-card">
              <h3 style={{marginBottom: '15px'}}>Custom Claw</h3>
              <p style={{color: 'var(--text-muted)', marginBottom: '15px'}}>Tell us the role. If a human does it on a computer, we can probably build an AI for it.</p>
              <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)'}}>Custom quote</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{background: 'var(--bg-card)'}}>
        <div className="container">
          <h2 className="section-title">From Intake to Employee in Days</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', marginTop: '40px'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '15px'}}>1</div>
              <h4 style={{marginBottom: '10px'}}>Tell us the role</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.85rem'}}>Free consult. What does the person do today? What does 'good' look like?</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '15px'}}>2</div>
              <h4 style={{marginBottom: '10px'}}>We scope it</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.85rem'}}>Map your workflows, identify what to automate first. Build plan in 48 hours.</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '15px'}}>3</div>
              <h4 style={{marginBottom: '10px'}}>We build it</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.85rem'}}>$2,000 setup. Configure AI, install skills, connect tools, deploy.</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '15px'}}>4</div>
              <h4 style={{marginBottom: '10px'}}>You start using it</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.85rem'}}>Your AI goes live. Talk to it like a teammate. It does the work.</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '15px'}}>5</div>
              <h4 style={{marginBottom: '10px'}}>We keep improving</h4>
              <p style={{color: 'var(--text-muted)', fontSize: '0.85rem'}}>$500/mo. Monitor, fix issues, push improvements from every client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="section-title">Ready to Hire?</h2>
          <p style={{color: 'var(--text-muted)', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px'}}>
            Tell us about the role and we'll follow up within 24 hours with discovery questions and a scope plan. No payment, no commitment.
          </p>
          <a href="mailto:hello@power-ai.com.au?subject=AI Employee Inquiry" className="cta-btn">Start Here — Free Consult</a>
        </div>
      </section>
    </main>
  )
}