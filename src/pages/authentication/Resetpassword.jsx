import React from 'react'

function Resetpassword() {
  return (
    <div>
        <p className=' text-center font-semibold'>Reset Password </p>
        <div className=' flex flex-col items-center '>
            <form action="" className='  py-5 flex flex-col items-center gap-5'>
                <input type="text" name="" className=" border-[1px] px-2 py-0.5  rounded-xl  border-black outline-none " placeholder='password'/>
                <input type="text" name="" className=" border-[1px] px-2 py-0.5  rounded-xl  border-black outline-none " placeholder='confirm password'/>
                <button type="submit" className=' w-full bg-black text-white px-3 py-1 font-semibold rounded-full'>Reset Password</button>
            </form>
        </div>
    </div>
  )
}

export default Resetpassword