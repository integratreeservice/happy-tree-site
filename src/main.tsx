import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { captureGclid } from './lib/gclid'

// Capture the Google Ads click ID (if present) before the app renders
captureGclid();

createRoot(document.getElementById("root")!).render(<App />);
