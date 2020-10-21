import * as actionTypes from './actionTypes';
import axios from '../axios-order';

export const fetchProductStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_START,
  };
};

const setProductList = (productList) => {
  return {
    type: actionTypes.SET_PRODUCT_LIST,
    productList: productList,
  };
};
const fetchProductFailed = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_FAILED,
  };
};

export const fetchProduct = () => {
  fetchProductStart();
  return (dispatch) => {
    axios
      .get('/products')
      .then((response) => {
        dispatch(setProductList(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchProductFailed());
      });
  };
};
