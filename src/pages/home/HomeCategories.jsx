import {PiShirtFoldedLight} from "react-icons/pi"
import {FiWatch} from "react-icons/fi"
import {GiAmpleDress} from "react-icons/gi"

function HomeCategories() {
  return (
    <div>
        <main className=" text-white bg-black flex justify-evenly">
            <p className=' text-xl flex flex-col items-center  px-2 font-semibold py-0.5'><PiShirtFoldedLight/><span className=' text-[10px]'>Men&apos;s Fashion</span></p>
            <p className=' text-xl flex flex-col items-center  px-2 font-semibold py-0.5'><FiWatch/><span className=' text-[10px]'>Watches</span></p>
            <p className=' text-xl flex flex-col items-center  px-2 font-semibold py-0.5'><GiAmpleDress/><span className=' text-[10px]'>Women&apos;s Fashion</span></p>
        </main>
    </div>
  )
}

export default HomeCategories