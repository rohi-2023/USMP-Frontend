import React from 'react'
import image1 from "../../image/icons/type_of_products/bags.png"
import image2 from "../../image/icons/type_of_products/headphones.png"
import image3 from "../../image/icons/type_of_products/fashion.png"
import image4 from "../../image/icons/type_of_products/device.png"
import image6 from "../../image/icons/type_of_products/cosmetics.png"


function HomePageIcons() {
  return (
    <React.Fragment>
        <main className=' bg-gray-200 px-2 rounded-md  py-4 flex justify-around mx-5 mt-8 mb-4'>
            <img src={image1} alt="" className=' w-9 min-[400px]:w-12 sm:w-14'/>
            <img src={image2} alt="" className=' w-9 min-[400px]:w-12 sm:w-14'/>
            <img src={image3} alt="" className=' w-9 min-[400px]:w-12 sm:w-14'/>
            <img src={image4} alt="" className=' w-9 min-[400px]:w-12 sm:w-14'/>
            <img src={image6} alt="" className=' w-9 min-[400px]:w-12 sm:w-14'/>
        </main>
    </React.Fragment>
  )
}

export default HomePageIcons
