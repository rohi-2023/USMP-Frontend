import React from 'react'
import {latestProducts} from "../../latestProductsStaticArray"
// import HomeCategories from './HomeCategories'

function Home() {
  return (
    <React.Fragment>
        <div>
          {/*  */}
          <p className=' text-center font-semibold  text-xl bg-black text-white   '>Available Products</p>
          <div className=" grid grid-cols-2 gap-5 px-3 py-5">

            {latestProducts.slice(0,4).map(function(eachProduct){
              return (
                <div className=' bg-gray-100 shadow-md py-3  flex flex-col  ' key={eachProduct.id}>
                  <img src={eachProduct.images} alt="" className=' justify-center self-center h-32 w-32'  />
                  <div className=' py-1 px-3 flex flex-col'>
                    <p className=' font-mono font-semibold '>{eachProduct.name}</p>
                    <p className=' text-[12px] font-semibold'>₦{eachProduct.price.toLocaleString()}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </React.Fragment>
  )
}

export default Home