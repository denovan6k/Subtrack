import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
const getDomain = import.meta.env.REACT_APP_AUTH0_DOMAIN;

const getClientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Auth0Provider
  domain={getDomain}
  clientId={getClientId}
  authorizationParams={{ redirect_uri: window.location.origin }}>
  <App />
</Auth0Provider>
);