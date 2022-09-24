import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import './styles/animation.css'
import Home from './pages/home'
import FirstScene from './pages/firstScene'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/first-scene" element={<FirstScene />} />
        </Routes>
    </BrowserRouter>
)
