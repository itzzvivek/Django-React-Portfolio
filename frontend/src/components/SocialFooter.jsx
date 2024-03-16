import React from "react";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialFooter = () => {
  return (
    <div class="socialHandle" className="bg-[#14101b] w-full social-bar fixed bottom-0 left-0 right-0 p-4 flex justify-center items-center z-10 lg:hidden">
      <div className="justify-center flex text-white">
        <a
          className="mr-6 text-2xl"
          href="https://www.linkedin.com/in/vivek-warkade-623866216/"
        >
          <FaLinkedin />
        </a>
        <a className="mr-6 text-2xl" href="https://github.com/itzzvivek">
          <FaGithub />
        </a>
        <a className="mr-6 text-2xl" href="mailto:vivekwarkade000@gmail.com">
          <HiOutlineMail />
        </a>
        <a className="mr-6 text-2xl" href="https://discord.gg/vQh73ZBv">
          <FaDiscord />
        </a>
      </div>
    </div>
  );
};

export default SocialFooter;
