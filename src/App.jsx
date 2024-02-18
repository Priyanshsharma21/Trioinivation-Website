import React, { useEffect, useState } from 'react'
import { Navbar, PreLoader } from './components';
import { Route, Routes, useNavigate } from "react-router-dom";
import {  Home,
  Blog,
  Contact,
  About,
  BlogDetails,
  Career,
  RecruitmentUpsurge,
  DigitalTransformation,
  DigitalMarketing } from './pages';
import Footer from './components/Footer';

const App = () => {
  const [preLoader, setPreLoader] = useState(true)
  const [timer, setTimer] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      setPreLoader(false);
      navigate('/'); 
    }
  }, [timer]);

  return (
    <div className="app w-full">
      {preLoader ? (
        <div className="preloader w-full h-screen flex flex-col justify-center items-center">
          <PreLoader />
        </div>
      ) : (
        <div className="w-full main_wrapper z-0">
          <div className="flex justify-center">
            <Navbar />
          </div>
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
    </div>
  )
}

export default App
