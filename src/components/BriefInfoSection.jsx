import { Col, Row } from 'antd'
import React from 'react'
import { homeUnderline } from '../assets'
import { motion } from 'framer-motion'

const BriefInfoSection = ({title, description1, description2, titleMain,customClass}) => {
  return (
    <section className={`homeWhoRV ${customClass && "customBriefClass"}`}>
    <Row>
      <Col xl={12} lg={12} md={24} sm={24} xs={24}>
        <motion.div
        whileInView={{x:[-2,0], opacity:[0,1],filter: ["blur(10px)", "blur(0px)"]}}
        transition={{duration:0.5}}  
         className="flex flex-col">
          <div>
            <div className="whorv text-[#41AE6A]">{title}</div>
            <img src={homeUnderline} alt="underline" />
          </div>
          <div className='homeHead2 font-normal text-black'>
            {titleMain}
          </div>
          <div className='subHeading2'>
           {description1}
          </div>
        </motion.div>
      </Col>
      <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <motion.div
          whileInView={{x:[2,0], opacity:[0,1],filter: ["blur(10px)", "blur(0px)"]}}
          transition={{duration:0.5}} 
           className='subHeading2'>
           {description2}
          </motion.div>
      </Col>
    </Row>
  </section>
  )
}

export default BriefInfoSection