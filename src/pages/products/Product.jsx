import React from 'react'
import { productArray2 } from '../../StaticData/latestProductsStaticArray'
import { NavLink, useParams } from 'react-router-dom'
import ProductPageHeader from './ProductPageHeader'
import icon1 from "../../image/icons/productsIcons/time-left.png"
import icon2 from "../../image/icons/productsIcons/vehicle.png"
import Footer from '../layout/Footer'

function Product() {
    const {id}=useParams()

    const filterProduct= productArray2.filter((product)=>{
        return (product.id==id)
    })
  return (
    <React.Fragment>
        <div className=' flex flex-col min-h-screen'>
            
            <ProductPageHeader/>
            <div className=' sm:flex sm:flex-col sm:justify-center sm:items-center flex-grow py-3 px-1'>
                {filterProduct.map(function(product){
                    return (
                        
                        <div className=' pb-3 sm:px-5 sm:py-6 sm:gap-8 md:gap-12 lg:gap-8 lg:px-12 gap-3 flex flex-col items-center sm:grid sm:grid-cols-2 ' key={product.id}>
                            <div className=''>
                                <img src={product.images} alt={`${product.name}`} className='  sm:w-80 md:w-96'/>
                            </div>
                            <div className=' sm:grid  sm:gap-5'>
                                <div className=' pb-5 border-b-2 border-black self-start px-4 py-1 flex flex-col gap-2'>
                                    <p className=' sm:text-3xl md:text-4xl md:font-bold text-2xl uppercase font-semibold '>{product.name}</p>
                                    <p className=' text-lg font-bold sm:text-xl capitalize font-mono  '>Samuel Stores</p>
                                    <p className=' font-semibold text-xl bg-red-500 w-fit text-white py-1 rounded px-2 sm:text-2xl sm:font-semibold'>₦ {product.price.toLocaleString()}</p>
                                </div>
                                <div className=' px-2 py-1 gap-2 flex flex-col  self-start'>
                                    <p className=' text-lg font-bold'>Description</p>
                                    <article className=' pt-2 pb-2 text-sm sm:text-base font-semibold'>{product.description}</article>
                                    {/* <p className=' font-semibold text-sm sm:text-base'>Speak To The Seller For Bulk Purchase?</p> */}
                                </div>
                                <div className=' flex flex-col w-full gap-2 mb-5'>
                                    <button className=' bg-black  text-white uppercase font-bold rounded-md py-1'>Buy Now</button>
                                    <button className=' border-2 border-black uppercase font-bold rounded-md py-1'>Add to Cart</button>
                                </div>
                                <section className=' px-8'>
                                    <ul className='flex flex-col gap-2 list-disc font-semibold text-xs sm:text-sm'>
                                        <li>All full-priced, unused items, with tags attached and in their original packaging are eligble for return or exchange within 30days of placing your order</li>
                                        <li>Please note, packs must be returned in full. We do not accept partial returns of packs </li>
                                        <li>Want to know our full returns policies? <NavLink>Here you go</NavLink></li>
                                        <li>Want more info about shipping, materials or core instructions? <NavLink>Click Here</NavLink></li>
                                    </ul>
                                </section>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
                <div className=' sm:grid sm:grid-cols-2 sm:px-5 flex flex-col gap-3 mt-7 mb-3'>
                    <section className=' bg-sky-200 py-3 px-5 mx-3 rounded-lg'>
                        <img className=' w-5 sm:w-9 md:w-10' src={icon1} alt="timely delivery" />
                        <p className=' font-semibold text-sm sm:text-sm md:text-base py-1'>Products are delivered on time </p>
                        <p className=' font-semibold text-sm sm:text-sm md:text-base py-1'>And can be easily monitored</p>
                    </section>
                    
                    <section className=' bg-yellow-200 py-3 px-5 mx-3 rounded-lg'>
                        <img className=' w-5 sm:w-9 md:w-10' src={icon2} alt="timely delivery" />
                        <p className=' font-semibold text-sm sm:text-sm md:text-base py-1'>Speedy Delivary </p>
                        <p className=' font-semibold text-sm sm:text-sm md:text-base py-1'>Order now!!!</p>
                    </section>
                    
                </div>
                <div className=' pt-10'>
                    <Footer/>
                </div>
        </div>
    </React.Fragment>
  )
}

export default Product