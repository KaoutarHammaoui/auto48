import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ComingSoon from './auto48/Components/ComingSoon';
import reportWebVitals from './reportWebVitals';


import Prepa from './auto48/Components/preparationComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
       <Prepa/>
       
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
