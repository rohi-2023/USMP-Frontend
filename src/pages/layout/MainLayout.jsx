import React, { useContext } from 'react'
import Header from "../layout/Header"
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Context } from '../../context/Context'

function MainLayout() {
    const {setDisplayNavigation}=useContext(Context)
    const closeNavigation=function(){
        setDisplayNavigation(false)
    }

  return (
    <React.Fragment>
        <div>
            <div>
                <Header/>
            </div>
            <main onClick={closeNavigation}>
                <Outlet/>
            </main>
            <div>
                <Footer/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default MainLayout