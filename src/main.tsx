import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Handle redirects from 404.html for GitHub Pages SPA routing
const redirectPath = localStorage.getItem('amoraRedirectPath');
if (redirectPath) {
  localStorage.removeItem('amoraRedirectPath');
  window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);