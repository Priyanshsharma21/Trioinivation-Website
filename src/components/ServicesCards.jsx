import { Col, Row } from 'antd'
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

const ServicesCards = ({services}) => {
  return (
    <div className="serviceCard">
      <Row gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 30,
        xl:40
      }}>
        {services.map((item,i)=>(
          <Col 
          xl={8} lg={8} md={12} sm={24} xs={24} className='serviceBannerCol'>
            <div className="serviceBanner w-full">
              <img className='w-full rounded-lg h-full object-cover' src={item.banner} alt={item.title} />
            </div>
            <div className="serviceTitle text-[#262626] font-normal">
              {item.title}
            </div>
            <div className="serviceDesc text-[#737373] font-normal">
              {item.description}
            </div>
            <div className="serviceLearn cursor-pointer text-[#41AE6A] flex items-center mt-4">
              <div>Learn more</div>
              <FaArrowUp className='ml-2 arrowTransform'/>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ServicesCards