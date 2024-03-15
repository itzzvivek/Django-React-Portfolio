import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#14101b] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-teal-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm <span className="text-teal-600">Vivek Warkade</span>, nice
              to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I'm a dedicated software developer with a passion for crafting
              innovative solutions and building exceptional digital experiences.
              With a strong foundation in full-stack development, I specialize
              in creating responsive web applications that deliver seamless user
              experiences. I thrive in collaborative environments, where my
              skills in problem-solving and attention to detail can contribute
              to the success of projects. Currently, I'm focused on honing my
              skills and exploring new technologies to stay at the forefront of
              the ever-evolving field of software development.
            </p>
          </div>
        </div>
        <div name="skills">
          <div className="py-2">
            <p className="font-bold">Skills :</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 text-center">
            <span className="mr-2 mb-2 rounded-sm px-2 py-1 font-medium text-white bg-yellow-400">
              Python
            </span>
            <span className="mr-2 mb-2 rounded-sm px-2 py-1 font-medium text-white bg-green-500">
              Django
            </span>
            <span className="mr-2 mb-2 rounded-sm px-2 py-1 font-medium text-white bg-green-400">
              FastAPI
            </span>
            <span className="mr-2 mb-2 rounded-sm px-2 py-1 font-medium text-white bg-blue-500">
              React
            </span>
            <span className="mr-2 mb-2 rounded-sm px-2 py-1 font-medium text-white bg-blue-400">
              TailwindCSS
            </span>
            <span className="mr-2 mb-2 rounded-sm px-2 py-1 font-medium text-white bg-purple-500">
              Bootstrap
            </span>
            <span className="mr-2 mb-2 rounded-sm px-2 py-1 font-medium text-white bg-pink-500">
              CSS
            </span>
            <span className="mr-2 mb-2 rounded-sm px-2 py-1 font-medium text-white bg-green-950">
              MongoDB
            </span>
            <span className="mr-2 mb-2 rounded-sm px-2 py-1 font-medium text-white bg-blue-400">
              MySQL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
