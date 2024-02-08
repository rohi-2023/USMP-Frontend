import { Outlet } from 'react-router-dom'
import Footer from '../../layout/Footer'
import NavIcon from '../../layout/NavIcon'
import NavBar from '../../layout/NavBar'
import { useContext } from 'react'
import { Context } from '../../../context/Context'

function SellerLayout() {
    const {setDisplayNavigation}=useContext(Context)
    const closeNavigation=function(){
        setDisplayNavigation(false)
    }
  return (
    <div className=' flex flex-col min-h-screen'>
        <div className=' bg-black '>
            <div className=' py-3 px-2'>
                <NavIcon/>
            </div>
            <div>
                <NavBar/>
            </div>
        </div>
        <div onClick={closeNavigation} className=' flex-grow'>
            <Outlet/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default SellerLayout