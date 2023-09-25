import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Log from './pages/Login';
import LogLayout from './components/Log';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path :"/Login",
    element : <LogLayout/>
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
