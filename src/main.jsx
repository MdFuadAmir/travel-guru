import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProviser from './Providers/AuthProviser'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviser>
   <RouterProvider router={router} />
    </AuthProviser>
  </React.StrictMode>,
)
