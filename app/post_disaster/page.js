'use client'
import React from 'react'

function page() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center text-white capitalize">
        <h1 className = 'text-2xl font-bold'>Activities for post disaster recovery:</h1>
        <button onClick = {()=>alert("pdf downloaded")} className='bg-lime-400 text-black p-2 rounded m-3'>Download PDF</button>
    </main>
  )
}

export default page