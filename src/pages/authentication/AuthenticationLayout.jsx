import React from 'react'
import Header_AuthLinks from './Header_AuthLinks'
import { Outlet } from 'react-router-dom'
import Back from '../../Components/Back'


function AuthenticationLayout() {
  return (
    <React.Fragment>
      <div className=' min-h-screen flex flex-col gap-3'>
        <header>
          <div>
            <Back/>
          </div>
          <Header_AuthLinks/>
        </header>
        <main className=' flex-grow '>
          <Outlet/>
        </main>
      </div>
    </React.Fragment>
  )
}

export default AuthenticationLayout