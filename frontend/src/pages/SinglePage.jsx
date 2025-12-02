import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaArrowRight, FaArrowUp, FaChevronLeft, FaChevronRight, FaUser, FaEnvelope, FaTag, FaCommentAlt } from 'react-icons/fa';
import { RxDividerVertical } from 'react-icons/rx';
import Home from '../assets/Home.jpg';
import Brand from '../assets/Brand.jpg';
import Brand2 from '../assets/Brand2.png';  
import Brand3 from '../assets/Brand3.png';

// Email validation
const allowedEmailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|outlook|yahoo)\.com$/i;
const validateEmailDomain = (email) => {
  if (!email) {
    return 'Email is required.';
  }
  if (!allowedEmailPattern.test(email.trim())) {
    return 'Please use a Gmail, Outlook, or Yahoo email address.';
  }
  return '';
};

const SinglePage = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({
    email: ''
  });

  // Careers filter state
  const [activeFilter, setActiveFilter] = useState("All Vacancies");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwJIwWovoxZkawPGDg_Yse2fBZpfFOrmjOsBX0vOZ5XHmuLikiYjO0t5Cd-V7_NdHzS/exec';

  // Careers data
  const cards = [
    {
      title: "Growth Opportunities",
      desc: "Continuous learning and career advancement in a fast-growing organization.",
    },
    {
      title: "Collaborative Culture",
      desc: "Work alongside passionate professionals in fashion and technology.",
    },
    {
      title: "Innovation First",
      desc: "Be part of building cutting-edge systems and retail experiences.",
    },
    {
      title: "Diverse Roles",
      desc: "Opportunities across retail, technology, design, and operations.",
    },
  ];

  const vacancies = [
    {
      title: "Fashion Stylist",
      desc: "Fashion trends, Styling, Color coordination, Personal styling, and Wardrobe planning",
      expdesc: "Minimum 1 year",
      locdesc: "Ernakulam, Kerala",
      categories: ["Sales"],
    },
    {
      title: "Fashion Consultant",
      desc: "Fashion trends, Styling, Color coordination, Personal styling, and Wardrobe planning",
      expdesc: "Minimum 1 year",
      locdesc: "Calicut, Kottayam",
      categories: ["Sales"],
    },
    {
      title: "Store Manager",
      desc: "Team leadership, Inventory management, Customer service, Sales strategies",
      expdesc: "Minimum 1 year",
      locdesc: "Perinthalmanna, Malappuram",
      categories: ["Sales"],
    },
    {
      title: "Software Tester",
      desc: "Proficient in SDLC and testing methodologies, with expertise in both manual and automated testing using tools like Selenium and JIRA.",
      expdesc: "Minimum 1 year",
      locdesc: "Ernakulam, Kerala",
      categories: ["IT Department"],
    },
    {
      title: "Quality Controller",
      desc: "Fabric inspection, Stitching quality check, Branding label verification, Finishing, and Attention to detail",
      expdesc: "Minimum 1 year",
      locdesc: "Ernakulam, Kerala",
      categories: ["Sales"],
    },
    {
      title: "UI/UX Designer",
      desc: "User research, Wireframing, Prototyping, Visual design, and Usability testing",
      expdesc: "Minimum 1 year",
      locdesc: "Ernakulam, Kerala",
      categories: ["IT Department"],
    },
  ];

  // Filter function
  const filteredVacancies = activeFilter === "All Vacancies" 
    ? vacancies 
    : vacancies.filter(vacancy => vacancy.categories.includes(activeFilter));

  // Pagination calculations
  const totalPages = Math.ceil(filteredVacancies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedVacancies = filteredVacancies.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const filterOptions = ["All Vacancies", "Sales", "IT Department", "HR Department"];

  // Contact form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === 'email') {
      setFieldErrors((prev) => ({
        ...prev,
        email: validateEmailDomain(value)
      }));
    }

    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const emailError = validateEmailDomain(formData.email);
    if (emailError) {
      setFieldErrors((prev) => ({
        ...prev,
        email: emailError
      }));

      const emailField = document.getElementById('email');
      if (emailField) {
        emailField.focus();
        emailField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      setIsSubmitting(false);
      setSubmitStatus('error');
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append('fullName', formData.fullName);
      params.append('email', formData.email);
      params.append('subject', formData.subject);
      params.append('message', formData.message);
      params.append('timestamp', new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
        mode: 'no-cors'
      });

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      setFieldErrors({
        email: ''
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>
        {`
          @media (min-width: 768px) {
            .submit-btn-desktop {
              max-width: 300px;
              margin-top: 5px;
            }
          }
          html {
            scroll-behavior: smooth;
          }
          section {
            scroll-margin-top: 80px;
          }
        `}
      </style>

      {/* HOME SECTION */}
      <section id="home">
        <Container>
          <div className='mx-3 ms-md-5 mt-4' style={{ marginBottom: '40px' }}>
            <h1 style={{fontSize: '48px', fontWeight: '500', marginBottom: '5px', color: '#171717', lineHeight: '1.2'}}>
              Shaping the Future of <br /> Fashion & Retail
            </h1>
            <p style={{
              fontSize: "16px",
              color: "#171717",
              opacity: "0.6",
              textAlign: "justify",
              lineHeight: "1.6",
              marginTop: "6px",
            }} className='mt-4 d-none d-md-block'>
              Brynex Apparels is a Kerala-based parent company driving India's fashion <br /> rental and retail revolution through iconic brands and intelligent in-house <br /> systems.
            </p>
            <p style={{
              fontSize: "16px",
              color: "#171717",
              opacity: "0.6",
              textAlign: "justify",
              lineHeight: "1.6",
              marginTop: "6px",
            }} className='mt-4 d-md-none'>
              Brynex Apparels is a Kerala-based parent company driving India's fashion <br /> rental and retail revolution through iconic brands and intelligent in-house <br /> systems.
            </p>
          </div>

          <div className='mx-3 ms-md-5 mt-5 mb-0'>
            <Row className=" ">
              <Col xs={6} md={3} className="mb-2 mb-md-0 ">
                <h4 className="text-dark fw-bold mb-2" style={{ fontSize:"1.6rem" }}>
                  200+
                </h4>
                <p className="text-dark fw-normal mb-0" style={{ fontSize: '16px', opacity: "0.6" }}>
                  Employees
                </p>
              </Col>
              <Col xs={6} md={3} className="mb-4 mb-md-0">
                <h4 className="text-dark fw-bold mb-2" style={{ fontSize:"1.6rem" }}>
                  3
                </h4>
                <p className="text-dark fw-normal mb-0" style={{ fontSize: '16px', opacity: "0.6" }}>
                  Fashion & Rental <br />
                  Brands
                </p>
              </Col>
              <Col xs={6} md={3} className="mb-4 mb-md-0">
                <h4 className="text-dark fw-bold mb-2" style={{ fontSize:"1.6rem" }}>
                  5
                </h4>
                <p className="text-dark fw-normal mb-0" style={{ fontSize: '16px', opacity: "0.6" }}>
                  Proprietary Software <br />
                  Platforms
                </p>
              </Col>
              <Col xs={6} md={3} className="mb-4 mb-md-0">
                <h4 className="text-dark fw-bold mb-2" style={{ fontSize:"1.6rem" }}>
                  15+
                </h4>
                <p className="text-dark fw-normal mb-0" style={{ fontSize: '16px', opacity: "0.6" }}>
                  Stores Across Kerala
                </p>
              </Col>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Button
                  onClick={() => scrollToSection('brand')}
                  className='w-100 pt-3 pb-3 mb-4 w-md-auto mt-5 d-flex align-items-center justify-content-center submit-btn-desktop text-white text-decoration-none'
                  style={{
                    width: 263,
                    borderRadius: 0,
                    backgroundColor: '#171717',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#333';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#171717';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Explore Our Brands<span className='ms-1'><FaArrowRight /></span>
                </Button>
              </div>
            </Row>

            <Row className='mt-3'>
              <Col xs={12} md={6} className=" mb-md-0">
                <Image style={{
                  width: 534,
                  height: 300,
                }} src={Home} alt="Employees Section" fluid className="w-100" />
              </Col>
              <Col xs={12} md={6} className='d-flex flex-column justify-content-center'>
                <h3 style={{ fontSize: "40px", color: '#171717', lineHeight: "1.2" }}>
                  <span className='d-block'>Multi-Brand Excellence</span>
                  <span className='d-block'>Meets Innovation</span>
                </h3>
                <p style={{
                  fontSize: "16px",
                  color: "#171717",
                  opacity: "0.6",
                  textAlign: "justify",
                  lineHeight: "1.6",
                  marginTop: "6px",
                }} className="d-none d-md-block">
                  Brynex Apparels is a Kerala-based parent company driving India's fashion rental and retail revolution through iconic brands and intelligent in-house systems
                </p>
                <p style={{
                  fontSize: "16px",
                  color: "#171717",
                  opacity: "0.6",
                  textAlign: "justify",
                  lineHeight: "1.6",
                  marginTop: "6px",
                }} className="d-md-none">
                  Brynex Apparels is a Kerala-based parent company driving India's fashion rental and retail revolution through iconic brands and intelligent in-house systems
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <Container>
          <div className='mx-3 ms-md-5 mt-4 '>
            <div>
              <p style={{fontSize:"16px",opacity:"0.6",color:"#171717"}}>//About</p>
              <h1 className='about-hero-title '
                style={{
                  fontSize: "48px", fontWeight: "500",
                  color: '#171717',
                  lineHeight: "1.2"
                }}>
                <span className='about-hero-line'>Where Fashion</span>
                <span className='about-hero-line'>Meets Systems</span>
              </h1>
            </div>
          </div>
          <div style={{ marginTop: "20px" }} className="mx-3 ms-md-5 mb-5 pb-5">
            <Row style={{ color: "#171717" }} className="align-items-center">
              <Col md={7} className="mb-4" style={{ color: "#171717"}}>
                <p className='d-none d-md-block' style={{
                  fontSize: "16px",
                  opacity: "0.6",
                  textAlign: "justify",
                  lineHeight: "1.6",
                  marginTop: "6px",
                  marginBottom: "10px",
                }}>
                  Brynex Apparels was founded with a mission to organize and modernize
                  the Indian fashion rental and retail industry.
                  <br />
                  <span className='d-none d-md-block' style={{
                    fontSize: "16px",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>
                    Starting as a single store, we have grown into a parent organization
                    managing men's fashion, bridal wear, jewelry, and tech solutions —
                    all designed to create a seamless ecosystem for scale and performance.
                  </span>
                </p>
                <p className='d-md-none' style={{
                  fontSize: "16px",
                  opacity: "0.6",
                  textAlign: "justify",
                  lineHeight: "1.6",
                  marginTop: "6px",
                  marginBottom: "16px",
                }}>
                  Brynex Apparels was founded with a mission to organize and modernize
                  the Indian fashion rental and retail industry.
                  <span className='d-md-none' style={{
                    fontSize: "16px",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "16px",
                    display: "block",
                  }}>
                    Starting as a single store, we have grown into a parent organization
                    managing men's fashion, bridal wear, jewelry, and tech solutions —
                    all designed to create a seamless ecosystem for scale and performance.
                  </span>
                </p>
              </Col>

              <Col xs="auto" className="d-none d-md-flex justify-content-center mb-3">
                <RxDividerVertical size={60} color="#D9D9D9" className='mb-4 ' style={{ opacity: 0.3, transform: "scaleY(2)" }} />
              </Col>

              <Col md={4} style={{ color: "#171717",marginTop:"-40px" }}>
                <h3 style={{fontSize:"28px"}} className="mb-3 mt-4">Our Vision</h3>
                <p className='d-none d-md-block' style={{
                  fontSize: "16px",
                  color: "#171717",
                  opacity: "0.6",
                  textAlign: "justify",
                  lineHeight: "1.6",
                  marginTop: "6px",
                }}>     
                  To create a world where fashion and technology move in sync —     
                  beautifully and efficiently.
                </p>
                <p className='d-md-none' style={{
                  fontSize: "16px",
                  color: "#171717",
                  opacity: "0.6",
                  textAlign: "justify",
                  lineHeight: "1.6",
                  marginTop: "6px",
                }}>
                  To create a world where fashion and technology move in sync —     
                  beautifully and efficiently.
                </p>
              </Col>
            </Row>
            <hr className='mt-3' />
          </div>

          <div style={{marginTop:"-75px"}} className=' mx-3 ms-md-5 mb-4 ' >       
            <h3 className='mb-5' style={{
              fontSize:"42px",
              color: "#171717"
            }} >Our Core Pillars</h3>
            <Row style={{
              color: "#171717"
            }} className="g-3 g-md-0">
              <Col xs={6} md={3} className="mb-3 mb-md-0">
                <h5 style={{
                  fontSize:"24px",
                  color: "#171717",
                  marginBottom: "8px"
                }}>
                  Retail Excellence
                </h5>
                <span className="fw-normal d-block" style={{ fontSize: '16px', color: '#171717', opacity: "0.6" }}>
                  Employees
                </span>
              </Col>
              <Col xs={6} md={3} className="mb-3 mb-md-0">
                <h5 style={{
                  fontSize:"24px",
                  color: "#171717",
                  marginBottom: "8px"
                }}>
                  Tech Innovation
                </h5>
                <span className="fw-normal d-block" style={{ fontSize: '16px', color: '#171717', opacity: "0.6" }}>
                  Fashion & Rental Brands
                </span>
              </Col>
              <Col xs={6} md={3} className="mb-3 mb-md-0">
                <h5 style={{
                  fontSize:"24px",
                  color: "#171717",
                  marginBottom: "8px"
                }}>
                  People & Culture
                </h5>
                <span className="fw-normal d-block" style={{ fontSize: '16px', color: '#171717', opacity: "0.6" }}>
                  Proprietary Software Platforms
                </span>
              </Col>
              <Col xs={6} md={3} className="mb-3 mb-md-0">
                <h5 style={{
                  fontSize:"24px",
                  color: "#171717",
                  marginBottom: "8px"
                }}>
                  Customer Excellence
                </h5>
                <span className="fw-normal d-block" style={{ fontSize: '16px', color: '#171717', opacity: "0.6" }}>
                  Stores Across Kerala
                </span>
              </Col>
            </Row>
          </div>

          <hr className='mx-3 ms-md-5 mt-5' />
          <div className='mx-3 ms-md-5 mt-5'>
            <div>
              <p style={{ fontSize: "16px", opacity: "60%", color: "#171717" }}></p>
              <h1
                className="mb-4"
                style={{
                  fontSize: "40px",
                  fontWeight: "500",
                  color: "#171717",
                  marginBottom: "5px",
                  lineHeight: "1.2"
                }}
              >
                <span className='d-block'>Our Leaders</span>
                <span className='d-block'></span>
              </h1>
              <p className="d-none d-md-block" style={{
                fontSize: "16px",
                lineHeight: "20px",
                color: '#171717', opacity: "60%"
              }}>Leading Brynex towards a future of innovation and excellence</p>
              <p className="d-md-none" style={{
                fontSize: "16px",
                lineHeight: "20px",
                color: '#171717', opacity: "60%"
              }}>Leading Brynex towards a future of innovation and excellence</p>
            </div>
          </div>
          <hr className='mx-3 ms-md-5 mt-4' />

          <div className='mx-3 ms-md-5 mt-4 pb-5'>
            <Row className="d-flex flex-column flex-md-row justify-content-between align-items-start">
              <Col xs={12} md={6} className="ps-md-4">
                <h3 style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#171717",
                  marginBottom: "8px"
                }}>
                  Siyas Ks
                </h3>
                <p style={{
                  fontSize: "16px",
                  color: "#171717",
                  opacity: "0.6",
                  marginBottom: "16px"
                }}>
                  Co Founder & Director
                </p>
                <div className="d-flex align-items-start">
                  <p style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    lineHeight: "1.6",
                    margin: 0
                  }}>
                    Building a culture where performance, creativity, and excellence meet
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="mb-4 mb-md-0 pe-md-4">
                <h3 style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#171717",
                  marginBottom: "8px"
                }}>
                  Riyas Af
                </h3>
                <p style={{
                  fontSize: "16px",
                  color: "#171717",
                  opacity: "0.6",
                  marginBottom: "16px"
                }}>
                  Co Founder & Director
                </p>
                <div className="d-flex align-items-start">
                  <p style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    lineHeight: "1.6",
                    margin: 0
                  }}>
                    Driving innovation, structure, and growth across every brand under Brynex
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* BRAND SECTION */}
      <section id="brand">
        <Container>
          <style>
            {`
              @media (min-width: 768px) {
                .submit-btn-desktop {
                  width: 191px !important;
                  height: 48px !important;
                  padding: 16px 20px !important;
                  margin-top: 5px;
                }
                .brand-button-container {
                  gap: 12px;
                }
              }
            `}
          </style>
          <div className="mx-3 ms-md-5 mt-4 mb-4" >
            <p className="text-dark mb-2" style={{ fontSize: "16px", opacity: "0.6" }}>//Brands</p>
            <h1 className="mb-3  " style={{ fontSize: "48px", lineHeight: "1.2", fontWeight: '500',color: '#171717'}}>
              <span className='d-block'>Explore Our</span>
              <span className='d-block'>Premium Brands</span>
            </h1>
          </div>

          <div className="mx-3 ms-md-5 mb-4 mb-md-5">
            <p className="text-dark d-none d-md-block mb-0" style={{
              fontSize: "16px",
              color: "#171717",
              opacity: "0.6",
              textAlign: "justify",
              lineHeight: "1.6",
              marginTop: "6px",
            }}>
              Building the future of fashion Brynex Apparels is home to Kerala's most recognized fashion rental and retail brands through innovation and excellence
            </p>
            <p className="text-dark d-md-none mb-0" style={{
              fontSize: "16px",
              color: "#171717",
              opacity: "0.6",
              textAlign: "justify",
              lineHeight: "1.6",
              marginTop: "6px",
            }}>
              Building the future of fashion Brynex Apparels is home to Kerala's most recognized fashion rental and retail brands through innovation and excellence
            </p>
            <hr className='mt-4 mb mt-md-5 mb-0' />
          </div>

          <div className="mx-3  ms-md-5 mb-5 mb-md-5">
            <Row className="align-items-center">
              <Col xs={12} md={6} className="mb-4 mb-md-0 order-1 order-md-2 mt-2">
                <Image src={Brand} alt="Suitor Guy" fluid className="w-100" />
              </Col>
              <Col xs={12} md={6} className="order-2 order-md-1">
                <h3 className="d-md-none mb-2" style={{ fontSize: "28px", color: "#171717", fontWeight: "500" }}>Suitor Guy</h3>
                <h3 className="d-none d-md-block mb-3" style={{ fontSize: "40px", color: "#171717", fontWeight: "500" }}>Suitor Guy</h3>
                <p className="fst-italic d-md-none mb-2" style={{ fontSize: "18px", color: "#171717" }}>Be the man they remember.</p>
                <p className="fst-italic d-none d-md-block mb-3" style={{ fontSize: "24px", color: "#171717" }}>Be the man they remember.</p>
                <p className="mb-4" style={{
                  fontSize: "16px",
                  color: "#171717",
                  opacity: "0.6",
                  textAlign: "justify",
                  lineHeight: "1.6",
                  marginTop: "6px",
                }}>  
                  Premium men's wedding rental and fashion brand offering suits, tuxedos, and accessories
                </p>
                <div className="brand-button-container" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Button 
                    href="https://suitorguy.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-100 pt-3 pb-3 mb-0 w-md-auto d-flex align-items-center justify-content-center submit-btn-desktop text-white text-decoration-none' 
                    style={{
                      borderRadius: 0,
                      backgroundColor: '#171717',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#333';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#171717';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Visit Website<span className='ms-2'><FaArrowRight /></span>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mx-3 ms-md-5 mb-5 mb-md-5">
            <Row className="align-items-center">
              <Col xs={12} md={6} className="mb-4 mb-md-0 order-1 order-md-1">
                <Image src={Brand2} alt="Zorucci" fluid className="w-100" />
              </Col>
              <Col xs={12} md={6} className="order-2 order-md-2">
                <h3 className="d-md-none mb-2" style={{ fontSize: "28px", color: "#171717", fontWeight: "500" }}>Zorucci</h3>
                <h3 className="d-none d-md-block mb-3" style={{ fontSize: "40px", color: "#171717", fontWeight: "500" }}>Zorucci</h3>
                <p className="fst-italic d-md-none mb-2" style={{ fontSize: "18px", color: "#171717" }}>Elegance, made effortless.</p>
                <p className="fst-italic d-none d-md-block mb-3" style={{ fontSize: "24px", color: "#171717" }}>Elegance, made effortless.</p>
                <p className="mb-4" style={{
                  fontSize: "16px",
                  color: "#171717",
                  opacity: "0.6",
                  textAlign: "justify",
                  lineHeight: "1.6",
                  marginTop: "6px",
                }}>
                  Kerala's refined bridal and women's wear destination, featuring bridal gowns, partywear, jewelry, and accessories.
                </p>
                <div className="brand-button-container" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Button 
                    href="#brand"
                    className='w-100 pt-3 pb-3 mb-0 w-md-auto d-flex align-items-center justify-content-center submit-btn-desktop text-white text-decoration-none' 
                    style={{
                      borderRadius: 0,
                      backgroundColor: '#171717',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#333';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#171717';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Visit Website<span className='ms-2'><FaArrowRight /></span>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mx-3 ms-md-5 mb-3 mb-md-4 pb-2 pb-md-4">
            <Row className="align-items-center">
              <Col xs={12} md={6} className="mb-4 mb-md-0 order-1 order-md-2">
                <Image src={Brand3} alt="Dappr Squad" fluid className="w-100" />
              </Col>
              <Col xs={12} md={6} className="order-2 order-md-1">
                <h3 className="d-md-none mb-2" style={{ fontSize: "28px", color: "#171717", fontWeight: "500" }}>Dappr Squad</h3>
                <h3 className="d-none d-md-block mb-3" style={{ fontSize: "40px", color: "#171717", fontWeight: "500" }}>Dappr Squad</h3>
                <p className="fst-italic d-md-none mb-2" style={{ fontSize: "18px", color: "#171717" }}>For the groom's crew, done right.</p>
                <p className="fst-italic d-none d-md-block mb-3" style={{ fontSize: "24px", color: "#171717" }}>For the groom's crew, done right.</p>
                <p className="mb-4" style={{
                  fontSize: "16px",
                  color: "#171717",
                  opacity: "0.6",
                  textAlign: "justify",
                  lineHeight: "1.6",
                  marginTop: "6px",
                }}>
                  Premium men's wedding rental and fashion brand offering suits, tuxedos, and accessories
                </p>
                <div className="brand-button-container" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Button 
                    href="https://www.dapprsquad.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-100 pt-3 pb-3 mb-0 w-md-auto d-flex align-items-center justify-content-center submit-btn-desktop text-white text-decoration-none' 
                    style={{
                      borderRadius: 0,
                      backgroundColor: '#171717',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#333';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#171717';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Visit Website<span className='ms-2'><FaArrowRight /></span>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* CAREERS SECTION */}
      <section id="careers">
        <Container>
          <div className="mt-4">
            <p
              className="mx-3 ms-md-5"
              style={{
                fontSize: "16px",
                opacity: "0.6",
                color: "#171717",
              }}
            >
              //Careers
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
              <span className='d-block'>Grow With</span>
              <span className='d-block'>Brynex</span>
            </h1>
            <p
              className="mx-3 ms-md-5 d-none d-md-block"
              style={{
                fontSize: "16px",
                color: "#171717",
                opacity: "0.6",
                textAlign: "justify",
                lineHeight: "1.6",
                marginTop: "6px",
              }}>
              Brynex is more than a company — it's a movement that connects fashion,
              systems, and innovation.
            </p>
            <p
              className="mx-3 ms-md-5 d-md-none"
              style={{
                fontSize: "16px",
                color: "#171717",
                opacity: "0.6",
                textAlign: "justify",
                lineHeight: "1.6",
                marginTop: "6px",
              }}>
              Brynex is more than a company — it's a movement that connects fashion,
              systems, and innovation.
            </p>
          </div>
          <hr className='mx-3 ms-md-5 mt-4' />

          <div className="mx-3 ms-md-5 mt-4" >
            <h3
              style={{
                fontSize: "38px",
                fontWeight: "500",
                color: "#171717",
                marginBottom: "15px",
              }}
            >
              Why Join Brynex?
            </h3>
            <p
              className="d-none d-md-block"
              style={{
                fontSize: "16px",
                color: "#171717",
                opacity: "0.6",
                textAlign: "justify",
                lineHeight: "1.6",
                marginTop: "6px",
              }}>
              Brynex isn't just a workplace — it's a creative hub where ideas meet
              purpose. Join us to shape the future of fashion and technology.
            </p>
            <p
              className="d-md-none"
              style={{
                fontSize: "16px",
                color: "#171717",
                opacity: "0.6",
                textAlign: "justify",
                lineHeight: "1.6",
                marginTop: "6px",
              }}>
              Brynex isn't just a workplace — it's a creative hub where ideas meet
              purpose. Join us to shape the future of fashion and technology.
            </p>
          </div>

          <div className="mx-3 ms-md-5 mt-5 ">
            <Row className="justify-content-between align-items-start">
              {cards.map((item, index) => (
                <Col xs={12} md={6} lg={5} key={index} >
                  <FaArrowUp />
                  <h5 
                    style={{
                      fontSize: "22px",
                      fontWeight: "500",
                      color: "#171717",
                    }}
                  >
                    {item.title}
                  </h5>
                  <p className="mb-5"
                    style={{
                      fontSize: "16px",
                      color: "#171717",
                      opacity: "0.6",
                      textAlign: "justify",
                      lineHeight: "1.6",
                      marginTop: "6px",
                    }}>
                    {item.desc}
                  </p>
                  <hr  />
                </Col>
              ))}
            </Row>
          </div>

          <div id="current-openings" className="mx-3 ms-md-5 mt-4 ">
            <Row className="align-items-center">
              <Col md={6}>
                <h3 style={{ fontSize: "40px", color: "#171717" }}>
                  Current Openings
                </h3>
              </Col>
              <Col
                md={6}
                className="d-flex flex-row gap-4 flex-nowrap justify-content-md-end mt-3 mt-md-0 overflow-auto"
              >
                {filterOptions.map((filter) => (
                  <h5
                    key={filter}
                    className="text-nowrap"
                    onClick={() => setActiveFilter(filter)}
                    style={{
                      fontSize: "16px",
                      color: activeFilter === filter ? "#171717" : "#171717",
                      opacity: activeFilter === filter ? "1" : "0.6",
                      cursor: "pointer",
                      fontWeight: activeFilter === filter ? "600" : "400",
                      borderBottom: activeFilter === filter ? "2px solid #171717" : "none",
                      paddingBottom: "4px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (activeFilter !== filter) {
                        e.currentTarget.style.opacity = "0.8";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeFilter !== filter) {
                        e.currentTarget.style.opacity = "0.6";
                      }
                    }}
                  >
                    {filter}
                  </h5>
                ))}
              </Col>
            </Row>
          </div>

          <div className="mx-3 ms-md-5 mt-4">
            {filteredVacancies.length === 0 ? (
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
                <p style={{
                  fontSize: "18px",
                  color: "#171717",
                  opacity: "0.6",
                  fontWeight: "500"
                }}>
                  No Openings
                </p>
              </div>
            ) : (
              <Row className="justify-content-start align-items-start">
                {paginatedVacancies.map((item, index) => (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    key={index}
                    className="mb-4 d-flex"
                  >
                    <div
                      className="p-3 p-md-4 w-100 d-flex flex-column justify-content-between"
                      style={{
                        border: "1px solid #E5E5E5",
                        borderRadius: "0",
                        backgroundColor: "#fff",
                        transition: "all 0.3s ease",
                        minHeight: "400px",
                        height: "100%"
                      }}
                    >
                      <div>
                        <h5
                          className="mb-3"
                          style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#171717",
                          }}
                        >
                          {item.title}
                        </h5>

                        <p
                          className="mb-1"
                          style={{
                            fontSize: "14px",
                            color: "#171717",
                            opacity: "0.6",
                            fontWeight: "500",
                          }}
                        >
                          Skills
                        </p>
                        <p
                          className="mb-3"
                          style={{
                            fontSize: "16px",
                            color: "#171717",
                            textAlign: "justify",
                            lineHeight: "1.6",
                            marginTop: "4px",
                          }}>
                          {item.desc}
                        </p>

                        <p
                          className="mb-1"
                          style={{
                            fontSize: "14px",
                            color: "#171717",
                            opacity: "0.6",
                            fontWeight: "500",
                          }}
                        >
                          Experience
                        </p>
                        <p
                          className="mb-3"
                          style={{
                            fontSize: "16px",
                            color: "#171717",
                          }}
                        >
                          {item.expdesc}
                        </p>

                        <p
                          className="mb-1"
                          style={{
                            fontSize: "14px",
                            color: "#171717",
                            opacity: "0.6",
                            fontWeight: "500",
                          }}
                        >
                          Location
                        </p>
                        <p
                          className="mb-4"
                          style={{
                            fontSize: "16px",
                            color: "#171717",
                          }}
                        >
                          {item.locdesc}
                        </p>
                      </div>

                      <Button
                        variant="dark"
                        className="w-100 w-md-auto"
                        style={{
                          backgroundColor: "#171717",
                          border: "none",
                          fontSize: "16px",
                          padding: "12px 24px",
                          borderRadius: "0",
                          transition: "all 0.3s ease",
                          cursor: "pointer"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#333";
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#171717";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        Apply Now <FaArrowRight className="ms-2" />
                      </Button>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </div>

          {totalPages > 1 && filteredVacancies.length > 0 && (
            <div className="mx-3 ms-md-5 mt-4 mb-5 d-flex justify-content-center align-items-center flex-wrap gap-2 gap-md-3">
              <Button
                variant="outline-dark"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="d-flex align-items-center"
                style={{
                  border: "2px solid #171717",
                  borderRadius: "0",
                  backgroundColor: currentPage === 1 ? "#f5f5f5" : "#fff",
                  color: "#171717",
                  padding: "6px 12px",
                  fontSize: "12px",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  opacity: currentPage === 1 ? "0.5" : "1",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.backgroundColor = "#171717";
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#171717";
                  }
                }}
              >
                <FaChevronLeft className="me-1" style={{ fontSize: "10px", color: "#171717" }} /> 
                <span style={{ color: "#171717" }}>Previous</span>
              </Button>

              <div className="d-flex gap-1 gap-md-2 align-items-center overflow-auto" style={{ maxWidth: "100%" }}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{
                      minWidth: "32px",
                      width: "32px",
                      height: "32px",
                      border: "2px solid #171717",
                      borderRadius: "0",
                      backgroundColor: currentPage === page ? "#171717" : "#fff",
                      color: currentPage === page ? "#fff" : "#171717",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: currentPage === page ? "600" : "400",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== page) {
                        e.currentTarget.style.borderColor = "#171717";
                        e.currentTarget.style.backgroundColor = "#f5f5f5";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== page) {
                        e.currentTarget.style.borderColor = "#171717";
                        e.currentTarget.style.backgroundColor = "#fff";
                      }
                    }}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <Button
                variant="outline-dark"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="d-flex align-items-center"
                style={{
                  border: "2px solid #171717",
                  borderRadius: "0",
                  backgroundColor: currentPage === totalPages ? "#f5f5f5" : "#fff",
                  color: "#171717",
                  padding: "6px 12px",
                  fontSize: "12px",
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                  opacity: currentPage === totalPages ? "0.5" : "1",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.backgroundColor = "#171717";
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#171717";
                  }
                }}
              >
                <span style={{ color: "#171717" }}>Next</span>
                <FaChevronRight className="ms-1" style={{ fontSize: "10px", color: "#171717" }} />
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
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
              @media (max-width: 767px) {
                .contact-submit-btn-mobile {
                  width: 100% !important;
                  padding-top: 16px !important;
                  padding-bottom: 16px !important;
                  border-radius: 0 !important;
                }
              }
              @media (min-width: 768px) {
                .submit-btn-desktop {
                  max-width: 200px;
                }
              }
            `}
          </style>
          <div>
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
                fontSize: "16px",
                color: "#171717",
                opacity: "0.6",
                textAlign: "justify",
                lineHeight: "1.6",
                marginTop: "6px",
              }}>
              We'd love to hear from you. Get in touch with us today.
            </p>
            <p
              className="mx-3 ms-md-5 d-md-none"
              style={{
                fontSize: "16px",
                color: "#171717",
                opacity: "0.6",
                textAlign: "justify",
                lineHeight: "1.6",
                marginTop: "6px",
              }}>
              We'd love to hear from you. Get in touch with us today.
            </p>
          </div>
          <hr className='mx-3 ms-md-5 mt-4' />

          <div className="mx-3 ms-md-5 mb-3 pb-4" >
            <Row>
              <Col md={6} className="mb-4 mb-md-0">
                <h3 style={{color:"#171717", fontSize:"28px", fontWeight:"500", marginBottom:"16px"}}>Contact Information</h3>
                <div style={{marginBottom:"12px"}}>
                  <p style={{opacity:"0.6",color:"#171717",fontSize:"16px", marginBottom:"4px"}}>Official Address</p>
                  <p style={{
                    fontSize: "16px",
                    color: "#171717",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>
                    BRYNEX APPARELS PRIVATE LIMITED <br />
                    37/3688 A3, HARIKEERTHI COMPLEX, <br />
                    Edapally, Ernakulam, Ernakulam- 682024, Kerala
                  </p>
                </div>
                <div style={{marginBottom:"12px"}}>
                  <p style={{opacity:"0.6",color:"#171717",fontSize:"16px", marginBottom:"4px"}}>Phone</p>
                  <p style={{color:"#171717", fontSize:"18px"}}>+91 9946366655</p>
                </div>
                <div>
                  <p style={{opacity:"0.6",color:"#171717",fontSize:"16px", marginBottom:"4px"}}>Email</p>
                  <p style={{color:"#171717", fontSize:"18px"}}>brynexapparels@gmail.com</p>
                </div>
              </Col>
              <Col md={6}>
                <h3 style={{color:"#171717", fontSize:"24px", fontWeight:"500", marginBottom:"20px"}}>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginTop: '2px' }}>
                    <label 
                      htmlFor="fullName"
                      style={{
                        display:"block",
                        color:"#171717",
                        fontSize:"16px",
                        fontWeight:"500",
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
                          fontSize:"16px"
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
                          fontSize:"16px",
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

                  <div style={{ marginTop: '2px' }}>
                    <label 
                      htmlFor="email"
                      style={{
                        display:"block",
                        color:"#171717",
                        fontSize:"16px",
                        fontWeight:"500",
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
                          fontSize:"16px"
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
                          border: fieldErrors.email ? "1px solid #ff4d4f" : "1px solid #E5E5E5",
                          borderRadius:"4px",
                          fontSize:"16px",
                          color:"#171717",
                          backgroundColor:"#fff",
                          outline:"none",
                          transition:"border-color 0.3s ease"
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#171717"}
                        onBlur={(e) => e.target.style.borderColor = fieldErrors.email ? "#ff4d4f" : "#E5E5E5"}
                      />
                    </div>
                    {fieldErrors.email && (
                      <small style={{ color: '#ff4d4f', display: 'block', marginTop: '6px' }}>
                        {fieldErrors.email}
                      </small>
                    )}
                  </div>

                  <div style={{ marginTop: '2px' }}>
                    <label 
                      htmlFor="subject"
                      style={{
                        display:"block",
                        color:"#171717",
                        fontSize:"16px",
                        fontWeight:"500",
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
                          fontSize:"16px"
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
                          fontSize:"16px",
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

                  <div style={{ marginTop: '2px' }}>
                    <label 
                      htmlFor="message"
                      style={{
                        display:"block",
                        color:"#171717",
                        fontSize:"16px",
                        fontWeight:"500",
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
                          fontSize:"16px"
                        }} 
                      />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message here..."
                        required
                        rows={2}
                        style={{
                          width:"100%",
                          padding:"12px 12px 12px 36px",
                          border:"1px solid #E5E5E5",
                          borderRadius:"4px",
                          fontSize:"16px",
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

                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-100 mt-2 w-md-auto d-flex align-items-center justify-content-center submit-btn-desktop contact-submit-btn-mobile"
                      style={{
                        backgroundColor: isSubmitting ? "#999" : "#171717",
                        color:"#fff",
                        border:"none",
                        padding:"12px 24px",
                        borderRadius:"0",
                        fontSize:"16px",
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
                    
                    {submitStatus === 'success' && (
                      <p style={{
                        color: "#28a745",
                        fontSize: "16px",
                        marginTop: "12px",
                        marginBottom: 0
                      }}>
                        ✓ Message sent successfully! We'll get back to you soon.
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p style={{
                        color: "#dc3545",
                        fontSize: "16px",
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
      </section>
    </>
  )
}

export default SinglePage

