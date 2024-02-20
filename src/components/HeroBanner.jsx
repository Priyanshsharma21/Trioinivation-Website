import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { home_arrow, home_front_wallpaper, home_pattern } from '../assets'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';


const HeroBanner = ({showArrow, showBtn, showTitle1, showSubTitle, heroImg, showNavigation, title2, title2HighlightPart}) => {
    const [navName, setNavName] = useState("")
    const [navName2, setNavName2] = useState("")
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname === "/about"){
            setNavName("About")
        }else if(location.pathname === "/our-services"){
            setNavName("Our services")
        }
        else if(location.pathname === "/career"){
            setNavName("Career")
        }
        else if(location.pathname === "/blog"){
            setNavName("Blog")
        }
        else if(location.pathname === "/contact"){
          setNavName("Contact")
      }else if(location.pathname.includes("/our-services")){
        const nav = location.pathname.split("/")
        setNavName("Our services")
        if(nav[2]==="digital-transformation"){
          setNavName2("Digital Transformation")
        }else if(nav[2]==="digital-marketing"){
          setNavName2("Digital Marketing")
        }else{
          setNavName2("Recruitment Upsurge")
        }
      }
    },[location.pathname])

  return (
    <div className="heroBanner flex flex-col">
    <section className="heroBanner w-full h-[100vh] bg-[#E7EDF6]">
      <Row>
        <Col xl={14} lg={14} md={14} sm={24} xs={24}>
          <img className='w-full h-[100vh] absolute object-cover' src={home_front_wallpaper} alt="Home Section Hero front wallpaper" />
          <div className="w-full h-[100vh]  object-cover z-100 absolute">
            <div className="heroContent z-10">
            {showArrow && (
                <div className="arrow">
                    <img className="relative websiteHeroArrow" src={home_arrow} alt="website arrow" />
                </div>
            )}
            {showNavigation && (
                <div className="heroNavigation flex">
                    <div className=''>Home</div>
                    <div className='ml-2'>{">"}</div>
                    <div style={{ 
                      color : navName2 ? "#A3A3A3" : "#50c17b"
                    }} className='ml-2'>{navName}</div>
                    {navName2 && (<div className='ml-2'>{">"}</div>)}
                    {navName2 && (<div className='ml-2 text-[#50c17b]'>{navName2}</div>)}
                    
                </div>
            )}
            {showNavigation && (
                <div className="heroNavigationText">
                    {navName2 ? navName2 : navName}
                </div>
            )}
            {showTitle1 && (
                <div className="heroHeading">
                    <span className="heroHeadingMain text-[#7BABED]">Connect with us</span> to grow your business with ease
                </div>
            )}

            {title2 && (
                <div className="heroHeading heroHeading2 mt-1">
                    {title2} <span className="heroHeadingMain text-[#7BABED]">{title2HighlightPart}</span>
                </div>
            )}
            
            {showSubTitle && (
                <div className="subHeading mt-5">
                    Transforming visions into digital realities. Our comprehensive services encompass digital transformation, marketing prowess, and talent solutions, ensuring your success in a dynamic world.
                </div>
            )}
              
            {showBtn && (
                <div className="heroActionBtns mt-6 flex">
                  <Link to="/contact" className="contactButton heroBtnText font-semibold flex items-center bg-[#41AE6A] hover:text-white hover:bg-[#50c17b] text-white">
                    <div>Contact us</div>
                    <FaArrowAltCircleRight className="ml-2 mt-[0.15rem] "/>
                  </Link>
                  <Link to={'/about'} className='text-[#41AE6A] heroBtnText ml-6 heroLearnMore font-semibold'>
                    Learn more
                  </Link>
                </div>
            )}
              
            </div>
          </div>
        </Col>
        <Col xl={10} lg={10} md={10} sm={24} xs={24}>
         <img src={home_pattern} alt="Home Pattern" className="w-full absolute h-[100vh] object-cover" />
        </Col>
      </Row>
      <div className="modelFloating">
        <img src={heroImg} className='absolute heroImg' alt="Hero Section Model" />
      </div>
    </section>
  </div>
  )
}

export default HeroBanner