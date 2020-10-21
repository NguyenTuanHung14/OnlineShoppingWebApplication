import * as actionTypes from '../actions/actionTypes';

const initState = {
  productList: null,
  error: false,
  loading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.FETCH_PRODUCT_START:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case actionTypes.SET_PRODUCT_LIST:
      return {
        ...state,
        error: false,
        loading: false,
        productList: {
          ...action.productList,
        },
      };
    default:
      return state;
  }
};

export { reducer as productReducer };
