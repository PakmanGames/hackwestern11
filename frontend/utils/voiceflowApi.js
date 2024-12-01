const triggerVoiceflowEvent = async (userId, eventName) => {
    const url = `https://general-runtime.voiceflow.com/state/${userId}`;
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      action: {
        type: 'event',
        payload: {
          event: {
            name: eventName
          }
        }
      }
    });
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Voiceflow event triggered successfully:', data);
      return data;
    } catch (error) {
      console.error('Error triggering Voiceflow event:', error);
    }
  };
  
  export default triggerVoiceflowEvent;