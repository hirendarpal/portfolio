import React from "react";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa6";

const About = () => {
  return (
    <div className="md:mt-23 mt-20 md:px-44">
      <div className="w-[100%] p-4 md:flex mb-5 border border-1 border-gray-500 rounded-md">
        <div className="md:w-[50%] h-full mb-5">
        <h1 className="md:text-3xl text-xl pb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">ABOUT ME</h1>
      <p className="pt-0 md:text-xl">
          Hi, I’m hirendar, I am a passionate and skilled freelancer
          specializing in creating stunning, functional websites and providing a
          wide range of website-related services. With a strong focus on
          delivering tailored solutions, I help individuals, startups, and
          businesses establish a powerful online presence that drives results.
        </p>
        <div className="mt-2">
          <div>
            <button className="px-2 border border-1 border-gray-500 rounded-2xl">#html</button>
            <button className="px-2 ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#css</button>
            <button className="px-2 ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#javascript</button>
            <button className="px-2 ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#tailwind</button>
          </div>
          <div>
            <button className="px-2 my-1 border border-1 border-gray-500 rounded-2xl">#bootstrap</button>
            <button className="px-2 ml-1 md:ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#react.js</button>
            <button className="px-2 ml-1 md:ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#node.js</button>
            <button className="px-2 ml-1 md:ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#ejs</button>
          </div>
          <div>
            <button className="px-2 my-1 border border-1 border-gray-500 rounded-2xl">#redux</button>
            <button className="px-2 ml-0.4 md:ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#redux/toolkit</button>
            <button className="px-2 ml-0.4 md:ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#figma</button>
            <button className="px-2 ml-0.4 md:ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#netlify</button>
          </div>
          <div>
            <button className="px-2 my-1 border border-1 border-gray-500 rounded-2xl">#git</button>
            <button className="px-2 ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#github</button>
            <button className="px-2 ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#terminal</button>
            <button className="px-2 ml-2 my-1 border border-1 border-gray-500 rounded-2xl">#express.js</button>
          </div>
        </div>
        <h1 className="md:text-3xl text-xl pt-6 pb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">MERN STACK</h1>
        <div className="flex w-36 md:w-[60%] items-center justify-between">
          <div className="text-[#47a248]">
            <DiMongodb className="w-[44] text-2xl md:text-5xl" />
            <h2 className="md:text-2xl md:font-semibold md:pl-4 pl-1 md:pt-2">M</h2>
          </div>
          <div>
            <SiExpress className="w-[44] text-2xl md:text-5xl" />
            <h2 className="md:text-2xl md:font-semibold md:pl-4 pl-1 md:pt-2">E</h2>
          </div>
          <div className="text-[#61dafb]">
            <GrReactjs className="w-[44] text-2xl md:text-5xl" />
            <h2 className="md:text-2xl md:font-semibold md:pl-5 pl-1 md:pt-2">R</h2>
          </div>
          <div className="text-[#8cc84b]">
            <FaNodeJs className="w-[44] text-2xl md:text-5xl" />
            <h2 className="md:text-2xl md:font-semibold md:pl-4 pl-1 md:pt-2">N</h2>
          </div>
        </div>
        </div>
        <div className="md:w-[50%] h-full">
          <img src="./Images/Expert.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
