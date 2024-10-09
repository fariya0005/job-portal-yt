import React from 'react';
import './App.css';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home'; // Ensure this component exists
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define your app routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // This route will display the Home component without Navbar
  },
  {
    path: '/login',
    element: <Login />, // This route will display the Login component without Navbar
  },
  {
    path: '/signup',
    element: <Signup />, // This route will display the Signup component without Navbar
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
      <ToastContainer />
    </div>
  );
}

export default App;
