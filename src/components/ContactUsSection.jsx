import React, { useState } from 'react'
import { homeUnderline } from '../assets';
import { Row, Col, Form, Input, Button } from 'antd'
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion'

const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = () => {
        console.log(formData);
      };

      const socialMediaLinks = [
        {
            title : "Twitter",
            icon : <FaXTwitter className='text-black cursor-pointer '/>
        },
        {
            title : "Linkedin",
            icon : <FaLinkedinIn className='text-black cursor-pointer'/>
        },
        {
            title : "Facebook",
            icon : <FaFacebookF className='text-black cursor-pointer'/>
        },
        {
            title : "Instagram",
            icon : <FaInstagram className='text-black cursor-pointer'/>
        },
    ]
  return (
    <div className='contactUsSection'>
        <div
        className="contactUsBG">
            <motion.div 
            whileInView={{y:[100,50,0], opacity:[0,0,1]}}
            transition={{duration:0.5}}
            className="contactUsBGTitle w-full text-center">Don’t hesitate to contact us for better information & services</motion.div>
            <motion.div 
            whileInView={{y:[100,50,0], opacity:[0,0,1]}}
            transition={{duration:0.5}}
            className="contactUsBGDesc w-full text-center">Don’t hesitate to reach out to us for more information and better services. We’re here to assist you and provide the support you need. Contact us today to start your journey towards digital transformation and success.</motion.div>
        </div>

        <motion.div
        whileInView={{y:[100,50,0], opacity:[0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
        transition={{duration:0.5}}
        className="contactFormInfo">
        <Row>
              <Col xl={10} lg={12} md={24} sm={24} xs={24} className="contactSectionInfo w-full rounded-tl-lg shadow-xl rounded-bl-lg bg-[#4D82E4] flex">
                  <div className="contactInfoBox">
                    <div>
                        <div className="contactInfoSecTitle font-normal text-white">
                            Contact information
                        </div>
                        <div className="contactInfoSecDesc font-normal text-white">
                            For information or any query, call us or email us. Find the contact information below.
                        </div>
                    </div>

                    <div className='contactInfoBoxMain'>
                        <div className="flex contactSecContact items-center">
                            <IoIosMail/>
                            <div className='ml-2'>support@trioinnovation.com</div>
                        </div>

                        <div className="flex contactSecContact mt-5 items-center">
                            <IoCall/>
                            <div className='ml-2'>+1-800-980002</div>
                        </div>
                    </div>

                    <div className='contactInfoBoxMain2'>
                        <div className="text-white font-normal alsoAvil">Also available on:</div>
                        <div className='flex mt-2'>
                            {socialMediaLinks.map((item,i)=>(
                                <div 
                                style={{marginLeft : i===0 ? 0 : 10}}
                                className="bg-white p-2 rounded-full hover:bg-[#ffffffac] cursor-pointer hover:shadow-xl transform  transition-all duration-300">
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                  </div>

              </Col>
              <Col xl={14} lg={12} md={24} sm={24} xs={24}>
                <div className="flex flex-col bg-white shadow-xl contactForm contactForm2 rounded-tr-lg rounded-br-lg contactSectionForm">
                  <div>
                    <div className="whorv text-[#41AE6A]">CONTACT US</div>
                      <img src={homeUnderline} alt="underline" />
                  </div>
                  <div className="contactFormTitle font-normal">
                    Get in touch with us!
                  </div>
                  <div className="contactDesc font-normal text-[#737373]">
                    Need some help? Get in touch with us by filling the form below or you can even call at the number provided. We would be glad to hear from you.
                  </div>

                  <Form onFinish={handleSubmit} className="formContact">
                      <Input className="formInputContact p-2" name="name" placeholder="Your name here" onChange={handleChange} />
                      <Input className="formInputContact p-2" name="email" type="email" placeholder="Your email" onChange={handleChange} />
                      <Input.TextArea className="formInputContact contactTextArea p-2" name="message" placeholder="Type your query here" onChange={handleChange} />
                      <Button className="btnContactSubmit contactButton heroBtnText font-semibold flex items-center bg-[#41AE6A] hover:text-white hover:bg-[#50c17b] text-white"type="primary" htmlType="submit">SEND</Button>
                  </Form>
                </div>
              </Col>
            </Row>
        </motion.div>
    </div>
  )
}

export default ContactUsSection