import React from 'react'
import { productArray2 } from '../../latestProductsStaticArray'
import { useParams } from 'react-router-dom'
import ProductPageHeader from './ProductPageHeader'
import Footer from '../layout/Footer'

function Product() {
    const {id}=useParams()

    const filterProduct= productArray2.filter((product)=>{
        return (product.id==id)
    })
  return (
    <React.Fragment>
        <ProductPageHeader/>
        <div className=' py-3 px-1'>
            {filterProduct.map(function(product){
                return (
                    
                    <div className='  gap-3 flex flex-col items-center ' key={product.id}>
                        <div className=''>
                            <img src={product.images} alt={`${product.name}`} />
                        </div>
                        <div className='border-b-[1px] w-full border-black self-start px-4 py-1 flex flex-col gap-2'>
                            <p className=' text-xl font-semibold '>{product.name}</p>
                            <p className=' text-xs font-bold'>Samuel Store&apos;s</p>
                            <p className=' text-[12px] font-semibold'>{product.description}</p>
                            <p className=' font-semibold text-lg'>₦ {product.price.toLocaleString()}</p>
                        </div>
                        <div className=' px-2 py-1 gap-2 flex flex-col  self-start'>
                            <p className=' font-semibold text-sm'>Speak To The Seller For Bulk Purchase?</p>
                            <div className=' gap-2 flex '>
                                <p>Quantity:</p>
                                <div className='border-[1px] justify-center items-center border-black flex  gap-2'>
                                    <p className='px-1 font-semibold' >-</p>
                                    <p className=' border-x-[1px] px-1  border-black'>0</p>
                                    <p className='px-1 font-semibold'>+</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-col w-full gap-2'>
                            <button className=' bg-black text-white uppercase font-bold rounded-md py-1'>Buy Now</button>
                            <button className=' border-2 border-black uppercase font-bold rounded-md py-1'>Add to Cart</button>
                        </div>
                        
                    </div>
                )
            })}
            <div className=' pt-10'>
                <Footer/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Product