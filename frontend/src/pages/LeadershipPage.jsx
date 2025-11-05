import React from 'react'
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const LeadershipPage = () => {
  return (
    <Container>
     <div className='mx-3 ms-md-5 mt-5'>
        <div style={{ marginTop: '80px' }}>
          <p style={{ fontSize: "16px", opacity: "60%", color: "#171717" }}>//Leadership</p>
          <h1
            className="mb-4"
            style={{
              fontSize: "48px",
              fontWeight: "500",
              color: "#171717",
              marginBottom: "5px"
            }}
          >
            Visionaries 

            <br />
            Behind the Movement
          </h1>
          <p style={{
            fontSize: "14px",
            lineHeight: "20px",
            color: '#171717', opacity: "60%"
          }}>Leading Brynex towards a future of innovation and excellence</p>
        </div>
      </div>


        {/* Leadership Section */}
            <div  className='mx-3 ms-md-5 mb-5 pb-5' style={{marginTop: '100px'}}>
              <Row className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                {/* First Director */}
                <Col xs={12} md={6} className="mb-4 mb-md-0 pe-md-4">
                  <h3 style={{
                    fontSize: "28px",
                    fontWeight: "500",
                    color: "#171717",
                    marginBottom: "8px"
                  }}>
                    Farok Riyas Alungal
                  </h3>
                  <p style={{
                    fontSize: "14px",
                    color: "#171717",
                    opacity: "0.6",
                    marginBottom: "16px"
                  }}>
                    DIRECTOR
                  </p>
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: "2px",
                      backgroundColor: "#171717",
                      marginRight: "12px",
                      alignSelf: "stretch",
                      minHeight: "60px"
                    }}></div>
                    <p style={{
                      fontSize: "14px",
                      color: "#171717",
                      opacity: "0.6",
                      lineHeight: "1.6",
                      margin: 0
                    }}>
                      "Driving innovation, structure, and growth across every brand under Brynex."
                    </p>
                  </div>
                </Col>
      
                {/* Second Director */}
                <Col xs={12} md={6} className="ps-md-4">
                  <h3 style={{
                    fontSize: "28px",
                    fontWeight: "500",
                    color: "#171717",
                    marginBottom: "8px"
                  }}>
                    Kalathilparambil Sakariya Siyas
                  </h3>
                  <p style={{
                    fontSize: "14px",
                    color: "#171717",
                    opacity: "0.6",
                    marginBottom: "16px"
                  }}>
                    DIRECTOR
                  </p>
                  <div className="d-flex align-items-start">
                    <div style={{
                      width: "2px",
                      backgroundColor: "#171717",
                      marginRight: "12px",
                      alignSelf: "stretch",
                      minHeight: "60px"
                    }}></div>
                    <p style={{
                      fontSize: "14px",
                      color: "#171717",
                      opacity: "0.6",
                      lineHeight: "1.6",
                      margin: 0
                    }}>
                      "Building a culture where performance, creativity, and excellence meet."
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
      
    </Container>
  )
}

export default LeadershipPage