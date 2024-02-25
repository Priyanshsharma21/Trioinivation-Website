import React, { useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom'
import { blogLists } from '../constants/index.js'
import { GoDotFill } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import BlogCards from '../components/BlogCards.jsx';
import { motion } from 'framer-motion'


const BlogDetails = () => {
  const {id} = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(()=>{
    blogLists.find((item,i)=>{
      if(item.id === id){
        setBlog(item)
      }
    })
  },[id])

  const socialMediaLinks = [
    {
        title : "Twitter",
        icon : <FaXTwitter className='text-white '/>,
        path : "",
    },
    {
        title : "Linkedin",
        icon : <FaLinkedinIn className='text-white'/>,
        path : "",
    },
    {
        title : "Facebook",
        icon : <FaFacebookF className='text-white'/>,
        path : "",
    },
    {
        title : "Instagram",
        icon : <FaInstagram className='text-white'/>,
        path : "",
    },
]

  return (
   <div className="blogDetailsMai">
     <div className='blogDetails'>
      <motion.div 
      whileInView={{y:[100,50,0], opacity:[0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
      transition={{duration:0.5}}
      className="blogDetailsTitle flex justify-center item-center w-full">{blog?.title}</motion.div>
      <motion.div
          whileInView={{scale:[0,1], opacity:[0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
          transition={{duration:0.5}}
      className="blogDetailsBanner w-full">
        <img className="w-full h-full object-cover rounded-xl" src={blog?.banner} alt={blog?.title} />
      </motion.div>
      <motion.div
      whileInView={{y:[100,50,0], opacity:[0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
      transition={{duration:0.5}}
      className='flex justify-between items-center w-full mt-4'>
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
      </motion.div>

      <div className="blogDetailsContent">
              {blog?.content.map((item,i)=>(
                <motion.div
                whileInView={{y:[100,50,0], opacity:[0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
                transition={{duration:0.5}}
                >
                  <div className="blogItemTitle">{item?.title}</div>
                  <div className="blogItemDesc">{item?.description}</div>
                </motion.div>
              ))}
        </div>

      <div className="blogDetailsShare flex items-center mt-10">
        <div className="blogShareThis text-[#41AE6A] font-medium">Share this:</div>
        <div className="blogShareThis ml-4">
              <div className='flex'>
                            {socialMediaLinks.map((item,i)=>(
                                <motion.div
                                style={{marginLeft : i===0 ? 0 : 10}}
                                className="p-2 sm:p-3 bg-[#41AE6A] text-[#ffffff] rounded-full hover:bg-[#4fb977] cursor-pointer hover:shadow-xl transform  transition-all duration-300">
                                    <a href={item.path} target="_blank">
                                    {item.icon}
                                    </a>
                                </motion.div>
                            ))}
                </div>
        </div>
      </div>


     
    </div>

    <section className='blogDetailsMoreBlogs bg-[#FAFAFA]'>
        <motion.div
        whileInView={{y:[100,50,0], opacity:[0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
        transition={{duration:0.5}}
        className="mt-10 flex items-center justify-between">
              <div className="blogTitleText">Explore more blogs</div>
        </motion.div>
        
        <motion.div
        whileInView={{y:[100,50,0], opacity:[0,0,1], filter: ["blur(10px)", "blur(0px)"]}}
        transition={{duration:1}}>
            <BlogCards blogs={blogLists.slice(0,3)}/>
        </motion.div>
      </section>
   </div>
  )
}

export default BlogDetails



             