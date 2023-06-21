import React from 'react'
import leptop from './assests/mba15-midnight-gallery1-202306.jpg'


export default function MainSection() {
  return (
    <div className='flex justify-between mx-w-[1240] my-10 h-[200px] border-black md:grid grid-cols-2'>
      <div className='h-[200px] col-span-1 p-[50px] md:w-[50%] ml-48 '>
        <img src={leptop} alt="leptop" className='' />
      </div>
      <div className=' h-[200px] col-span-1 p-[50px] mt-3 flex-col justify-center'>
        <h1 className='text-[#00df9a] font-bold mt-2'>LEARN FROM EXPERTS</h1>
        <p className=' my-2'>
        Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.
        </p>
        <button className='bg-black text-white py-2 px-4 rounded'>Get Started</button>
      </div>
    </div>
  )
}
