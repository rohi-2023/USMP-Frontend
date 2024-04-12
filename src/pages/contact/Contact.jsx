import React from 'react'
import {RiPhoneFill} from "react-icons/ri"
import {MdEmail} from "react-icons/md"

function Contact() {
  return (
    <React.Fragment>
        <div className='  md:px-10 lg:px-12  xl:px-16'>
          <article className='py-5 text-center font-bold '>We are here to assist you with your needs. <br /> We are a text or a call away from to give a solution to your problems.</article>
          <form action="" className='lg:px-10 xl:px-12 rounded-md bg-black text-white mx-5 py-5 px-5 flex flex-col gap-5'>
            <p className=' p text-center text-2xl font-semibold'>Send us a direct mail</p>
            <label className=" grid grid-cols-[1fr,3fr] items-center gap-5">
              <p className=' md:text-base lg:text-lg font-semibold  sm:text-base text-[12px]'>Name</p>
              <input type="text" name=""  placeholder='Enter name' className=" px-2 py-1 rounded  outline-none" />
            </label>
            <label className=" grid grid-cols-[1fr,3fr] items-center gap-5">
              <p className=' md:text-base lg:text-lg font-semibold sm:text-base text-[12px]'>Email</p>
              <input type="email" name=""  placeholder='Email' className=" px-2 py- rounded   outline-none" />
            </label>
            <label className=" grid grid-cols-[1fr,3fr] items-center gap-5">
              <p className=' md:text-base lg:text-lg font-semibold sm:text-base text-[12px]'>Phone Number</p>
              <input type={"tel"} name=""  placeholder='Phone Number' className=" px-2 py-1 rounded  outline-none" />
            </label>
            <textarea name="" id="" cols="30" rows="3" placeholder=' Message' className=" px-2 py- rounded   outline-none" />
            <button className='bg-white py-1 text-black rounded-md font-semibold uppercase'>Send Message</button>
          <div className=' flex gap-4 items-center'>
            <p className='sm:text-2xl'><a href="tel:+2349163106779"><RiPhoneFill/></a></p>
            <p className='sm:text-2xl'><a href="mailto:evanderomijeh4@gmail.com"><MdEmail/></a></p>
          </div>
          </form>
          <br /><br />
        </div>
    </React.Fragment>
  )
}

export default Contact