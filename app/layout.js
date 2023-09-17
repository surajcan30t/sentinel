
import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar/sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Safty Sentinels',
  description: 'An online platform for student project collaboration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#eee7d9] text-black`}>

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
