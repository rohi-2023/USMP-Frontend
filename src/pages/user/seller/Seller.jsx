import React from 'react'
import {NavLink} from "react-router-dom"
import SellerHeader from './SellerHeader'
import SellerMain from './SellerMain'


function Seller() {
  return (
    <div>
        <header>
          <SellerHeader/>
        </header>
        <main>
          <SellerMain/>
        </main>
    </div>
  )
}

export default Seller