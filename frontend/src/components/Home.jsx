import React from 'react'
import { ReactTyped } from 'react-typed'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#14101b]'>

        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-teal-600 font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Vivek Warkade</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
              I'm a Software Developer.
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>passionate software developer With a solid understanding technologies, 
            I strive to create seamless and efficient digital solutions.  My expertise lies in building robust application that power exceptional user experiences.
            </p>
            <div>
              <button className='text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-teal-600 hover:border-teal-600'>View Work 
                <span className='group-hover:translate-x-3 duration-300'><HiArrowNarrowRight className='ml-3 '/></span>
              </button>
            </div>
        </div>

    </div>
  )
}

export default Home