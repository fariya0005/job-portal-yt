import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './App';
import store from './redux/store'; // Corrected import path for your Redux store
import './index.css'; // Your global CSS file
import { Toaster } from './components/ui/sonner.jsx'; // Import Toaster from your toast component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your app with Provider */}
      <App />
      <Toaster /> {/* Add the Toaster component here */}
    </Provider>
  </React.StrictMode>
);
