import React from 'react'
import ContactHeader from './ContactHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'

function ContactLayout() {
  return (
    <React.Fragment>
        <div className=' flex flex-col min-h-screen'>
            <header>
                <ContactHeader/>
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

export default ContactLayout