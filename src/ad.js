import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import first from './pics/1st.gif'
import second from './pics/2nd.jpg'
import third from './pics/3rd.jpg'
import './ad.css'

const Slider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: false
      }}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={first} alt="1st" className='adimg'/></SwiperSlide>
      <SwiperSlide><img src={second} alt="2nd" className='adimg' /></SwiperSlide>
      <SwiperSlide><img src={third} alt="3rd" className='adimg' /></SwiperSlide>
    </Swiper>
  );
};

export default Slider;
