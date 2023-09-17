'use client'
import Link from 'next/link';
import React from 'react'
import {FiSearch} from 'react-icons/fi';
import { useRouter } from 'next/navigation'


export default function Navbar() {
  const router = useRouter();
  return (
    <div className='sticky top-0 z-50 font-mono text-slate-100 bg-[#cf6838] flex justify-between items-center'>
        <h1 className='text-3xl ml-5'><Link href='/'>आपदा निवारक</Link></h1>
        <div className='flex flex-row ml-36 m-2 justify-center items-center'>
            <input type="text" name='search' placeholder='search by location' className='bg-slate-700 rounded-md p-1 m-1'/>
            
            <button><FiSearch/></button>
        </div>
        <h1 className='mr-40'><Link href='/'>Contact us</Link></h1>
    </div>
  )
}
