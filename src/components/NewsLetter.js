import React from 'react'

export default function NewsLetter() {
    return (
        <div className=' w-full bg-[#2699fb] mt-[220px] justify-stretch '>
            <div className='max-w-[1240] mx-auto md:flex'>
                <div className='h-[300px] '>
                    <div className='p-[100px] '> 
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
                    <p className='text-white'>Sign up to Newsletter ans stay up to date.</p>
                    </div>
                </div>
                <div className=' h-[300px]'>
                    <div className='mx-[200px] my-[100px] '>
                    <input type="text" className='py-2 px-4 mr-3 rounded text-slate-600' placeholder='Email' />
                    <button className='bg-black text-white py-2 px-4 rounded'>Get Started</button>
                    <br />
                    <p className='text-white'> 
                        We care about the protection of your data. Rear our <br />
                        <a className='text-black' href="">Privacy Policy</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
