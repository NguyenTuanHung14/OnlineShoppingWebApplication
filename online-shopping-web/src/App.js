import React from 'react';
import ProductList from './components/products';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container pt='4'>
      <ProductList />
    </Container>
  );
}

export default App;
