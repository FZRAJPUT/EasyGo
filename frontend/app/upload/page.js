"use client"
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const Home = () => {
  const [data, setdata] = useState({
    city: "",
    mapUrl: ""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata(data => ({ ...data, [name]: value }))
  }

  const onMapUpload = async (e)=>{
    e.preventDefault();
    let newUrl = "http://localhost:4000/api/map/add";
    // http://localhost:4000/api/map/add
    const response = await axios.post(newUrl,data)

    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message)
    }
  }
  return (
    <>
      <NavBar />
      <div className='home bg-[#b2d5fa] flex items-center flex-col gap-[120px] pt-[50px] w-[100%] h-[91vh]'>
        <div className='text-center text-[#112a46]'>
          <h1 className='text-[30px] font-[700]'>Upload your maps</h1>
          <p className='text-[14px] font-[500]'>make Navigation easy for others</p>
        </div>

        <div className='flex w-full flex-col justify-center gap-3 items-center '>
          <form onSubmit={onMapUpload} className='flex flex-col gap-3 items-center justify-center'>
            <input onChange={onChangeHandler} value={data.city} name='city' className='p-1 px-2 w-[420px] max-w-[90%] border-2 rounded-lg outline-none' type='text' placeholder='Enter city name' required />
            <input onChange={onChangeHandler} value={data.mapUrl} name='mapUrl' className='p-1 px-2 w-[420px] max-w-[90%] border-2 rounded-lg outline-none' type='text' placeholder='Paste map link here' required />
            <button type='submit' className='bg-[#1f4d81] w-[420px] max-w-[90%] mt-4 p-1 rounded-lg text-[#fff]'>Upload</button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  )
}

export default Home
