import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'



export default function Header() {
    const [toggel, setToggel] = useState(false);
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w[1240px] flex justify-between py-3 items-center mx-10'>
            <div className='text-3xl font-bold'>
                XYZ
            </div>
            {
                toggel ?
                <AiOutlineMenu onClick={()=> setToggel(!toggel)} className='text-white text-2xl md:hidden block' />
                :
                <AiOutlineClose onClick={()=> setToggel(!toggel)} className='text-white text-2xl md:hidden block'/>
            }
            <ul className='hidden md:flex gap-10 text-white font-semibold' >
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* Responsive Menu */}
            <ul className={`'md:hidden w-full h-screen text-white fixed bg-black top-[92px] duration-300
                ${toggel? 'left-[0]': 'left-[-100%]'}`} >
                <li className='p-5'>Home</li>
                <li className='p-5' >Company </li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact </li>
            </ul>
        </div>
      
    </div>
  )
}
