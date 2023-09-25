
import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { Rubik } from 'next/font/google'
import Sidebar from '@/components/sidebar/sidebar'



const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Safty Sentinels',
  description: 'An online platform for student project collaboration',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${rubik.className} bg-gradient-to-r from-slate-800 via-zinc-900 to-stone-900 text-white`}>

        

        <Navbar />  
        <div className='relative'>
          <div className='absolute top-0 left-0'>
            <Sidebar />
          </div>

          {children}
        </div>

      </body>
    </html>
  )
}
