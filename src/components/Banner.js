import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px] ' >
        <div className='text-center font-bold my-[100px]'>
        <div lassName='max-w-[1240px] mx-auto '>
            <div className='text-xl md:text-3xl mb-4 '>
                Learn with us
            </div>
            <h2 className='text-white text-3xl md:text-[80px] md:p-[24px]'>Grow with us.</h2>
            <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
                Learn<Typed className='p-3 text-black'
                    strings={['Web Development', 'Digital Marketing', 'Ethical Hacking']}
                    typeSpeed={100}
                    backSpeed={100}
                    loop={true}
                />
            </div>
            <button className='bg-black text-white mt-2 py-2 px-4 rounded'>Get Started</button>

        </div>
        </div>
      
    </div>
  )
}
