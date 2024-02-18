import React from 'react'
import { HeroBanner, InformationCard } from '../components'
import { aboutBannerHero, aboutUs1, aboutUs2, homeInfoCardLeaf, homeUnderline } from '../assets'
import { homeCoreValuesCards } from '../constants'
import ContactUsSection from '../components/ContactUsSection'
import { Row, Col } from 'antd'

const About = () => {
  return (
    <div className="about flex flex-col">
       <HeroBanner 
        showArrow={false} 
        showBtn={false} 
        showTitle1={false}
        showSubTitle={false}
        showNavigation={true}
        heroImg={aboutBannerHero}
        title2={"We craft sleek designs and solutions for"}
        title2HighlightPart={"web & mobile"}
        />
        <section className="aboutUs">
          <div className="careerInfo flex flex-col items-center">
                <div className='flex w-full flex-col items-center'>
                  <div className="whorv text-[#41AE6A]">About Trioinovation</div>
                  <img src={homeUnderline} alt="underline" />
                </div>
                <div className='homeHead2 font-normal mt-4 text-black text-center'>
                We are Creative Tech Enthusiast working
                </div>
                <div className='subHeading2 mt-4 aboutUsSecOneDesc careerDescMain text-center'>
                Welcome to Trioinovations, where innovation meets excellence. In our Digital Transformation domain, we redefine businesses through a comprehensive suite of services. Our website development ensures a compelling online presence, while our front-end and back-end solutions optimize user experiences. Cloud integration and app development drive scalability and efficiency, and automation solutions propel your operations into the future. At Trioinovations,                 </div>
            </div>
        </section>

        <section className="aboutUsSec2">
          <div>
            <Row>
              <Col xl={14} lg={12} md={24} sm={24} xs={24} className=' aboutUsImgCol'>
                <div className="w-full flex justify-left">
                  <img src={aboutUs1} alt="aboutUs1" />
                </div>
              </Col>
              <Col xl={8} lg={12} md={24} sm={24} xs={24} className='relative aboutUsCardMain1'>
                <div className="aboutUsCard1 shadow-lg bg-white">
                  <div className="aboutUsTitle">
                    We are Creative Tech Enthusiast working
                  </div>
                  <div className="aboutUsDesc text-[#737373]">
                    We are a team of creative tech enthusiasts dedicated to crafting innovative solutions. Passionate about technology, we strive to create digital experiences that inspire and engage. Together, we work tirelessly to turn ideas into reality and push the boundaries of what's possible in the digital world.
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='mt-16 mb-16'>
            <Row>
              <Col xl={8} lg={12} md={24} sm={24} xs={24} className='relative w-full aboutUsCardMain2'>
              <div className="aboutUsCard2 shadow-lg bg-white">
                  <div className="aboutUsTitle">
                    We are Creative Tech Enthusiast working
                  </div>
                  <div className="aboutUsDesc text-[#737373]">
                    We are a team of creative tech enthusiasts dedicated to crafting innovative solutions. Passionate about technology, we strive to create digital experiences that inspire and engage. Together, we work tirelessly to turn ideas into reality and push the boundaries of what's possible in the digital world.
                  </div>
                </div>
              </Col>
              <Col xl={16} lg={12} md={24} sm={24} xs={24} className='flex justify-end aboutUsImgCol w-full'>
                  <img src={aboutUs2} alt="aboutUs2" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="aboutCoreValues">
        <InformationCard 
          title={"Our Core values"}
          description={"At Trioinovations, our core values form the foundation of everything we do. They guide our decisions, actions, and interactions, shaping our culture and driving our success."}
          cardList={homeCoreValuesCards}
          bgCol={"#EEFBF2"}
          leafImg={homeInfoCardLeaf}
        />
        </section>


        <section className="aboutContactSection">
        <ContactUsSection />
        </section>
    </div>
  )
}

export default About