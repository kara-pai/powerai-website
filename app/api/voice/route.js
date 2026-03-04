// Voice webhook API route for Twilio
// This handles incoming voice calls and responds with AI-generated speech
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const body = Object.fromEntries(formData)
    
    console.log('Voice webhook received:', body)
    
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

    return new NextResponse(twimlResponse, {
      headers: { 'Content-Type': 'text/xml' }
    })
  } catch (error) {
    console.error('Voice API error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Voice API ready' })
}
