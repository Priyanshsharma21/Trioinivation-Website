import React from 'react'
import { HeroBanner } from '../components'
import { ourServiceBannerHero } from '../assets'

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
    </div>
  )
}

export default DigitalMarketing
