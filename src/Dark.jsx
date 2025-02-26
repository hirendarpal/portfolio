import { useState } from "react";


const Dark = ({theme}) => {

    let [Dark, setDark] = useState(JSON.parse(localStorage.getItem('isDark')));

    if(Dark){
      document.body.classList.add('dark') 
    }else{
      document.body.classList.remove('dark');
    }
    
    const DarkLighthandeler = () => {
      setDark(!Dark)
      localStorage.setItem('isDark', !Dark)
    }

  return (
    <div onClick={() => DarkLighthandeler()} className="mr-5 h-[5vh] w-[5vh] object-cover object-center flex items-center justify-center cursor-pointer hover:bg-gray-400 duration-300 rounded-[50%]">
      <img className="" src={`public/Images/${Dark ? "sun" : "moon"}.png`} alt="NOT" />
    </div>
  );
}

export default Dark;