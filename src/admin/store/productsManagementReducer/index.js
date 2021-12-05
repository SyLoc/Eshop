import {
    GET_LIST_OF_PRODUCT,
    GET_LIST_OF_PRODUCT_1
  } from 'constant/constants';


const initialState = {
    products:[],
    products_1: [],
    loading: false,
    pagination:{},
}

const AdminProductsReducer =  (state = initialState, action) => {
    switch (action.type) {
      case GET_LIST_OF_PRODUCT:
        const products = action.payload?.data?.data;
        const pagination = action.payload?.data?.pagination;
        return {
          ...state,
          products:products,
          pagination:pagination,
        };
      case GET_LIST_OF_PRODUCT_1:
        const products_1 = action.payload?.data;
        return {
          ...state,
          products_1:products_1,
        };
      default:
        return state;
    }
  };
  
  
export default AdminProductsReducer