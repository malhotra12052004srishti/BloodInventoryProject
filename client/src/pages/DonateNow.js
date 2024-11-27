// src/pages/DonateNow.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HomeButton from '../components/HomeButton';
import './DonateNow.css'; // Optional: Create a CSS file for styling

const DonateNow = () => {
  return (
    <Container fluid className="p-5">
      <Row className="text-center">
        <Col md={12}>
          <h1>Donate Blood</h1>
          <p>Your donation can save lives. Please fill out the form below to proceed.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>

            <Form.Group controlId="formBasicBloodType">
              <Form.Label>Blood Type</Form.Label>
              <Form.Control as="select" required>
                <option>Select your blood type</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message (Optional)</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Any additional information" />
            </Form.Group>

            <div className="button-container d-flex justify-content-between mt-3">
              <Button variant="primary" type="submit">
                Submit Donation
              </Button>
              <HomeButton />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateNow;