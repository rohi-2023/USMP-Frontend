import React from 'react'
import { NavLink } from 'react-router-dom'
import OtherAuthentication from './OtherAuthentication'

function Login() {
  return (
    <React.Fragment>
      {/* Login with other Methods */}
      <div>
        <OtherAuthentication/>
      </div>
      {/* Login User Input Section */}
        <div className='  flex flex-col  px-16'>
            <form action="" className=' lg:px-14   py-5 flex flex-col gap-5'>
              <label htmlFor="" className='  md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,4fr] '>
                <p className=' hidden md:block md:font-semibold sm:uppercase'>Username</p>
                <input type="text" name="" className=" border-[1px] px-2 py-1 w-full  rounded-2xl md:bg-gray-100 md:placeholder:text-transparent border-black outline-none " placeholder='user name'/>
              </label>
              <label htmlFor="" className='  md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,4fr] items-center'>
                <p className=' hidden md:block md:font-semibold sm:uppercase'>Password</p>
                <input type={"password"} name="" className=" border-[1px] px-2 py-1 w-full  rounded-2xl md:bg-gray-100 md:placeholder:text-transparent border-black outline-none " placeholder='phone number'/>
              </label>
                <div className=' text-center text-[12px] underline font-semibold'><NavLink to={"/login/resetpassword"}>Reset Password</NavLink></div>
                <button type="submit" className=' w-full bg-black text-white px-3 py-1 md:py-2 md:mx-5 md:font-bold uppercase font-semibold rounded-full'>Login</button>
            </form>
        </div>

    </React.Fragment>
  )
}

export default Login