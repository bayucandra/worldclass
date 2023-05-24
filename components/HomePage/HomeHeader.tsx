import React from 'react'

export default function HomeHeader() {
  return (
    <div className='bg-black pt-64' style={{
      backgroundImage: `url('/learning.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom center',
      backgroundSize: 'cover',
      height: "487px",
    }}>
      <div className='w-1/2 py-10 mx-auto md:text-left rounded-lg bg-gradient-to-r from-bg-dark'>
        <h1 className='text-lg md:text-5xl text-center font-raleway font-bold text-white tracking-wider'>
          World Keep Changing
        </h1>
        <h3 className='text-3xl text-center font-bold text-red-soft tracking-widest font-quicksand'>
          lets keep learning</h3>
      </div>
    </div>
  )
}
