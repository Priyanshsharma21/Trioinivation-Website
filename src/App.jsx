import React, { useEffect, useState } from 'react';
import { Navbar, ScrollToTop } from './components';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Blog, Contact, About, BlogDetails, Career, RecruitmentUpsurge, DigitalTransformation, DigitalMarketing } from './pages';
import Footer from './components/Footer';
import { FloatButton } from 'antd';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { logo, logo2 } from './assets';

const App = () => {
  const [preLoader, setPreLoader] = useState(true);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 5);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count >= 100) {
      setPreLoader(false);
      clearInterval();
      navigate(window.location.pathname);
    }
  }, [count]);

  return (
    <div className="app w-full">
      {preLoader ? (
        <div className="preloader w-full h-screen flex flex-col justify-center items-center">
        <div className="w-full h-screen preLoaderBG flex flex-col ">
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <img src={logo2} alt="website logo" className='z-100 preLoaderLogoImg' />
            <motion.h1 className='counterBg rounded-full absolute top-2 right-5 text-[#28282834] font-bold'>{count}</motion.h1>
            <div className='loader' />
          </div>
        </div>
        </div>
      ) : (
        <div className="w-full main_wrapper z-0">
          <div className="flex justify-center">
            <Navbar />
          </div>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/career" element={<Career />} />
            <Route path="/our-services/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/our-services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/our-services/recruitment-upsurge" element={<RecruitmentUpsurge />} />
          </Routes>

          <Footer />
        </div>
      )}

      {!preLoader && (
        <FloatButton.BackTop visibilityHeight={0} />
      )}
    </div>
  );
};

export default App;
