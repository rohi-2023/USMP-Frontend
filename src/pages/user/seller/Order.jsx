import React from 'react'
import {LuPackageX} from "react-icons/lu"
import { useNavigate } from 'react-router-dom'

function Order() {
  const navigateBack=useNavigate()
  
  function handleNavigateBack(){
    navigateBack(-1)
  }

  return (
    <React.Fragment>
      <p onClick={handleNavigateBack} className=' text-xl font-semibold px-2'>←</p>
      <div className=' flex-col flex gap-3 items-center justify-center text-lg text-center font-semibold'>
        <p>You Currently Have no order</p>
      <LuPackageX className=' text-4xl'/>
      </div>
    </React.Fragment>
  )
}

export default Order