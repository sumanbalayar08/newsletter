import React from 'react'
import logo from '../image/abstract.png'
import { BsArrowRight } from 'react-icons/bs'
import logo1 from '../image/logo.png'


const Navbar = () => {
  return (
    <div className='flex flex-row bg-white py-5 shadow-md justify-between'> 
        <div className='ml-[2%]'>
          <span className='text-6xl'>Logo</span>
        </div>
        <ul className='flex flex-row space-x-6 text-black mr-[2%] items-center justify-center font-bold'>
          <li>Interview</li>
          <li>Blog</li>
          <li>Graveyard</li>
          <li>Products</li>
          <button className='bg-black text-white rounded-md py-2 px-4 flex flex-row items-center'>Subscribe<BsArrowRight/></button>
        </ul>
    </div>
  )
}

export default Navbar