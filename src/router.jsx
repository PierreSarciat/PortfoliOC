import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Layout from './layout.jsx';
import Contact from '@pages/contact/contact.jsx';


const router = createBrowserRouter([
  {

    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'contact', element: <Contact /> }
    ]
  },
], {
  basename: '/PortfoliOC'
});

export default function Router() {
  return <RouterProvider router={router} />;
}