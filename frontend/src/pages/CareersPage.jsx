import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";

const CareersPage = () => {
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
    },
    {
      title: "Fashion Consultant",
      desc: "Fashion trends, Styling, Color coordination, Personal styling, and Wardrobe planning",
      expdesc: "Minimum 1 year",
      locdesc: "Calicut, Kottayam",
    },
    {
      title: "Store Manager",
      desc: "Team leadership, Inventory management, Customer service, Sales strategies",
      expdesc: "Minimum 1 year",
      locdesc: "Perinthalmanna, Malappuram",
    },
    {
      title: "Software Tester",
      desc: "Proficient in SDLC and testing methodologies, with expertise in both manual and automated testing using tools like Selenium and JIRA.",
      expdesc: "Minimum 1 year",
      locdesc: "Ernakulam, Kerala",
    },
    {
      title: "Quality Controller",
      desc: "Fabric inspection, Stitching quality check, Branding label verification, Finishing, and Attention to detail",
      expdesc: "Minimum 1 year",
      locdesc: "Ernakulam, Kerala",
    },
    {
      title: "UI/UX Designer",
      desc: "User research, Wireframing, Prototyping, Visual design, and Usability testing",
      expdesc: "Minimum 1 year",
      locdesc: "Ernakulam, Kerala",
    },
  ];

  return (
    <Container>
      {/* --- Hero Section --- */}
      <div className="mt-4">
        <p
          className="mx-3 ms-md-5"
          style={{
            fontSize: "16px",
            opacity: "0.6",
            color: "#171717",
          }}
        >
          //careers
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
          Grow With
          <br />
          Brynex
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
          Brynex is more than a company — it's a movement that connects fashion,
          systems, and innovation.
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
          Brynex is more than a company — it's a movement that connects fashion,
          systems, and innovation.
        </p>
      </div>
     <hr className='mx-3 ms-md-5 mt-4' />

      {/* --- Why Join Section --- */}
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
            fontSize: "14px",
            lineHeight: "20px",
            color: "#171717",
            opacity: "0.6",
            maxWidth: "600px",
          }}
        >
          Brynex isn't just a workplace — it's a creative hub where ideas meet
          purpose. Join us to shape the future of fashion and technology.
        </p>
        <p
          className="d-md-none"
          style={{
            fontSize: "16px",
            lineHeight: "20px",
            color: "#171717",
            opacity: "0.6",
            maxWidth: "600px",
          }}
        >
          Brynex isn't just a workplace — it's a creative hub where ideas meet
          purpose. Join us to shape the future of fashion and technology.
        </p>
      </div>

      {/* --- 4 Feature Cards --- */}
      <div className="mx-3 ms-md-5 mt-5">
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
            <p
              style={{
                fontSize: "14px",
                color: "#171717",
                opacity: "0.6",
                marginTop: "6px",
              }}
            >
              {item.desc}
            </p>
          </Col>
        ))}
        </Row>
      </div>
      <hr className="mt-4" />

      {/* --- Current Openings --- */}
      <div className="mx-3 ms-md-5 mt-4 ">
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
          <h5 className="text-nowrap" style={{ fontSize: "14px", color: "#171717", cursor: "pointer" }}>
            All Vacancies
          </h5>
          <h5 className="text-nowrap" style={{ fontSize: "14px", color: "#171717", cursor: "pointer" }}>
            Sales
          </h5>
          <h5 className="text-nowrap" style={{ fontSize: "14px", color: "#171717", cursor: "pointer" }}>
            IT Department
          </h5>
          <h5 className="text-nowrap" style={{ fontSize: "14px", color: "#171717", cursor: "pointer" }}>
            HR Department
          </h5>
        </Col>
        </Row>
      </div>

      {/* --- Vacancy Cards --- */}
      <div className="mx-3 ms-md-5 mt-4">
        <Row className="justify-content-between align-items-start">
        {vacancies.map((item, index) => (
          <Col
            xs={12}
            md={6}
            lg={4}
            key={index}
            className="mb-4 d-flex"
            style={{ height: "350px" }}
          >
            <div
              className="p-4 w-100 h-100 d-flex flex-column justify-content-between"
              style={{
                border: "1px solid #E5E5E5",
                borderRadius: "4px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
              }}
            >
              <div>
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#171717",
                  }}
                >
                  {item.title}
                </h5>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#171717",
                    opacity: "0.6",
                    marginTop: "8px",
                    marginBottom: "2px",
                  }}
                >
                  Skills
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#171717",
                    marginBottom: "12px",
                  }}
                >
                  {item.desc}
                </p>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#171717",
                    opacity: "0.6",
                    marginBottom: "2px",
                  }}
                >
                  Experience
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#171717",
                    marginBottom: "12px",
                  }}
                >
                  {item.expdesc}
                </p>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#171717",
                    opacity: "0.6",
                    marginBottom: "2px",
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#171717",
                    marginBottom: "20px",
                  }}
                >
                  {item.locdesc}
                </p>
              </div>

              <Button
                variant="dark"
                style={{
                  backgroundColor: "#171717",
                  border: "none",
                  fontSize: "14px",
                  padding: "8px 18px",
                  borderRadius: "2px",
                  width: "fit-content",
                }}
              >
                Apply Now <FaArrowRight className="ms-2" />
              </Button>
            </div>
          </Col>
        ))}
        </Row>
      </div>
    </Container>
  );
};

export default CareersPage;
