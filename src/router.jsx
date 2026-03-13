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
      {
        path: 'contact', element: <Contact
          contactEmail={import.meta.env.VITE_CONTACT_EMAIL}
          contactPhone={import.meta.env.VITE_CONTACT_PHONE}
          contactLocalisation={import.meta.env.VITE_CONTACT_LOCALISATION}
        />
      }
    ]
  },
], {
  basename: '/PortfoliOC'
});

export default function Router() {
  return <RouterProvider router={router} />;
}