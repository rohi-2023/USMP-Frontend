import React from 'react'
import { BsCartX} from "react-icons/bs"

function CartPage() {
  return (
    <React.Fragment>
        <div className=' flex items-center flex-col font-semibold text-lg gap-5 py-4'>
          <BsCartX className=' text-3xl'/>
          <p>Your Cart is Currently Empty!</p>
        </div>
    </React.Fragment>
  )
}

export default CartPage