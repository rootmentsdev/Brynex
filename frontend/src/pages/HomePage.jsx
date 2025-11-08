import React from 'react';
import { Badge, Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCrown,
  FaLayerGroup,
  FaPlay,
  FaStore,
  FaUsers,
} from 'react-icons/fa';

const metrics = [
  { label: 'Creative specialists', value: '200+' },
  { label: 'Fashion & rental brands', value: '3' },
  { label: 'Proprietary platforms', value: '5' },
  { label: 'Experience labs', value: '12' },
];

const capabilities = [
  {
    eyebrow: '01 — Strategy',
    title: 'Brand architecture',
    description:
      'Designing positioning playbooks and signature moments that stay adaptive across channels.',
  },
  {
    eyebrow: '02 — Experience',
    title: 'Immersive retail',
    description:
      'Spatial, digital, and phygital touchpoints that feel cinematic yet effortless to navigate.',
  },
  {
    eyebrow: '03 — Platforms',
    title: 'Intelligent systems',
    description:
      'Circular inventory, AI-led styling, and loyalty engines engineered within Brynex Labs.',
  },
];

const featureHighlights = [
  {
    icon: <FaCrown />,
    title: 'Iconic Brands',
    body: 'Curating premium experiences with a portfolio crafted for India’s new-age shopper.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Unified Retail Stack',
    body: 'Own software powering inventory, loyalty, styling assistance, and omni-channel fulfillment.',
  },
  {
    icon: <FaUsers />,
    title: 'People First',
    body: 'Learning academies and leadership labs that nurture intrapreneurs across Brynex.',
  },
];

const experienceTimeline = [
  {
    year: '2016',
    title: 'The Spark',
    description:
      'Launch of Brynex Apparels with the vision to make premium fashion accessible and sustainable.',
  },
  {
    year: '2019',
    title: 'Tech-Powered',
    description:
      'Built proprietary rental logistics and sizing intelligence to support rapid brand expansion.',
  },
  {
    year: '2022',
    title: 'Omni Retail',
    description:
      'Integrated online, in-store, and mobile experiences with live styling and hyperlocal fulfillment.',
  },
  {
    year: 'Now',
    title: 'Scaling Impact',
    description:
      'Expanding across South India while incubating eco-conscious materials and circular models.',
  },
];

const testimonials = [
  {
    quote:
      'Brynex transformed our wardrobe cycles with premium styles delivered exactly when we need them.',
    name: 'Avantika Menon',
    role: 'Co-founder, Melange Weddings',
  },
  {
    quote:
      'Partnering with Brynex unlocked new audiences and a seamless rental technology backbone.',
    name: 'Rahul Babu',
    role: 'Director, Kerala Fashion Collective',
  },
  {
    quote:
      'Their obsession with guest experience shows up in every interaction—digital, store, or styling.',
    name: 'Saanvi Pillai',
    role: 'Influencer & Brynex Insider',
  },
];

const HomePage = () => {
  return (
    <>
      <section className="hero-section position-relative overflow-hidden">
        <Container className="py-5">
          <Row className="align-items-center hero-grid justify-content-center">
            <Col lg={10} xl={8} className="hero-copy mx-auto text-start">
              <Badge bg="dark" className="rounded-pill px-3 py-2 mb-3 shadow-sm hero-badge">
                Design-led · Data-aware
              </Badge>
              <h1 className="hero-title mb-4 text-dark">
                <span className="hero-title-outline">Design</span>
                <span>the future of retail intelligence.</span>
              </h1>
              <p className="hero-subtitle mb-4 text-dark">
                Intelligent design is the essence of Brynex. We craft immersive worlds, adaptive
                platforms, and soulful brand systems that move fashion forward.
              </p>
              <div className="hero-buttons d-flex flex-wrap gap-3">
                <Button
                  as={Link}
                  to="/brand"
                  variant="dark"
                  className="px-4 py-3 d-flex align-items-center gap-2 hero-cta"
                >
                  Explore our brands <FaArrowRight />
                </Button>
                <Button
                  variant="outline-dark"
                  className="px-4 py-3 d-flex align-items-center gap-2 hero-ghost text-dark"
                >
                  <FaPlay /> Watch the reel
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="metrics-section">
        <Container className="py-5">
          <Row className="g-4 justify-content-center text-center">
            {metrics.map(({ label, value }) => (
              <Col xs={6} md={3} key={label}>
                <Card className="metric-card border-0 shadow-sm h-100 py-4">
                  <Card.Body>
                    <Card.Title className="display-6 fw-semibold mb-2">
                      {value}
                    </Card.Title>
                    <Card.Text className="text-muted text-uppercase letter-spacing-sm small">
                      {label}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="capabilities-section py-5">
        <Container>
          <Row className="justify-content-between align-items-start g-4">
            <Col lg={5} className="d-flex flex-column gap-3">
              <Badge bg="dark" className="rounded-pill px-3 py-2 shadow-sm align-self-start">
                Our capabilities
              </Badge>
              <h2 className="fw-semibold text-dark">
                Design studios, retail labs, and platform teams building in concert.
              </h2>
              <p className="text-muted mb-0">
                Every Brynex brand is underpinned by a modular system—from storytelling to
                fulfillment. Our integrated model means new concepts launch faster, iterate smarter,
                and scale responsibly.
              </p>
            </Col>
            <Col lg={6}>
              <Row className="g-4">
                {capabilities.map(({ eyebrow, title, description }) => (
                  <Col sm={12} key={title}>
                    <Card className="capability-card border-0 shadow-sm h-100">
                      <Card.Body className="p-4">
                        <span className="text-uppercase text-muted small letter-spacing-sm">
                          {eyebrow}
                        </span>
                        <Card.Title className="fw-semibold text-dark mt-2 mb-2">{title}</Card.Title>
                        <Card.Text className="text-muted mb-0">{description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="feature-section py-5">
        <Container>
          <Row className="g-4">
            <Col lg={5} className="d-flex flex-column justify-content-center">
              <Badge
                bg="light"
                text="dark"
                className="rounded-pill px-3 py-2 mb-3 shadow-sm"
              >
                Crafted for modern retail
              </Badge>
              <h2 className="fw-semibold text-dark mb-3">
                Multi-brand excellence powered by proprietary innovation.
              </h2>
              <p className="text-muted">
                From concept to closet, Brynex blends craftsmanship, technology,
                and sustainability to create experiences that delight customers
                and empower partners.
              </p>
              <Button
                as={Link}
                to="/about"
                variant="link"
                className="px-0 text-dark fw-semibold d-inline-flex align-items-center gap-2"
              >
                Discover how we build <FaArrowRight />
              </Button>
            </Col>
            <Col lg={7}>
              <Row className="g-4">
                {featureHighlights.map(({ icon, title, body }) => (
                  <Col sm={6} key={title}>
                    <Card className="feature-card h-100 border-0 shadow-sm">
                      <Card.Body>
                        <div className="feature-icon text-dark mb-3">{icon}</div>
                        <Card.Title className="fw-semibold text-dark">
                          {title}
                        </Card.Title>
                        <Card.Text className="text-muted">{body}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                <Col sm={6}>
                  <Card className="feature-card h-100 border-0 shadow-sm">
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <div className="feature-icon text-dark mb-3">
                          <FaStore />
                        </div>
                        <Card.Title className="fw-semibold text-dark">
                          Retail labs & pop-ups
                        </Card.Title>
                        <Card.Text className="text-muted">
                          Rapidly pilot new concepts across Kerala with modular
                          store formats and data-led insights.
                        </Card.Text>
                      </div>
                      <Button
                        as={Link}
                        to="/contact"
                        variant="outline-dark"
                        className="mt-3"
                      >
                        Collaborate with us
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="experience-section position-relative py-5">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={5}>
              <h2 className="fw-semibold text-dark mb-3">
                From a spark to a state-wide movement.
              </h2>
              <p className="text-muted">
                Our journey is fueled by curiosity and shaped by the communities
                we serve. Every milestone represents a leap in how fashion can
                be experienced, owned, and shared.
              </p>
            </Col>
            <Col lg={7}>
              <div className="timeline">
                {experienceTimeline.map(({ year, title, description }) => (
                  <div className="timeline-item" key={year}>
                    <span className="timeline-year">{year}</span>
                    <div className="timeline-content">
                      <h5 className="text-dark fw-semibold mb-1">{title}</h5>
                      <p className="text-muted mb-0">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials-section py-5">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
                <Card.Body className="p-4 p-md-5">
                  <Badge
                    bg="dark"
                    className="rounded-pill px-3 py-2 mb-4 shadow-sm"
                  >
                    Voices from our community
                  </Badge>
                  <Carousel indicators={false} variant="dark">
                    {testimonials.map(({ quote, name, role }) => (
                      <Carousel.Item key={name}>
                        <blockquote className="blockquote mb-4">
                          <p className="lead text-dark fw-semibold">
                            “{quote}”
                          </p>
                        </blockquote>
                        <footer className="blockquote-footer text-dark">
                          <span className="fw-semibold">{name}</span>
                          <span className="text-muted ms-2">{role}</span>
                        </footer>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={8}>
              <h2 className="fw-semibold text-dark mb-3">
                Let’s reimagine what fashion can be—together.
              </h2>
              <p className="text-muted mb-0">
                Whether you are a designer, retailer, or technology partner, we
                are excited to build the next chapter of Indian retail with you.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button
                as={Link}
                to="/contact"
                variant="light"
                className="px-4 py-3 d-inline-flex align-items-center gap-2 hero-cta text-dark"
              >
                Start a conversation <FaArrowRight />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
