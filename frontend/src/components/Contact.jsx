import React, { useState } from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#14101b] flex justify-center items-center p-4"
    >
      <div
        className="flex flex-col w-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold text-center inline border-b-4 border-teal-600 text-gray-300">
            Contact
          </p>
        </div>
        <h2 className="font-bold text-white text-center">
          Do you have a project in mind? if you want to hire me in your next
          project, feel free to connect with me :
          <a
            href="https://topmate.io/vivek_warkade"
            className="underline text-teal-600 ml-2"
          >
            Let's Connect
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
