import React from 'react'
import logo from '../image/abstract.png'

const Navbar = () => {
  return (
    <div className='flex flex-row bg-white py-5 shadow-md'> 
        <div>
          <span>Logo</span>
        </div>
        <ul className='flex flex-row space-x-6 ml-[50%] text-black items-center justify-center font-bold'>
          <li>Interview</li>
          <li>Blog</li>
          <li>Graveyard</li>
          <li>Products</li>
          <button className='bg-black text-white rounded-md py-2 px-4'>Subscribe</button>
        </ul>
    </div>
  )
}

export default Navbar