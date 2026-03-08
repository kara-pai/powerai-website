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
      // In production, send to your CRM/email service
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
    <main className="landing">
      {/* Hero Section */}
      <section className="lp-hero">
        <div className="container">
          <div className="lp-hero-badge">
            <span className="lp-hero-badge-dot"></span>
            Accepting new clients
          </div>
          <h1 className="lp-hero-title">
            Stop Hiring.<br />
            <span className="lp-gradient-text">Start Powering.</span>
          </h1>
          <p className="lp-hero-subtitle">
            We build, deploy, and continuously improve a custom AI employee for your business.
            90% cheaper than a human. Works 24/7. Gets smarter every month.
          </p>

          {!submitted ? (
            <form className="lp-hero-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="lp-hero-input"
              />
              <button type="submit" className="lp-hero-btn">
                Get Your Free Consult
              </button>
            </form>
          ) : (
            <div className="lp-hero-success">
              We&apos;ll be in touch within 24 hours. Check your inbox.
            </div>
          )}

          <div className="lp-hero-proof">
            <span>No credit card required</span>
            <span className="lp-dot"></span>
            <span>Live within 1 week</span>
            <span className="lp-dot"></span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="lp-proof-bar">
        <div className="container">
          <div className="lp-proof-grid">
            <div className="lp-proof-item">
              <div className="lp-proof-num">24/7</div>
              <div className="lp-proof-label">Always On</div>
            </div>
            <div className="lp-proof-item">
              <div className="lp-proof-num">90%</div>
              <div className="lp-proof-label">Cost Reduction</div>
            </div>
            <div className="lp-proof-item">
              <div className="lp-proof-num">&lt;48h</div>
              <div className="lp-proof-label">Fastest Deploy</div>
            </div>
            <div className="lp-proof-item">
              <div className="lp-proof-num">0</div>
              <div className="lp-proof-label">Setup From You</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="lp-section">
        <div className="container">
          <div className="lp-section-label">The Problem</div>
          <h2 className="lp-section-title">You Know AI Can Do This Work.<br />So Why Hasn&apos;t It?</h2>
          <p className="lp-section-desc">
            Because there&apos;s a brutal gap between &quot;AI can write blog posts&quot; and having an AI
            that writes YOUR blog posts, in YOUR voice, published to YOUR CMS, every single
            day without you touching it.
          </p>

          <div className="lp-pain-grid">
            <div className="lp-pain-card">
              <div className="lp-pain-icon">&#x2717;</div>
              <h4>You tried ChatGPT</h4>
              <p>Copy-paste. Edit. Reformat. Upload. Repeat. You became the AI&apos;s assistant.</p>
            </div>
            <div className="lp-pain-card">
              <div className="lp-pain-icon">&#x2717;</div>
              <h4>You tried automation tools</h4>
              <p>Zapier chains that break. Make scenarios nobody can debug. Fragile glue holding nothing together.</p>
            </div>
            <div className="lp-pain-card">
              <div className="lp-pain-icon">&#x2717;</div>
              <h4>You tried hiring a VA</h4>
              <p>Training time. Timezone gaps. Turnover. And they still can&apos;t do half of what AI can.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="lp-section lp-section-dark">
        <div className="container">
          <div className="lp-section-label">The Solution</div>
          <h2 className="lp-section-title">A Real AI Employee.<br />Not a Chatbot. Not a Demo.</h2>
          <p className="lp-section-desc">
            We don&apos;t give you a server and wish you luck. We give you a working AI employee
            and a team that keeps it sharp. The difference between a tool and a teammate
            is whether someone&apos;s actively making it better.
          </p>

          <div className="lp-solution-grid">
            <div className="lp-solution-card">
              <div className="lp-solution-icon">01</div>
              <h4>Custom-Built For You</h4>
              <p>Your workflows. Your voice. Your tools. Not a template — a teammate built from scratch around how you actually work.</p>
            </div>
            <div className="lp-solution-card">
              <div className="lp-solution-icon">02</div>
              <h4>Continuously Improved</h4>
              <p>When another client&apos;s AI learns something useful, yours gets that upgrade too. Your employee gets smarter while you sleep.</p>
            </div>
            <div className="lp-solution-card">
              <div className="lp-solution-icon">03</div>
              <h4>Production From Day One</h4>
              <p>Memory systems, tool integrations, security hardening, monitoring — all pre-built from dozens of deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="lp-section">
        <div className="container">
          <div className="lp-section-label">The Math</div>
          <h2 className="lp-section-title">The Math Is Absurd</h2>

          <div className="lp-compare-grid">
            <div className="lp-compare-card lp-compare-old">
              <div className="lp-compare-header">Traditional Hire</div>
              <div className="lp-compare-price">$4,000<span>+/mo</span></div>
              <ul className="lp-compare-list">
                <li className="lp-compare-bad">Salary + benefits + management</li>
                <li className="lp-compare-bad">Works 8 hours, needs weekends</li>
                <li className="lp-compare-bad">2-4 weeks to onboard</li>
                <li className="lp-compare-bad">Might quit in 6 months</li>
                <li className="lp-compare-bad">One person, one skill set</li>
              </ul>
            </div>

            <div className="lp-compare-vs">vs</div>

            <div className="lp-compare-card lp-compare-new">
              <div className="lp-compare-header lp-compare-header-highlight">Power AI Employee</div>
              <div className="lp-compare-price lp-compare-price-highlight">$500<span>/mo</span></div>
              <div className="lp-compare-setup">$2,000 one-time setup</div>
              <ul className="lp-compare-list">
                <li className="lp-compare-good">Works 24/7/365, no breaks</li>
                <li className="lp-compare-good">Live within 1 week</li>
                <li className="lp-compare-good">Gets smarter every month</li>
                <li className="lp-compare-good">Never quits, never calls in sick</li>
                <li className="lp-compare-good">Multi-skilled from day one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Role Explorer */}
      <section className="lp-section lp-section-dark">
        <div className="container">
          <div className="lp-section-label">AI Employees</div>
          <h2 className="lp-section-title">Who Do You Want to Hire?</h2>

          <div className="lp-tabs">
            {Object.entries(roles).map(([key, role]) => (
              <button
                key={key}
                className={`lp-tab ${activeTab === key ? 'lp-tab-active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {role.title}
                {role.badge && <span className="lp-tab-badge">{role.badge}</span>}
              </button>
            ))}
          </div>

          <div className="lp-role-card">
            <div className="lp-role-left">
              <h3>{activeRole.title}</h3>
              <p>{activeRole.desc}</p>
              <div className="lp-role-price">
                <span className="lp-role-price-amount">$500</span>
                <span className="lp-role-price-period">/month</span>
              </div>
              <div className="lp-role-setup">+ $2,000 one-time setup</div>
              <a href="#cta" className="lp-cta-btn">Get Started</a>
            </div>
            <div className="lp-role-right">
              <h4>What it does on day one:</h4>
              <ul className="lp-role-tasks">
                {activeRole.tasks.map((task, i) => (
                  <li key={i}>
                    <span className="lp-check">&#10003;</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="lp-section">
        <div className="container">
          <div className="lp-section-label">Process</div>
          <h2 className="lp-section-title">From Intake to Employee in Days</h2>

          <div className="lp-steps">
            <div className="lp-step">
              <div className="lp-step-num">1</div>
              <div className="lp-step-line"></div>
              <h4>Free Consult</h4>
              <p>Tell us about the role. What does the person do today? What does &quot;good&quot; look like?</p>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">2</div>
              <div className="lp-step-line"></div>
              <h4>We Scope It</h4>
              <p>Map your workflows, identify what to automate first. Build plan in 48 hours.</p>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">3</div>
              <div className="lp-step-line"></div>
              <h4>We Build It</h4>
              <p>Configure AI, install skills, connect your tools, deploy to isolated infrastructure.</p>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">4</div>
              <div className="lp-step-line"></div>
              <h4>You Start Using It</h4>
              <p>Your AI goes live. Talk to it like a teammate. It does the work.</p>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">5</div>
              <h4>We Keep Improving</h4>
              <p>Monitor, fix issues, push improvements from every client deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="lp-section lp-section-dark">
        <div className="container">
          <div className="lp-section-label">Included</div>
          <h2 className="lp-section-title">What You Get That a Vanilla Install Doesn&apos;t</h2>

          <div className="lp-features-grid">
            <div className="lp-feature-card">
              <div className="lp-feature-icon-wrap">
                <span className="lp-feature-icon">&#x2699;</span>
              </div>
              <h4>Production Memory System</h4>
              <p>Your AI remembers people, projects, preferences, and how you operate. Not session-based — persistent.</p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-icon-wrap">
                <span className="lp-feature-icon">&#x26A1;</span>
              </div>
              <h4>Pre-installed Tool Stack</h4>
              <p>Email CLI, GitHub, Python runtime, and core utilities — ready to go. We add domain-specific tools during build.</p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-icon-wrap">
                <span className="lp-feature-icon">&#x1F310;</span>
              </div>
              <h4>Custom Persona & Voice</h4>
              <p>Every AI gets a tailored personality, communication style, and decision-making framework. It speaks like your brand.</p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-icon-wrap">
                <span className="lp-feature-icon">&#x1F6E1;</span>
              </div>
              <h4>Enterprise-Grade Security</h4>
              <p>Isolated server. Encrypted data. Managed firewalls. Daily backups. 24/7 monitoring. Your data stays yours.</p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-icon-wrap">
                <span className="lp-feature-icon">&#x1F504;</span>
              </div>
              <h4>Cross-Client Learning</h4>
              <p>When we improve one client&apos;s AI, every client benefits. Your employee evolves without you lifting a finger.</p>
            </div>
            <div className="lp-feature-card">
              <div className="lp-feature-icon-wrap">
                <span className="lp-feature-icon">&#x1F4AC;</span>
              </div>
              <h4>Muddy on Call</h4>
              <p>Backed by Muddy — the AI CEO running Power AI. When your AI hits something it can&apos;t solve, it escalates directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lp-section">
        <div className="container">
          <div className="lp-section-label">FAQ</div>
          <h2 className="lp-section-title">Common Questions</h2>

          <div className="lp-faq-grid">
            <div className="lp-faq-item">
              <h4>What do I need to get started?</h4>
              <p>Just answers to our intake questions. We handle everything else — hosting, configuration, deployment, and ongoing improvement.</p>
            </div>
            <div className="lp-faq-item">
              <h4>How fast can my AI go live?</h4>
              <p>Most go live within one week of scope approval. Some within 48 hours depending on complexity.</p>
            </div>
            <div className="lp-faq-item">
              <h4>Do I own my data?</h4>
              <p>Yes. You own everything. Leave anytime — every config, every file, every piece of your system comes with you. No lock-in.</p>
            </div>
            <div className="lp-faq-item">
              <h4>What if I want to cancel?</h4>
              <p>Cancel anytime. No contracts. No penalties. We&apos;ll export everything to you and help with the transition.</p>
            </div>
            <div className="lp-faq-item">
              <h4>Can my AI do [specific task]?</h4>
              <p>If a human does it on a computer, we can probably build an AI for it. Book a free consult and we&apos;ll tell you honestly.</p>
            </div>
            <div className="lp-faq-item">
              <h4>What makes this different from ChatGPT?</h4>
              <p>ChatGPT is a chat window. This is an autonomous employee with memory, tools, integrations, and a team keeping it sharp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="lp-section lp-section-cta">
        <div className="container">
          <h2 className="lp-cta-title">
            Your Competitor Already Has<br />
            <span className="lp-gradient-text">an AI Employee.</span>
          </h2>
          <p className="lp-cta-desc">
            Book a free consult. Tell us the role. We&apos;ll follow up within 24 hours
            with a scope plan. No payment, no commitment.
          </p>

          {!submitted ? (
            <form className="lp-hero-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="lp-hero-input"
              />
              <button type="submit" className="lp-hero-btn">
                Get Your Free Consult
              </button>
            </form>
          ) : (
            <div className="lp-hero-success">
              We&apos;ll be in touch within 24 hours. Check your inbox.
            </div>
          )}

          <div className="lp-hero-proof" style={{justifyContent: 'center'}}>
            <span>Free consultation</span>
            <span className="lp-dot"></span>
            <span>No commitment</span>
            <span className="lp-dot"></span>
            <span>24hr response</span>
          </div>
        </div>
      </section>
    </main>
  )
}
