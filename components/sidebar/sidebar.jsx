'use client'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className='w-52 fixed bg-orange-400 flex flex-col items-center h-screen text-white capitalize'>
        <Link href='/emergency' className='text-lg border-2 m-1 p-2 w-40 text-center border-white'>Request Assistance</Link>
        <Link href='/interchat' className='text-lg border-2 m-1 p-2 w-40 text-center border-white'>Interteam chat</Link>
        <Link href='/intrachat' className='text-lg border-2 m-1 p-2 w-40 text-center border-white'>Intrateam chat</Link>
        <Link href='/post_disaster' className='text-lg border-2 m-1 p-2 w-40 text-center border-white'>Post Disaster Recovery</Link>
        <Link href='/disaster_prevention' className='text-lg border-2 m-1 p-2 w-40 text-center border-white'>Disaster Prevention</Link>
    </div>
  )
}

export default Sidebar