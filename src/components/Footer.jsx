import React, { useState } from 'react'
import { Row, Col } from 'antd'
import { CgEditBlackPoint } from "react-icons/cg";
import { quickLinks } from '../constants';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { footerSubs, footerSubsLines, logo, logo2 } from '../assets';
import { Input } from 'antd';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [formData, setFormData] = useState("")

  const socialMediaLinks = [
    {
        title : "Twitter",
        icon : <FaXTwitter className='text-white'/>,
        path : "",
    },
    {
        title : "Linkedin",
        icon : <FaLinkedinIn className='text-white'/>,
        path : "",
    },
    {
        title : "Facebook",
        icon : <FaFacebookF className='text-white'/>,
        path : "",
    },
    {
        title : "Instagram",
        icon : <FaInstagram className='text-white'/>,
        path : "",
    },
]

const handleSubmit = ()=>{
  console.log(formData)
}

  return (
    <div className="footer w-full flex flex-col bg-[#E7EDF6]">
        <Row>
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <div>
              <div className="footerLogo">
                <img src={logo2} alt="footer logo" className="footerLogoImg" />
              </div>
              <div className="footerDescription">
              Transforming visions into digital realities. Our comprehensive services encompass digital transformation, marketing prowess, and talent solutions, ensuring your success in a dynamic world.
              </div>
            </div>
          </Col>
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <div className="footerLinks flex">
              <div className="quickLinks">
              <div className='text-black font-medium mb-5'>Quick Links</div>
                {quickLinks.map((item,i)=>(
                  <div className="flex items-center mt-3">
                      <CgEditBlackPoint className='text-blue-400'/>
                      <Link to={item.path} className='footerItemText text-[#525252] font-normal ml-2'>{item.title}</Link>
                  </div>
                ))}
              </div>
              <div className="socialMedia ml-8">
                <div className='text-black font-medium mb-5'>Also on:</div>
                {socialMediaLinks.map((item,i)=>(
                  <a
                  href={item.path}
                  target='_blank'
                  className="flex items-center mt-3">
                    <div className="bg-[#7BABED] p-1 rounded-full">
                      {item.icon}
                    </div>
                    <div className='footerItemTextSocialMedia ml-2 font-normal text-[#525252]'>
                      {item.title}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
             <div className="footersection3">
             <div className="flex">
                <img src={footerSubs} alt="footer subs text" className="subsToNewsletter" />
                <img src={footerSubsLines} alt="footer subs text" className="absolute footerSubsPattern" />
              </div>

              <div>
                <Input className="footerInputStyle p-2" placeholder="Enter Your Email Address" onPressEnter={handleSubmit} onChange={(e)=>setFormData(e.target.value)}/>
              </div>

              <div className="mt-5 cursor-pointer hover:bg-[#50c17b] transition-all duration-300 bg-[#41AE6A]  text-white footerSubmitBtn text-center font-medium rounded-xl">
                Submit
              </div>
             </div>
          </Col>
        </Row>
        <Divider />
        <div className="flex justify-between">
          <div className="font-medium footerBottomText text-[#525252]">All rights reserved © 2023 trioinnovation</div>
          <div className="flex">
            <div className="font-medium footerBottomText text-[#525252]">Terms & Condition</div>
            <div className="font-medium footerBottomText ml-5 text-[#525252]">Privacy Policy</div>
          </div>
        </div>
    </div>
  )
}

export default Footer