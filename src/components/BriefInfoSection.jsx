import { Col, Row } from 'antd'
import React from 'react'
import { homeUnderline } from '../assets'

const BriefInfoSection = ({title, description1, description2, titleMain,customClass}) => {
  return (
    <section className={`homeWhoRV ${customClass && "customBriefClass"}`}>
    <Row>
      <Col xl={12} lg={12} md={24} sm={24} xs={24}>
        <div className="flex flex-col">
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
        </div>
      </Col>
      <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className='subHeading2'>
           {description2}
          </div>
      </Col>
    </Row>
  </section>
  )
}

export default BriefInfoSection