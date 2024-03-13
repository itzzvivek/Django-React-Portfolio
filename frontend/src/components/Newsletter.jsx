import React from 'react'

const Newsletter = () => {
  return (
      <div name='newsletter' className='w-full md:h-screen text-gray-300 bg-[#14101b]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-teal-600'>Newsletter</p>
            </div>
            <div name="newsletter">
              <form className=" bg-[#14101b] items-center">
                <input type="email" id="email" placeholder='Enter Your Email' required />
                <button type="submit" className='text-white border-2 hover:bg-teal-600 hover:border-teal-600 px-3 py-2 mx-auto flex items-center'>Subscribe</button>
              </form>
            </div>
        </div>
      </div>
  )
}

export default Newsletter
