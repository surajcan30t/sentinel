'use client'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className='w-60 fixed backdrop-blur-3xl shadow-2xl p-3 rounded-lg flex flex-col items-center h-screen text-black capitalize'>
        <Link href='/emergency' className='text-base bg-lime-400  m-1 p-2 w-56 text-center  rounded-2xl hover:bg-zinc-100 hover:text-orange-600 hover:transition-all hover:ease-in-out'>Request Assistance</Link>
        <Link href='/interchat' className='text-base bg-lime-400  m-1 p-2 w-56 text-center  rounded-2xl hover:bg-zinc-100 hover:text-orange-600 hover:transition-all hover:ease-in-out'>Interteam chat</Link>
        <Link href='/intrachat' className='text-base bg-lime-400  m-1 p-2 w-56 text-center  rounded-2xl hover:bg-zinc-100 hover:text-orange-600 hover:transition-all hover:ease-in-out'>Intrateam chat</Link>
        <Link href='/post_disaster' className='text-base bg-lime-400  m-1 p-2 w-56 text-center  rounded-2xl hover:bg-zinc-100 hover:text-orange-600 hover:transition-all hover:ease-in-out'>Post Disaster Recovery</Link>
        <Link href='/disaster_prevention' className='text-base bg-lime-400  m-1 p-2 w-56 text-center  rounded-2xl hover:bg-zinc-100 hover:text-orange-600 hover:transition-all hover:ease-in-out'>Disaster Prevention</Link>
    </div>
  )
}

export default Sidebar