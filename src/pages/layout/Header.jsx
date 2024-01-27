import React from 'react'
import logo from "../../image/cul_storeLogo.png"
import NavIcon from './NavIcon'
import {IoCartOutline} from "react-icons/io5"
import SearchBar from './SearchBar'
import NavBar from './NavBar'

function Header() {
  return (
    <React.Fragment>
      <div className=' bg-gray-100'>
        <div className='px-2 py-2 flex  justify-between items-center'>
          <div className=' items-center flex gap-3'>
            <NavIcon/>
            <img src={logo} alt="Logo" className=" w-16" />
          </div>
          <div className=' flex items-center'>
            <IoCartOutline className=' text-2xl'/>
            <p className=' bg-red-600 px-1 text-[10px] text-white font-semibold rounded-full '>0</p>
          </div>
      </div>
          <SearchBar/>
      </div>
      <NavBar/>
    </React.Fragment>
  )
}

export default Header