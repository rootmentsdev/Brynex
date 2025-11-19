import React from 'react'
import { Container } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
import Brand from '../assets/Brand2.png';
import { FaArrowUp } from 'react-icons/fa';
const TechnologyPage = () => {
  return (
    <>
      <Container>
        <div className='mx-3 ms-md-5 mt-4 '>
          <div >
            <p style={{ fontSize: "16px", opacity: "60%", color: "#171717" }}>//Technology</p>
            <h1
              className="mb-4"
              style={{
                fontSize: "48px",
                fontWeight: "500",
                color: "#171717",
                marginBottom: "5px",
                lineHeight: "1.2"
              }}
            >
              <span className='d-block'>Innovation Woven</span>
              <span className='d-block'>Into Every Thread</span>
            </h1>
            <p className="d-none d-md-block" style={{
              fontSize: "16px",
              lineHeight: "20px",
              color: '#171717', opacity: "60%"
            }}>Building India's first fully integrated fashion-tech ecosystem</p>
            <p className="d-md-none" style={{
              fontSize: "16px",
              lineHeight: "20px",
              color: '#171717', opacity: "60%"
            }}>Building India's first fully integrated fashion-tech ecosystem</p>
          </div>
        </div>
        <hr className='mx-3 ms-md-5 mt-4' />

        <div className='mt-4  mx-3 ms-md-5'>
          <Row className='d-flex justify-between '>


            <Col md={6}>
              <Image style={{
                width: 534,

                objectFit: 'cover',

              }} src={Brand} alt="Employees Section" fluid />
            </Col>

            <Col md={6} className='d-flex flex-column justify-content-center mb-5 mt-4  '>
              <h3 style={{ fontSize: "40px", color: '#171717', lineHeight: "1.2" }}>
                <span className='d-block'>Scalability Through</span>
                <span className='d-block'>Systemization</span>
              </h3>
              <p    style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>
                Building the future of fashion Brynex Apparels is home to Kerala's most recognized At Brynex Apparels, we believe scalability in retail comes from systemization. Our in-house tech division develops software that automates every layer from daily operations to financial reporting and training.</p>

              <p className='mt-3'    style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                    marginBottom: "-12px",
                  }}>
              Our vision is to build India's first fully integrated fashion-tech ecosystem powered by data, design, and discipline. Fashion rental and retail brands thrive through innovation and excellence.
              </p>
            </Col>

          </Row>
          <hr className='mt-1 mb-4' />
        </div>





        <div className='pb-2 mx-3 ms-md-5'  >
          <h3 className='mb-4' style={{
            fontSize: "42px",

          }} >Our In-House Platforms</h3>
          {/* Platform Cards */}
          <Row className="justify-content-start align-items-start">
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mb-4 d-flex"
            >
              <div
                className="p-3 p-md-4 w-100 d-flex flex-column"
                style={{
                  border: "1px solid #E5E5E5",
                  borderRadius: "0",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  minHeight: "300px",
                  height: "100%"
                }}
              >
                <FaArrowUp style={{ fontSize: "16px", color: "#171717", marginBottom: "12px" }} />
                <h5
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#171717",
                    marginBottom: "12px",
                  }}
                >
                  Rootfin
                </h5>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "0",
                  }}
                >
                  RootFin is an advanced store-wise financial management software developed by Brynex Tech Team, enabling complete control over cash and bank transactions with real-time insights, accuracy, and effortless daily financial tracking.
                </p>
              </div>
            </Col>

            {/* RootLMS */}
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mb-4 d-flex"
            >
              <div
                className="p-3 p-md-4 w-100 d-flex flex-column"
                style={{
                  border: "1px solid #E5E5E5",
                  borderRadius: "0",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  minHeight: "300px",
                  height: "100%"
                }}
              >
                <FaArrowUp style={{ fontSize: "16px", color: "#171717", marginBottom: "12px" }} />
                <h5
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#171717",
                    marginBottom: "12px",
                  }}
                >
                  RootLMS
                </h5>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "0",
                  }}
                >
                  RootLMS is a powerful learning management system developed by Brynex Tech Team, designed to deliver training and assessments, track staff progress, and enhance performance across all store locations.
                </p>
              </div>
            </Col>

            {/* HRMS */}
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mb-4 d-flex"
            >
              <div
                className="p-3 p-md-4 w-100 d-flex flex-column"
                style={{
                  border: "1px solid #E5E5E5",
                  borderRadius: "0",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  minHeight: "300px",
                  height: "100%"
                }}
              >
                <FaArrowUp style={{ fontSize: "16px", color: "#171717", marginBottom: "12px" }} />
                <h5
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#171717",
                    marginBottom: "12px",
                  }}
                >
                  HRMS
                </h5>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "0",
                  }}
                >
                  HRMS is a comprehensive human resource management system developed by Brynex Tech Team, enabling HR managers to manage employee data, attendance, performance, and reports with efficiency and accuracy.
                </p>
              </div>
            </Col>

            {/* Item Search */}
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mb-4 d-flex"
            >
              <div
                className="p-3 p-md-4 w-100 d-flex flex-column"
                style={{
                  border: "1px solid #E5E5E5",
                  borderRadius: "0",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  minHeight: "300px",
                  height: "100%"
                }}
              >
                <FaArrowUp style={{ fontSize: "16px", color: "#171717", marginBottom: "12px" }} />
                <h5
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#171717",
                    marginBottom: "12px",
                  }}
                >
                  Item Search
                </h5>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "0",
                  }}
                >
                  ItemSearch is an intelligent store tool developed by Brynex Tech Team, allowing staff to instantly check product booking status and ensure smooth coordination in the rental process across all branches.
                </p>
              </div>
            </Col>

            {/* AI Business Analyst */}
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mb-4 d-flex"
            >
              <div
                className="p-3 p-md-4 w-100 d-flex flex-column"
                style={{
                  border: "1px solid #E5E5E5",
                  borderRadius: "0",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  minHeight: "300px",
                  height: "100%"
                }}
              >
                <FaArrowUp style={{ fontSize: "16px", color: "#171717", marginBottom: "12px" }} />
                <h5
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#171717",
                    marginBottom: "12px",
                  }}
                >
                  AI Business Analyst
                </h5>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "0",
                  }}
                >
                  AI Business Analyst is an AI-powered analytics platform developed by Brynex Tech Team, helping business owners and individuals uncover insights, analyze data, and make smarter decisions with intelligent automation.
                </p>
              </div>
            </Col>

            {/* Store Insights */}
            <Col
              xs={12}
              md={6}
              lg={4}
              className="mb-4 d-flex"
            >
              <div
                className="p-3 p-md-4 w-100 d-flex flex-column"
                style={{
                  border: "1px solid #E5E5E5",
                  borderRadius: "0",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  minHeight: "300px",
                  height: "100%"
                }}
              >
                <FaArrowUp style={{ fontSize: "16px", color: "#171717", marginBottom: "12px" }} />
                <h5
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#171717",
                    marginBottom: "12px",
                  }}
                >
                  Store Insights
                </h5>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "0",
                  }}
                >
                  Store Insights is a performance tracking platform developed by Brynex Tech Team, enabling cluster managers to view staff efficiency, bookings, targets, and other key metrics with actionable insights.
                </p>
              </div>
            </Col>
          </Row>



        </div>


      </Container>
    </>
  )
}

export default TechnologyPage
