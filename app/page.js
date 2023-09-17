'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center text-black capitalize">
      <Image src='/safty.jpeg' width={1000} height={1000} alt='img'></Image>
      <div className='flex flex-row'>
        <div className='m-2 w-[600px] h-screen'>
          <h1 className='text-xl font-bold'>About Our Emergency Response Network</h1>
          <h1 className='text-sm mt-2'>Welcome to the Emergency Response Network, your trusted partner in times of crisis. We are dedicated to enhancing the coordination and effectiveness of emergency response efforts during natural and man-made calamities. Our application is designed to empower rescue agencies and individuals with real-time information, ensuring a swift and organized response to emergencies.</h1>

          <h1 className='text-xl font-bold'>Our Mission</h1>
          <h1 className='text-sm mt-2'>At the heart of our mission is the belief that every second counts in emergency situations. We strive to bridge the gap between rescue agencies and those in need by providing a centralized platform for collaboration and communication. Our goal is simple: to save lives and minimize the impact of disasters.</h1>



          <h1 className='text-xl font-bold'>Key Features</h1>
          <h1 className='text-sm mt-2'> <span className='font-bold'>Comprehensive Registry:</span> We have meticulously registered a wide array of rescue agencies, including fire departments, police, paramedics, search and rescue teams, and disaster relief organizations. Each agency's information is at your fingertips.</h1>
          <h1 className='text-sm mt-2'> <span className='font-bold'>Real-Time Location Tracking:</span> Our cutting-edge technology allows you to visualize the precise locations of registered rescue agencies during emergencies. This feature is indispensable for efficient resource allocation and response coordination.</h1>
          <h1 className='text-sm mt-2'> <span className='font-bold'>Contact Information:</span> Find contact details for each agency quickly. In times of crisis, clear and immediate communication can make all the difference.</h1>

        </div>
        <div className='m-2 w-64 h-screen'>
          <h1 className='text-xl font-bold'>Join Us in Making a Difference</h1>
          <h1 className='text-sm mt-2'>We invite rescue agencies, emergency responders, and concerned citizens to join our network. Together, we can build a stronger, more resilient community ready to face any challenge that comes our way. Your involvement can mean the difference between chaos and order during critical moments.
          </h1>
          <div className='felx flex-row '>
            <button onClick={()=>router.push("/signup")} className='bg-orange-600 p-2 rounded m-3'>Sign Up</button>
            <button onClick={()=>router.push("/")} className='bg-orange-600 p-2 rounded m-3'>Log In</button>
          </div>
          

        </div>

      </div>
    </main>
  )
}
