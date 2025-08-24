import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home.jsx'
import About from './pages/About.jsx'
import Notfound from './pages/Notfound.jsx'
import Services from './pages/Services.jsx'
import Contactus from './pages/Contactus.jsx'

const router = createBrowserRouter([
{
  path : '/',
  element : <Home />,
  errorElement : <Notfound />
},
{
  path : '/about',
  element : <About />
}, 
{
  path : '/services',
  element : <Services />
},
{
  path : '/contact',
  element : <Contactus />
} 
 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)