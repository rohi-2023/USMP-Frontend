/* eslint-disable react/prop-types */
import React from 'react'
import {FaStar} from "react-icons/fa6"
function Ratings() {
  
  return (
    <React.Fragment>
      <div className=' flex gap-1'>
      <FaStar className=' text-yellow-400'/>
      <FaStar className=' text-yellow-400'/>
      <FaStar className=' text-yellow-400'/>
      <FaStar className=' text-yellow-400'/>
      <FaStar className=' text-yellow-400'/>
      </div>
    </React.Fragment>
  )
}

export default Ratings