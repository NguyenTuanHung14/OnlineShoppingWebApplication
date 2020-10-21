import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { randomBytes } from 'crypto';
import ProductCard from './card/card';
export default (props) => {
  console.log(props);
  return (
    <div>
      <Row>
        <Col className='my-auto'>
          <h1>Product List</h1>
        </Col>
      </Row>
      <Row>
        {Object.values(props.productList).map((el) => {
          return (
            <ProductCard product={el} key={randomBytes(4).toString('hex')} />
          );
        })}
      </Row>
    </div>
  );
};
