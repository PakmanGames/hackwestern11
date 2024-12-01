import { useEffect } from 'react';
import triggerVoiceflowEvent from '../utils/voiceflowApi';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Replace 'your-user-id' with the actual user ID or a way to get it
    triggerVoiceflowEvent('mahbod.miraly@gmail.com', 'web_visit');
  }, []); // Empty dependency array means this runs once when the component mounts

  return <Component {...pageProps} />;
}

export default MyApp;