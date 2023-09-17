'use client'
import Image from 'next/image'
import React from 'react'

function page({params}) {
    console.log(params)
  return (
    <div className='flex flex-col justify-between items-center capitalize'>
        district: {params.map[0]} <br/>
        city: {params.map[1]} <br/>
        town: {params.map[2]} <br/>
        village: {params.map[3]} <br/>
        panchayat: {params.map[4]} <br/>
        {params.map[0] == 'balasore' && params.map[1] == 'bahanaga' ? <Image src='/bahanaga.png'width={1000} height={1000} alt={params.map[1]}></Image>: null}
    </div>
  )
}

export default page