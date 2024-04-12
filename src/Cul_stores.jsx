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
import UploadProduct from './pages/user/seller/UploadProduct'
import CartPage from './pages/cart/CartPage'
import Product from './pages/products/Product'
import User from './pages/user/user/User'
import SellerLayout from './pages/user/seller/SellerLayout'
import ContactLayout from './pages/contact/ContactLayout'
import Contact from './pages/contact/Contact'
import Faqs from './pages/faqs/Faqs'
import AboutLayout from './pages/about/AboutLayout'
import About from './pages/about/About'
import FaqLayout from './pages/faqs/FaqLayout'
import Service_Layout from './pages/service_center/Service_Layout'
import ServiceCenter from './pages/service_center/ServiceCenter'
import UserLayout from './pages/user/user/UserLayout'
function Cul_stores() {
    
  return (
    <BrowserRouter>
        <Routes>
          {/* HOME PAGE */}
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>} />
                {/* LOGIN AND ACCOUNT PAGE */}
                <Route path='/cart' element={<CartPage/>}/>  
                <Route path='products' element={<Products/>}/>
            </Route>
            <Route element={<AuthenticationLayout/>}>
              <Route path='login' index element={<Login/>}/>
              <Route path='signup' element={<Sign_up/>}/>
              <Route path='/login/resetpassword' element={<Resetpassword/>}/>
            </Route>
            <Route element={<UserLayout/>}>
              <Route index path='buyer' element={<User/>}/>
            </Route>
            {/* SERVICE PAGE */}
            <Route element={<Service_Layout/>}>
              <Route path="/services" index element={<ServiceCenter/>}/>

            </Route>
            {/* SELLERS PAGE */}
            <Route element={<SellerLayout/>}>
                <Route index path='seller' element={<Seller/>}/>
                <Route path='/seller/order' element={<Order/>}/>
                <Route path='seller/previousorder' element={<PreviousOrder/>} />
                <Route path='seller/uploadproduct' element={<UploadProduct/>}/>
                <Route path="seller/account" element={<ManageAccount/>}/>
            </Route>
            {/* FAQ'S PAGE */}
            <Route element={<FaqLayout/>}>
              <Route path='/faq' index element={<Faqs/>}/>
            </Route>
            {/* ABOUT US PAGE */}
            <Route element={<AboutLayout/>}>
              <Route index path='/about' element={<About/>}/>
            </Route>
            {/* CONTACT US PAGE  */}
            <Route element={<ContactLayout/>}>
              <Route index path='/contact' element={<Contact/>}/>
            </Route>
            {/* PRODUCT PRODUCT PAGE WITH DETAILS */}
            <Route path='/products/:id' element={<Product/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Cul_stores