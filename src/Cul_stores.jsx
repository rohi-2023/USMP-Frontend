import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './pages/layout/MainLayout'
import Home from './pages/home/Home'
import Login from './pages/authentication/Login'
import Sign_up from './pages/authentication/Sign_up'
import AuthenticationLayout from './pages/authentication/AuthenticationLayout'
import Resetpassword from './pages/authentication/Resetpassword'
import Products from './pages/products/Products'
import ManageAccount from './pages/user/seller/ManageAccount'
import Seller from './pages/user/seller/Seller'
import Order from './pages/user/seller/Order'
import PreviousOrder from './pages/user/seller/PreviousOrder'
function Cul_stores() {
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>} />
                <Route element={<AuthenticationLayout/>}>
                  <Route path='login' index element={<Login/>}/>
                  <Route path='signup' element={<Sign_up/>}/>
                  <Route path='/login/resetpassword' element={<Resetpassword/>}/>
                </Route>
                <Route index path='seller' element={<Seller/>}/>
                <Route path='/seller/order' element={<Order/>}/>
                <Route path='seller/previousorder' element={<PreviousOrder/>} />
                <Route path="seller/account" element={<ManageAccount/>}/>
                <Route path='products' element={<Products/>}/>
                
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Cul_stores