import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
export default (props) => {
  console.log(props);
  return (
    <Col sm='6' lg='3'>
      <Card>
        <Card.Img
          variant='top'
          src='https://product.hstatic.net/1000344185/product/camo-jacket-blue-1_2f32284f5cbb424da9daf881ace987da_master.jpg'
          fluid='true'
        />
        <Card.Body>
          <Card.Title style={{ width: '18rem' }} text='white'>
            {props.product.name}
          </Card.Title>
          <Card.Text>
            <strong> {props.product.price} vnđ </strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
