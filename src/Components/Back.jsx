import React from 'react'
import {useNavigate} from "react-router-dom"

function Back() {
    const navigate = useNavigate()

    const handleBack = ()=>{
        navigate(-1)
    }

  return (
    <React.Fragment>
        <div className=' bg-black text-white text-2xl px-5 py-2'>
            <p onClick={handleBack}>←</p>
        </div>
    </React.Fragment>
  )
}

export default Back
