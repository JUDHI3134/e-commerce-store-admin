import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 shadow'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink className="flex items-center gap-3 border border-green-300 border-r-0 px-3 py-2 rounded" to="/add">
            <img className='h-5 w-5' src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add product</p>
        </NavLink>
        <NavLink className="flex items-center gap-3 border border-green-300 border-r-0 px-3 py-2 rounded" to="/list">
            <img className='h-5 w-5' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>List product</p>
        </NavLink>
        <NavLink className="flex items-center gap-3 border border-green-300 border-r-0 px-3 py-2 rounded" to="/orders">
            <img className='h-5 w-5' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
