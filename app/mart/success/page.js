export default function SuccessPage() {
  return (
    <main style={{paddingTop: '80px'}}>
      <section className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <div style={{fontSize: '4rem', marginBottom: '20px'}}>✅</div>
          <h1 style={{fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary)'}}>
            Payment Successful!
          </h1>
          <p style={{fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px'}}>
            Thank you for your purchase. Check your email for delivery details.
          </p>
          <a href="/" className="cta-btn" style={{textDecoration: 'none'}}>
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}