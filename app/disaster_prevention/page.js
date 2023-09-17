'use client'
import React from 'react'

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center text-black capitalize">
        <h1 className = 'text-2xl font-bold'>Activities to prevent disaster:</h1>
        <button onClick = {()=>alert("pdf downloaded")} className='bg-orange-600 p-2 rounded m-3'>Download PDF</button>
    </main>
  )
}

export default page