// Voice webhook API route for Twilio
// This handles incoming voice calls and responds with AI-generated speech

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Twilio expects XML response (TwiML)
  const twimlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather input="speech" action="/api/voice/handle" speechTimeout="5" enhanced="true">
    <Say voice="Google.en-US-Neural2-F">
      Hello! You've reached Power AI. I'm Muddy, the AI CEO. 

      I can help you with booking a consultation, learning about our AI employee services, or answering questions about Power AI.

      How can I help you today?
    </Say>
  </Gather>
  <Say voice="Google.en-US-Neural2-F">
    I didn't hear you. Please try again.
  </Say>
</Response>`

  res.setHeader('Content-Type', 'text/xml')
  res.status(200).send(twimlResponse)
}
