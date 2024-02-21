import React, { useState } from 'react'
import { homeUnderline, testMark } from '../assets'
import { Col, Row } from 'antd'
import { testimonialList } from '../constants'
import { IoStar } from "react-icons/io5";
import { motion } from 'framer-motion'

const Testimonials = () => {
    const [selectedTestimonials, setSelectedTestimonials] = useState(testimonialList[0])

    const handleTestimonial = (id)=>{
        testimonialList.map((testimonial,i)=>{
            if(testimonial.id === id){
                setSelectedTestimonials(testimonial)
            }
        })
    }

  return (
    <div className="testimonials">
                <motion.div 
                whileInView={{y:[100,50,0], opacity:[0,0,1]}}
                transition={{duration:0.5}}
                className="careerInfo flex flex-col items-center">
                    <div className='flex w-full flex-col items-center'>
                    <div className="whorv text-[#41AE6A]">TESTIMONIALS</div>
                    <img src={homeUnderline} alt="underline" />
                    </div>
                    <div className='homeHead2 font-normal mt-4 text-black text-center'>
                        What Our Client say about us
                    </div>
                    <div className='subHeading2 mt-4 aboutUsSecOneDesc careerDescMain text-center'>
                        Discover what our clients have to say about their experiences working with us. Hear firsthand testimonials and feedback on our services, expertise, and commitment to delivering exceptional results. From digital transformation to recruitment upsurge, explore how we've helped businesses thrive and succeed.
                    </div>
                </motion.div>

                <div className="testimonialsBox">
                    <Row>
                        <Col xl={6} lg={10} md={24} sm={24} xs={24}>
                            <motion.div
                            whileInView={{x:[-200,0], opacity:[0,1],filter: ["blur(10px)", "blur(0px)"]}}
                            transition={{duration:1}}       
                            className="testimonialListsContainer">
                                {testimonialList.map((item,i)=>(
                                    <div 
                                    key={item.id}
                                    className="testCards flex cursor-pointer rounded-lg shadow-md hover:shadow-lg transform  transition-all duration-300"
                                    onClick={()=>handleTestimonial(item.id)}
                                    style={{
                                        marginTop : i===0 ? 0: 16,
                                        backgroundColor : item.id === selectedTestimonials.id ? "#F1F6FD" : "#ffff"}}
                                    >
                                        <div className="profilePic">
                                            <img className='w-full rounded-lg h-full object-cover' src={item.profileImg} alt={item.name} />
                                        </div>
                                        <div className="profileDetails justify-center ml-5 flex flex-col">
                                            <div className="profileName font-semibold text-[#3D3D3D]">
                                                {item.name}
                                            </div>
                                            <div className="profileDeg mt-2 font-normal text-[#3D3D3D]">
                                                {item.designation}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </Col>
                        <Col xl={18} lg={14} md={24} sm={24} xs={24}>
                            <motion.div
                            whileInView={{x:[200,0], opacity:[0,1],filter: ["blur(10px)", "blur(0px)"]}}
                            transition={{duration:1}}
                            className="textCardMain h-full bg-[#F1F6FD] rounded-lg shadow-lg">
                                <div className="testMark absolute">
                                    <img src={testMark} alt="testMark" />
                                </div>
                                <div className="textStars flex">
                                    {[1,2,3,4,5].map((item,i)=>(
                                            <IoStar 
                                            style={{ marginLeft : i===0 ? 0: "0.5rem",}}
                                            className='text-[#41AE6A] text-[1.5rem]'/>
                                    ))}
                                </div>
                                <div className="textTitleMain font-bold text-[#3D3D3D]">
                                    {selectedTestimonials.title}
                                </div>
                                <div className="textTitleDescMain font-medium text-[#656565]">
                                    {selectedTestimonials.testimonial}
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </div>
    </div>
  )
}

export default Testimonials