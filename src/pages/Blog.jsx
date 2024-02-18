import React from 'react'
import { HeroBanner } from '../components'
import { blogBannerHero } from '../assets'

const Blog = () => {
  return (
    <div className='blog flex flex-col'>
      <HeroBanner 
        showArrow={false} 
        showBtn={false} 
        showTitle1={false}
        showSubTitle={false}
        showNavigation={true}
        heroImg={blogBannerHero}
        title2={"Navigating the Digital Landscape: Strategies for"}
        title2HighlightPart={"Success and Growth"}
        />
    </div>
  )
}

export default Blog