import React from 'react';
import ReactDOM from 'react-dom'; // Correct import
import './index.css';
import './App.css'; // Correct import placement
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
