// src/components/HomeButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Assuming you're using React Bootstrap

const HomeButton = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button variant="primary">Go to Home</Button>
    </Link>
  );
};

export default HomeButton;