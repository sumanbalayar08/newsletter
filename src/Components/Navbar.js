import React, { useState } from 'react'
import logo from '../image/abstract.png'
import { BsArrowRight } from 'react-icons/bs'
import logo1 from '../image/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = () => {

const[toggle,settoggle]=useState(false);

const toggleMenu=()=>{
  settoggle(!toggle);
}

  return (
    <div className="bg-white w-full top-0 left-0">
      <div className="relative md:flex justify-between py-4 items-center px-4">
        <div>
          <span className="text-lg font-extrabold ">LOGO</span>
        </div>
        
          <ul className="md:flex items-center space-x-6 hidden">
          <li>Interview</li>
          <li>Blog</li>
          <li>Graveyard</li>
          <li>Products</li>
          <button className='bg-black text-white rounded-md py-2 px-4 flex flex-row items-center'>Subscribe<BsArrowRight/></button>
          </ul>

          <ul className={`absolute md:hidden top-[61px] left-0 w-full h-[32vh] items-center bg-white space-y-4 justify-center transform ${toggle? "block":"hidden"}`}>
          <li className='flex items-center justify-center'>Interview</li>
          <li className='flex items-center justify-center'>Blog</li>
          <li className='flex items-center justify-center'>Graveyard</li>
          <li className='flex items-center justify-center'>Products</li>
          <div className='flex items-center justify-center'>
          <button className='bg-black text-white rounded-md py-2 px-4 flex items-center justify-center'>Subscribe<BsArrowRight/></button>
          </div>
          </ul>

        <GiHamburgerMenu
          className="absolute cursor-pointer block md:hidden right-8 top-6 scale-110"
          onClick={toggleMenu}
        />
      </div>
      <hr className="border-black" />
    </div>
  )
}

export default Navbar