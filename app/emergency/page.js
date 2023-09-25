'use client'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <main className="flex min-h-screen flex-col items-center text-white capitalize">
            <h1 className='text-4xl'>Need assistance</h1>
            <div className='flex flex-row'>

                <div className='p-2 m-2'>

                    <h1 className='text-2xl mb-3'>assistance required</h1>
                    <input type="number" placeholder='No. of rescuer required' className='p-2 bg-slate-200 rounded-md' />
                </div>
                <div className='p-2 m-2'>
                    <h1 className='text-2xl'>items needed</h1>
                    <div className='flex flex-row'>
                        <input type="checkbox" id="scales" name="scales" className='m-2'/>
                        <label for="scales">bandaid</label>
                    </div>
                    <div className='flex flex-row'>
                        <input type="checkbox" id="scales" name="scales" className='m-2'/>
                        <label for="scales">paracetamol</label>
                    </div>
                    <div className='flex flex-row'>
                        <input type="checkbox" id="scales" name="scales" className='m-2'/>
                        <label for="scales">detol</label>
                    </div>
                    <div className='flex flex-row'>
                        <input type="checkbox" id="scales" name="scales" className='m-2'/>
                        <label for="scales">splint</label>
                    </div>
                    <div className='flex flex-row'>
                        <input type="checkbox" id="scales" name="scales" className='m-2'/>
                        <label for="scales">flashlight</label>
                    </div>
                </div>
            </div>
            <div>
                <button onClick = {()=>alert("message sent to nearest rescue teams")} className='m-2 p-2 bg-lime-400 text-black hover:bg-zinc-100 hover:text-orange-600 hover:transition-all hover:ease-in-out hover:scale-110 w-24 rounded-md'>Send</button>
            </div>
            <div className='flex flex-col justify-center m-10'>
                <h1 className='font-extrabold text-2xl m-2'>location:</h1>
                <Image src='/emerg.png' width={1000} height={1000} alt='loc' className='rounded-md' />
            </div>
        </main>
    )
}

export default page