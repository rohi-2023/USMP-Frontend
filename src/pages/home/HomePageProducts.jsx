import React from 'react'
import {latestProducts} from "../../StaticData/latestProductsStaticArray"
import { NavLink } from 'react-router-dom'

function HomePageProducts() {
  return (
    <React.Fragment>
      <p className=' font-semibold text-2xl px-5'>New Arrivals</p>
        <div className="  grid grid-cols-2 sm:grid-cols-3 sm:gap-7 md:grid-cols-4 lg:grid-cols-5 sm:py-8 sm:px-5 gap-5 px-3 py-5">
            {latestProducts.slice(0,10).map(function(eachProduct){
              return (
                <NavLink key={eachProduct.id} to={`/products/${eachProduct.id}`}>
                  <div className=' shadow-custom bg-gray-100 items-center px-3 py-3 rounded-md border-black border-2' key={eachProduct.id}>
                    <img src={eachProduct.images} alt="" className=' block m-auto rounded-md items-center size-32'  />
                    <div className='  pt-2 flex flex-col'>
                      <p className='max-[400px]:text-sm font-semibold'>{eachProduct.name}</p>
                      <p className=' max-[400px]:text-sm font-semibold text-slate-800 text-lg'>₦{eachProduct.price.toLocaleString()}</p>
                      <button className='max-[400px]:text-sm bg-black rounded-md font-semibold py-1 mt-1 text-white'>Add To Cart</button>
                    </div>
                  </div>
                </NavLink>
              )
            })}
          </div>
    </React.Fragment>
  )
}

export default HomePageProducts