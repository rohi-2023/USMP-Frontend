import React from 'react'
import { LuPackageSearch } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

function PreviousOrder() {
  const navigateBack=useNavigate()
  function handleNavigateBack(){
    navigateBack(-1)
  }

  return (
    <React.Fragment>
        <p onClick={handleNavigateBack} className=' text-xl font-semibold px-2'>←</p>
        <div className=' flex-col flex gap-3 items-center justify-center  text-center font-semibold'>
            <p>You Currently Have no previous order's</p>
            <LuPackageSearch className=' text-4xl'/>
        </div>
   </React.Fragment>
  )
}

export default PreviousOrder