import React from 'react'

const Newsletter = () => {
  return (
      <div name='newsletter' className='w-full md:h-screen text-gray-300 bg-[#14101b]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-teal-600'>Work</p>
                <p className='py-6'>Newsletter</p>
            </div>
            <div>
              <form className="newsletter-form bg-[#14101b]">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
        </div>
      </div>
  )
}

export default Newsletter
