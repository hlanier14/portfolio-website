import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
