import React from 'react'
import logo from "../../image/images/usmpEditImage.png"
import NavIcon from './NavIcon'
import {FaCartShopping} from "react-icons/fa6"
import SearchBar from './SearchBar'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate()
  function handleToCartPage(){
    navigate('/cart')
  }
  return (
    <React.Fragment>
      <div className=' bg-black'>
        <div className='px-5 py-5 flex  justify-between items-center'>
          <div className=' items-center flex gap-3'>
            <NavIcon/>
          </div>
            <img src={logo} alt="Logo" className=" lg:w-32 md:w-28 w-24" />
          <div className=' text-white flex'>
            <FaCartShopping onClick={handleToCartPage} className=' text-2xl  md:text-3xl lg:text-4xl '/>
            <p className=' bg-red-600 -translate-x-2 w-3 h-3 text-white font-semibold rounded-full '></p>
          </div>
      </div>
          <SearchBar/>
      </div>
      <NavBar/>
  
    </React.Fragment>
  )
}

export default Header