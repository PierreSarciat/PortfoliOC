import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from '@pages/home.jsx';
import Carducci from '@pages/carducci.jsx';
import Grimoire from '@pages/grimoire.jsx';
import Kasa from '@pages/kasa.jsx';
import Bluel from '@pages/bluel.jsx';
import Maker from '@pages/maker.jsx';
import Booki from '@pages/booki.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'carducci', element: <Carducci /> },
      { path: 'grimoire', element: <Grimoire /> },
      { path: 'kasa', element: <Kasa /> },
      { path: 'maker', element: <Maker /> },
      { path: 'bluel', element: <Bluel /> },
      { path: 'carducci', element: <Carducci /> },
      { path: 'booki', element: <Booki /> },
    ]
  },
],
  {
    basename: '/portfolio'
  }
);

export default function Router() {
  return <RouterProvider router={router} />;
}

