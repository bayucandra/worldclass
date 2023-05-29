import { usersSlice } from '@/js/redux/reducer/userSlices';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';



export default function UserFooter() {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(usersSlice.actions.fetching());
    },[dispatch]);

  return (
    <>
      <div className='h-64 flex flex-col justify-center items-start bg-bg-light px-20 font-quicksand'>
        <Link className='text-white hover:underline hover:text-btn-hover' href="">About Us</Link>
        <Link className='text-white hover:underline hover:text-btn-hover' href="">Contact Us</Link>
        <Link className='text-white hover:underline hover:text-btn-hover' href="">Terms of Use</Link>
        <Link className='text-white hover:underline hover:text-btn-hover' href="">Privacy Policy</Link>
      </div>
      
      <div className='bg-bg-dark text-white text-center py-2'>
        <p>© {new Date().getFullYear()} BiqDev all right reserved</p>
      </div>
    </>
  )
}
