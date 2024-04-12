import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'
import ServiceHeader from './ServiceHeader'

function Service_Layout() {
  return (
    <React.Fragment>
      <div className=' flex flex-col min-h-screen'>
        <header>
          <ServiceHeader/>
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

export default Service_Layout