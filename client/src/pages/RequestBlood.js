// src/pages/RequestBlood.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HomeButton from '../components/HomeButton';
import './RequestBlood.css'; // Optional: Create a CSS file for styling

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodType: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      bloodType: '',
      quantity: '',
      message: '',
    });
  };

  return (
    <Container fluid className="p-5">
      <Row className="text-center">
        <Col md={12}>
          <h1>Request for Blood</h1>
          <p>If you or someone you know needs blood, please fill out the form below.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicBloodType">
              <Form.Label>Required Blood Type</Form.Label>
              <Form.Control
                as="select"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                required
              >
                <option value="">Select blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicQuantity">
              <Form.Label>Quantity (in units)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Any additional information"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="button-container d-flex justify-content-between mt-3">
              <Button variant="primary" type="submit">
                Submit Request
              </Button>
              <HomeButton />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestBlood;