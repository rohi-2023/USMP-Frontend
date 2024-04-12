import React from 'react'
import { useNavigate } from 'react-router-dom'


function AboutHeader() {
   const navigate=useNavigate()

  function handleBack(){
    navigate("/")
  }

  return (
    <React.Fragment>
        <div className=' text-xl  uppercase  px-3 py-3 text-white bg-black'>
            <div>
                <p onClick={handleBack} className=' w-fit  cursor-pointer text-2xl '>←</p>
            </div>
            <div>
                <p className=' font-semibold text-center'>About Us</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AboutHeader