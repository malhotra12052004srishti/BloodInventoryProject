// src/pages/BloodInventory.js
import React, { useState } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap'; // Import Row and Col for layout
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './BloodInventory.css'; // Import the CSS file for styling

const BloodInventory = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [inventory, setInventory] = useState([]);
  const [newBlood, setNewBlood] = useState({ type: '', quantity: '', expiration: '', donor: '' });

  const handleAddBlood = (e) => {
    e.preventDefault();
    setInventory([...inventory, newBlood]);
    setNewBlood({ type: '', quantity: '', expiration: '', donor: '' });
  };

  const handleDeleteBlood = (index) => {
    setInventory(inventory.filter((_, i) => i !== index));
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page using useNavigate
  };

  return (
    <Container>
      <h1 className="text-center">Blood Inventory Management</h1> {/* Centered heading */}
      <Row className="mb-3">
        <Col>
          <Form onSubmit={handleAddBlood} inline>
            <Form.Group controlId="formBloodType" className="mr-2">
              <Form.Label className="mr-2">Blood Type</Form.Label>
              <Form.Control
                as="select"
                value={newBlood.type}
                onChange={(e) => setNewBlood({ ...newBlood, type: e.target.value })}
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

            <Form.Group controlId="formQuantity" className="mr-2">
              <Form.Label className="mr-2">Quantity</Form.Label>
              <Form.Control
                type="number"
                value={newBlood.quantity}
                onChange={(e) => setNewBlood({ ...newBlood, quantity: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="formExpiration" className="mr-2">
              <Form.Label className="mr-2">Expiration Date</Form.Label>
              <Form.Control
                type="date"
                value={newBlood.expiration}
                onChange={(e) => setNewBlood({ ...newBlood, expiration: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDonor" className="mr-2">
              <Form.Label className="mr-2">Donor Information</Form.Label>
              <Form.Control
                type="text"
                value={newBlood.donor}
                onChange={(e) => setNewBlood({ ...newBlood, donor: e.target.value })}
                required
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit" className="mr-2">Add Blood</Button>
            <Button variant="primary" onClick={handleGoHome}>Go to Home</Button> {/* Go to Home button */}
          </Form>
        </Col>
      </Row>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Blood Type</th>
            <th>Quantity</th>
            <th>Expiration Date</th>
            <th>Donor Information</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((blood, index) => (
            <tr key={index}>
              <td>{blood.type}</td>
              <td>{blood.quantity}</td>
              <td>{blood.expiration}</td>
              <td>{blood.donor}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteBlood(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BloodInventory;