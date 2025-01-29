import ReactDOM from 'react-dom/client';
import React from "react";

import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

const getDomain = import.meta.env.VITE_AUTH0_DOMAIN;
const getClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}
const root = ReactDOM.createRoot(rootElement);
console.log("Auth0 Domain:", getDomain);
console.log("Auth0 Client ID:", getClientId);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={getDomain}
      clientId={getClientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
