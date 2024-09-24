import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <Link to="/"><h1 className='text-md font-semibold'><span className='font-bold text-xl px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>TrendyCart</span><br /> Admin panel</h1></Link>
      <button onClick={()=>setToken('')} className='bg-green-600 text-white px-5 py-2 rounded-full sm:px-7 sm:py-2 text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
