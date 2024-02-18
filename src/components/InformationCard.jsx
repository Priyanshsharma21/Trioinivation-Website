import { Col, Divider, Row } from 'antd'
import React from 'react'

const InformationCard = ({title, description, cardList, bgCol, leafImg}) => {
  return (
    <div className="infoCard w-full flex flex-col relative"
    style={{backgroundColor: bgCol}}
    >
    <img className='absolute homeCardInfoLeaf' src={leafImg} alt="leafDesign" />
    <div className="text-center">
        <div className="infoCardTitle text-normal">{title}</div>
        <div className="infoCardDesc mt-5 text-[#737373]">{description}</div>
    </div>

    <section className='infoCardSection'>
        <Row gutter={[16, 16]}>
        {cardList.map((item,i)=>(
            <>
            <Col xl={7} lg={24} md={24} sm={24} xs={24} className='infoCardCol flex flex-col items-center'
            style={{borderRight : i !== cardList.length - 1 && "1px solid #B2E8C1"}}
            >
               <div>
                    <div className="infoCardMainSr font-semibold text-[#41AE6A]">{item.sr}</div>
                        <div className="infoCardMainTitle mt-2 text-[#262626]">{item.title}</div>
                        <div className="infoCardMainDesc mt-4 text-[#737373]">{item.description}</div>
               </div>
            </Col>
            </>
        ))}
        </Row>
    </section>
    </div>
  )
}

export default InformationCard