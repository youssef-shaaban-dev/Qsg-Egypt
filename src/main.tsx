import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import "./i18n";

console.log("App loaded successfully - Cache cleared");

const rootElement = document.getElementById('root')!;

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// If the root element has children, it means the HTML was pre-rendered (SSR/SSG).
// Use hydrateRoot to attach event listeners without destroying the DOM.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
