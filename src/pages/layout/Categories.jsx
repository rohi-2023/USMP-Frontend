import React from 'react'
import {PiShirtFoldedLight,PiBagSimpleBold} from "react-icons/pi"
import {FiWatch} from "react-icons/fi"
import {GiAmpleDress,GiLipstick} from "react-icons/gi"
import {MdOutlineFaceRetouchingNatural} from "react-icons/md"
import {GiDelicatePerfume} from "react-icons/gi"

function Categories() {
  return (
    <React.Fragment>
        <div>
            <p className=' font-semibold text-sm  '>Categories</p>
            <section>
                <p className=' flex items-center gap-1 px-2 font-semibold text-sm py-0.5'><PiShirtFoldedLight/><span className=' text-[10px]'>Men's Fashion</span></p>
                <p className=' flex items-center gap-1 px-2 font-semibold text-sm py-0.5'><GiAmpleDress/><span className=' text-[10px]'>Women's Fashion</span></p>
                <p className=' flex items-center gap-1 px-2 font-semibold text-sm py-0.5'><PiBagSimpleBold/><span className=' text-[10px]'>Bags</span></p>
                <p className=' flex items-center gap-1 px-2 font-semibold text-sm py-0.5'><FiWatch/><span className=' text-[10px]'>Watches</span></p>
            </section>
            <section>
                <p className=' flex items-center gap-1 px-2 font-semibold text-sm py-0.5'><MdOutlineFaceRetouchingNatural/><span className=' text-[10px]'>Beauty</span></p>
                <p className=' flex items-center gap-1 px-2 font-semibold text-sm py-0.5'><GiDelicatePerfume/><span className=' text-[10px]'>Fragrance</span></p>
            </section>
            <section></section>
            <section></section>
        </div>
    </React.Fragment>
  )
}

export default Categories