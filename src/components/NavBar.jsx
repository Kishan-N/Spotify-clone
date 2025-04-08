import React from 'react';
import { assets } from "../assets/frontend-assets/assets";


const NavBar = () => {
  return (
    <>
    <div className='w-full h-[10%] flex justify-between items-center font-semibold'>
      <div className='flex items-center gap-2'>
        <img className='w-8 cursor-pointer rounded-full bg-black p-2' src={assets.arrow_left} />
        <img className='w-8 cursor-pointer rounded-full bg-black p-2' src={assets.arrow_right} />
      </div>
      <div className='items-end font-semibold justify-end gap-2'>
          <button className='px-4 py-1.5 bg-white text-[15px] rounded-full text-black  cursor-pointer items-end' >Explore Premium</button>
          <button className='px-4 py-1.5 bg-black text-[15px] rounded-full text-white  cursor-pointer items-end' >Install App</button>
          <button className='px-3 py-1.5 bg-orange-400 text-[15px] rounded-full text-black  cursor-pointer items-end' >K</button>
      </div>
    </div>
    <div className='w-full h-[4%] flex item-center gap-2'>
          <p className='px-4  bg-white  rounded-full text-black  cursor-pointer items-start' >All</p>
          <p className='px-4  bg-black rounded-full text-white  cursor-pointer items-start' >Music</p>
          <p className='px-4  bg-black  rounded-full text-white  cursor-pointer items-start' >Podcasts</p>
      </div>
    </>
  )
}

export default NavBar