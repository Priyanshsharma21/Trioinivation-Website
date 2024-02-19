import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCards = ({blogs}) => {
  return (
    <>
        <Row gutter={{
        xs: 8,
        sm: 16,
        md: 36,
        lg: 54,
        xl:72
      }}>
            {blogs.map((blog,i)=>(
                <Col xl={8} lg={8} md={12} sm={24} xs={24} className="blogCardMain">
                    <Link to={`/blog/${blog.id}`}>
                    <div className="bannerBlogCard w-full">
                        <img src={blog.banner} alt={blog.title} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="blogContent">
                    <div className="font-medium px-4 py-2 domainBubble rounded-lg bg-[#7BABED] hover:bg-[#89b5f3] hover:shadow-xl transform  transition-all duration-300 mt-4 goodReadTime text-[#FFFFFF]">
                            {blog.domain}
                        </div>
                        <div className="flex mt-4">
                            <div className="font-medium goodReadTime text-[#737373]">
                            {blog.date}
                            </div>
                            <div className="ml-5 font-medium goodReadTime text-[#737373]">
                            {blog.readTime} min read
                            </div>
                        </div>
                        <div className="blogLatestHeading2 mt-4 blogLatestHeading text-[#262626]">
                            {blog.title}
                        </div>
                        <div className="blogDescLatest font-light text-[#737373]">
                            {blog.description.slice(0,200)}...
                        </div>
                    </div>
                    </Link>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default BlogCards