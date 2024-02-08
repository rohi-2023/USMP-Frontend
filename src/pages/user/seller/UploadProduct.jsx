import React from 'react'
import { useNavigate } from 'react-router-dom'


function UploadProduct() {
    const navigateBack=useNavigate()
  
  function handleNavigateBack(){
    navigateBack(-1)
  }
  return (
    <React.Fragment>
        <p onClick={handleNavigateBack} className=' text-xl font-semibold px-2'>←</p>
        <h1 className=' text-center font-semibold '>Upload A Product</h1>
        <form action="" className=' flex flex-col items-center gap-3 py-4'>
            <aside>
                <p className=' text-[12px] pt-1 pb-2'>Category</p>
                <select name="" className=" outline-none border-[1px] py-1 px-2 rounded-md w-56 bg-gray-100 border-black">
                <option value="">Men</option>
                <option value="">Women</option>
                <option value="">Bags</option>
                <option value="">Beauty</option>
            </select>
            </aside>
            <input type="text" name="" placeholder='Product name...' className=" outline-none border-[1px] py-1 px-2 rounded-md w-56 bg-gray-100 border-black" />
            <label htmlFor="">
                <input type="number" name="" placeholder='Product price...' className=" outline-none border-[1px] py-1 px-2 rounded-md w-56 bg-gray-100 border-black" />
            </label>
            <textarea name="" placeholder='Product description...' className=" outline-none border-[1px] py-1 px-2 rounded-md w-56 bg-gray-100 border-black" cols="30" rows="3"/>
            <input type="number" name="" placeholder='Quantity available' className=" outline-none border-[1px] py-1 px-2 rounded-md w-56 bg-gray-100 border-black" />
            <label htmlFor="" className=''>
                <input type={'file'} name="" className=" file:outline-none file:rounded-md file:w-56 file:mx-9 text-transparent file:px-4 " accept='image/*' />
            </label>

        </form>

    </React.Fragment>
  )
}

export default UploadProduct