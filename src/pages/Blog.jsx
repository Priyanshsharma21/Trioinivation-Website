import React, { useEffect, useState } from 'react'
import { BlogCards, HeroBanner } from '../components'
import { blogBannerHero } from '../assets'
import { Col, Row } from 'antd'
import { blogLists } from '../constants/index.js'
import { FaComputer } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { TiGroupOutline } from "react-icons/ti";

export const blogCategory = [
  {
      title : "All articles",
      key : "all",
      icon : <TiGroupOutline />
  },
  {
      title : "Tech",
      key : "Tech",
      icon : <FaComputer />
  },
  {
      title : "B2B",
      key : "B2B",
      icon : <FaRegHandshake />
  },
  {
      title : "AI",
      key : "AI",
      icon : <FaRobot />
  },
  {
      title : "Design",
      key : "Design",
      icon : <MdOutlineDesignServices />
  },
  {
      title : "Content Creation",
      key : "Content Creation",
      icon : <FaCameraRetro />
  }
]

const Blog = () => {
  const [blogType, setBlogType] = useState("all")
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    if (blogType === "all") {
      setBlogs(blogLists);
    } else {
      const filteredBlogs = [];
      blogLists.forEach((item, i) => {
        if (item.domain === blogType) {
          filteredBlogs.push(item);
        }
      });
      setBlogs(filteredBlogs);
    }
  }, [blogType]);

  const handleCategory = (item)=>{
    setBlogType(item.key)
  }

  
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

        <section className="latestBlog">
          <Row>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="blogLatestHeading font-normal text-[#262626]">
                Latest from us! 
              </div>
              <div className="blogLatestImg">
                <img src={blogLists[0].banner} className="blogLatestImage rounded-lg w-full h-full" alt={blogLists[0].title} /> 
              </div>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24} className="latestBlogContent">
              <div className="font-medium px-4 py-2 domainBubble rounded-lg bg-[#7BABED] hover:bg-[#89b5f3] hover:shadow-xl transform  transition-all duration-300 goodReadTime text-[#FFFFFF]">
                {blogLists[0].domain}
              </div>
              <div className="flex mt-5">
                <div className="font-medium goodReadTime text-[#737373]">
                  {blogLists[0].date}
                </div>
                <div className="ml-5 font-medium goodReadTime text-[#737373]">
                  {blogLists[0].readTime} min read
                </div>
              </div>
              <div className="blogTitleLatest blogLatestHeading text-[#262626]">
                {blogLists[0].title}
              </div>
              <div className="blogDescLatest text-[#737373]">
                {blogLists[0].description}
              </div>
            </Col>
          </Row>
        </section>


        <section className="blogCardsSection">
          <div className="blogCardTop flex items-center justify-between">
            <div className="blogTitleText">Explore more blogs</div>
            <div className="flex categoryContainer">
              {blogCategory.map((item,i)=>(
                <div
                onClick={()=>handleCategory(item)}
                style={{
                  backgroundColor : item.key === blogType ? "#41AE6A" : "",
                  color : item.key === blogType ? "#ffff" : "#737373"
                  }}
                className="ml-4 blogCategoryText hover:shadow-sm transform  transition-all duration-300 flex justify-center items-center rounded-lg cursor-pointer p-3 font-normal">
                 <div className="blogCatTitle">{item.title}</div>
                 <div className="blogCatIcon">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="blogCards">
            <BlogCards blogs={blogs}/>
          </div>
        </section>
    </div>
  )
}

export default Blog