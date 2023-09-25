'use client'
import React ,{useState} from 'react'
import Link from 'next/link'

function page() {
  const [userType, setUserType] = useState("");

  const handleSubmit = (e) => {
    if (userType == "govt" && secretKey != "govtndrf1440") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();
    }
  }
    


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 text-white capitalize">
      <div className='bg-slate-700 h-[550px] w-[400px] rounded-lg shadow-md shadow-slate-900 flex flex-col justify-between items-center'>
        <div className='m-2 flex justify-between'>

        <div>
            Register As<br/>
            <input
              type="radio"
              name="UserType"
              value="govt"
              onChange={(e) => setUserType(e.target.value)}
            />
            govt
            <input
              type="radio"
              name="UserType"
              value="nongovt"
              onChange={(e) => setUserType(e.target.value)}
              className='m-3'
            />
            nongovt
            <input
              type="radio"
              name="UserType"
              value="civillian"
              onChange={(e) => setUserType(e.target.value)}
              className='m-3'
            />
            Civillian
          </div>

        </div>
        <div className='p-2 mt-5'>
          <h1 className='text-base'>sign up</h1>
        </div>
        {userType == 'govt' ? 
        <div>
          <label htmlFor="email id">Enter secret key</label><br/>
          <input type='text' placeholder='Enter your organization secret key' className='bg-slate-900 rounded-md border-white p-1'/>
        </div>    :
        null
        }
        <div className='mt-2 flex flex-col'>
          <label htmlFor="email id">Email</label>
          <input type="email" placeholder='Enter your email' className='bg-slate-900 rounded-md border-white p-1' />
        </div>
        <div className='mt-1 flex flex-col'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter a password' className='bg-slate-900 rounded-md border-white p-1' />
        </div>
        {userType == 'civillian'?
           <div className='mt-1 flex flex-col'>
           <label htmlFor="password">Aadhar enrolled ph no.</label>
           <input type="password" placeholder='Enter phone number' className='bg-slate-900 rounded-md border-white p-1 mb-2' />
         </div>
         : null  
      }
        <div className=''>
          <button type='submit' className='bg-blue-500 rounded-md p-2'>submit</button>
        </div>
        <div className=' flex-col text-center'>
          <h1 className='text-base'>or</h1>
          <button className='text-base bg-red-500 m-3 rounded-md p-2'>sign up with google</button>
        </div>
        <div className='mb-4 flex-col justify-center items-center text-center'>
          <h1 className='text-base mb-4'>or</h1>
          <h1>have an accout?</h1>
          <Link href='/login'><u>log in</u></Link>
        </div>
      </div>
    </main>
  )
}

export default page