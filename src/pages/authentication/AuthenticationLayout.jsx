import React from 'react'
import Header_AuthLinks from './Header_AuthLinks'
import { Outlet } from 'react-router-dom'

function AuthenticationLayout() {
  return (
    <div>
      <header>
        <Header_AuthLinks/>
      </header>
      <main className=''>
        <Outlet/>
      </main>
    </div>
  )
}

export default AuthenticationLayout