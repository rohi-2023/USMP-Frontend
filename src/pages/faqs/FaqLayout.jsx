import React from 'react'
import Footer from '../layout/Footer'
import FaqHeader from './FaqHeader'
import { Outlet } from 'react-router-dom'

function FaqLayout() {
  return (
    <React.Fragment>
        <div className=' flex flex-col min-h-screen'>
            <header>
                <FaqHeader/>
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

export default FaqLayout