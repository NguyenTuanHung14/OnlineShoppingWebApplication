import React from 'react';
import { Card, Button } from 'react-bootstrap';
export default (props) => {
  return (
    <Card>
      <Card.Img
        variant='top'
        src='https://product.hstatic.net/1000344185/product/camo-jacket-blue-1_2f32284f5cbb424da9daf881ace987da_master.jpg'
        fluid
      />
      <Card.Body>
        <Card.Title style={{ width: '18rem' }} text='white'>
          DIP DYE - ORANGE
        </Card.Title>
        <Card.Text>
          <strong> 200.000 vnđ </strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
