import React, { useState } from 'react'
import { contactCardDesign, contactImg, contactUsBannerHero, homeUnderline } from '../assets'
import { HeroBanner } from '../components'
import { Col, Row, Form, Input, Button } from 'antd'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="contactPage flex flex-col">
      <HeroBanner 
        showArrow={false} 
        showBtn={false} 
        showTitle1={false}
        showSubTitle={false}
        showNavigation={true}
        heroImg={contactUsBannerHero}
        title2={"Let's Build Something Great Together!"}
        title2HighlightPart={"Connect with Us"}
        />

        <section className="contactFormContainer">
          <div className="contactBox bg-[#F1F6FD]">
            <Row>
              <Col xl={10} lg={12} className="contactImg flex justify-center items-center">
                  <img src={contactImg} alt="contact img" />
              </Col>
              <Col xl={14} lg={12}>
                <div className="flex flex-col contactForm">
                  <div>
                    <div className="whorv text-[#41AE6A]">CONTACT US</div>
                      <img src={homeUnderline} alt="underline" />
                  </div>
                  <div className="contactFormTitle font-normal">
                    Get in touch with us!
                  </div>
                  <div className="contactDesc font-normal text-[#737373]">
                    Need some help? Get in touch with us by filling the form below or you can even call at the number provided. We would be glad to hear from you.
                  </div>

                  <Form onFinish={handleSubmit} className="formContact">
                      <Input className="formInputContact p-2" name="name" placeholder="Your name here" onChange={handleChange} />
                      <Input className="formInputContact p-2" name="email" type="email" placeholder="Your email" onChange={handleChange} />
                      <Input.TextArea className="formInputContact contactTextArea p-2" name="message" placeholder="Type your query here" onChange={handleChange} />
                      <Button className="btnContactSubmit contactButton heroBtnText font-semibold flex items-center bg-[#41AE6A] hover:text-white hover:bg-[#50c17b] text-white"type="primary" htmlType="submit">SEND</Button>
                </Form>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="contactConnectWithUs flex flex-col items-center">
          <div className='contactFormTitle mb-5'>Connect With Us</div>
          <Row className='flex'>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} className='flex justify-center'>
          <div className='contactCards rounded-md relative'>
              <div className='text-[#41AE6A] font-normal mt-4'>Info Queries</div>             
              <div className='text-[#262626] font-semibold mt-4'>support@trioinnovation.com</div>
              <img className='cardImg' src={contactCardDesign} alt="card design" />
            </div>
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} className='flex justify-center'>
          <div className='contactCards rounded-md relative'>
              <div className='text-[#41AE6A] font-normal mt-4'>Call us</div>             
              <div className='text-[#262626] font-semibold mt-4'>+1-800-980002</div>
              <img className='cardImg' src={contactCardDesign} alt="card design" />
            </div>
          </Col>
          </Row>
        </section>

        <section className="mt-16">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55991.10808332078!2d77.0397095484314!3d28.70626655959539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06a18fd99255%3A0x82d87d985b01ba3d!2sKrishan%20Vihar%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1708196559261!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </section>
    </div>
  )
}

export default Contact