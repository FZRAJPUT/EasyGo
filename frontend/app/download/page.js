"use client"
import React from 'react'
import NavBar from '../components/NavBar'

const Download = () => {
    return (
        <>
            <NavBar />
            <div className='bg-[#b2d5fa] flex items-center justify-between flex-col py-[40px] w-[100%] h-[91vh]'>
                <h1 className='text-[30px] text-[#112a46] font-[700]'>Download our app on your android Device</h1>
                <div className='mob h-[450px] w-[250px] mt-10'>
                </div>
                <a href='#' className='bg-[#112a46] px-[120px] h-[40px] py-2 rounded-[12px] text-[#ffffff]'>Download for Android</a>
            </div>
        </>
    )
}

export default Download
