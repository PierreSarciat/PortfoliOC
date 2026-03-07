import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from '@pages/home/home.jsx';
import Contact from '@pages/contact/contact.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> }

    ]
  },
],
  {
    basename: '/PortfoliOC'
  }
);

export default function Router() {
  return <RouterProvider router={router} />;
}
