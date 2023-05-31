import React, { useState } from 'react'

export default function LearnListsModals() {
    const [authMode, setAuthMode] = useState("Student");
    const [showModal, setShowModal] = useState(false);
  return (
    <>
      { showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-bg-dark hover:text-btn-hover h-6 w-6 text-2xl">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! Theyre slowed down by their perception of
                    themselves. If youre taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-bg-dark font-bold uppercase px-6 py-2 text-sm outline-none mr-2 mb-1 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-bg-dark font-bold uppercase px-6 py-2 text-sm outline-none mr-1 mb-1 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
