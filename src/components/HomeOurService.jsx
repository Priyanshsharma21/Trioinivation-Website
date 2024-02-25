import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { homeUnderline, swiperBg } from '../assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { additionalServices } from '../constants';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { Pagination, Navigation } from 'swiper/modules';

const HomeOurService = () => {


  return (
    <div>
    <Row>
      <Col xl={10} lg={12} md={24} sm={24} xs={24}>
        <div className="flex flex-col">
          <div>
            <div className="whorv text-[#41AE6A]">Our services</div>
            <img src={homeUnderline} alt="underline" />
          </div>
          <div className='homeHead2 font-normal text-black'>
            Innovative solutions: Our unparallel service offerings
          </div>
          <div className='subHeading2'>
            Innovative Solutions: Our Unparalleled Service Offerings" describes how your company provides cutting-edge solutions that set you apart from the competition. Highlight your commitment to innovation, showcasing how your services go beyond conventional approaches to deliver exceptional results for your clients. Emphasize your unique value proposition, demonstrating how your solutions address modern challenges and drive success in today's dynamic business landscape.
          </div>
        </div>
      </Col>
      <Col xl={14} lg={12} md={24} sm={24} xs={24}>
          <div className="serviceSwiper">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
          {additionalServices.map((item,i)=>(
            <SwiperSlide>
              <div className="swiperCard rounded-lg transform  transition-all duration-300">
                <div className="swiperBanner rounded-tl-lg rounded-tr-lg bg-[#F1F6FD] w-full h-full flex justify-center items-center">
                  <img src={item.bannerImg} alt="logo_swiper"  />
                </div>
                <div className="swpCard bg-white rounded-bl-lg rounded-br-lg">
                  <div className="homeCardTitle flex justify-center mt-4 text-[#262626]">
                    {item.title}
                  </div>
                  <div className="homeCardDesc mt-4 text-center text-[#737373]">
                    {item.description}
                  </div>
                  <Link to={item.path} className="homeCardIcon flex justify-center items-center text-[#7BABED] hover:text-[#95b5e0] mt-6">
                    <div>Learn more</div>
                    <IoIosArrowForward className='ml-1 items-center'/>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>

          {/* <div className="swiperBg">
            <img src={swiperBg} alt="" className="w-full h-full"/>
          </div> */}
          </div>
      </Col>
    </Row>
    </div>
  )
}

export default HomeOurService