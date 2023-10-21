import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter basename="/react-6-redux">
         <App />
    </BrowserRouter>
  
);
