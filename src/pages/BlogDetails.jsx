import React, { useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom'
import { blogLists } from '../constants/index.js'
import { GoDotFill } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import BlogCards from '../components/BlogCards.jsx';


const BlogDetails = () => {
  const {id} = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(()=>{
    blogLists.find((item,i)=>{
      if(item.id === id){
        setBlog(item)
      }
    })
  },[])

  const socialMediaLinks = [
    {
        title : "Twitter",
        icon : <FaXTwitter className='text-white '/>
    },
    {
        title : "Linkedin",
        icon : <FaLinkedinIn className='text-white'/>
    },
    {
        title : "Facebook",
        icon : <FaFacebookF className='text-white'/>
    },
    {
        title : "Instagram",
        icon : <FaInstagram className='text-white'/>
    },
]

  return (
   <div className="blogDetailsMai">
     <div className='blogDetails'>
      <div className="blogDetailsTitle flex justify-center item-center w-full">{blog?.title}</div>
      <div className="blogDetailsBanner w-full">
        <img className="w-full h-full object-cover rounded-xl" src={blog?.banner} alt={blog?.title} />
      </div>
      <div className='flex justify-between items-center w-full mt-4'>
              <div className="font-medium flex items-center px-4 py-2 domainBubble rounded-lg bg-[#7BABED] hover:bg-[#89b5f3] hover:shadow-xl transform  transition-all duration-300 goodReadTime text-[#FFFFFF]">
                {blogLists[0]?.domain}
              </div>
            <div className="flex items-center">
              <div className="font-medium goodReadTime text-[#737373]">
                {blogLists[0]?.date}
              </div>
              <GoDotFill className="font-medium ml-2 sm:ml-5 goodReadTime text-[#737373]"/>
              <div className="ml-2 sm:ml-5 font-medium goodReadTime text-[#737373]">
                {blogLists[0]?.readTime} min read
              </div>
            </div>
      </div>

      <div className="blogDetailsContent">
              {blog?.content.map((item,i)=>(
                <div>
                  <div className="blogItemTitle">{item?.title}</div>
                  <div className="blogItemDesc">{item?.description}</div>
                </div>
              ))}
        </div>

      <div className="blogDetailsShare flex items-center mt-10">
        <div className="blogShareThis text-[#41AE6A] font-medium">Share this:</div>
        <div className="blogShareThis ml-4">
              <div className='flex'>
                            {socialMediaLinks.map((item,i)=>(
                                <div 
                                style={{marginLeft : i===0 ? 0 : 10}}
                                className="p-2 sm:p-3 bg-[#41AE6A] text-[#ffffff] rounded-full hover:bg-[#4fb977] cursor-pointer hover:shadow-xl transform  transition-all duration-300">
                                    {item.icon}
                                </div>
                            ))}
                </div>
        </div>
      </div>


      <section>
        <div className="mt-10 flex items-center justify-between">
              <div className="blogTitleText">Explore more blogs</div>
        </div>

        <BlogCards blogs={blogLists.slice(0,3)}/>
      </section>
    </div>
   </div>
  )
}

export default BlogDetails



             