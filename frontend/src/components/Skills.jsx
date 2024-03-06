import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
    const settings = {
        dot: true,
        Infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToShowSpeed:1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: null,
        nextArrow: null,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
    }
  return (
    <div name='skills' className='w-full h-screen bg-[#14101b] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-teal-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>
        <Slider {...settings}>
            {/* <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'> */}
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                </div>
            {/* </div> */}
        </Slider>
      </div>
    </div>
  )
}

export default Skills