import Image from "next/image"
import UserLayout from "@/layout/UserLayout"
import HomeHeader from "@/components/HomePage/HomeHeader"
import { Raleway } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

const raleway = Raleway({
  weight: "400",
  subsets: ["cyrillic"],
  display: "swap"
})

export default function Home() {
  const [authMode, setAuthMode] = useState("Student");
  return (
    <UserLayout title={"Home Page"}>
      <HomeHeader />

      <div className="w-full px-20 pt-20 flex justify-between mx-auto">

        <div className="p-10 w-3/5 flex flex-col justify-center items-left">
          <h1 className="font-raleway text-5xl text-bg-dark font-bold" >LETS JOIN US!</h1>
          <p className="text-xl text-dark-gray font-raleway">Learning should be easy, anytime & anywhere !!!</p>
        </div>

        <div className="border w-2/5 border-bg-light hover:shadow-md rounded-md p-7">
          {authMode != "signin" ?
            <><div className="flex justify-between">
              <div onClick={() => setAuthMode("Student")} className={"group w-1/2 hover:shadow-lg flex items-center cursor-pointer p-2 mr-1 border border-light-gray rounded-md " + (authMode === "Student" ? "bg-btn-hover text-white shadow-md" : "hover:bg-btn-hover")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 border group-hover:border-white fill-none group-hover:stroke-white rounded-full p-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <div className="ml-1">
                  <h4 className="font-raleway font-bold text-lg">Student</h4>
                  <p className="text-sm">Join for student</p>
                </div>
              </div>

              <div onClick={() => setAuthMode("Teacher")} className={"flex-row-reverse text-left group w-1/2 hover:shadow-lg flex items-center justify-between cursor-pointer border border-light-gray p-2 rounded-md " + (authMode === "Teacher" ? "bg-btn-hover text-white shadow-md" : "hover:bg-btn-hover")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 border group-hover:border-white fill-none group-hover:stroke-white rounded-full p-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <div className="mr-4">
                  <h4 className="font-raleway font-bold text-lg">Teacher</h4>
                  <p className="text-sm">Create a class</p>
                </div>
              </div>
            </div>
              <h2 className="text-2xl font-raleway text-center my-5">Register as a <span className="text-bg-dark font-semibold">{authMode}</span></h2>
            </>
            : <h2 className="text-2xl text-center font-raleway uppercase my-5">Please sign in </h2>}
          <div className="w-full justify-center grid grid-rows-2 grid-flow-col gap-2">
            <button className="rounded-lg bg-bg-dark py-2 px-10 flex items-center hover:text-white text-light-gray ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-btn-hover duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 border rounded-full p-1 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fill-rule="evenodd"
                  clip-rule="evenodd" />
              </svg>
              Register with Google
            </button>

            <button className="rounded-lg bg-white border-bg-dark border hover:border-white py-2 px-10 flex items-center hover:text-white text-btn-hover ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-btn-hover duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 border rounded-full p-1 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              Register with Facebook
            </button>


          </div>
          {authMode != "signin" ?
            <>
              <h3 className="text-lg text-center my-5">Have An account?</h3><div className="flex justify-center">
                <button onClick={() => setAuthMode("signin")} className="text-center border border-btn-hover py-1 px-3 rounded-lg ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-btn-hover duration-300">Sign in</button>
              </div>
            </>
            :
            <>
              <h3 className="text-lg text-center my-5">Dont Have An account?</h3><div className="flex justify-center">
                <button onClick={() => setAuthMode("Student")} className="text-center border border-btn-hover py-1 px-3 rounded-lg ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-btn-hover duration-300">Register</button>
              </div>
            </>
          }
        </div>

      </div>

      <div className="text-[48px] pt-16 pb-10">
        <h1 className="font-raleway text-bg-dark text-center" >POPULAR CLASS</h1>
      </div>
      <div className="w-full px-14 grid grid-cols-4 gap-4 mx-auto">

        <div className="border border-bg-light transition ease-in-out delay-150 hover:bg-bg-light hover:text-white group hover:shadow-md rounded-md p-0">
          <Image src={"/images/ai.jpg"} style={{ width: "100%", height: "180px" }} width="350" height="0" alt={""} />
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

              <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Join Now
              </button>

              <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Details
              </button>

            </div>
          </div>
        </div>

        <div className="border border-bg-light transition ease-in-out delay-150 hover:bg-bg-light hover:text-white group hover:shadow-md rounded-md p-0">
          <Image src={"/images/ai.jpg"} style={{ width: "100%", height: "180px" }} width="350" height="0" alt={""} />
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

              <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Join Now
              </button>

              <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Details
              </button>

            </div>
          </div>
        </div>

        <div className="border border-bg-light transition ease-in-out delay-150 hover:bg-bg-light hover:text-white group hover:shadow-md rounded-md p-0">
          <Image src={"/images/ai.jpg"} style={{ width: "100%", height: "180px" }} width="350" height="0" alt={""} />
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

              <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Join Now
              </button>

              <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Details
              </button>

            </div>
          </div>
        </div>

        <div className="border border-bg-light transition ease-in-out delay-150 hover:bg-bg-light hover:text-white group hover:shadow-md rounded-md p-0">
          <Image src={"/images/ai.jpg"} style={{ width: "100%", height: "180px" }} width="350" height="0" alt={""} />
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

              <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Join Now
              </button>

              <button className="flex group-hover:bg-white group-hover:text-bg-dark transition font-raleway ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-bg-dark hover:bg-btn-hover  text-white rounded-lg hover:shadow-lg py-1 px-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Details
              </button>

            </div>
          </div>
        </div>

      </div>
    </UserLayout>

  )
}
