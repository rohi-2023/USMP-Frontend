import {IoMdSearch} from "react-icons/io"
function SearchBar() {
  return (
    <div className=' justify-center flex mx-5'>
        <div className=' bg-white px-2 rounded-full mb-3 flex items-center w-full  gap-2'>
            <input type="text" name="" className=" text-sm outline-none w-full bg-white " />
            <IoMdSearch  className=' border-l-[1px] pl-0.5 text-2xl'/>
        </div>
    </div>
  )
}

export default SearchBar