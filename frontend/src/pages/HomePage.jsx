import React from 'react'

import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowUp, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Home from '../assets/Home.webp';
import BrandLogo1 from '../assets/BrandLogo1.jpg';
import BrandLogo2 from '../assets/BrandLogo2.png';
import BrandLogo3 from '../assets/BrandLogo3.jpg';
import BrandLogo4 from '../assets/BrandLogo4.jpg';
import Founder1 from '../assets/Founder1.webp';
import Founder2 from '../assets/Founder2.webp';


const HomePage = () => {
    return (
        <Container>
            <style>
                {
                   ` @media (min-width: 768px) {
                        .submit-btn-desktop {
                          max-width: 300px;
                          margin-top: 5px;
                        }
                      }`
                }
            </style>
            <div className='mx-3 ms-md-5 mt-4' style={{  marginBottom: '40px' }}>
                <h1 style={{fontSize: '48px', fontWeight: '500', marginBottom: '5px', color: '#171717', lineHeight: '1.2'}} >
                    Shaping the Future of <br /> Fashion & Retail
                </h1>
                <p  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}className='mt-4 d-none d-md-block' >Brynex Apparels is a Kerala-based parent company driving India's fashion <br /> rental and retail revolution through iconic brands and intelligent in-house <br /> systems.</p>
                <p  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }} className='mt-4 d-md-none' >Brynex Apparels is a Kerala-based parent company driving India's fashion <br /> rental and retail revolution through iconic brands and intelligent in-house <br /> systems.</p>
            </div>
          


            <div className='mx-3 ms-md-5 mt-5 mb-0'>
                    <Row className=" ">
                        <Col  xs={6} md={3} className="mb-2 mb-md-0 ">
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
                         <div  style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Button
                  as={Link}
                  to="/brand"
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
                            <p style={{ color: "#171717",
                    opacity: "0.6",}}>//About Brynex</p>
                            <h3 style={{ fontSize: "40px", color: '#171717', lineHeight: "1.2" }}>
                              <span className='d-block'>Where Fashion Meets Systems</span>
                              <span className='d-block'></span>
                            </h3>
                            <p  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                   
                  }} className="d-none d-md-block">Brynex Apparels was founded to organize and modernize India’s fashion rental and retail industry.From a single store to a multi-brand organization, we bring together fashion, people, and technology under one unified system.</p>
                            <p  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }} className="d-md-none">Brynex Apparels was founded to organize and modernize India’s fashion rental and retail industry.From a single store to a multi-brand organization, we bring together fashion, people, and technology under one unified system.</p>

<Button
                  as={Link}
                  to="/about"
                  className='w-100 pt-3 pb-3 mb-4 mt-2 w-md-auto d-flex align-items-center justify-content-center submit-btn-desktop text-white text-decoration-none'
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
                  Learn more about Brynex<span className='ms-1'><FaArrowRight /></span>
                </Button>
               
                        </Col>
                        
                    </Row>
                    
            </div>

            {/* Our Premium Brands Section */}
            <div className='mx-3 ms-md-5 mt-5 mb-0'>
                <Row className='justify-content-center'>
                    <Col xs={12} className='text-center mb-4'>
                        <h2 className='text-dark' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 600,
                            fontSize: '22px',
                            lineHeight: '26px',
                            letterSpacing: '0%'
                        }}>Our Premium Brands</h2>
                    </Col>
                </Row>
                <Row className='justify-content-center align-items-center g-4'>
                    <Col xs={6} md={3} className='text-center'>
                        <Image src={BrandLogo1} alt="Suitor Guy" fluid className='img-fluid' style={{ maxHeight: '110px', width: 'auto', objectFit: 'contain' }} />
                    </Col>
                    <Col xs={6} md={3} className='text-center'>
                        <Image src={BrandLogo2} alt="ZORUCCI PREMIUM RENTALS" fluid className='img-fluid' style={{ maxHeight: '80px', width: 'auto', objectFit: 'contain' }} />
                    </Col>
                    <Col xs={6} md={3} className='text-center'>
                        <Image src={BrandLogo3} alt="Jewels by ZORUCCI" fluid className='img-fluid' style={{ maxHeight: '110px', width: 'auto', objectFit: 'contain' }} />
                    </Col>
                    <Col xs={6} md={3} className='text-center'>
                        <Image src={BrandLogo4} alt="dappr SQUAD" fluid className='img-fluid' style={{ maxHeight: '110px', width: 'auto', objectFit: 'contain' }} />
                    </Col>
                </Row>
            </div>

            {/* Our Core Pillars Section */}
            <div className='mx-3 ms-md-5 mt-5 mb-5' style={{ paddingTop: '3rem' }}>
                <Row>
                    <Col xs={12} className='mb-5'>
                        <h2 className='text-dark text-start' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 500,
                            fontSize: '40px',
                            lineHeight: '100%',
                            letterSpacing: '-4%'
                        }}>Our Core Pillars</h2>
                    </Col>
                </Row>
                <Row className='g-4'>
                    <Col xs={12} md={6} lg={3} className='mb-4 mb-lg-0'>
                        <div className='d-flex flex-column align-items-start'>
                            <FaArrowUp className='mb-3 text-dark' size={24} />
                            <h3 className='text-dark mb-3' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '24px',
                                lineHeight: '100%',
                                letterSpacing: '0%'
                            }}>Retail Excellence</h3>
                            <p className='text-dark mb-0' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '26px',
                                letterSpacing: '0%'
                            }}>Managing and scaling leading fashion & rental brands.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='mb-4 mb-lg-0'>
                        <div className='d-flex flex-column align-items-start'>
                            <FaArrowUp className='mb-3 text-dark' size={24} />
                            <h3 className='text-dark mb-3' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '24px',
                                lineHeight: '100%',
                                letterSpacing: '0%'
                            }}>Tech Innovation</h3>
                            <p className='text-dark mb-0' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '26px',
                                letterSpacing: '0%'
                            }}>Building intelligent software for operations, finance, and HR.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='mb-4 mb-lg-0'>
                        <div className='d-flex flex-column align-items-start'>
                            <FaArrowUp className='mb-3 text-dark' size={24} />
                            <h3 className='text-dark mb-3' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '24px',
                                lineHeight: '100%',
                                letterSpacing: '0%'
                            }}>People & Culture</h3>
                            <p className='text-dark mb-0' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '26px',
                                letterSpacing: '0%'
                            }}>Investing in learning, accountability, and performance.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='mb-4 mb-lg-0'>
                        <div className='d-flex flex-column align-items-start'>
                            <FaArrowUp className='mb-3 text-dark' size={24} />
                            <h3 className='text-dark mb-3' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '24px',
                                lineHeight: '100%',
                                letterSpacing: '0%'
                            }}>Customer Experience</h3>
                            <p className='text-dark mb-0' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '26px',
                                letterSpacing: '0%'
                            }}>Consistency, quality, and delight at every touchpoint.</p>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Our Leaders Section */}
            <div className='mx-3 ms-md-5 mt-5 mb-5'>
                <Row className='justify-content-start justify-content-md-center'>
                    <Col xs={12} className='text-start text-md-center mb-3'>
                        <p className='text-dark mt-5' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '14px',
                            opacity: '0.6',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                             
                        }}>OUR LEADERS</p>
                    </Col>
                </Row>
                <Row className='align-items-center justify-content-start justify-content-md-center mb-5'>
                    <Col xs={12} md={3} lg={3} className='text-center mb-4 mb-md-0 d-none d-md-block'>
                        <Image src={Founder1} alt="RIYAS A F" fluid className='w-100 mb-3' />
                        <h4 className='text-dark mb-2' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 600,
                            fontSize: '20px'
                        }}>RIYAS A F</h4>
                        <p className='text-dark mb-0' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '16px',
                            opacity: '0.7'
                        }}>Co-Founder & Director</p>
                    </Col>
                    <Col xs={12} md={6} lg={6} className='text-start text-md-center mb-4 mb-md-0'>
                        <h2 className='text-dark mb-4' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '48px',
                            lineHeight: '100%',
                            letterSpacing: '-4%'
                        }}>The People Leading Our Journey</h2>
                        <p className='text-dark' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '26px',
                            letterSpacing: '0%'
                        }}>A results-oriented leadership team known for precision in execution and strong operational mastery. Together, they transform vision and strategy into decisive action through disciplined implementation—driving efficiency, accountability, and excellence across every function of the organization.</p>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='text-center d-none d-md-block'>
                        <Image src={Founder2} alt="SIYAS K S" fluid className='w-100 mb-3' />
                        <h4 className='text-dark mb-2' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 600,
                            fontSize: '20px'
                        }}>SIYAS K S</h4>
                        <p className='text-dark mb-0' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '16px',
                            opacity: '0.7'
                        }}>Co-Founder & Director</p>
                    </Col>
                </Row>
                <Row className='d-md-none'>
                    <Col xs={12} md={6} className='text-start mb-4'>
                        <Image src={Founder1} alt="RIYAS A F" fluid className='w-100 mb-3' />
                        <h4 className='text-dark mb-2' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 600,
                            fontSize: '20px'
                        }}>RIYAS A F</h4>
                        <p className='text-dark mb-0' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '16px',
                            opacity: '0.7'
                        }}>Co-Founder & Director</p>
                    </Col>
                    <Col xs={12} md={6} className='text-start mb-4'>
                        <Image src={Founder2} alt="SIYAS K S" fluid className='w-100 mb-3' />
                        <h4 className='text-dark mb-2' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 600,
                            fontSize: '20px'
                        }}>SIYAS K S</h4>
                        <p className='text-dark mb-0' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '16px',
                            opacity: '0.7'
                        }}>Co-Founder & Director</p>
                    </Col>
                </Row>
            </div>

            {/* Contact Section */}
            <div className='mx-3 ms-md-5 mb-5' style={{ marginTop: 'calc(3rem + 5px)' }}>
                <Row className='g-4'>
                    {/* Left Column - Contact Information */}
                    <Col xs={12} md={6}>
                        <p className='text-dark mb-2' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '14px',
                            opacity: '0.6',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>CONTACT</p>
                        <h2 className='text-dark mb-3' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '48px',
                            lineHeight: '100%',
                            letterSpacing: '-4%'
                        }}>Get In Touch</h2>
                        <p className='text-dark mb-4' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '26px',
                            letterSpacing: '0%'
                        }}>We'd love to hear from you. Get in touch with us today.</p>
                        
                        <div className='mb-4'>
                            <p className='text-dark mb-2' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                opacity: '0.7'
                            }}>OFFICE ADDRESS</p>
                            <p className='text-dark mb-0' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '26px',
                                letterSpacing: '0%'
                            }}>BRYNEX APPARELS PRIVATE LIMITED<br />
                            37/3688 A3, HARIKEERTHI<br />
                            COMPLEX, Edapally, Ernakulam,<br />
                            Ernakulam- 682024, Kerala</p>
                        </div>

                        <div className='mb-4'>
                            <p className='text-dark mb-2' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                opacity: '0.7'
                            }}>EMAIL</p>
                            <p className='text-dark mb-0' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '26px',
                                letterSpacing: '0%'
                            }}>brynex@gmail.com</p>
                        </div>

                        <div className='mb-4'>
                            <p className='text-dark mb-2' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 600,
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                opacity: '0.7'
                            }}>PHONE</p>
                            <p className='text-dark mb-0' style={{
                                fontFamily: 'DM Sans',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '26px',
                                letterSpacing: '0%'
                            }}>+91 98765 43210</p>
                        </div>
                    </Col>

                    {/* Right Column - Contact Form */}
                    <Col className='mt-4' xs={12} md={6}>
                        <h3 className='text-dark mb-1' style={{
                            fontFamily: 'DM Sans',
                            fontWeight: 600,
                            fontSize: '18px',
                            lineHeight: '100%',
                            letterSpacing: '0%'
                        }}>Send Us a Message</h3>
                        
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Label className='text-dark' style={{
                                    fontFamily: 'DM Sans',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    letterSpacing: '0%'
                                }}>Full Name <span className='text-danger'>*</span></Form.Label>
                                <div className='position-relative'>
                                    <FaUser className='position-absolute' style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
                                    <Form.Control 
                                        type='text' 
                                        placeholder='Enter your name here' 
                                        required
                                        style={{
                                            paddingLeft: '40px',
                                            fontFamily: 'DM Sans',
                                            fontSize: '16px',
                                            border: '1px solid #dee2e6',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label className='text-dark' style={{
                                    fontFamily: 'DM Sans',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    letterSpacing: '0%'
                                }}>Email <span className='text-danger'>*</span></Form.Label>
                                <div className='position-relative'>
                                    <FaEnvelope className='position-absolute' style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
                                    <Form.Control 
                                        type='email' 
                                        placeholder='Enter your email here' 
                                        required
                                        style={{
                                            paddingLeft: '40px',
                                            fontFamily: 'DM Sans',
                                            fontSize: '16px',
                                            border: '1px solid #dee2e6',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label className='text-dark' style={{
                                    fontFamily: 'DM Sans',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    letterSpacing: '0%'
                                }}>Subject <span className='text-danger'>*</span></Form.Label>
                                <div className='position-relative'>
                                    <FaComment className='position-absolute' style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
                                    <Form.Control 
                                        type='text' 
                                        placeholder="What's this about?" 
                                        required
                                        style={{
                                            paddingLeft: '40px',
                                            fontFamily: 'DM Sans',
                                            fontSize: '16px',
                                            border: '1px solid #dee2e6',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className='mb-4'>
                                <Form.Label className='text-dark' style={{
                                    fontFamily: 'DM Sans',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    letterSpacing: '0%'
                                }}>Message <span className='text-danger'>*</span></Form.Label>
                                <div className='position-relative'>
                                    <FaComment className='position-absolute' style={{ left: '12px', top: '20px', color: '#6c757d' }} />
                                    <Form.Control 
                                        as='textarea' 
                                        rows={5}
                                        placeholder='Enter your message here.....' 
                                        required
                                        style={{
                                            paddingLeft: '40px',
                                            fontFamily: 'DM Sans',
                                            fontSize: '16px',
                                            border: '1px solid #dee2e6',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>
                            </Form.Group>

                            <Button 
                                type='submit'
                                className='d-flex align-items-center justify-content-center text-white'
                                style={{
                                    backgroundColor: '#171717',
                                    border: 'none',
                                    borderRadius: '0',
                                    padding: '12px 24px',
                                    fontFamily: 'DM Sans',
                                    fontSize: '16px',
                                    fontWeight: 400
                                }}
                            >
                                Submit Message <FaArrowRight className='ms-2' />
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default HomePage
