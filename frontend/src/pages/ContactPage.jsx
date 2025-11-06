import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <style>
        {`
          #fullName::placeholder,
          #email::placeholder,
          #subject::placeholder,
          #message::placeholder {
            color: #999;
            opacity: 0.7;
          }
        `}
      </style>
       <div style={{ marginTop: "80px" }}>
        <p
          className="mx-3 ms-md-5"
          style={{
            fontSize: "16px",
            opacity: "0.6",
            color: "#171717",
          }}
        >
          //contact
        </p>
        <h1
          className="mb-3 mx-3 ms-md-5"
          style={{
            fontSize: "48px",
            fontWeight: "500",
            color: "#171717",
            lineHeight: "1.2",
          }}
        >
        Let's Connect
         
        </h1>
        <p
          className="mx-3 ms-md-5"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            color: "#171717",
            opacity: "0.6",
            maxWidth: "500px",
          }}
        >
          We'd love to hear from you. Get in touch with us today.
        </p>
      </div>
   <hr className='mt-5' />

      <div className="mx-3 ms-md-5 mb-5 pb-5" style={{marginTop:"70px"}}>
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h3 style={{color:"#171717", fontSize:"24px", fontWeight:"500", marginBottom:"20px"}}>Contact Information</h3>
            <div style={{marginBottom:"16px"}}>
              <p style={{opacity:"0.6",color:"#171717",fontSize:"14px", marginBottom:"4px"}}>Official Address</p>
              <p style={{color:"#171717", fontSize:"14px", lineHeight:"22px"}}>
                BRYNEX APPARELS PRIVATE LIMITED <br />
                37/3688 A3, HARIKEERTHI COMPLEX, <br />
                Edapally, Ernakulam, Ernakulam- 682024, Kerala
              </p>
            </div>
            <div style={{marginBottom:"16px"}}>
              <p style={{opacity:"0.6",color:"#171717",fontSize:"14px", marginBottom:"4px"}}>Phone</p>
              <p style={{color:"#171717", fontSize:"14px"}}>+91 98765 43210</p>
            </div>
            <div>
              <p style={{opacity:"0.6",color:"#171717",fontSize:"14px", marginBottom:"4px"}}>Email</p>
              <p style={{color:"#171717", fontSize:"14px"}}>brynex@gmail.com</p>
            </div>
          </Col>
          <Col md={6}>
            <h3 style={{color:"#171717", fontSize:"24px", fontWeight:"500", marginBottom:"30px"}}>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              {/* Full Name Field */}
              <div style={{marginBottom:"24px"}}>
                <label 
                  htmlFor="fullName"
                  style={{
                    display:"block",
                    color:"#171717",
                    fontSize:"14px",
                    fontWeight:"500",
                    marginBottom:"8px"
                  }}
                >
                  Full Name <span style={{color:"#ff0000"}}>*</span>
                </label>
                <div style={{position:"relative"}}>
                  <FaUser 
                    style={{
                      position:"absolute",
                      left:"12px",
                      top:"50%",
                      transform:"translateY(-50%)",
                      color:"#666",
                      fontSize:"14px"
                    }} 
                  />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name here"
                    required
                    style={{
                      width:"100%",
                      padding:"12px 12px 12px 36px",
                      border:"1px solid #E5E5E5",
                      borderRadius:"4px",
                      fontSize:"14px",
                      color:"#171717",
                      backgroundColor:"#fff",
                      outline:"none",
                      transition:"border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#171717"}
                    onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div style={{marginBottom:"24px"}}>
                <label 
                  htmlFor="email"
                  style={{
                    display:"block",
                    color:"#171717",
                    fontSize:"14px",
                    fontWeight:"500",
                    marginBottom:"8px"
                  }}
                >
                  Email <span style={{color:"#ff0000"}}>*</span>
                </label>
                <div style={{position:"relative"}}>
                  <FaEnvelope 
                    style={{
                      position:"absolute",
                      left:"12px",
                      top:"50%",
                      transform:"translateY(-50%)",
                      color:"#666",
                      fontSize:"14px"
                    }} 
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email here"
                    required
                    style={{
                      width:"100%",
                      padding:"12px 12px 12px 36px",
                      border:"1px solid #E5E5E5",
                      borderRadius:"4px",
                      fontSize:"14px",
                      color:"#171717",
                      backgroundColor:"#fff",
                      outline:"none",
                      transition:"border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#171717"}
                    onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div style={{marginBottom:"24px"}}>
                <label 
                  htmlFor="subject"
                  style={{
                    display:"block",
                    color:"#171717",
                    fontSize:"14px",
                    fontWeight:"500",
                    marginBottom:"8px"
                  }}
                >
                  Subject <span style={{color:"#ff0000"}}>*</span>
                </label>
                <div style={{position:"relative"}}>
                  <FaEnvelope 
                    style={{
                      position:"absolute",
                      left:"12px",
                      top:"50%",
                      transform:"translateY(-50%)",
                      color:"#666",
                      fontSize:"14px"
                    }} 
                  />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    style={{
                      width:"100%",
                      padding:"12px 12px 12px 36px",
                      border:"1px solid #E5E5E5",
                      borderRadius:"4px",
                      fontSize:"14px",
                      color:"#171717",
                      backgroundColor:"#fff",
                      outline:"none",
                      transition:"border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#171717"}
                    onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div style={{marginBottom:"32px"}}>
                <label 
                  htmlFor="message"
                  style={{
                    display:"block",
                    color:"#171717",
                    fontSize:"14px",
                    fontWeight:"500",
                    marginBottom:"8px"
                  }}
                >
                  Message <span style={{color:"#ff0000"}}>*</span>
                </label>
                <div style={{position:"relative"}}>
                  <FaEnvelope 
                    style={{
                      position:"absolute",
                      left:"12px",
                      top:"16px",
                      color:"#666",
                      fontSize:"14px"
                    }} 
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here..."
                    required
                    rows={5}
                    style={{
                      width:"100%",
                      padding:"12px 12px 12px 36px",
                      border:"1px solid #E5E5E5",
                      borderRadius:"4px",
                      fontSize:"14px",
                      color:"#171717",
                      backgroundColor:"#fff",
                      outline:"none",
                      resize:"vertical",
                      fontFamily:"inherit",
                      transition:"border-color 0.3s ease"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#171717"}
                    onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                style={{
                  backgroundColor:"#171717",
                  color:"#fff",
                  border:"none",
                  padding:"12px 24px",
                  borderRadius:"4px",
                  fontSize:"14px",
                  fontWeight:"500",
                  cursor:"pointer",
                  display:"inline-flex",
                  alignItems:"center",
                  gap:"8px",
                  transition:"background-color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#333"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#171717"}
              >
                Submit <FaArrowRight />
              </Button>
            </form>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default ContactPage
