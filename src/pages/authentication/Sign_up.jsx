import React from 'react'

function Sign_up() {
  return (
    <React.Fragment>
        <div className=' flex flex-col items-center '>
            <form action="" className='  py-5 flex flex-col items-center gap-5'>
                <input type="text" name="" className=" border-[1px] px-2 py-0.5  rounded-xl  border-black outline-none " placeholder='user name'/>
                <input type={"tel"} name="" className=" border-[1px] px-2 py-0.5  rounded-xl  border-black outline-none " placeholder='phone number'/>
                <input type="email" name="" className=" border-[1px] px-2 py-0.5  rounded-xl  border-black outline-none " placeholder='email'/>
                <input type={"password"} name="" className=" border-[1px] px-2 py-0.5  rounded-xl  border-black outline-none " placeholder='password'/>
                <input type={"password"} name="" className=" border-[1px] px-2 py-0.5  rounded-xl  border-black outline-none " placeholder='confirm password'/>
                <select className=' border-[1px] border-black  rounded-md w-full' name="" >
                  <option value="">Buyer</option>
                  <option value="">Seller</option>
                </select>
                <p className=' outline-none text-center capitalize text-[10px]'>By signing up you have agreed to our <br /><span className=' font-bold'>terms and policy</span></p>
                <button type="submit" className=' w-full bg-black text-white px-3 py-1 font-semibold rounded-full'>Create Account</button>
            </form>
        </div>
        
    </React.Fragment>
  )
}

export default Sign_up