import React from 'react';
import { Container, Alert } from 'react-bootstrap';
// import './ErrorPage.css';

const NotFound = () => {
  return (
    <Container className="mt-5">
      <Alert variant="danger">
        <Alert.Heading className='text-center'>404 Page Not Found</Alert.Heading>
      </Alert>
    </Container>
  );
};

export default NotFound;