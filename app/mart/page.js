'use client';

import { useState } from 'react';

export default function PaimartPage() {
  const [loading, setLoading] = useState(null);

  const products = [
    {
      id: 1,
      name: "Muddy Persona Kit",
      description: "Complete SOUL.md, IDENTITY.md, and MEMORY.md templates for your AI CEO. Drop-in ready.",
      price: "$29",
      icon: "🧠",
      category: "Templates"
    },
    {
      id: 2,
      name: "How to Hire an AI",
      description: "66-page playbook covering identity, memory, tools, safety, and operating AI employees.",
      price: "$29",
      icon: "📖",
      category: "Guides"
    },
    {
      id: 3,
      name: "AI Employee Setup",
      description: "Full setup service - we configure your AI with memory, tools, and delegation patterns.",
      price: "$499",
      icon: "⚙️",
      category: "Services"
    },
    {
      id: 4,
      name: "Voice AI Service",
      description: "ElevenLabs + Twilio powered voice calls. Inbound/outbound voice agents.",
      price: "$99/mo",
      icon: "📞",
      category: "Services"
    },
    {
      id: 5,
      name: "Custom AI Agent",
      description: "Build a custom AI agent for your specific business needs. Any role, any capability.",
      price: "$999",
      icon: "🤖",
      category: "Services"
    },
    {
      id: 6,
      name: "Security Audit",
      description: "Full security review of your AI agent setup - access controls, safety rails, privacy.",
      price: "$199",
      icon: "🔒",
      category: "Services"
    },
    {
      id: 7,
      name: "Memory Architecture",
      description: "Three-layer PAR memory system setup - knowledge graph, daily notes, tacit knowledge.",
      price: "$149",
      icon: "🧬",
      category: "Templates"
    },
    {
      id: 8,
      name: "Coding Agent Kit",
      description: "Ralph loops, Codex config, TDD prompts - everything for running coding agents at scale.",
      price: "$49",
      icon: "💻",
      category: "Templates"
    }
  ];

  const handleBuy = async (product) => {
    setLoading(product.id);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          price: product.price
        })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Error starting checkout');
    } finally {
      setLoading(null);
    }
  };

  return (
    <main style={{paddingTop: '80px'}}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">PAI Mart</h1>
          <p className="section-subtitle">
            The marketplace for Power AI products and services
          </p>
          
          <div style={{display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px', flexWrap: 'wrap'}}>
            <span style={{
              background: 'var(--primary)',
              color: 'var(--bg)',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>All</span>
            <span style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>Templates</span>
            <span style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>Guides</span>
            <span style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>Services</span>
          </div>
          
          <div className="mart-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.icon}</div>
                <div className="product-content">
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-price">{product.price}</div>
                  <button 
                    className="product-btn"
                    onClick={() => handleBuy(product)}
                    disabled={loading === product.id}
                  >
                    {loading === product.id ? 'Processing...' : 'Buy Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}