import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';

import ProductList from '../../components/products';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
class Landing extends Component {
  componentDidMount() {
    this.props.fetchProductList();
  }
  render() {
    let productList = this.props.error ? (
      <p>Product list can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.props.productList) {
      productList = (
        <Row>
          <Col>
            <ProductList productList={this.props.productList} />
          </Col>
        </Row>
      );
    }
    return (
      <Container className='py-4'>
<h2>Danh Sách Sản Phẩm</h2>
        {productList}
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productList: state.product.productList,
    error: state.product.error,
    loading: state.product.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductList: () => dispatch(actionCreators.fetchProduct()),
    fetchProductStart: () => dispatch(actionCreators.fetchProductStart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
