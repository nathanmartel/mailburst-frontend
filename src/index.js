import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { AuthProvider } from './context/AuthContext';

render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
