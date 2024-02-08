import React from 'react'
import {PiShirtFoldedLight,PiBagSimpleBold} from "react-icons/pi"
import {FiWatch} from "react-icons/fi"
import {GiAmpleDress} from "react-icons/gi"
import {MdOutlineFaceRetouchingNatural} from "react-icons/md"
import {HiPhone} from "react-icons/hi"
import {GiDelicatePerfume} from "react-icons/gi"
import { NavLink } from 'react-router-dom'

function Categories() {
  return (
    <React.Fragment>
        <div>
            <p className=' font-semibold text-sm  '>Categories</p>
            <section className=''>
                <p className=' text-lg flex items-center gap-1 px-2 font-semibold py-0.5'><PiShirtFoldedLight/><span className=' text-[12px]'>Men&apos;s Fashion</span></p>
                <p className='text-lg flex items-center gap-1 px-2 font-semibold  py-0.5'><GiAmpleDress/><span className=' text-[12px]'>Women&apos;s Fashion</span></p>
                <p className=' flex items-center gap-1 px-2 font-semibold text-lg py-0.5'><PiBagSimpleBold/><span className=' text-[12px]'>Bags</span></p>
                <p className=' flex items-center gap-1 px-2 font-semibold text-lg py-0.5'><FiWatch/><span className=' text-[12px]'>Watches</span></p>
                <p className=' flex items-center gap-1 px-2 font-semibold text-lg  py-0.5'><MdOutlineFaceRetouchingNatural/><span className=' text-[12px]'>Beauty</span></p>
                <p className=' flex items-center gap-1 px-2 font-semibold text-lg py-0.5'><GiDelicatePerfume/><span className=' text-[12px]'>Fragrance</span></p>
                <NavLink to={"/contact"}>
                <p className=' border-t-[1px]  flex items-center gap-1 px-2 font-semibold my-2 text-lg py-1'><HiPhone/><span className=' text-[12px]'>Contact Us</span></p>
                </NavLink>
            </section>
            <section></section>
            <section></section>
        </div>
    </React.Fragment>
  )
}

export default Categories