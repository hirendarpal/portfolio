import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='h-[20vh] bg-slate-300 dark:bg-slate-800 dark:text-gray-400 flex flex-col items-center justify-center gap-8'>
        <div className="second flex items-center justify-center gap-7 md:gap-14 text-[1.5rem]">
          <Link to={"https://www.facebook.com/share/1Aqn3wzq5w/"} target='_blank'><FaFacebook className='hover:text-blue-600 hover:bg-white cursor-pointer rounded-full hover:scale-125 transition-all ease-in 0.3s' /></Link>
          <Link to={"https://www.instagram.com/hirendar_pal?igsh=ZW93NGFnNmNqMGNp"} target='_blank'><FaInstagram className='hover:bg-gradient-to-t from-pink-400 to-yellow-500 cursor-pointer rounded-md hover:text-white hover:scale-125 transition-all ease-in 0.3s' /></Link>
          <Link to={"https://www.linkedin.com/in/hirendar-pal-a9767030b"} target='_blank'><FaLinkedin className='hover:text-blue-600 hover:bg-white cursor-pointer border-none rounded hover:scale-125 transition-all ease-in 0.3s' /></Link>
          <Link to={"https://github.com/hirendarpal"} target='_blank'><FaGithub className='hover:bg-white hover:text-black cursor-pointer rounded-xl hover:scale-125 transition-all ease-in 0.3s' /></Link>
          <Link to={"https://www.youtube.com/@CodeByHirendar-g2z"} target='_blank'><FaYoutube className='hover:text-red-500 overflow-hidden cursor-pointer hover:scale-125 transition-all ease-in 0.3s' /></Link>
        </div>
        <div className="third flex items-center justify-center">Hirendar Pal © 2025</div>
    </div>
  )
}

export default Footer;