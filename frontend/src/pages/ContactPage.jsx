import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaArrowRight, FaTag, FaCommentAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwJIwWovoxZkawPGDg_Yse2fBZpfFOrmjOsBX0vOZ5XHmuLikiYjO0t5Cd-V7_NdHzS/exec';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Convert form data to URL-encoded format for Google Apps Script
      const params = new URLSearchParams();
      params.append('fullName', formData.fullName);
      params.append('email', formData.email);
      params.append('subject', formData.subject);
      params.append('message', formData.message);
      params.append('timestamp', new Date().toISOString());

      // Submit to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
        mode: 'no-cors' // Required for Google Apps Script public web apps
      });

      // With no-cors mode, we can't read the response
      // Assume success and clear the form (data will be saved to sheet)
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
          @media (min-width: 768px) {
            .submit-btn-desktop {
              max-width: 200px;
            }
          }
        `}
      </style>
       <div >
        <p
          className="mx-3 ms-md-5 mt-4"
          style={{
            fontSize: "16px",
            opacity: "0.6",
            color: "#171717",
          }}
        >
          //Contact
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
          className="mx-3 ms-md-5 d-none d-md-block"
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
        <p
          className="mx-3 ms-md-5 d-md-none"
          style={{
            fontSize: "16px",
            lineHeight: "20px",
            color: "#171717",
            opacity: "0.6",
            maxWidth: "500px",
          }}
        >
          We'd love to hear from you. Get in touch with us today.
        </p>
      </div>
   <hr className='mx-3 ms-md-5 mt-4' />

      <div className="mx-3 ms-md-5 mb-3" style={{marginTop:"20px"}}>
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h3 style={{color:"#171717", fontSize:"28px", fontWeight:"500", marginBottom:"20px"}}>Contact Information</h3>
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
                  <FaTag 
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
                  <FaCommentAlt 
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
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-100 w-md-auto d-flex align-items-center justify-content-center submit-btn-desktop"
                  style={{
                    backgroundColor: isSubmitting ? "#999" : "#171717",
                    color:"#fff",
                    border:"none",
                    padding:"12px 24px",
                    borderRadius:"4px",
                    fontSize:"14px",
                    fontWeight:"500",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    gap:"8px",
                    transition:"all 0.3s ease",
                    marginLeft: 0,
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "#333";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "#171717";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'} {!isSubmitting && <FaArrowRight />}
                </Button>
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <p style={{
                    color: "#28a745",
                    fontSize: "14px",
                    marginTop: "12px",
                    marginBottom: 0
                  }}>
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p style={{
                    color: "#dc3545",
                    fontSize: "14px",
                    marginTop: "12px",
                    marginBottom: 0
                  }}>
                    ✗ Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default ContactPage
