import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from '@pages/home.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> }

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
