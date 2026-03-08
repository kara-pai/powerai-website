import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const body = await request.json();
  const { productId, productName, price } = body;

  // Parse price - remove $ and convert to cents
  const priceCents = parseFloat(price.replace('$', '').replace('/mo', '')) * 100;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
              description: `Power AI - ${productName}`,
            },
            unit_amount: Math.round(priceCents),
          },
          quantity: 1,
        },
      ],
      mode: price.includes('/mo') ? 'subscription' : 'payment',
      success_url: `${request.headers.get('origin')}/mart/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/mart`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}