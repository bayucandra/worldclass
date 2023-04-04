import Link from 'next/link'
import React, { useState } from 'react'

export default function UserNavbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-bg-light shadow">
      <div className="justify-between px-4 md:px-8 py-0 mx-auto lg:max-w-7xl  md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-1 md:py-5 md:block">

            <h2 className="text-2xl text-white font-bold">WORLDCLASS</h2>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
              }`}
          >
            <ul className="items-center justify-center font-semibold text-base  space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white font-raleway no-underline hover:underline">
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className="text-white no-underline hover:underline">
                <Link href="/products">
                  Learn Lists
                </Link>
              </li>
              <li className="text-white no-underline hover:underline">
                <Link href="/about">
                  About US
                </Link>
              </li>
              <li className="text-white no-underline hover:underline">
                <Link href="/contact">
                  Contact US
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button className='flex bg-bg-dark md:visible invisible py-4 px-4 text-white hover:bg-btn-hover hover:text-bg-dark'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 stroke-white hover:stroke-bg-dark mr-2 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

          Get Started</button>
      </div>
    </nav>
  )
}
