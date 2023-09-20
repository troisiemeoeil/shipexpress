import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
  domain="dev-fbzmmxesxvdvbegk.eu.auth0.com"
  clientId="BStc4RaBktZg63jXAER20r5uGZ3ZQaMA"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>

);

