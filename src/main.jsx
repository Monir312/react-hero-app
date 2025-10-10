import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import { InstalledAppsProvider } from './pages/InstalledApps/InstalledAppsContext.jsx'


createRoot(document.getElementById('root')).render(
  <InstalledAppsProvider>
    <RouterProvider router={router}></RouterProvider>
  </InstalledAppsProvider>
)
