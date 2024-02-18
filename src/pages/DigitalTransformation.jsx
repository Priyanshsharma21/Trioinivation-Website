import React from 'react'
import { HeroBanner } from '../components'
import { ourServiceBannerHero } from '../assets'

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
    </div>
  )
}

export default DigitalTransformation