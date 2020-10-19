import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ProductList from '../products';
import Carousel from '../casousel';
const Landing = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src='https://dosi-in.com/dosiinmarketplace.jpg'
            alt='Image cover'
            fluid
          />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Carousel />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
