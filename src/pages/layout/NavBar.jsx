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
         className='  border-r-2 border-gray-600 text-xl overflow-auto bg-white fixed w-5/6 top-0  h-screen py-2 flex flex-col gap-2 px-3'>
            <NavLink to={"/"}>
                <section onClick={closeOnLinkClick} className='  gap-1 font-semibold flex items-center'>
                    <AiOutlineHome/>
                    <p className=' text-[12px]'>Home</p>
                </section>
            </NavLink>
            <NavLink to={"products"}>
                <section onClick={closeOnLinkClick} className=' border-t-[1px] border-b-[1px] py-2 gap-1 font-semibold flex items-center'>
                    <BsShop/>
                    <p className=' text-[12px]'>Products</p>
                </section>
            </NavLink>
            <NavLink to={"login"}>
                <section onClick={closeOnLinkClick} className='  gap-1 font-semibold flex items-center'>
                    <MdOutlineAccountCircle/>
                    <p className=' text-[12px]'>Account</p>
                </section>
            </NavLink>
            <hr />
            <Categories/>
        </motion.div>
    </React.Fragment>
  )
}

export default NavBar