import React from 'react'
import { NavLink } from 'react-router-dom'


function Login() {
  return (
    <React.Fragment>
        <div className=' flex flex-col items-center '>
            <form action="" className=' w-fit   py-5 flex flex-col items-center gap-5'>
                <input type="text" name="" className=" border-[1px] px-2 py-0.5  rounded-xl  border-black outline-none " placeholder='user name'/>
                <input type="text" name="" className=" border-[1px] px-2 py-0.5  rounded-xl  border-black outline-none " placeholder='password'/>
                <div className=' text-[12px] underline font-semibold'><NavLink to={"/login/resetpassword"}>Reset Password</NavLink></div>
                <button type="submit" className=' w-full bg-black text-white px-5 py-1 font-semibold rounded-full'>Login</button>
            </form>
        </div>

    </React.Fragment>
  )
}

export default Login