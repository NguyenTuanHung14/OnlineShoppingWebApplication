import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import ProductDetail from '../../../containers/productDetails/productDetails';
import './card.css';
class ProductCard extends Component {
  
  clickHandler = () => {
    //this.props.history.replace('/detail');
  };
  render() {
    return (
      <div className='el-wrapper'>
        <div className='box-up'>
          <Card.Img className='img' src={this.props.product.images} alt='' />
          <div className='img-info'>
            <div className='info-inner'>
              <span className='p-name'>{this.props.product.name}</span>
              <span className='p-company'>
                {this.props.product.category.name}
              </span>
            </div>
            <div className='a-size'>
              Size có sẵn: <span class='size'>{this.props.product.size}</span>
            </div>
          </div>
        </div>
        <div className='box-down'>
          <div className='h-bg'>
            <div className='h-bg-inner'></div>
          </div>
          <a className='cart' href='#'>
            <span className='price'>${this.props.product.price}</span>
            <span className='add-to-cart'>
              <span onClick={this.clickHandler} className="txt">
                Chi tiết
              </span>
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default ProductCard;
