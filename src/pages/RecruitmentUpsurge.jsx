import React from 'react'
import { HeroBanner } from '../components'
import { ourServiceBannerHero } from '../assets'

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
 </div>
  )
}

export default RecruitmentUpsurge