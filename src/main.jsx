import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Tools from './components/Tools/Tools.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import CurrencyApp from './components/CurrencyConverter/CurrencyApp.jsx'
import './index.css'
import WeatherApp from './components/WeatherApp/WeatherApp.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="tools" element={<Tools />} />
      <Route path="/tools/currency" element={<CurrencyApp />} />
      <Route path="/tools/weatherapp" element={<WeatherApp />} />
      <Route path="contactus" element={<ContactUs />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
