'use client'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <main className="flex min-h-screen flex-col items-center text-black capitalize">
            <h1 className='text-4xl'>Need assistance</h1>
            <div className='flex flex-row items-center'>

                <div className='p-2 m-2'>

                    <h1 className='text-2xl'>assistance required</h1>
                    <input type="number" placeholder='No. of rescuer required' className='p-2 bg-white' />
                </div>
                <div className='p-2 m-2'>
                    <h1 className='text-2xl'>items needed</h1>
                    <div className='flex flex-row'>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales">bandaid</label>
                    </div>
                    <div className='flex flex-row'>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales">paracetamol</label>
                    </div>
                    <div className='flex flex-row'>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales">detol</label>
                    </div>
                </div>
            </div>
            <div>
                <button onClick = {()=>alert("message sent to nearest rescue teams")} className='m-2 p-2 bg-orange-500 text-white w-24 rounded-md'>Send</button>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='font-extrabold text-2xl m-2'>location:</h1>
                <Image src='/emerg.png' width={1000} height={1000} alt='loc' />
            </div>
        </main>
    )
}

export default page