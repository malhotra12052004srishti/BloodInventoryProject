// src/pages/ContactUs.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HomeButton from '../components/HomeButton';
import './ContactUs.css'; // Optional: Create a CSS file for styling

const ContactUs = () => {
  return (
    <Container fluid className="p-5">
      <Row className="text-center">
        <Col md={12}>
          <h1>Contact Us</h1>
          <p>If you have any questions, feel free to reach out!</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>

            <div className="button-container d-flex justify-content-between mt-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <HomeButton />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;