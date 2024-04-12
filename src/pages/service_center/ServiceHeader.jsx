import React from 'react'
import { useNavigate } from 'react-router-dom'


function ServiceHeader() {
    const navigate=useNavigate()

    function handleBack(){
      navigate("/")
    }
    return (
      <React.Fragment>
          <div className=' text-xl uppercase  px-3 py-3 text-white bg-black'>
           <div>
            <p onClick={handleBack} className=' cursor-pointer text-2xl '>←</p>
          </div>
          <div>
            <p className=' font-semibold text-center'>SERVICE CENTER</p>
          </div>
          </div>
      </React.Fragment>
    )
}

export default ServiceHeader