import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Routes/Routes'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={myCreatedRoute}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
