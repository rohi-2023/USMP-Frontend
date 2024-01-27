import React, { useContext } from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {BsShop} from "react-icons/bs"
import {MdOutlineAccountCircle} from "react-icons/md"
import Categories from './Categories'
import {motion} from "framer-motion"
import { Context } from '../../context/Context'

function NavBar() {
    const {displayNavigation}=useContext(Context)
  return (
    <React.Fragment>
        <motion.div
        variants={{
            initial:{
                x:-1000
            },animate:{
                x:0,
                transition:{
                    type:"tween"
                }
            },exit:{
                x:-1000
            }
        }} initial="initial" animate={displayNavigation?'animate':'exit'}
         className='  border-r-2 border-gray-600 bg-white fixed top-0 w-2/4 h-screen py-2 flex flex-col gap-2 px-3'>
            <section className=' gap-1 font-semibold flex items-center'>
                <AiOutlineHome/>
                <p className=' text-[12px]'>Home</p>
            </section>
            <section className=' gap-1 font-semibold flex items-center'>
                <BsShop/>
                <p className=' text-[12px]'>Products</p>
            </section>
            <section className='  gap-1 font-semibold flex items-center'>
                <MdOutlineAccountCircle/>
                <p className=' text-[12px]'>Account</p>
            </section>
            <hr />
            <Categories/>
        </motion.div>
    </React.Fragment>
  )
}

export default NavBar