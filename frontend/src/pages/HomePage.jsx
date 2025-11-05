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
            <div style={{ height: "400px" }} >
                <div className=''>
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: '500',
                        marginTop: '80px',
                        marginBottom: '5px',
                        color: '#171717'
                    }} className='mx-3 ms-md-5'>Shaping the Future of  <br />
                        Fashion & Retail  </h1>
                    <p style={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: '#171717', opacity: "60%"
                    }} className='mx-3 ms-md-5' >Brynex Apparels is a Kerala-based parent company driving India's fashion <br /> rental and retail revolution through iconic brands and intelligent in-house <br /> systems.</p>
                </div>
                <div className='mx-3 ms-md-5 py-2 d-inline-block' style={{ border: 'none', display: 'flex', gap: '8px' }}>
                    <Button style={{
                        width: 263,
                        height: 50,
                        borderRadius: 0,
                        backgroundColor: '#000',
                        border: 'none'
                    }}> <Link to="/about" className='text-white text-decoration-none'>Discover Our Innovations <span className='ms-1'><FaArrowRight /></span></Link></Button>
                    <Button style={{
                        width: 220,
                        height: 50,
                        backgroundColor: "#F5F5F5",
                        borderRadius: 0,
                        border: 'none'
                    }} className=''> <Link to="/brands" className='text-decoration-none' style={{ color: '#000' }}>Explore Our Brands <span className='ms-1'><FaArrowRight /></span></Link></Button>
                </div>


                <div className='my-5 py-5 mb-5 mx-3 ms-md-5' style={{
                    height: "500px",

                }}>
                    <Row className=" py-3 d-flex justify-content-between align-items-center">
                        <Col xs={6} md={3} className="mb-3 mb-md-0 ">
                            <h4 style={{
                                fontSize:"30px"
                            }} className="">
                                200+ <br />
                                <span className="fw-normal mb-4" style={{ fontSize: '16px', color: '#171717', opacity: "60%"}}>
                                    Employees
                                </span>
                            </h4>
                        </Col>
                        <Col xs={6} md={3} className="mb-3 mb-md-0">
                            <h4 style={{
                                fontSize:"30px"
                            }} className="">
                                3 <br />
                                <span className="fw-normal" style={{ fontSize: '16px', color: '#171717', opacity: "60%" }}>
                                    Fashion & Rental Brands
                                </span>
                            </h4>
                        </Col>
                        <Col xs={6} md={3} className="mb-3 mb-md-0">
                            <h4 style={{
                                fontSize:"30px"
                            }} className="">
                                5 <br />
                                <span className="fw-normal" style={{ fontSize: '16px', color: '#171717', opacity: "60%" }}>
                                    Proprietary Software Platforms
                                </span>
                            </h4>
                        </Col>
                        <Col xs={6} md={3}>
                            <h4 style={{
                                fontSize:"30px"
                            }} className="">
                                20+ <br />
                                <span className="fw-normal" style={{ fontSize: '16px', color: '#171717', opacity: "60%" }}>
                                    Stores Across Kerala
                                </span>
                            </h4>
                        </Col>
                    </Row>


                    <Row className='d-flex justify-between mt-5'>
                        <Col md={6}>
                            <Image style={{
                                width: 534,
                                height: 300,

                            }} src={Home} alt="Employees Section" fluid />
                        </Col>
                        <Col md={6} className='d-flex flex-column justify-content-center mb-5 mt-4  '>
                            <h3 style={{ fontSize: "40px", color: '#171717' }}  >Multi-Brand Excellence <br /> Meets Innovation</h3>
                            <p style={{ fontSize: '14px', lineHeight: '20px', color: '#171717', opacity: "60%" }}>Brynex Apparels is a Kerala-based parent company driving India's fashion rental and retail revolution through iconic brands and intelligent in-house systems</p>
                        </Col>
                    </Row>

                </div>


            </div>
        </Container>
    )
}

export default HomePage
