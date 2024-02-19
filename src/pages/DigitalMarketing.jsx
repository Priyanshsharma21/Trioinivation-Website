import React from 'react'
import { BriefInfoSection, HeroBanner, ServicesCards } from '../components'
import { ourServiceBannerHero } from '../assets'
import { digitalMarketingData } from '../constants'
import ContactUsSection from '../components/ContactUsSection'

const DigitalMarketing = () => {
  return (
    <div className="digitalMarketing flex flex-col">
       <HeroBanner 
        showArrow={false} 
        showBtn={false} 
        showTitle1={false}
        showSubTitle={false}
        showNavigation={true}
        heroImg={ourServiceBannerHero}
        title2={"Unlock Your Online Potential "}
        title2HighlightPart={"Digital Marketing Excellence"}
        />


        
    <BriefInfoSection
      title={"What we provide"}
      titleMain={`Digital Marketing Services`}
      description1={"Our Digital Marketing services drive growth through strategic SEO, engaging content, and targeted social media campaigns."}
      description2={"Digital Marketing is at the forefront of business growth, and our services are designed to catapult your brand into the digital spotlight. From comprehensive SEO strategies to engaging content creation, social media management, and targeted Google Ads campaigns, we offer a holistic approach to maximize your online presence and drive measurable results. Our team of experts crafts customized solutions to amplify your brand's voice, attract your target audience, and convert leads into loyal customers, ensuring your digital success."}
       />


      <section className='blogCards serviceCards'>
        <ServicesCards services={digitalMarketingData}/>
      </section>

      <section className="homeContactUs">
        <ContactUsSection />
      </section>
    </div>
  )
}

export default DigitalMarketing
