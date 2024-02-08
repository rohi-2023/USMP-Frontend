import React from 'react'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'
import AboutHeader from './AboutHeader'

function AboutLayout() {
  return (
    <React.Fragment>
        <div className=' flex flex-col min-h-screen'>
            <header>
                <AboutHeader/>
            </header>
            <main className=' flex-grow'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>                
            </footer>
        </div>
    </React.Fragment>
  )
}

export default AboutLayout