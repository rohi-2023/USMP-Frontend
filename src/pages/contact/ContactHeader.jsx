import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContactHeader() {
  const navigate=useNavigate()

  function handleBack(){
    navigate("/")
  }
  return (
    <React.Fragment>
        <div className=' text-xl grid grid-cols-[1fr,1.5fr] uppercase  px-3 py-3 text-white bg-black'>
         <div>
          <p onClick={handleBack} className=' cursor-pointer text-2xl '>←</p>
        </div>
        <div>
          <p className=''>Contact Us</p>
        </div>
        </div>
    </React.Fragment>
  )
}

export default ContactHeader