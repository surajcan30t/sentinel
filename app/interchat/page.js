import React from 'react'
import {BiSend} from 'react-icons/bi';

function page() {
  return (
    <div className='relative flex flex-col items-center capitalize'>
        <h1 className='text-2xl'>Inter Chat(chat between the team leaders)</h1>
        <div className='relative bg-zinc-100 h-screen shadow-md shadow-black w-[550px] rounded-md'>
          <div className="reciever  bg-orange-400 text-white p-2 m-2 rounded-md clear-both float-left">Hello i am a reciever</div>
          <div className="sender  bg-orange-400 text-white p-2 m-2 rounded-md clear-both float-right">Hello i am the sender</div>
          <div className="sender  bg-orange-400 text-white p-2 m-2 rounded-md clear-both float-right">Need some help...</div>
          <div className="reciever  bg-orange-400 text-white p-2 m-2 rounded-md clear-both float-left">How can I help you?</div>
          <div className="sender  bg-orange-400 text-white p-2 m-2 rounded-md clear-both float-right">We need some more boats to rescue</div>
          <div className="fixed text-white p-2 m-2 bottom-0 rounded-md float-right">
            <input type="text" placeholder='enter message' className=' bg-orange-400 w-[480px] p-2 rounded-md text-white placeholder-slate-200' />
            <button className='fixed ml-1 p-3 rounded-full  bg-orange-500'><BiSend/></button>
          </div>
        </div>

    </div>
  )
}

export default page