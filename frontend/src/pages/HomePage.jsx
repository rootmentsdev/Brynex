import React from 'react'

import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Home from '../assets/Home.jpg';


const HomePage = () => {
    return (
        <Container>
            <style>
                {
                   ` @media (min-width: 768px) {
                        .submit-btn-desktop {
                          max-width: 300px;
                        }
                      }`
                }
            </style>
            <div className='mx-3 ms-md-5 mt-4' style={{  marginBottom: '40px' }}>
                <h1 style={{
                    fontSize: '48px',
                    fontWeight: '500',
                    marginBottom: '5px',
                    color: '#171717'
                }}>Shaping The Future Of  <br />
                  Fashion & Retail  </h1>
                <p style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: '#171717', opacity: "60%"
                }} className='mt-4' >Brynex Apparels is a Kerala-based parent company driving India's fashion <br /> rental and retail revolution through iconic brands and intelligent in-house <br /> systems.</p>
            </div>
            <div className='mx-3 ms-md-5 ' style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Button  className='w-100 w-md-auto d-flex align-items-center justify-content-center  submit-btn-desktop' style={{
                    width: 263,
                    height: 50,
                    borderRadius: 0,
                    backgroundColor: '#000',
                    border: 'none'
                }}> <Link to="/about" className='text-white text-decoration-none'>Discover Our Innovations <span className='ms-1'><FaArrowRight /></span></Link></Button>
                <Button className='w-100 w-md-auto d-flex align-items-center justify-content-center  submit-btn-desktop'  style={{
                    width: 220,
                    height: 50,
                    backgroundColor: "#F5F5F5",
                    borderRadius: 0,
                    border: 'none'
                }}> <Link to="/brand" className='text-decoration-none' style={{ color: '#000' }}>Explore Our Brands <span className='ms-1'><FaArrowRight /></span></Link></Button>
            </div>


            <div className='mx-3 ms-md-5 mt-5 mb-0'>
                    <Row className=" ">
                        <Col  xs={6} md={3} className="mb-2 mb-md-0 ">
                            <h4 className="text-dark fw-bold mb-2" style={{ fontSize:"30px" }}>
                                200+
                            </h4>
                            <p className="text-dark fw-normal mb-0" style={{ fontSize: '16px', opacity: "0.6" }}>
                                Employees
                            </p>
                        </Col>
                        <Col xs={6} md={3} className="mb-4 mb-md-0">
                            <h4 className="text-dark fw-bold mb-2" style={{ fontSize:"30px" }}>
                                3
                            </h4>
                            <p className="text-dark fw-normal mb-0" style={{ fontSize: '16px', opacity: "0.6" }}>
                                Fashion & Rental <br />
                                Brands
                            </p>
                        </Col>
                        <Col xs={6} md={3} className="mb-4 mb-md-0">
                            <h4 className="text-dark fw-bold mb-2" style={{ fontSize:"30px" }}>
                                5
                            </h4>
                            <p className="text-dark fw-normal mb-0" style={{ fontSize: '16px', opacity: "0.6" }}>
                                Proprietary Software <br />
                                Platforms
                            </p>
                        </Col>
                        <Col xs={6} md={3} className="mb-4 mb-md-0">
                            <h4 className="text-dark fw-bold mb-2" style={{ fontSize:"30px" }}>
                                20+
                            </h4>
                            <p className="text-dark fw-normal mb-0" style={{ fontSize: '16px', opacity: "0.6" }}>
                                Stores Across Kerala
                            </p>
                        </Col>
                    </Row>


                    <Row className='mt-3'>
                        <Col xs={12} md={6} className=" mb-md-0">
                            <Image style={{
                                width: 534,
                                height: 300,

                            }} src={Home} alt="Employees Section" fluid className="w-100" />
                        </Col>
                        <Col xs={12} md={6} className='d-flex flex-column justify-content-center'>
                            <h3 style={{ fontSize: "40px", color: '#171717' }}  >Multi-Brand Excellence <br /> Meets Innovation</h3>
                            <p style={{ fontSize: '14px', lineHeight: '20px', color: '#171717', opacity: "60%" }}>Brynex Apparels is a Kerala-based parent company driving India's fashion rental and retail revolution through iconic brands and intelligent in-house systems</p>
                        </Col>
                    </Row>
            </div>
        </Container>
    )
}

export default HomePage
