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
            <p className=' font-semibold text-base  uppercase  pt-2 pb-4'>Categories</p>
            <section className=' capitalize flex flex-col gap-4'>
                <p className=' text-xl flex items-center space-x-3  px-2 font-semibold py-0.5'><PiShirtFoldedLight/><span className=' text-sm font-normal '>Men&apos;s Fashion</span></p>
                <p className=' text-xl flex items-center space-x-3 px-2 font-semibold  py-0.5'><GiAmpleDress/><span className=' text-sm font-normal '>Women&apos;s Fashion</span></p>
                <p className=' flex items-center space-x-3 px-2 font-semibold  py-0.5'><PiBagSimpleBold/><span className=' text-sm font-normal '>Bags</span></p>
                <p className=' flex items-center space-x-3 px-2 font-semibold  py-0.5'><FiWatch/><span className=' text-sm font-normal '>Watches</span></p>
                <p className=' flex items-center space-x-3 px-2 font-semibold   py-0.5'><MdOutlineFaceRetouchingNatural/><span className=' text-sm font-normal '>Beauty</span></p>
                <p className=' flex items-center space-x-3 px-2 font-semibold  py-0.5'><GiDelicatePerfume/><span className=' text-sm font-normal '>Fragrance</span></p>
                <NavLink to={"/contact"}>
                  <p className=' border-t-[1px]  flex items-center gap-3 px-2 font-semibold my-2 text-lg py-1'><HiPhone/><span className=' text-sm font-normal '>Contact Us</span></p>
                </NavLink>
            </section>
            <section></section>
            <section></section>
        </div>
    </React.Fragment>
  )
}

export default Categories