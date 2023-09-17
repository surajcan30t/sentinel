import React from 'react'
import {BiDownload} from 'react-icons/bi';
import {HiOutlineUpload} from 'react-icons/hi';
import {IoMdContacts} from 'react-icons/io';

export default function page() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-center p-2 capitalize">
        
        <div className='bg-white shadow-md shadow-slate-900 w-[500px] flex flex-col justify-center items-center  rounded mt-44'>

        <div className='m-10'>
            <button className='bg-orange-500 flex-row flex justify-around items-center p-4 rounded-lg'><BiDownload/><span className='ml-2'>Upload .csv or .xls file in this format</span></button>
        </div>
        <div className='m-10'>
            <button className='bg-orange-500 flex-row flex justify-around items-center p-4 rounded-lg'><HiOutlineUpload/><span className='ml-2'>upload</span></button>
        </div>
        </div>

        
    </main>
  )
}
export function metadata(){
    return { title: 'upload file'}
}