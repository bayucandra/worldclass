import React from 'react'

export default function HomeHeader() {
  return (
    <div className='bg-black'  style={{
      backgroundImage: `url('/bg_sub-header_2.png')`,
       height: "972px",
      }}>
    <div className='md:container md:mx-auto border'>
      <div className="grid grid-rows-2 grid-flow-col gap-4 font-railway text-white">
        <div className='font-roboto text-white'>01 test Text for style</div>
        <div><h2>01 test Text for style</h2></div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
      </div>
    </div>
    </div>
  )
}
