import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import { InstalledAppsProvider } from './pages/InstalledApps/InstalledAppsContext.jsx'

import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <InstalledAppsProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer position="top-center" autoClose={2000} theme="colored" />
  </InstalledAppsProvider>
)
