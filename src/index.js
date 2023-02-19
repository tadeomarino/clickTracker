import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClickTracker from "./components/ClickTracker.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
    <ClickTracker />
  
  </React.StrictMode>
);
