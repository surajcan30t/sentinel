'use client'
import React from 'react'
import {BiSend} from 'react-icons/bi';

function page() {
    return (
        <div className='flex flex-col items-center capitalize'>
            <h1 className='text-2xl'>Intra Chat(chat within the teams)</h1>
            <div className='relative bg-zinc-700 h-screen shadow-md shadow-black w-[550px] rounded-md'>
                <div className="reciever  bg-lime-400 text-black p-2 m-2 rounded-md clear-both float-left">Hello i am a reciever</div>
                <div className="sender  bg-lime-400 text-black p-2 m-2 rounded-md clear-both float-right">Hello i am the sender</div>
                <div className="sender  bg-lime-400 text-black p-2 m-2 rounded-md clear-both float-right">Hurry up there is an emergency</div>
                <div className="reciever  bg-lime-400 text-black p-2 m-2 rounded-md clear-both float-left">What happend?</div>
                <div className="sender  bg-lime-400 text-black p-2 m-2 rounded-md clear-both float-right">A boy fell in a canal</div>
                <div className="fixed text-black p-2 m-2 bottom-0 rounded-md float-right">
                    <input type="text" placeholder='enter message' className=' bg-lime-400 w-[480px] p-2 rounded-md text-black placeholder-black' />
                    <button className='fixed ml-1 p-3 rounded-full  bg-lime-500'><BiSend/></button>
                </div>
            </div>
            

            
        </div>
    )
}

export default page