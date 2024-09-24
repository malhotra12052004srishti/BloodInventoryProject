import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  return (
    <Container fluid className="p-0">
      <Row className="bg-image">
        <Col md={12} className="text-center pt-5 pb-5">
          <h1 className="text-white">Blood Inventory Management System</h1>
          <p className="text-white">A platform to manage blood donations and requests</p>
          <Button id='b1' variant="primary" href="/login">Login</Button>
          <Button id='b1' variant="secondary" href="/register">Register</Button>
        </Col>
      </Row>
      <Row className="pt-5 pb-5">
        <Col md={4} className="text-center">
          <Card>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/8d/f7/72/8df772bf4da5816f06c111a9927afd14.jpg" />
            <Card.Body>
              <Card.Title>Blood Donation</Card.Title>
              <Card.Text>Donate blood to save lives</Card.Text>
              <Button variant="primary" href="/donate">Donate Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card>
            <Card.Img variant="top" src="https://i.pinimg.com/474x/8e/c4/1e/8ec41e214e986a99ba128b6a54130ddc.jpg" />
            <Card.Body>
              <Card.Title>Blood Request</Card.Title>
              <Card.Text>Request blood for patients in need</Card.Text>
              <Button variant="primary" href="/request">Request Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/44/72/f3/4472f3b34715b50fa75bc990d323f545.jpg" />
            <Card.Body>
              <Card.Title>Blood Inventory</Card.Title>
              <Card.Text>Manage blood inventory levels</Card.Text>
              <Button variant="primary" href="/inventory">View Inventory</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="bg-light pt-5 pb-5">
        <Col md={12} className="text-center">
          <h2>About Us</h2>
          <p>We are a team of developers who aim to create a platform to manage blood donations and requests</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;