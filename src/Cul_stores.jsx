import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './pages/layout/MainLayout'
import Home from './pages/home/Home'

function Cul_stores() {
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Cul_stores