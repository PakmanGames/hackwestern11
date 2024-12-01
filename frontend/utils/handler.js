export default async function handler(req, res) {
  const voiceflowApiKey = process.env.NEXT_PUBLIC_VOICE_FLOW;
  if (req.method === 'POST') {
    const userId = "guest"; // Replace with a unique user identifier if applicable
    try {
      // Send a request to the Voiceflow API
      const response = await fetch(`https://general-runtime.voiceflow.com/state/${userId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${voiceflowApiKey}`, // Add your Voiceflow API Key
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: {
            type: 'event', // Trigger an event
            payload: {
              event: {
                name: 'WORKING', // Replace with your desired event name
              },
            },
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Voiceflow API error: ${response.status}`);
      }

      const data = await response.json();

      // Send the Voiceflow response back to the frontend
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error interacting with Voiceflow:', error);
      return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else {
    // Handle non-POST methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
