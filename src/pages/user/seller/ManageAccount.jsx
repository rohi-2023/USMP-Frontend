import React from 'react'
import { useNavigate } from 'react-router-dom'

function ManageAccount() {
    const navigateBack=useNavigate()
    function handleNavigateBack(){
        navigateBack(-1)
    }
  return (
    <React.Fragment>
        <p onClick={handleNavigateBack} className=' text-xl font-semibold px-2'>←</p>
        <div>
            <form action="" className=' flex flex-col items-center gap-3 '>
                <input type="text" className=' outline-none px-2 py-1 border-black border-[1px] rounded-md ' placeholder='First Name' name=""  />
                <input type="text" className=' outline-none px-2 py-1 border-black border-[1px] rounded-md ' placeholder='Last Name' name=""  />
                <input type={'tel'} className=' outline-none px-2 py-1 border-black border-[1px] rounded-md ' placeholder='Phone Number' name=""  />
                <input type={"email"} className=' outline-none px-2 py-1 border-black border-[1px] rounded-md ' placeholder='Email' name=""  />
                <input type={"text"} className=' outline-none px-2 py-1 border-black border-[1px] rounded-md ' placeholder='Address' name=""  />
                <input type={"password"} className=' outline-none px-2 py-1 border-black border-[1px] rounded-md ' placeholder='Change Password' name=""  />
                <button type="submit" className=' bg-black text-white px-3 py-1 rounded-lg mb-5'>Update Profile</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default ManageAccount