import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './pages/Layout.jsx'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Rules from './pages/Rules.jsx'
import Contact from './pages/Contact.jsx'
import TipJar from './pages/TipJar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/play" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tip-jar" element={<TipJar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
