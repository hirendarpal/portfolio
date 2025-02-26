import React from 'react'
import Contact from './components/Contact';

function Experts() {
  return (
    <>
    <h1 className=" text-center my-5 md:mb-20 text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">Contect Me</h1>
    <div className='w-full md:flex items-center justify-center md:mt-[-8rem]'>
      <div className='hidden md:block w-[50%]'>
        <div className='w-[35vw] ml-56'>
          <img src="./Images/Email.png" className='w-full/' alt="img" />
        </div>
      </div>
      <div className='md:w-[50%]'>
        <Contact/>
      </div>
    </div>
    </>
  );
}

export default Experts;