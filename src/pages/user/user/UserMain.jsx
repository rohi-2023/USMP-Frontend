import React from 'react'
import {LuPackage2,LuPackageCheck,LuPackagePlus} from "react-icons/lu"
import { NavLink } from 'react-router-dom'
import {MdOutlineAccountCircle} from "react-icons/md"

function SellerMain() {
  return (
    <React.Fragment>
        <div>
            <header>
                <p className=' py-2 font-bold text-sm px-2 '>Balance:₦0</p>
            </header>
            <main className=' flex flex-col gap-3'>
                <p className=' font-semibold bg-gray-100 px-1 py-1'>Orders</p>
                <div className=' border-b-2 mx-1 font-semibold px-2 items-center flex gap-2 py-1'>
                    <LuPackage2/>
                    <NavLink to={"order"}>Orders</NavLink>
                </div>
                <div className=' border-b-2 mx-1 font-semibold px-2 items-center flex gap-2 py-1'>
                    <LuPackageCheck/>
                    <NavLink to={"previousorder"}>PreviousOrders</NavLink>
                </div>
                <div className=' border-b-2 mx-1 font-semibold px-2 items-center flex gap-2 py-1'>
                    <LuPackagePlus/>
                    <NavLink to={"uploadproduct"}>Upload Product</NavLink>
                </div>
            </main>
            <main className=' flex flex-col gap-3'>
                <p className=' font-semibold bg-gray-100 px-1 py-1'>Account Settings</p>
                <div className=' border-b-2 mx-1 font-semibold px-2 items-center flex gap-2 py-1'>
                    <MdOutlineAccountCircle/>
                    <NavLink to={"account"}>Account Management</NavLink>
                </div>
            </main>
        </div>
    </React.Fragment>
  )
}

export default SellerMain