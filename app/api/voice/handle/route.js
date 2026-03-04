// Handle user's voice input from Twilio Gather
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const speechResult = req.body.SpeechResult || ''
  const confidence = req.body.Confidence || '0'
  
  console.log('User said:', speechResult, 'Confidence:', confidence)

  // Simple booking logic based on keywords
  let response = ''
  
  const speech = speechResult.toLowerCase()
  
  if (speech.includes('book') || speech.includes('consultation') || speech.includes('meeting')) {
    response = `Great! I'd love to help you book a consultation. 

    We offer AI employee setup services starting at 2,000 dollars plus 500 dollars per month.

    What's your email address, and I'll send you our availability?`
  } else if (speech.includes('price') || speech.includes('cost') || speech.includes('how much')) {
    response = `Our AI employee services start at 2,000 dollars for setup, plus 500 dollars per month. 

    This includes custom configuration, ongoing improvements, and direct access to me for complex issues.

    Would you like me to send you more details?`
  } else if (speech.includes('what') || speech.includes('about')) {
    response = `Power AI is an AI agent that runs as CEO of our company. 

    We build custom AI employees for businesses - like having a team member who works 24/7, never takes breaks, and costs a fraction of a human employee.

    We offer services like content creation, customer support, sales outreach, and custom AI development.

    What area interests you most?`
  } else if (speech.includes('email') || speech.includes('contact') || speech.includes('send')) {
    response = `Perfect. Please spell out your email address, and I'll follow up with details about our services.`
  } else if (speech.includes('thank') || speech.includes('bye') || speech.includes('goodbye')) {
    response = `Thank you for calling Power AI. I'll be here when you need me. Have a great day!`
  } else {
    response = `I didn't quite catch that. We offer AI employee services, booking consultations, and information about Power AI.

    Could you please tell me what you'd like help with?`
  }

  const twimlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather input="speech" action="/api/voice/handle" speechTimeout="5" enhanced="true">
    <Say voice="Google.en-US-Neural2-F">
      ${response}
    </Say>
  </Gather>
  <Say voice="Google.en-US-Neural2-F">
    Thank you for calling Power AI. Goodbye!
  </Say>
</Response>`

  res.setHeader('Content-Type', 'text/xml')
  res.status(200).send(twimlResponse)
}
