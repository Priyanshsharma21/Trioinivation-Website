import React, { useState } from 'react'
import { home_pattern, logo } from '../assets'
import { navLinks, services } from '../constants'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { RxDividerVertical } from "react-icons/rx";
import { Button, Col, Drawer, Row } from 'antd';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Menu } from 'antd';
function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}


const items = [
  getItem('Our Services', 'sub2',  [
    getItem('Digital Transformation', 'digital-transformation'),
    getItem('Digital Marketing', 'digital-marketing'),
    getItem('Recruitment Upsurge', 'recruitment-upsurge')
  ]),
  {
    type: 'divider',
  },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showServices, setShowServices] = useState(false)
  const [showServiceType, setShowServiceType] = useState("Digital Transformation")

  const onClose = () => {
    setOpen(false);
  };
  

  const getServiceList = {
    "Digital Transformation": (
      <div className="flex flex-col mt-6">
         {services["digital-transformation"].map((item,i)=>(
          <div className="dropNavItem">
            {item}
          </div>
         ))}
      </div>
    ),

    "Digital Marketing": (
      <div className="flex flex-col mt-6">
         {services["digital-marketing"].map((item,i)=>(
          <div className="dropNavItem">
            {item}
          </div>
         ))}
      </div>
    ),
    
    "Recruitment Upsurge": (
      <div className="flex flex-col mt-6">
         {services["recruitment-upsurge"].map((item,i)=>(
          <div className="dropNavItem">
            {item}
          </div>
         ))}
      </div>
    )
  }

  const onClick = (e) => {
    console.log('click ', e);
    navigate(`/our-services/${e.keyPath[0]}`)
    setOpen(false)
  };



  return (
    <div className="navbar shadow-lg hover:shadow-xl transform  transition-all duration-300 flex justify-between items-center bg-white rounded-xl">
      <div className="flex items-center">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="trioinovation logo" />
          </Link>
        </div>
        <div className="navLinks flex items-center ml-8">
          {navLinks.map((link,i)=>(
            <div className="ml-2 navLinks flex items-center">
              <Link to={link.path}
              style={{borderBottom : location.pathname === link.path && `2px solid #50c17b`}}
              className="text-[#737373] hover:text-[#50c17b] transition-all duration-300 mt-2 pb-1">
                {link.title}
              </Link>
              {/* {i!==3 && ( */}
                <RxDividerVertical className="ml-2 text-gray-300 text-2xl" />
              {/* )} */}
            </div>
          ))}

          <div className="ml-2 navLinks flex items-center">
              <div
              onMouseEnter={()=>setShowServices(true)}
              style={{borderBottom : location.pathname === "/our-services" && `2px solid #50c17b`}}
              className='flex items-center cursor-pointer hover:text-[#50c17b] transition-all duration-300'
              >
                <div className="text-[#737373] hover:text-[#50c17b] mt-2 pb-1">Our services</div>
                <IoIosArrowDown  className='ml-1 mt-1'/>
              </div>
            </div>
        </div>
      </div>

      {showServices && (
        <div
        onMouseLeave={()=>setShowServices(false)}
        className="absolute shadow-lg hover:shadow-xl transform  transition-all duration-300 desktopNavDrop w-full h-[38vh] bg-white top-[3.6rem]">
            <Row className="h-full">
              <Col xl={6} lg={6}>
                <div className="flex w-full h-full flex-col justify-around">
                   <div className='navDropTitle justify-between flex cursor-pointer hover:text-[#50c17b] transition-all duration-300' onMouseEnter={()=>setShowServiceType("Digital Transformation")}>
                   <Link to={'/our-services/digital-transformation'}>Digital Transformation</Link>
                   <IoIosArrowForward className='ml-[3px] mt-1'/>
                   </div>
                   <div className='navDropTitle justify-between flex cursor-pointer hover:text-[#50c17b] transition-all duration-300' onMouseEnter={()=>setShowServiceType("Digital Marketing")}>
                   <Link to={'/our-services/digital-marketing'}>Digital Marketing</Link>
                   <IoIosArrowForward className='ml-[3px] mt-1'/>
                   </div>
                   <div className='navDropTitle justify-between flex cursor-pointer hover:text-[#50c17b] transition-all duration-300' onMouseEnter={()=>setShowServiceType("Recruitment Upsurge")}>
                   <Link to={'/our-services/recruitment-upsurge'}>Recruitment Upsurge</Link>
                   <IoIosArrowForward className='ml-[3px] mt-1'/>
                   </div>
                </div>
              </Col>
              <Col xl={18} lg={18}>
                {getServiceList[showServiceType]}
              </Col>
            </Row>
        </div>
      )}

      <div className="contact">
          <Link to="/contact" className="contactButton mr-10 heroBtnText font-semibold flex items-center bg-[#41AE6A] hover:bg-[#50c17b] text-white">
              <div>Contact us</div>
              <FaArrowAltCircleRight className="ml-2 mt-[0.15rem] "/>
          </Link>
      </div>


       {/* Mobile navbar */}
      <div className="showDraw">
          <GiHamburgerMenu className='mr-5 text-2xl' onClick={()=>setOpen(true)}/>
      </div>
      <Drawer 
      width={"100%"}
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8.4px)",
        WebkitBackdropFilter: "blur(8.4px)"}} className='navbarMobileDrawer' headerStyle={{display : "none"}} onClose={onClose} open={open}>
        <div className='w-full flex justify-end'>
          <IoMdClose className='mr-5 text-2xl text-black' onClick={()=>setOpen(false)}/> 
        </div>
        {navLinks.map((link,i)=>(
            <div className="ml-2 flex flex-col">
              <Link to={link.path}
              onClick={()=>setOpen(false)}
              style={{color : location.pathname === link.path && `#50c17b`}}
              className="hover:text-[#50c17b] navlinkMobile text-black transition-all duration-300 mt-10 pb-1 font-semibold">
                {link.title}
              </Link>
            </div>
        ))}

        <Menu
          onClick={onClick}
          style={{
            background:"#ffffff00",
            border : "none",
            paddingLeft:0,
            marginTop : "2rem"
          }}
          className="hover:text-[#50c17b] navlinkMobile text-black transition-all duration-300 mt-10 pb-1 font-semibold pl-0"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
      />
        
      </Drawer>
    </div>
  )
}

export default Navbar