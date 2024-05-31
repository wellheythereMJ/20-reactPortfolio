import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about.jsx';
import Error from './pages/error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />
      }
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
