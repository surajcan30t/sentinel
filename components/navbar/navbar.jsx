'use client'
import Link from 'next/link';
import React from 'react'
import {FiSearch} from 'react-icons/fi';
import { useRouter } from 'next/navigation'


export default function Navbar() {
  const router = useRouter();
  return (
    <div className='sticky top-0 z-50 border-b-[1px] border-white font-mono rounded-lg shadow-lg text-slate-100 backdrop-blur-sm bg-[#1b150cc0] flex justify-between items-center'>
        <h1 className='text-3xl font-extrabold ml-5 hover:text-lime-300 hover:scale-110 hover:transition-all hover:ease-in-out'><Link href='/'>Safety Sentinels</Link></h1>
        <div className='flex flex-row ml-36 m-2 justify-center items-center'>
            <input type="text" name='search' placeholder='search by location' className='bg-slate-200 rounded-md p-2 m-1'/>
            
            <button className='hover:text-lime-300 hover:scale-125 hover:ease-in-out'><FiSearch/></button>
        </div>
        <h1 className='mr-40 hover:text-lime-300 hover:scale-110 hover:transition-all hover:ease-in-out'><Link href='/'>Contact us</Link></h1>
        
    </div>
  )
}
