import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Service worker registration failed, continue without it
    });
  });
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  console.error("Failed to render app:", error);
  rootElement.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui, -apple-system, sans-serif; background: #0f1419; color: #fff; text-align: center; padding: 20px;">
      <div>
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Loading Error</h1>
        <p style="color: #9ca3af; margin-bottom: 1rem;">Unable to load the application. Please try refreshing the page.</p>
        <button onclick="window.location.reload()" style="background: #4F94FA; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 1rem;">Refresh Page</button>
      </div>
    </div>
  `;
}
