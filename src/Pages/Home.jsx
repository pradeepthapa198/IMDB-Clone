import React from 'react'
import {Logo} from '../Utils/Logo'

const Home = () => {
  return (
    <div className='h-full w-full bg-black'>
        <nav className='h-[100px] max-w-[1400px] mx-auto flex justify-between items-center'>
            <div className='text-[20px] font-semibold flex items-center gap-10 text-white '>
            <img src={Logo} alt="" className='h-[50px] cursor-pointer'/> 
            <h1 className='hover:text-red-600 duration-500'>Popular</h1>
            <h1  className='hover:text-red-600 duration-500'>Top-Rated</h1>
            <h1  className='hover:text-red-600 duration-500'>Upcoming</h1>
            </div>

            <button className='py-2 px-4 bg-white shadow-lg rounded-full'>
            <i className="fa-solid fa-user text-[20px] "></i>
            </button>


        </nav>
       
    </div>
  )
}

export default Home
