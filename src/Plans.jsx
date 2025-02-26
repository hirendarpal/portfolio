// import { NavLink } from 'react-router-dom';


function Plans() {
  return (
    <>
    <h1 className="text-center py-5 text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">Here Are My Projects</h1>

    <div className="md:flex items-center justify-center flex-wrap md:w-[100%] ">
        <div className="h-[60vh] md:h-[70vh] md:w-[22%] text-center overflow-hidden hover:scale-105 duration-500 mx-14 my-5 shadow-xl border-2 border-gray-400 hover:border-orange-600 rounded-lg">
          <div className="h-[35vh] w-[100%]">
            <a href="">
              <img className="h-[100%] w-[100%]" src="https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg?t=st=1740572291~exp=1740575891~hmac=6438be6bc47ad691a679ec03d0a66b8b0d63686253030ccb9ad8cf20356967b2&w=1800" alt="img" />
            </a>
          </div>
          <p className="md:text-[1rem] text-[12px] md:font-[400] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum eum, perspiciatis laboriosam rerum magni ad incidunt adipisci omnis impedit deserunt neque? Quo tempore expedita accusamus ipsam, perspiciatis rem magni.
          Deleniti tempore labore, ratione ullam illum odio. Excepturi velit sed accusantium ipsa delectus laboriosam.</p>
        </div>

        <div className="h-[60vh] md:h-[70vh] md:w-[22%] text-center overflow-hidden hover:scale-105 duration-500 mx-14 my-5 shadow-xl border-2 border-gray-400 hover:border-orange-600 rounded-lg">
          <div className="h-[35vh] w-[100%]">
            <a href="">
              <img className="h-[100%] w-[100%]" src="https://img.freepik.com/free-psd/flat-design-plant-care-landing-page_23-2150291375.jpg?t=st=1740572390~exp=1740575990~hmac=6a470f21a2ec11b38aa0ac532aac3066e48f3a25ac743baf1612c68f18e1368f&w=1800" alt="img" />
            </a>
          </div>
          <p className="md:text-[1rem] text-[12px] md:font-[400] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum eum, perspiciatis laboriosam rerum magni ad incidunt adipisci omnis impedit deserunt neque? Quo tempore expedita accusamus ipsam, perspiciatis rem magni.
          Deleniti tempore labore, ratione ullam illum odio. Excepturi velit sed accusantium ipsa delectus laboriosam.</p>
        </div>

        <div className="h-[60vh] md:h-[70vh] md:w-[22%] text-center overflow-hidden hover:scale-105 duration-500 mx-14 my-5 shadow-xl border-2 border-gray-400 hover:border-orange-600 rounded-lg">
          <div className="h-[35vh] w-[100%]">
            <a href="">
              <img className="h-[100%] w-[100%]" src="https://img.freepik.com/free-vector/travel-landing-page-template-with-photo_23-2148367531.jpg?t=st=1740573113~exp=1740576713~hmac=9b2ff0f7613b94bc7da59907a91c1a902f9d31b02a4f7267fab1f2a58999f046&w=1380" alt="img" />
            </a>
          </div>
          <p className="md:text-[1rem] text-[12px] md:font-[400] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum eum, perspiciatis laboriosam rerum magni ad incidunt adipisci omnis impedit deserunt neque? Quo tempore expedita accusamus ipsam, perspiciatis rem magni.
          Deleniti tempore labore, ratione ullam illum odio. Excepturi velit sed accusantium ipsa delectus laboriosam.</p>
        </div>
        
    </div>
    </>
    
  )
}

export default Plans;