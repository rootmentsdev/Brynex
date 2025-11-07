import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowUp, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CareersPage = () => {
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState("All Vacancies");
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Show 3 vacancies per page

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
      categories: ["Sales"], // Changed to array to support multiple categories
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
      categories: ["Sales"], // Only in Sales category
    },
    {
      title: "UI/UX Designer",
      desc: "User research, Wireframing, Prototyping, Visual design, and Usability testing",
      expdesc: "Minimum 1 year",
      locdesc: "Ernakulam, Kerala",
      categories: ["IT Department"],
    },
  ];

  // Filter function: filters vacancies based on active filter
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

  // Filter options
  const filterOptions = ["All Vacancies", "Sales", "IT Department", "HR Department"];

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

      {/* --- 4 Feature Cards --- */}
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
     

      {/* --- Current Openings --- */}
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

      {/* --- Vacancy Cards --- */}
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

      {/* --- Pagination --- */}
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
  );
};

export default CareersPage;
