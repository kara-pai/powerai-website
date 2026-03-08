'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('chief')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  const roles = {
    chief: {
      title: 'Chief of Staff',
      desc: 'Email, scheduling, research, customer support, content, coding, ops. Does whatever needs doing.',
      tasks: ['Triage and respond to emails', 'Schedule and prep for meetings', 'Research competitors and markets', 'Draft documents and reports', 'Manage project workflows'],
      badge: 'Most Popular'
    },
    content: {
      title: 'Content Claw',
      desc: 'Researches topics, writes SEO-optimized blog posts, manages social media, sends newsletters.',
      tasks: ['Write daily blog posts in your voice', 'Publish directly to your CMS', 'Manage social media calendar', 'Send weekly newsletters', 'Track content performance'],
      badge: null
    },
    sales: {
      title: 'Sales Claw',
      desc: 'Follows up with leads within minutes, writes personalized outreach, updates your CRM, books meetings.',
      tasks: ['Respond to leads in under 2 minutes', 'Write personalized follow-ups', 'Update your CRM automatically', 'Book qualified meetings', 'Generate pipeline reports'],
      badge: null
    },
    support: {
      title: 'Support Claw',
      desc: 'Triages inbound email, responds to common questions instantly, escalates edge cases to you.',
      tasks: ['Instant response to support tickets', 'Resolve common issues autonomously', 'Escalate complex cases to humans', 'Track resolution metrics', 'Build knowledge base from interactions'],
      badge: null
    },
    dev: {
      title: 'Dev Claw',
      desc: 'Monitors Sentry errors, ships fixes automatically, runs deployments, opens PRs.',
      tasks: ['Monitor and triage production errors', 'Ship bug fixes autonomously', 'Run CI/CD deployments', 'Open and review pull requests', 'Write tests for new code'],
      badge: null
    }
  }

  const activeRole = roles[activeTab]

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Now Accepting New Clients
          </div>
          <h1>
            Stop Hiring Humans<br />
            <span className="gradient-text">For Robot Work.</span>
          </h1>
          <p className="hero-subtitle">
            We build, deploy, and manage a custom AI employee for your business.
            It works 24/7, costs 90% less, and gets smarter every month.
          </p>

          {!submitted ? (
            <form className="lead-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="lead-input"
              />
              <button type="submit" className="lead-btn">
                Get Free Consult
              </button>
            </form>
          ) : (
            <div className="lead-success">
              We&apos;ll be in touch within 24 hours. Check your inbox.
            </div>
          )}

          <div className="hero-trust">
            <span>No credit card required</span>
            <span className="hero-trust-dot"></span>
            <span>Live in under 1 week</span>
            <span className="hero-trust-dot"></span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="proof-bar">
        <div className="container">
          <div className="proof-grid">
            <div className="proof-item">
              <div className="proof-num">24/7</div>
              <div className="proof-label">Always Online</div>
            </div>
            <div className="proof-item">
              <div className="proof-num">90%</div>
              <div className="proof-label">Cost Reduction</div>
            </div>
            <div className="proof-item">
              <div className="proof-num">&lt;48h</div>
              <div className="proof-label">Fastest Deploy</div>
            </div>
            <div className="proof-item">
              <div className="proof-num">$0</div>
              <div className="proof-label">Setup From You</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="section">
        <div className="container">
          <div className="section-label">The Problem</div>
          <h2 className="section-title">You Know AI Can Do This Work.<br />So Why Hasn&apos;t It?</h2>
          <p className="section-desc">
            There&apos;s a brutal gap between &ldquo;AI can write blog posts&rdquo; and having an AI
            that does YOUR work, in YOUR voice, connected to YOUR tools — without you touching it.
          </p>

          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-icon">&times;</div>
              <h4>You tried ChatGPT</h4>
              <p>Copy-paste. Edit. Reformat. Upload. Repeat. You became the AI&apos;s assistant instead of the other way around.</p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">&times;</div>
              <h4>You tried automation tools</h4>
              <p>Zapier chains that break. Make scenarios nobody can debug. Fragile glue holding nothing together.</p>
            </div>
            <div className="pain-card">
              <div className="pain-icon">&times;</div>
              <h4>You tried hiring a VA</h4>
              <p>Training time. Timezone gaps. Turnover. And they still can&apos;t do half of what AI can in 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-label">The Solution</div>
          <h2 className="section-title">A Real AI Employee.<br />Not a Chatbot. Not a Demo.</h2>
          <p className="section-desc">
            We don&apos;t give you a server and wish you luck. We give you a working AI employee
            and a team that keeps it sharp. Every single month.
          </p>

          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-num">01</div>
              <h4>Custom-Built For You</h4>
              <p>Your workflows. Your voice. Your tools. Not a template — a teammate built from scratch around how you actually work.</p>
            </div>
            <div className="solution-card">
              <div className="solution-num">02</div>
              <h4>Continuously Improved</h4>
              <p>When another client&apos;s AI learns something useful, yours gets that upgrade too. Your employee gets smarter while you sleep.</p>
            </div>
            <div className="solution-card">
              <div className="solution-num">03</div>
              <h4>Production From Day One</h4>
              <p>Memory systems, tool integrations, security hardening, monitoring — all pre-built from dozens of deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING COMPARISON ===== */}
      <section className="section">
        <div className="container">
          <div className="section-label">The Math</div>
          <h2 className="section-title">The Numbers Don&apos;t Lie</h2>

          <div className="compare-grid">
            <div className="compare-card">
              <div className="compare-header">Traditional Hire</div>
              <div className="compare-price">$4,000<span>+/mo</span></div>
              <ul className="compare-list">
                <li className="bad">Salary + benefits + management</li>
                <li className="bad">Works 8 hours, needs weekends</li>
                <li className="bad">2-4 weeks to onboard</li>
                <li className="bad">Might quit in 6 months</li>
                <li className="bad">One person, one skill set</li>
              </ul>
            </div>

            <div className="compare-vs">vs</div>

            <div className="compare-card highlight">
              <div className="compare-header">Power AI Employee</div>
              <div className="compare-price">$500<span>/mo</span></div>
              <div className="compare-setup">+ $2,000 one-time setup</div>
              <ul className="compare-list">
                <li className="good">Works 24/7/365, no breaks</li>
                <li className="good">Live within 1 week</li>
                <li className="good">Gets smarter every month</li>
                <li className="good">Never quits, never calls in sick</li>
                <li className="good">Multi-skilled from day one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROLE EXPLORER ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-label">AI Employees</div>
          <h2 className="section-title">Who Do You Want to Hire?</h2>
          <p className="section-desc">
            Choose a role. We&apos;ll build, deploy, and manage your AI employee end-to-end.
          </p>

          <div className="tabs-wrap">
            {Object.entries(roles).map(([key, role]) => (
              <button
                key={key}
                className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {role.title}
                {role.badge && <span className="tab-badge">{role.badge}</span>}
              </button>
            ))}
          </div>

          <div className="role-card">
            <div className="role-left">
              <h3>{activeRole.title}</h3>
              <p>{activeRole.desc}</p>
              <div className="role-price-wrap">
                <span className="role-price">$500</span>
                <span className="role-price-period">/month</span>
                <div className="role-setup">+ $2,000 one-time setup</div>
              </div>
              <a href="#cta" className="cta-btn-primary">Get Started</a>
            </div>
            <div className="role-right">
              <h4>What it does on day one</h4>
              <ul className="role-tasks">
                {activeRole.tasks.map((task, i) => (
                  <li key={i}>
                    <span className="check-icon">&#10003;</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-label">Process</div>
          <h2 className="section-title">From Intake to Employee in Days</h2>

          <div className="steps-grid">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-line"></div>
              <h4>Free Consult</h4>
              <p>Tell us about the role. What does the person do today?</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-line"></div>
              <h4>We Scope It</h4>
              <p>Map workflows, identify what to automate first. Plan in 48 hours.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-line"></div>
              <h4>We Build It</h4>
              <p>Configure AI, install skills, connect tools, deploy to infrastructure.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-line"></div>
              <h4>Go Live</h4>
              <p>Your AI goes live. Talk to it like a teammate. It does the work.</p>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <h4>We Improve</h4>
              <p>Monitor, fix issues, push improvements from every client deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-label">What&apos;s Included</div>
          <h2 className="section-title">What You Get That a Vanilla Install Doesn&apos;t</h2>
          <p className="section-desc">
            Everything you need to run a production AI employee — out of the box.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">&#x1F9E0;</div>
              <h4>Production Memory System</h4>
              <p>Your AI remembers people, projects, and preferences. Not session-based — persistent and growing.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#x26A1;</div>
              <h4>Pre-installed Tool Stack</h4>
              <p>Email, GitHub, Python runtime, and core utilities — ready to go. Domain-specific tools added during build.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#x1F3AD;</div>
              <h4>Custom Persona & Voice</h4>
              <p>Tailored personality, communication style, and decision-making framework. It speaks like your brand.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#x1F6E1;</div>
              <h4>Enterprise Security</h4>
              <p>Isolated server. Encrypted data. Managed firewalls. Daily backups. 24/7 monitoring. Your data stays yours.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#x1F504;</div>
              <h4>Cross-Client Learning</h4>
              <p>When we improve one client&apos;s AI, every client benefits. Your employee evolves without you lifting a finger.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#x1F4AC;</div>
              <h4>Muddy on Call</h4>
              <p>Backed by Muddy — the AI CEO running Power AI. When your AI hits a wall, it escalates directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section">
        <div className="container">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-desc">
            Everything you need to know before getting started.
          </p>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>What do I need to get started?</h4>
              <p>Just answers to our intake questions. We handle everything — hosting, config, deployment, and ongoing improvement.</p>
            </div>
            <div className="faq-item">
              <h4>How fast can my AI go live?</h4>
              <p>Most go live within one week. Some within 48 hours depending on complexity.</p>
            </div>
            <div className="faq-item">
              <h4>Do I own my data?</h4>
              <p>Yes. You own everything. Leave anytime — every config, file, and piece of your system comes with you.</p>
            </div>
            <div className="faq-item">
              <h4>What if I want to cancel?</h4>
              <p>Cancel anytime. No contracts. No penalties. We&apos;ll export everything and help with the transition.</p>
            </div>
            <div className="faq-item">
              <h4>Can my AI do [specific task]?</h4>
              <p>If a human does it on a computer, we can probably automate it. Book a free consult and we&apos;ll tell you honestly.</p>
            </div>
            <div className="faq-item">
              <h4>What makes this different from ChatGPT?</h4>
              <p>ChatGPT is a chat window. This is an autonomous employee with memory, tools, integrations, and a team keeping it sharp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="cta" className="section section-cta">
        <div className="container">
          <h2 className="cta-title">
            Your Competitor Already Has<br />
            <span className="gradient-text">an AI Employee.</span>
          </h2>
          <p className="cta-desc">
            Book a free consult. Tell us the role. We&apos;ll follow up within 24 hours with a plan. No payment. No commitment.
          </p>

          {!submitted ? (
            <form className="lead-form" onSubmit={handleSubmit} style={{maxWidth: 540, margin: '0 auto 24px'}}>
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="lead-input"
              />
              <button type="submit" className="lead-btn">
                Get Free Consult
              </button>
            </form>
          ) : (
            <div className="lead-success">
              We&apos;ll be in touch within 24 hours. Check your inbox.
            </div>
          )}

          <div className="hero-trust" style={{justifyContent: 'center'}}>
            <span>Free consultation</span>
            <span className="hero-trust-dot"></span>
            <span>No commitment</span>
            <span className="hero-trust-dot"></span>
            <span>24hr response</span>
          </div>
        </div>
      </section>
    </main>
  )
}
