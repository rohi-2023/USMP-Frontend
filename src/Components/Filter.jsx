import React from 'react'
import icon from "../image/icons/productsIcons/setting.png"

function Filter() {
  return (
    <React.Fragment>
        <div className='mb-5 ml-2'>
            <div className=' flex gap-1 px-2 py-0.5 border-[1px] border-gray-400 mt-2 mb-5 w-fit rounded-full '>
                <img src={icon} alt="Filter Product" className=' w-5 sm:w-7'/>
                <select name="" className=' text-[12px] min-[450px]:text-[16px] sm:text-base font-semibold outline-none' id="">
                    <option value="categories" >Categories</option>
                    <option value="headphone">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="footware">Footware</option>
                    <option value="beauty">Beauty</option>
                    <option value="gadgets">Women</option>
                    <option value="gadgets">Men</option>
                    <option value="gadgets">Watches</option>
                </select>
            </div>
            <div className=' flex justify-evenly'>
                <button className=' border-[1px] border-gray-400 px-2 rounded-full py-0.5 font-semibold text-[9px] min-[450px]:px-3 sm:px-5 min-[450px]:text-[14px] sm:text-sm md:text-base'>Electronics</button>
                <button className=' border-[1px] border-gray-400 px-2 rounded-full py-0.5 font-semibold text-[9px] min-[450px]:px-3 sm:px-5 min-[450px]:text-[14px] sm:text-sm md:text-base'>Fashion</button>
                <button className=' border-[1px] border-gray-400 px-2 rounded-full py-0.5 font-semibold text-[9px] min-[450px]:px-3 sm:px-5 min-[450px]:text-[14px] sm:text-sm md:text-base'>Footware</button>
                <button className=' border-[1px] border-gray-400 px-2 rounded-full py-0.5 font-semibold text-[9px] min-[450px]:px-3 sm:px-5 min-[450px]:text-[14px] sm:text-sm md:text-base'>Beauty</button>
                <button className=' border-[1px] border-gray-400 px-2 rounded-full py-0.5 font-semibold text-[9px] min-[450px]:px-3 sm:px-5 min-[450px]:text-[14px] sm:text-sm md:text-base'>Gadgets</button>
                <button className=' border-[1px] border-gray-400 px-2 rounded-full py-0.5 font-semibold text-[9px] min-[450px]:px-3 sm:px-5 min-[450px]:text-[14px] sm:text-sm md:text-base hidden sm:block'>Men</button>
                <button className=' border-[1px] border-gray-400 px-2 rounded-full py-0.5 font-semibold text-[9px] min-[450px]:px-3 sm:px-5 min-[450px]:text-[14px] sm:text-sm md:text-base hidden md:block'>Fragrance</button>
                <button className=' border-[1px] border-gray-400 px-2 rounded-full py-0.5 font-semibold text-[9px] min-[450px]:px-3 sm:px-5 min-[450px]:text-[14px] sm:text-sm md:text-base hidden lg:block'>Women</button>
                <button className=' border-[1px] border-gray-400 px-2 rounded-full py-0.5 font-semibold text-[9px] min-[450px]:px-3 sm:px-5 min-[450px]:text-[14px] sm:text-sm md:text-base hidden xl:block'>Watches</button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Filter