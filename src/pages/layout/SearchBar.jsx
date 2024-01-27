import React from 'react'
import {IoMdSearch} from "react-icons/io"
function SearchBar() {
  return (
    <div className=' justify-center flex '>
        <div className=' bg-white px-2 rounded-full mb-3 flex items-center w-fit  gap-2'>
            <input type="text" name="" className=" text-sm outline-none " />
            <IoMdSearch  className=' border-l-[1px] pl-0.5 text-2xl'/>
        </div>
    </div>
  )
}

export default SearchBar