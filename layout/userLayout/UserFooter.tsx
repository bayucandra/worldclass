import { usersSlice } from '@/js/redux/reducer/userSlices';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';



export default function UserFooter() {

  
  

  return (
    <>
      <div className='h-64 flex flex-col justify-center items-start bg-bg-light px-14 font-quicksand'>
        <h3 className='text-danger text-2xl tracking-wider font-bold font-bebasneue'>MENU</h3>
        <Link className='text-white hover:underline hover:text-btn-hover' href="">- About Us</Link>
        <Link className='text-white hover:underline hover:text-btn-hover' href="">- Contact Us</Link>
        <Link className='text-white hover:underline hover:text-btn-hover' href="">- Terms of Use</Link>
        <Link className='text-white hover:underline hover:text-btn-hover' href="">- Privacy Policy</Link>
      </div>
      
      <div className='bg-bg-dark text-white text-center py-2'>
        <p>© {new Date().getFullYear()} BiqDev all right reserved</p>
      </div>
    </>
  )
}
