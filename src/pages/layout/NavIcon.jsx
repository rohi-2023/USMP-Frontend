import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Context } from '../../context/Context'
function NavIcon() {

    const {displayNavigation,setDisplayNavigation}=useContext(Context)

    function handleNavigationTrigger(){
        setDisplayNavigation(!displayNavigation)
        
    }
  return (
    <div className=' flex flex-col gap-1' onClick={handleNavigationTrigger}>
        <motion.div variants={{
            initial:{
                rotate:0,
            },animate:{
                rotate:50,
                y:2
            },exit:{
                rotate:0,
            }
        }} initial="initial" animate={displayNavigation?'animate':"exit"} className=' w-5 bg-white text-transparent h-0.5'>.</motion.div>
        <motion.div variants={{
            initial:{
                rotate:0,
            },animate:{
                rotate:-50,
                y:-4
            },exit:{
                rotate:0,
            }
        }} initial="initial" animate={displayNavigation?'animate':'exit'} className=' w-5 bg-white text-transparent h-0.5'>.</motion.div>
        <motion.div variants={{
            initial:{
                opacity:1
            },animate:{
                opacity:0
            },exit:{
                opacity:1
            }
        }} initial="initial" animate={displayNavigation?'animate':'exit'} className=' w-5 bg-white text-transparent h-0.5'>.</motion.div>
    </div>
  )
}

export default NavIcon