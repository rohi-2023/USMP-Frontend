import React from 'react'
import { productArray2 } from '../../latestProductsStaticArray'

function Products() {
  return (
    <div>
        <div className=" grid grid-cols-2 gap-2 px-3 py-5">
            {productArray2.map(function(eachProduct){
            return (
                <div className=' bg-gray-300 py-2 flex flex-col  rounded-lg' key={eachProduct.id}>
                <img src={eachProduct.images} alt="" className=' justify-center self-center h-32 w-32'  />
                <div className=' py-1 px-3 flex flex-col'>
                    <p className=' font-mono font-semibold text-sm'>{eachProduct.name}</p>
                    <p className=' text-[12px]'>₦{eachProduct.price.toLocaleString()}</p>
                    {/* <p className=' flex items-center gap-1'><FaStar className=' text-yellow-400'/><span className=' font-bold text-[12px]'>{eachProduct.rating}</span></p> */}
                </div>
                </div>
            )
            })}
        </div>
    </div>
  )
}

export default Products