import React from 'react'

const Newsletter = () => {
  return (
      <div name='newsletter' className='w-full text-gray-300 bg-[#14101b] p-4 h-screen md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-teal-600'>Newsletter</p>
            </div>
            <div name="newsletter" action="" class="flex justify-center items-center">
              <form method='POST' class="bg-[#14101b] flex text-black">
                <input class="my-4 px-6 py-2 bg-[#ccd6f6] rounded-l-lg" type="email" placeholder="Email" name="email" />
                <button class="text-white border-2 hover:bg-teal-600 hover:border-teal-600 my-4 px-4 py-1 flex items-center rounded-r-lg style">Submit</button>
              </form>
            </div>
        </div>
      </div>
  )
}

export default Newsletter
