import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

import ProductCard from './card/card';
export default (props) => {
  return (
    <div>
      <Row className='pt-4'>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
      </Row>
      <Row className='pt-4'>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
      </Row>
      <Row className='pt-4'>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
        <Col sm='6' lg='3'>
          <ProductCard />
        </Col>
      </Row>
    </div>
  );
};