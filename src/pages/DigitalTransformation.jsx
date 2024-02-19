import React from 'react'
import { BriefInfoSection, HeroBanner, ServicesCards } from '../components'
import { ourServiceBannerHero } from '../assets'
import { digitalTransformationData } from '../constants'
import ContactUsSection from '../components/ContactUsSection'

const DigitalTransformation = () => {
  return (
    <div className="digitalTransformation flex flex-col">
       <HeroBanner 
        showArrow={false} 
        showBtn={false} 
        showTitle1={false}
        showSubTitle={false}
        showNavigation={true}
        heroImg={ourServiceBannerHero}
        title2={"Embrace the Future: Revolutionize Your Business with "}
        title2HighlightPart={"Digital Transformation"}
        />


    <BriefInfoSection
      title={"What we provide"}
      titleMain={`Digital Transformation Services`}
      description1={"Empower your business with our comprehensive digital transformation services. From frontend to backend, mobile apps to web development, we help you stay ahead in the digital age."}
      description2={"Digital Transformation is more than just a buzzword; it's a strategic approach to integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. At our core, we specialize in providing end-to-end digital transformation services. Whether you need to revamp your frontend interfaces for a more engaging user experience, optimize backend processes for improved efficiency, or develop cutting-edge mobile applications to reach customers on-the-go, we have the expertise to bring your digital vision to life. Our team of experts is well-versed in the latest technologies and trends, ensuring that your digital transformation journey is not only successful but also future-proof. Let us help you navigate the complexities of the digital landscape and transform your business for the better."}
       />


      <section className='blogCards serviceCards'>
        <ServicesCards services={digitalTransformationData}/>
      </section>

      <section className="homeContactUs">
        <ContactUsSection />
      </section>
    </div>
  )
}

export default DigitalTransformation