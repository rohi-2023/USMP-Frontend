import { NavLink } from 'react-router-dom'
import { productArray2 } from '../../StaticData/latestProductsStaticArray'
import {IoStar} from "react-icons/io5"
import React, { useEffect } from 'react'
import Filter from '../../Components/Filter'
import axios from 'axios'


function Products() {
  const fetchProducts = async function(){
    try{
      const response = await axios.get('usmp-api.com/api/v1/products/')
      console.log(response);
    }catch(error){
      console.log(error.response);
    }
  }

  useEffect(function(){
    fetchProducts()
  },[])
  
  return (
    <React.Fragment>
      <div>
        <Filter/>
      </div>
      <div>
        <p className=' text-center font-semibold underline'>LATEST PRODUCTS</p>
          <div className=" grid grid-cols-2 sm:grid-cols-3 sm:gap-7 md:grid-cols-4 lg:grid-cols-5 sm:py-8 sm:px-5 gap-5 px-3 py-5">
              {productArray2.slice(20,25).map(function(eachProduct){
              return (
                    <NavLink  key={eachProduct.id} to={`/products/${eachProduct.id}`}>
                    <div className='shadow-custom bg-gray-100 items-center px-3 py-1 rounded-md border-black border-2'>
                        <img src={eachProduct.images} alt={`${eachProduct.name}`} className=' block m-auto  rounded-md size-36'  />
                        <div className='pt-2 flex flex-col'>
                            <p className=' font-semibold text-normal'>{eachProduct.name}</p>
                            <div className=' text-normal flex justify-between'>
                              <p className=' font-normal  text-slate-800 '>₦{eachProduct.price.toLocaleString()}</p>
                            <p className=' flex items-center gap-1 font-semibold'><span><IoStar className=' text-yellow-400'/></span>{eachProduct.rating}</p>

                            </div>
                        </div>
                    </div>
                    </NavLink>
              )
              })}
          </div>
          {/* ALL PRODUCTS */}
          <p className='text-center font-semibold underline'>ALL PRODUCTS</p>
          <div className=" grid grid-cols-2 sm:grid-cols-3 sm:gap-7 md:grid-cols-4 lg:grid-cols-5 sm:py-8 sm:px-5 gap-5 px-3 py-5">
              {productArray2.slice(0,20).map(function(eachProduct){
              return (
                    <NavLink  key={eachProduct.id} to={`/products/${eachProduct.id}`}>
                    <div className='shadow-custom bg-gray-100 items-center px-3 py-1 rounded-md border-black border-2'>
                        <img src={eachProduct.images} alt={`${eachProduct.name}`} className=' block m-auto  rounded-md size-36'  />
                        <div className='pt-2 flex flex-col'>
                            <p className=' font-semibold text-normal'>{eachProduct.name}</p>
                            <div className=' text-normal flex justify-between'>
                              <p className=' font-normal  text-slate-800 '>₦{eachProduct.price.toLocaleString()}</p>
                            <p className=' flex items-center gap-1 font-semibold'><span><IoStar className=' text-yellow-400'/></span>{eachProduct.rating}</p>

                            </div>
                        </div>
                    </div>
                    </NavLink>
              )
              })}
          </div>
      </div>
    </React.Fragment>
  )
}

export default Products