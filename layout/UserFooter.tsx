import React from 'react'

export default function UserFooter() {
  return (
    <>
    <div className='h-96 bg-bg-light mt-20'>
      UserFooter
      </div>
    <div className='bg-bg-dark text-white text-center py-2'>
     <p>© {new Date().getFullYear()} BiqDev all right reserved</p> 
      </div>
    </>
  )
}
