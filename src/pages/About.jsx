import React from 'react'
import { HeroBanner } from '../components'
import { aboutBannerHero } from '../assets'

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
    </div>
  )
}

export default About