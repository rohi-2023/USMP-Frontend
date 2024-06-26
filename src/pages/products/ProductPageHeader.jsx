import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {FaCartShopping} from "react-icons/fa6"

function ProductPageHeader() {
    const naviagte=useNavigate()
    
    function backToProductPage(){
        naviagte(-1)    
    }
  return (
    <React.Fragment>
        <div className=' py-2 px-3 bg-black text-white flex items-center justify-between '>
            <p onClick={backToProductPage} className=' cursor-pointer font-semibold text-3xl px-3'>←</p>
            <p className=' text-lg font-semibold sm:text-xl md:text-2xl'>Details</p>
            <div className=' text-white flex'>
                <NavLink to={"/cart"}>
                    <FaCartShopping  className=' text-2xl'/>
                </NavLink>
                <p className=' bg-red-600 -translate-x-2 w-3 h-3 text-white font-semibold rounded-full '></p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ProductPageHeader