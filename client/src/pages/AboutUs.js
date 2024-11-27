import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeButton from '../components/HomeButton';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <Container fluid className="pt-5 pb-5">
      <Row className="bg-light">
        <Col md={12} className="text-center">
          <h1>About Us</h1>
          <p className="lead">
            We are a dedicated team of developers, healthcare professionals, and volunteers committed to improving the blood donation process.
          </p>
        </Col>
      </Row>
      <Row className="pt-5 pb-5">
        <Col md={6} className="text-center">
          <h2>Our Mission</h2>
          <p>
            Our mission is to ensure that blood is available for those in need. We aim to streamline the process of blood donation and inventory management to save lives.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <h2>What We Do</h2>
          <p>
            The Blood Inventory Management System is designed to manage blood donations, track inventory, and facilitate communication between donors and hospitals. We provide a platform that connects donors with blood banks and hospitals, ensuring that blood is available when and where it is needed.
          </p>
        </Col>
      </Row>
      <Row className="pt-5 pb-5">
        <Col md={12} className="text-center">
          <h2>Our Team</h2>
          <p>
            Our team consists of passionate individuals who believe in the power of community and technology. We work tirelessly to improve the blood donation process and ensure that every drop counts.
          </p>
        </Col>
      </Row>
      <Row className="pt-5 pb-5">
        <Col md={12} className="text-center">
          <h2>Get Involved</h2>
          <p>
            If you are interested in helping us, whether through donations, volunteering, or spreading the word, please <a href="/contact">Contact us</a>! Together, we can make a difference.
          </p>
          <HomeButton />
        </Col>
      </Row>
    </Container>
  );
};


export default AboutUs;