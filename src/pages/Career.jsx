import React from 'react'
import { HeroBanner } from '../components'
import { careerBannerHero } from '../assets'

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
    </div>
  )
}

export default Career