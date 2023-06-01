import UserLayout from '@/layout/UserLayout';
import React, { useState } from 'react';
import Image from 'next/image';
import LearnListsModals from '@/components/modals/learnListsModals';
import { useAppDispatch, } from '@/js/redux/hook';
import { usersSlice } from '@/js/redux/reducer/userSlices';

export default function Products() {


    const dispatch = useAppDispatch();

    function openModalLearnist() {
        dispatch(usersSlice.actions.openModalLearnList());
    }

    return (
        <UserLayout title='Learning lists'>
            <div className="w-full p-14 flex justify-between mx-auto bg-cover"
                style={{ backgroundImage: `url(/background.png)`, backgroundColor: "#F4F3F8" }}>

                <div className="py-10 w-2/4">
                    <h1 className='text-7xl font-bebasneue font-bold text-danger tracking-wider w-full text-center'
                    >
                        BEST CATEGORIES
                    </h1>

                    <div className='w-full flex justify-center flex-wrap'>
                        <div className='w-56 border group m-2 border-bg-light hover:shadow-md hover:bg-btn-hover  rounded-md p-2'>
                            <p className='group-hover:text-white group-hover:font-bold'>Web Development</p>
                            <p className='text-xs text-dark-gray'>300 Courses</p>
                            <p className='text-sm text-dark-gray'>6000 Students</p>
                        </div>
                        <div className='w-56 border group m-2 border-bg-light hover:shadow-md hover:bg-btn-hover  rounded-md p-2'>
                            <p className='group-hover:text-white group-hover:font-bold'>Canva</p>
                            <p className='text-xs text-dark-gray'>300 Courses</p>
                            <p className='text-sm text-dark-gray'>6000 Students</p>
                        </div>
                        <div className='w-56 border group m-2 border-bg-light hover:shadow-md hover:bg-btn-hover  rounded-md p-2'>
                            <p className='group-hover:text-white group-hover:font-bold'>Adobe XD</p>
                            <p className='text-xs text-dark-gray'>300 Courses</p>
                            <p className='text-sm text-dark-gray'>6000 Students</p>
                        </div>
                        <div className='w-56 border group m-2 border-bg-light hover:shadow-md hover:bg-btn-hover  rounded-md p-2'>
                            <p className='group-hover:text-white group-hover:font-bold'>IOT</p>
                            <p className='text-xs text-dark-gray'>300 Courses</p>
                            <p className='text-sm text-dark-gray'>6000 Students</p>
                        </div>

                    </div>

                </div>

                <div className="w-2/4">
                    <Image src="/welcomeimg.png" alt="welcome"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} />
                </div>

            </div>
            <div className='py-10' style={{ backgroundColor: "#F7F7F7", }}>

                <div className="text-[25px] px-14 mb-4">
                    <h1 className="font-raleway font-bold" >Web Development</h1>
                </div>

                <div className="w-full px-14 grid grid-cols-4 gap-4 mx-auto">

                    <div className="border border-bg-light transition ease-in-out delay-150 hover:bg-bg-light hover:text-white group hover:shadow-md rounded-md p-0">
                        <Image src={"/images/ai.jpg"} className='group-hover:opacity-75' style={{ width: "100%", height: "180px" }} width="350" height="0" alt={""} />
                        <div className="flex justify-between bg-light-gray py-2 text-sm px-1">
                            <p className="capitalize flex align-middle group-hover:text-bg-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                with bg grayu</p>
                            <p className="flex group-hover:text-bg-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                360 hrs</p>

                        </div>

                        <div className="mx-2 py-3">

                            <h4 className="font-raleway font-bold text-lg">Student</h4>
                            <p className="text-sm">Learn anytime anywhere</p>
                            <div className="mt-10 flex justify-between">

                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-star">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </p>

                                <p>$50</p>

                            </div>

                            <hr className="h-1 w-1/3 text-bg-dark group-hover:text-white mt-1 mb-1 lg:w-full" />

                            <div className="flex justify-between">

                                <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Join Now
                                </button>

                                <button onClick={() => openModalLearnist()} className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    Detailser
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="border border-bg-light transition ease-in-out delay-150 hover:bg-bg-light hover:text-white group hover:shadow-md rounded-md p-0">
                        <Image src={"/images/ai.jpg"} style={{ width: "100%", height: "180px" }} className='group-hover:opacity-75' width="350" height="0" alt={""} />
                        <div className="flex justify-between bg-light-gray py-2 text-sm px-1">
                            <p className="capitalize flex align-middle group-hover:text-bg-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                with bg grayu</p>
                            <p className="flex group-hover:text-bg-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                360 hrs</p>

                        </div>

                        <div className="mx-2 py-3">

                            <h4 className="font-raleway font-bold text-lg">Student</h4>
                            <p className="text-sm">Learn anytime anywhere</p>
                            <div className="mt-10 flex justify-between">

                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-star">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </p>

                                <p>$50</p>

                            </div>

                            <hr className="h-1 w-1/3 text-bg-dark group-hover:text-white mt-1 mb-1 lg:w-full" />

                            <div className="flex justify-between">

                                <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Join Now
                                </button>

                                <button onClick={() => openModalLearnist()} className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    Details
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="border border-bg-light transition ease-in-out delay-150 hover:bg-bg-light hover:text-white group hover:shadow-md rounded-md p-0">
                        <Image src={"/images/ai.jpg"} style={{ width: "100%", height: "180px" }} className='group-hover:opacity-75' width="350" height="0" alt={""} />
                        <div className="flex justify-between bg-light-gray py-2 text-sm px-1">
                            <p className="capitalize flex align-middle group-hover:text-bg-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                with bg grayu</p>
                            <p className="flex group-hover:text-bg-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                360 hrs</p>

                        </div>

                        <div className="mx-2 py-3">

                            <h4 className="font-raleway font-bold text-lg">Student</h4>
                            <p className="text-sm">Learn anytime anywhere</p>
                            <div className="mt-10 flex justify-between">

                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-star">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </p>

                                <p>$50</p>

                            </div>

                            <hr className="h-1 w-1/3 text-bg-dark group-hover:text-white mt-1 mb-1 lg:w-full" />

                            <div className="flex justify-between">

                                <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Join Now
                                </button>

                                <button onClick={() => openModalLearnist()} className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    Details
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="border border-bg-light transition ease-in-out delay-150 hover:bg-bg-light hover:text-white group hover:shadow-md rounded-md p-0">
                        <Image src={"/images/ai.jpg"} style={{ width: "100%", height: "180px" }} className='group-hover:opacity-75' width="350" height="0" alt={""} />
                        <div className="flex justify-between bg-light-gray py-2 text-sm px-1">
                            <p className="capitalize flex align-middle group-hover:text-bg-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                with bg grayu</p>
                            <p className="flex group-hover:text-bg-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                360 hrs</p>

                        </div>

                        <div className="mx-2 py-3">

                            <h4 className="font-raleway font-bold text-lg">Student</h4>
                            <p className="text-sm">Learn anytime anywhere</p>
                            <div className="mt-10 flex justify-between">

                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-star">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </p>

                                <p>$50</p>

                            </div>

                            <hr className="h-1 w-1/3 text-bg-dark group-hover:text-white mt-1 mb-1 lg:w-full" />

                            <div className="flex justify-between">

                                <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Join Now
                                </button>

                                <button onClick={() => openModalLearnist()} className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    Details
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <LearnListsModals>
                <p>contoh isi modal</p>
            </LearnListsModals>

        </UserLayout>

    )
}
