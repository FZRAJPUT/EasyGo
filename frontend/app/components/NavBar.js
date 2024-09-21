"use client"
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className='flex gap-1 w-full h-[60px] bg-white justify-between px-[50px] items-center'>
           <Link href='/'> <h1 className='log text-[25px] font-[750]'>EasyGo</h1></Link>
            <div className='flex justify-around w-[40%] font-[600]'>
                <Link href='/download' className='hover:text-[#1f4d81]'>Download App</Link>
                <Link href='/feedback' className='hover:text-[#1f4d81]'>Support & Feedback</Link>
            </div>
        </nav>
    )
}

export default NavBar
