import React from 'react'
import { BriefInfoSection, HeroBanner, ServicesCards } from '../components'
import { ourServiceBannerHero } from '../assets'
import { recruitmentUpsurgeData } from '../constants'
import ContactUsSection from '../components/ContactUsSection'

const RecruitmentUpsurge = () => {
  return (
    <div className="recruitmentUpsurge flex flex-col">
    <HeroBanner 
     showArrow={false} 
     showBtn={false} 
     showTitle1={false}
     showSubTitle={false}
     showNavigation={true}
     heroImg={ourServiceBannerHero}
     title2={"Global Talent Acquisition "}
     title2HighlightPart={"Transforming Your Team"}
     />

    <BriefInfoSection
      title={"What we provide"}
      titleMain={`Recruitment Upsurge Services`}
      description1={"Unlock the potential of your workforce with our specialized recruitment solutions."}
      description2={"Recruitment Upsurge is your strategic partner in talent acquisition, revolutionizing the way you build your dream team. Our specialized services in senior-middle hiring, global sourcing, and diversity hiring are tailored to meet your organization's unique needs and challenges. We go beyond traditional recruitment methods, leveraging cutting-edge strategies to identify, attract, and retain top talent from around the globe. With Recruitment Upsurge, you'll have the competitive edge to build a diverse, skilled, and innovative workforce that drives your business forward."}
       />


      <section className='blogCards serviceCards'>
        <ServicesCards services={recruitmentUpsurgeData}/>
      </section>

      <section className="homeContactUs">
        <ContactUsSection />
      </section>
 </div>
  )
}

export default RecruitmentUpsurge