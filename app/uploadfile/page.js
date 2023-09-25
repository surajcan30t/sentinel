'use client'
import React, { useState } from 'react'
import { BiDownload } from 'react-icons/bi';
import { HiOutlineUpload } from 'react-icons/hi';
import { IoMdContacts } from 'react-icons/io';

export default function page() {
  const [file, setFile] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert('File not uploaded')
    try {
      const data = new FormData();
      data.append('file', file);
      const res = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: data
      })
      if (!res.ok) throw new Error(await res.text())
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <main className="flex max-h-screen flex-col text-white items-center justify-center p-2 capitalize">

      <div className='bg-zinc-800 shadow-md shadow-slate-700 text-black w-[500px] flex flex-col justify-center items-center  rounded mt-44'>

        <div className='m-10'>
          <button className='bg-lime-400 flex-row flex justify-around items-center p-4 rounded-lg'><BiDownload /><span className='ml-2'>Upload .csv or .xls file in this format</span></button>
        </div>
        <div className='border-2 border-white flex-col justify-center items-center'>
          <form onSubmit={onSubmit} className='border-2 border-white m-10 flex-col justify-center items-center'>
            <input type="file" name='file' onChange={(e) => setFile(e.target.files?.[0])} />

            <button className='bg-lime-400 flex-row flex justify-around items-center p-4 rounded-lg'><HiOutlineUpload /><span className='ml-2'>upload</span></button>
          </form>
        </div>
      </div>


    </main>
  )
}
export function metadata() {
  return { title: 'upload file' }
}