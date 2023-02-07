import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'font-awesome/css/font-awesome.min.css';
import './input.css'
import './output.css'
import './pages/item-view/itemview.css';
import './index.css';
import './pages/home/home.css'
import './pages/bag/bag.css'
import './pages/checkout/checkout.css'
import './pages/addAddress/addaddress.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { BagContextProvider } from './context/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <BagContextProvider>
        <App />
      </BagContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
