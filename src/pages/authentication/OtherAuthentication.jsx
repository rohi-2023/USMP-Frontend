import React from 'react'
import {FaFacebook, FaApple} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'


function OtherAuthentication() {
  return (
    <React.Fragment>
        <div className=' flex flex-col gap-5 px-14 sm:px-16 md:px-20 lg:px-28 '>
            <section className=' rounded-xl font-medium bg-sky-100 py-1 px-2 grid grid-cols-[1fr,3fr] sm:flex sm:justify-evenly items-center'>
             <FaFacebook className='  text-blue-600'/>
             <p>Continue with Facebook</p>
            </section>
            <section className=' rounded-xl font-semibold bg-sky-100 py-1 px-2 grid grid-cols-[1fr,3fr] sm:flex sm:justify-evenly items-center'>
             <FaApple  className=' '/>
             <p>Continue with Apple</p>
            </section>
            <section className=' rounded-xl font-semibold bg-sky-100 py-1 px-2 grid grid-cols-[1fr,3fr] sm:flex sm:justify-evenly items-center'>
             <FcGoogle className=' '/>
             <p>Continue with Google</p>
            </section>
      </div>
      <div className=' text-center py-5 font-bold'>OR</div>
    </React.Fragment>
  )
}

export default OtherAuthentication
