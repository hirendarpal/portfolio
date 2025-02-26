import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Dark from "./Dark";
import { NavLink } from 'react-router-dom';

function Header() {

  const [toggle,setToggal] = useState(false);

  return (
    <header className='p-3 w-full fixed top-0 z-10 shadow-md shadow-stone-400 dark:bg-[#1a212e] bg-slate-100'>
        <div className='w-auto flex justify-between items-center'>
            <div className='text-3xl font-bold flex md:ml-10'>
              <div className='h-[6vh] w-[3vw] hidden md:block '>
                <NavLink to={"/"}>
                <img  className='h-[100%] w-[100%] cursor-pointer hover:scale-125 duration-200' src="./Images/logo.png" alt="logo" />
                </NavLink>
              </div>
              <div className='md:ml-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500'>
                Hirendar
              </div>
            </div>
            {
              toggle ? 
              <IoMdClose onClick={() => setToggal(!toggle)} className=' text-2xl md:hidden block' /> :
              <AiOutlineMenu onClick={() => setToggal(!toggle)} className=' text-2xl md:hidden block' />
            }

            <ul className='h-[5vh] hidden md:flex gap-10 menu'>
                <li className='h-[100%] cursor-pointer duration-300 font-medium'> <NavLink to={"/"}>Home</NavLink> </li>
                <li className='h-[100%] cursor-pointer duration-300 font-medium'><NavLink to={"/About"}>About Me</NavLink></li>
                <li className='h-[100%] cursor-pointer duration-300 font-medium'><NavLink to={"/service"}>Services</NavLink></li>
                <li className='h-[100%] cursor-pointer duration-300 font-medium'><NavLink to={"/project"}>Projects</NavLink></li>
                <li className='h-[100%] cursor-pointer duration-300 font-medium'><NavLink to={"/contact"}>Contact</NavLink></li>
                <Dark/>
            </ul>
            {/* Responsive menu */}
            <ul className={`md:hidden w-[50%] h-screen z-10 text-white fixed bg-[rgba(74,74,74,0.88)] left-[-100%] top-0 duration-300 overflow-x-hidden
              ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className='p-3 font-5xl cursor-pointer'> <NavLink to={"/"}>Home</NavLink> </li>
                <li className='p-3 font-5xl cursor-pointer'> <NavLink to={"/about"}>About Me</NavLink> </li>
                <li className='p-3 font-5xl cursor-pointer'> <NavLink to={"/service"}>Services</NavLink> </li>
                <li className='p-3 font-5xl cursor-pointer'> <NavLink to={"/project"}>Projects</NavLink> </li>
                <li className='p-3 font-5xl cursor-pointer'> <NavLink to={"/contact"}>Contact</NavLink> </li>
                <li className='p-3 cursor-pointer flex items-center justify-start'><Dark/></li>
            </ul>
        </div>
    </header>
  )
}

export default Header;