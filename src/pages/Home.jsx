import React, { useEffect, useRef } from 'react'
import { BlogCards, BriefInfoSection, HeroBanner, HomeOurService, InformationCard, Testimonials } from '../components';
import { blogLeftFlower, blogRightFlower, homeInfoCardLeaf, homeUnderline, home_herobg } from '../assets';
import { Col, Row } from 'antd';
import { IoIosArrowForward } from "react-icons/io";
import { blogLists, homeCoreValuesCards, homeServiceCards } from '../constants';
import { Link } from 'react-router-dom';
import ContactUsSection from '../components/ContactUsSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion'

const Home = () => {
  const textRef = useRef()


  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const textMainRef = textRef.current
    gsap.fromTo(textMainRef, {
      filter: "blur(10px)",
      x: "-100%"
    }, {
      duration: 1.5,
      ease: "circ.out",
      x: 0,
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: textMainRef,
        scrub: 1,
        start: "top 80%", 
        end: "center center",
      }
    });
  },[])

  
  return (
    <div className="home flex flex-col">
      <HeroBanner 
      showArrow={true} 
      showBtn={true} 
      showTitle1={true}
      showSubTitle={true}
      showNavigation={false}
      heroImg={home_herobg}
      />
      <div className="bg-[#7BABED] flex justify-center items-center text-white font-medium">
        <div ref={textRef} className="homeStripe uppercase">
          On our way to provide professional services
        </div>
      </div>

      <motion.div
       whileInView={{y:[100,50,0], opacity:[0,0,1]}}
      transition={{duration:0.5}}
      >
        <BriefInfoSection
          title={"Who we are"}
          titleMain={`Transforming your Business with Digital & IT Solutions`}
          description1={"Trioinovations excels in holistic Digital Transformation, offering cutting-edge websites, robust front-end/back-end solutions, seamless cloud integration, and innovative app development."}
          description2={"Our expertise extends to Automation, enhancing efficiency in business processes. In Digital Marketing, we navigate with precision, providing SEO mastery, compelling social media ads, captivating video creation, and striking graphics design. As a strategic partner, we propel brands to new heights. In talent acquisition, Trioinovations stands out with Recruitment Upsurge services, matching top-tier professionals to augment your workforce. We deliver transformative solutions, captivate audiences, and elevate businesses with a dedicated team committed to success in the digital era. Join us on a journey of innovation and growth."}
        />
      </motion.div>
      

      <section className='homeSectionCards'>
      <motion.div
       whileInView={{y:[100,50,0], opacity:[0,0,1]}}
      transition={{duration:0.5}}
      >
 <Row>
          {homeServiceCards.map((item,i)=>(
            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
              <Link to={item.path} className="homeCard rounded-xl flex flex-col items-center bg-[#F5F5F5] hover:bg-[#7BABED] shadow-sm hover:shadow-xl transform  transition-all duration-300">
                <div className="homeCardIcon">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="homeCardTitle mt-5 text-[#737373]">
                  {item.title}
                </div>
                <div className="homeCardDesc mt-4 font-normal text-center text-[#737373]">
                  {item.description}
                </div>
                <div className="homeCardIcon text-[#7BABED] hover:text-white mt-6 flex">
                  <div>Explore more</div>
                  <IoIosArrowForward className='ml-1 items-center'/>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </motion.div>
       
      </section>

      <section className='homeSectionInfoCards'>
        <InformationCard 
          title={"Our Core values"}
          description={"At Trioinovations, our core values form the foundation of everything we do. They guide our decisions, actions, and interactions, shaping our culture and driving our success."}
          cardList={homeCoreValuesCards}
          bgCol={"#EEFBF2"}
          leafImg={homeInfoCardLeaf}
        />
      </section>

      <motion.div
      whileInView={{y:[100,50,0], opacity:[0,0,1]}}
      transition={{duration:0.5}}
      className="homeOurServiceMain">
              <HomeOurService />
      </motion.div>

      <div className="homeTestimonials bg-[#FAFAFA]">
                <Testimonials />
        </div>

      <section className="homeContactUs">
        <ContactUsSection />
      </section>

      <section className="aboutUs homeAboutUsBlog">
          <motion.div
          whileInView={{y:[100,50,0], opacity:[0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
          transition={{duration:0.5}}
          className="careerInfo flex flex-col items-center">
                <div className='flex w-full flex-col items-center'>
                  <div className="whorv text-[#41AE6A]">OUR LATEST BLOG</div>
                  <img src={homeUnderline} alt="underline" />
                </div>
                <div className='homeHead2 font-normal mt-4 text-black text-center'>
                  Our Latest blogs and news
                </div>
                <div className='subHeading2 mt-4 aboutUsSecOneDesc careerDescMain text-center'>
                  Stay updated with our latest insights, news, and stories. Explore a wide range of topics in technology, digital marketing, design, AI, and more. Dive into our blog to discover valuable insights, trends, and tips that can help you stay ahead in the ever-evolving digital landscape.                
                </div>
            </motion.div>
            <motion.div
            whileInView={{y:[100,50,0], opacity:[0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
            transition={{duration:1}}
            className="homeBlog">
              <BlogCards blogs={blogLists.slice(0,3)}/>
            </motion.div>
        </section>
    </div>
  )
}

export default Home





