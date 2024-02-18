import React from 'react'
import { BriefInfoSection, HeroBanner, InformationCard } from '../components'
import { career1, career2, career3, career4, careerBannerHero, careerInfoCardLeaf, homeUnderline } from '../assets'
import { careerBenefitsCards, openRolesCardData } from '../constants'
import { Row,Col, Divider } from 'antd'
import { IoArrowUpSharp } from "react-icons/io5";

const Career = () => {
  return (
    <div className="career flex flex-col">
      <HeroBanner 
      showArrow={false} 
      showBtn={false} 
      showTitle1={false}
      showSubTitle={false}
      showNavigation={true}
      heroImg={careerBannerHero}
      title2={"Join our friendly & outstanding"}
      title2HighlightPart={"team here"}
      />

      <section className="careerWorkWithUs">
        <Row>
          <Col xl={6} lg={8} md={24} sm={24} xs={24} className="flex justify-center items-center careerColToDel">
            <img src={career1} alt="career1" />
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <div className="careerInfo flex flex-col items-center">
              <div className='flex w-full flex-col items-center'>
                <div className="whorv text-[#41AE6A]">Work with us</div>
                <img src={homeUnderline} alt="underline" />
              </div>
              <div className='homeHead2 font-normal text-black text-center'>
                Join a fantastic team in a great work environment
              </div>
              <div className='subHeading2 careerDescMain text-center'>
                We're a small team making a disproportionate impact. Join us and help us build a user-friendly, transparent platform We're a small team making a disproportionate impact
              </div>
            </div>
            <div className="careerInfo flex justify-center">
              <img src={career2} alt="career2" className='m-5' />
              <img src={career3} alt="career3" className='m-5' />
            </div>
          </Col>
          <Col xl={6} lg={8} md={24} sm={24} xs={24} className="flex justify-center items-center careerColToDel">
            <img src={career4} alt="career4" />
          </Col>
        </Row>
      </section>

      <section className='careerSectionInfoCards'>
        <InformationCard 
          title={"Benefits & Perks"}
          description={"At Trioinovations, we value our employees and strive to provide a supportive and rewarding work environment. We offer a range of benefits and perks designed to enhance your professional and personal life."}
          cardList={careerBenefitsCards}
          bgCol={"#F1F6FD"}
          leafImg={careerInfoCardLeaf}
        />
      </section>

      <section>
        <BriefInfoSection
        customClass={true}
        title={"Work with us"}
        titleMain={`We are Creative Tech Enthusiast working`}
        description1={"We're a small team making a disproportionate impact. Join us and help us build a user-friendly, transparent platform We're a small team making a disproportionate impact"}
        description2={"Join Trioinovations and be part of a dynamic team that turns ideas into digital solutions. We're looking for passionate individuals eager to innovate and make a difference. Grow your career in a collaborative environment that values your ideas and offers exciting opportunities. Explore our openings and join us in shaping the future of digital transformation."}
        />
      </section>


      <section className="openRoles">
        <div className="titleOpenRole">
          Open roles
        </div>

        <div className="positionCard rounded-md shadow-sm bg-[#FAFAFA]">
          {openRolesCardData.map((item,i)=>(
            <Row className='positionCardInfo flex items-center justify-between'>
              <Col xl={6} lg={6} md={6} sm={6} xs={6} className='font-medium careerFont'>{item.title}</Col>
              <Col xl={6} lg={4} md={4} sm={6} xs={6} className='font-normal careerFont'>{item.position}</Col>
              <Col xl={6} lg={4} md={4} sm={4} xs={4} className='font-normal careerColDeptDel careerFont'>{item.department}</Col>
              <Col xl={2} lg={4} md={4} sm={6} xs={6}>
                  <div className="contactButton careerFont careerBtn heroBtnText font-semibold flex items-center bg-[#41AE6A] hover:text-white hover:bg-[#50c17b] text-white">
                    <div>Apply</div>
                    <IoArrowUpSharp className="ml-2 mt-[0.15rem] careerIcon"/>
                  </div>
              </Col>
              {i !== openRolesCardData.length - 1 && <Divider />}
              
            </Row>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Career