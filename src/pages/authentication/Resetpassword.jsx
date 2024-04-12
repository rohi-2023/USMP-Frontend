import React from 'react'

function Resetpassword() {
  return (
    <React.Fragment>
      <div>
          <p className=' text-center font-semibold'>Reset Password </p>
          <div className=' flex flex-col  px-8'>
              <form action="" className=' lg:px-14   py-5 flex flex-col gap-5'>
              <label htmlFor="" className='  md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,4fr] items-center'>
                <p className=' hidden md:block md:font-semibold sm:uppercase'>User name</p>
                <input type={"text"} name="" className=" border-[1px] px-2 py-1 w-full  rounded-2xl md:bg-gray-100 md:placeholder:text-transparent border-black outline-none " placeholder='username'/>
              </label>
              <label htmlFor="" className='  md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,4fr] items-center'>
                <p className=' hidden md:block md:font-semibold sm:uppercase'>Password</p>
                <input type={"password"} name="" className=" border-[1px] px-2 py-1 w-full  rounded-2xl md:bg-gray-100 md:placeholder:text-transparent border-black outline-none " placeholder='confirm password'/>
              </label>    
              <button type="submit" className=' w-full bg-black text-white px-3 py-1 md:py-2 md:mx-5 md:font-bold uppercase font-semibold rounded-full'>Reset Password</button>
              </form>
          </div>
      </div>
    </React.Fragment>
  )
}

export default Resetpassword