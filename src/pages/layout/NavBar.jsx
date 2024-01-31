import React, { useContext } from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {BsShop} from "react-icons/bs"
import {MdOutlineAccountCircle} from "react-icons/md"
import Categories from './Categories'
import {motion} from "framer-motion"
import { Context } from '../../context/Context'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const {displayNavigation,setDisplayNavigation}=useContext(Context)
    function closeOnLinkClick(){
        setDisplayNavigation(false)
    }
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
            <section onClick={closeOnLinkClick} className=' gap-1 font-semibold flex items-center'>
                <AiOutlineHome/>
                <p className=' text-[12px]'><NavLink to={"/"}>Home</NavLink></p>
            </section>
            <section onClick={closeOnLinkClick} className=' gap-1 font-semibold flex items-center'>
                <BsShop/>
                <p className=' text-[12px]'><NavLink to={"products"}>Products</NavLink></p>
            </section>
            <section onClick={closeOnLinkClick} className='  gap-1 font-semibold flex items-center'>
                <MdOutlineAccountCircle/>
                <p className=' text-[12px]'><NavLink to={"login"}>Account</NavLink></p>
            </section>
            <hr />
            <Categories/>
        </motion.div>
    </React.Fragment>
  )
}

export default NavBar