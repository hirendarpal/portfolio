import React, { useRef, useState } from 'react'
import { ReactTyped } from "react-typed";

function Banner() {

  const tiltRaf = useRef(null)
  const [xVal, setxVal] = useState(0)
  const [yVal, setyVal] = useState(0)


  const mousemove = (e) => {

    setxVal((e.clientX - tiltRaf.current.getBoundingClientRect().x - tiltRaf.current.getBoundingClientRect().width/2)/15);
    setyVal(-(e.clientY - tiltRaf.current.getBoundingClientRect().y - tiltRaf.current.getBoundingClientRect().height/2)/5);

    tiltRaf.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
    tiltRaf.current.style.transition = 'all 0.1s ease-in';
  }

  return (
    <div id='distens' className='bg-slate-200 w-full h-[85vh] py-[10px] md:flex mt-14 shadow-md shadow-stone-400  dark:bg-[#242e3a]' onMouseMove={(e) => {mousemove(e)}}>
        <div className='max-w-[50%] mx-auto md:text-left text-center pt-8 md:pl-32'>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-700 text-2xl md:text-6xl md:py-5 font-bold'>Learn With Me</p>
            <h2 className='text-[#f56416] text-2xl md:text-[60px] md:py-6 font-bold'>I<i>'</i>m web Developer</h2>
            <div className='text-[#f56416] text-xl ml-[-10vw] md:ml-0 w-[80vw] md:w-auto md:text-[35px] md:py-6 flex font-bold'>
              <div className='inline-block'>
                My Skills
              </div>
              <div>
                <ReactTyped className='pl-3 text-cyan-400'
                strings={['Html and CSS','JavaScript' ,'Tailwindcss','Bootstrap','React and Redux','Node.js','Express.js','MongoDB']}
                typeSpeed={80}
                loop={true}
                backSpeed={70}
                />
              </div>
            </div>
            <button className='hidden md:block md:text-2xl bg-gradient-to-r from-pink-400 to-yellow-500 mt-5 p-3 text-white font-bold rounded-md shadow-md shadow-violet-600'>Few About Me</button>
            <p className='hidden md:block pt-5 text-lg font-medium'>Hi! My name is hirendar pal. I am full Stack Web Developer. I have read it my self. from YouTube, Udemy, Google, 
              AI etc. My Skills:- Languages: Html, css, javascript, C-basic, Node.js, MongoDB. Framework:- Bootstrap, TailwindCss, React.js, Express.js. And I am a Freelancer.
            </p>
        </div>
        <div ref={tiltRaf} id='tiltdiv' className="md:w-[50%] md:mr-5 flex items-center justify-center mt-14 md:mt-5">
          <img className='w-[20rem] md:w-[30rem] md:h-[30rem] object-cover drop-shadow-2xl shadow-cyan-600' src="./Images/dev.png" alt="image" />
        </div>
    </div>
  )
}

export default Banner;