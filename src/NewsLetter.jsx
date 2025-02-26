import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function NewsLetter() {
  return (
    <>
    <h1 className=" text-center py-10 text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">Client Reviews</h1>
    
      <Swiper 
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-96 w-[95%] md:w-[70%] "
      >
        <SwiperSlide>
          <div className='h-full w-full flex justify-center'>
            <div className='h-[85%] w-[90%] border border-1 md:flex rounded-2xl overflow-hidden shadow-lg shadow-gray-300'>
            <div className='h-[40%] md:h-full md:w-[35%] flex items-center justify-center'>
              <div className='h-[17vh] w-[17vh] md:h-[30vh] md:w-[30vh] border border-1 rounded-full overflow-hidden'>
                <img className='h-[100%] w-[100%] object-cover object-center'  src="./Images/pal.jpg" alt="" />
              </div>
            </div>
            <div className='h-[60%] md:h-full md:w-[65%] flex items-center justify-center p-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo architecto asperiores neque nesciunt dfdsr  uehweg ejwhuiwe
              weuiuwiowu iwuiwhewued wwaue kjrdf djhisu smi sokjseuiesoekesj okiheso iol eioeopo9 kijeko ehes oiouiojeuioh esoloi urfo 
              isdueujeui uii eioeiuoeo eijioeunedj ioejioio ei iij ieiuioe
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full flex justify-center'>
          <div className='h-[85%] w-[90%] border border-1 md:flex rounded-2xl overflow-hidden shadow-lg shadow-gray-300'>
            <div className='h-[40%] md:h-full md:w-[35%] flex items-center justify-center'>
              <div className='h-[17vh] w-[17vh] md:h-[30vh] md:w-[30vh] border border-1 rounded-full overflow-hidden'>
                <img className='h-full w-full object-cover object-center'  src="https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg?ga=GA1.1.1282146764.1714647882&semt=ais_hybrid" alt="" />
              </div>
            </div>
            <div className='h-[60%] md:h-full md:w-[65%] flex items-center justify-center p-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo architecto asperiores neque nesciunt dfdsr  uehweg ejwhuiwe
              weuiuwiowu iwuiwhewued wwaue kjrdf djhisu smi sokjseuiesoekesj okiheso iol eioeopo9 kijeko ehes oiouiojeuioh esoloi urfo 
              isdueujeui uii eioeiuoeo eijioeunedj ioejioio ei iij ieiuioe
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full flex justify-center'>
          <div className='h-[85%] w-[90%] border border-1 md:flex rounded-2xl overflow-hidden shadow-lg shadow-gray-300'>
            <div className='h-[40%] md:h-full md:w-[35%] flex items-center justify-center'>
              <div className='h-[17vh] w-[17vh] md:h-[30vh] md:w-[30vh] border border-1 rounded-full overflow-hidden'>
                <img className='h-full w-full object-cover object-center'  src="https://img.freepik.com/premium-photo/business-man-futuristic-office-global-corporate-concept-success_215274-2557.jpg?ga=GA1.1.1282146764.1714647882&semt=ais_hybrid" alt="" />
              </div>
            </div>
            <div className='h-[60%] md:h-full md:w-[65%] flex items-center justify-center p-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo architecto asperiores neque nesciunt dfdsr  uehweg ejwhuiwe
              weuiuwiowu iwuiwhewued wwaue kjrdf djhisu smi sokjseuiesoekesj okiheso iol eioeopo9 kijeko ehes oiouiojeuioh esoloi urfo 
              isdueujeui uii eioeiuoeo eijioeunedj ioejioio ei iij ieiuioe
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full flex justify-center'>
          <div className='h-[85%] w-[90%] border border-1 md:flex rounded-2xl overflow-hidden shadow-lg shadow-gray-300'>
            <div className='h-[40%] md:h-full md:w-[35%] flex items-center justify-center'>
              <div className='h-[17vh] w-[17vh] md:h-[30vh] md:w-[30vh] border border-1 rounded-full overflow-hidden'>
                <img className='h-full w-full object-cover object-center'  src="https://img.freepik.com/premium-photo/beauty-gorgeous-woman-seen-through-screen-with-code-portrait-face-make-up-fasion_95211-48524.jpg?ga=GA1.1.1282146764.1714647882&semt=ais_hybrid" alt="" />
              </div>
            </div>
            <div className='h-[60%] md:h-full md:w-[65%] flex items-center justify-center p-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo architecto asperiores neque nesciunt dfdsr  uehweg ejwhuiwe
              weuiuwiowu iwuiwhewued wwaue kjrdf djhisu smi sokjseuiesoekesj okiheso iol eioeopo9 kijeko ehes oiouiojeuioh esoloi urfo 
              isdueujeui uii eioeiuoeo eijioeunedj ioejioio ei iij ieiuioe
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full flex justify-center'>
          <div className='h-[85%] w-[90%] border border-1 md:flex rounded-2xl overflow-hidden shadow-lg shadow-gray-300'>
            <div className='h-[40%] md:h-full md:w-[35%] flex items-center justify-center'>
              <div className='h-[17vh] w-[17vh] md:h-[30vh] md:w-[30vh] border border-1 rounded-full overflow-hidden'>
                <img className='h-full w-full object-cover object-center'  src="https://img.freepik.com/free-photo/japanese-programmer-guy_53876-92982.jpg?ga=GA1.1.1282146764.1714647882&semt=ais_hybrid" alt="" />
              </div>
            </div>
            <div className='h-[60%] md:h-full md:w-[65%] flex items-center justify-center p-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo architecto asperiores neque nesciunt dfdsr  uehweg ejwhuiwe
              weuiuwiowu iwuiwhewued wwaue kjrdf djhisu smi sokjseuiesoekesj okiheso iol eioeopo9 kijeko ehes oiouiojeuioh esoloi urfo 
              isdueujeui uii eioeiuoeo eijioeunedj ioejioio ei iij ieiuioe
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full flex justify-center'>
          <div className='h-[85%] w-[90%] border border-1 md:flex rounded-2xl overflow-hidden shadow-lg shadow-gray-300'>
            <div className='h-[40%] md:h-full md:w-[35%] flex items-center justify-center'>
              <div className='h-[17vh] w-[17vh] md:h-[30vh] md:w-[30vh] border border-1 rounded-full overflow-hidden'>
                <img className='h-full w-full object-cover object-center'  src="https://img.freepik.com/premium-photo/young-man-checked-shirt-looking-camera-with-futuristic-interface-background_743855-14564.jpg?ga=GA1.1.1282146764.1714647882&semt=ais_hybrid" alt="" />
              </div>
            </div>
            <div className='h-[60%] md:h-full md:w-[65%] flex items-center justify-center p-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo architecto asperiores neque nesciunt dfdsr  uehweg ejwhuiwe
              weuiuwiowu iwuiwhewued wwaue kjrdf djhisu smi sokjseuiesoekesj okiheso iol eioeopo9 kijeko ehes oiouiojeuioh esoloi urfo 
              isdueujeui uii eioeiuoeo eijioeunedj ioejioio ei iij ieiuioe
            </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default NewsLetter;