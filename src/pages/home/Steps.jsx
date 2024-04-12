import React from 'react'
import icons1 from "../../image/icons/homePageIcons/fast-time.png"
import icons2 from "../../image/icons/homePageIcons/new-product.png"
import icons3 from "../../image/icons/homePageIcons/seo.png"
import icons4 from "../../image/icons/homePageIcons/shopping-cart.png"

function Steps() {
  return (
    <React.Fragment>

        <div className=' border-t-2 mx-5 py-5 sm:grid-cols-4 sm:justify-evenly grid grid-cols-2 justify-center items-center mt-6'>
            <section className=' sm:px-10 py-5 px-2 sm:py-5 gap-3 flex flex-col items-center justify-center'>
                <img  src={icons3} className=' pb-4 sm:w-14 w-12' alt="filter" />
                <p className=' bg-red-300 font-semibold px-3 py- rounded-full text-red-700'>Step 1</p>
                <p className=' font-bold text-sm'>Filtered</p>
                <p className=' text-center font-normal text-sm '>Easy filtering and suggestions of products</p>
            </section>
            <section className=' sm:px-10 py-5 px-2 sm:py-5 gap-3 flex flex-col items-center justify-center'>
                <img  src={icons4} className=' pb-4 sm:w-14 w-12' alt="add_to_cart" />
                <p className=' font-semibold px-3 py- rounded-full bg-indigo-200 text-indigo-800'>Step 2</p>
                <p className=' font-bold text-sm'>Add to Cart</p>
                <p className=' text-center font-normal text-sm '>Easily select the correct item and add it to your cart</p>
            </section>
            <section className=' sm:px-10 py-5 px-2 sm:py-5 gap-3 flex flex-col items-center justify-center'>
                <img  src={icons1} className=' pb-4 sm:w-14 w-12' alt="fast_delivery" />
                <p className=' font-semibold px-3 py- rounded-full bg-yellow-200 text-yellow-700'>Step 3</p>
                <p className=' font-bold text-sm'>Fast Shipping</p>
                <p className=' text-center font-normal text-sm '>The carrier will confirm and deliver the product to you</p>
            </section>
            <section className=' sm:px-10 py-5 px-2 sm:py-5 gap-3 flex flex-col items-center justify-center'>
                <img  src={icons2} className=' pb-4 sm:w-14 w-12' alt="enjoy_productd" />
                <p className=' font-semibold px-3 py- rounded-full bg-purple-300 text-purple-800'>Step 4</p>
                <p className=' font-bold text-sm'>Enjoy</p>
                <p className=' text-center font-normal text-sm '>Enjoy the quality of the product you ordered</p>
            </section>
        </div>
    </React.Fragment>
  )
}

export default Steps