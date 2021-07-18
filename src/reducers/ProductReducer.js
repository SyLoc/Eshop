
import {
  SET_PRODUCT_LIST,
  SET_SINGLE_PRODUCT,
  FILTER_LABEL,
  FILTER_PRICE,
  SEARCH_TERM,
}from '../constant/constants'


const initialState = {
  products:[],
  modalContent: "",
  singleProduct:{},
  singleProductLoading: true,
  filterLabel:'',
  filterPrice:'',
  searchTerm:'',
}

const proReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      const newProductList = [...action.payload.data]
      return {
        ...state, 
        products: newProductList,
        filterLabel:'popular'
      };
    case SET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload.data,
        singleProductLoading: false
      }
    case FILTER_LABEL:
      return {
        ...state,
        filterPrice:'',
        filterLabel: action.payload
      }
    case FILTER_PRICE:
      return {
        ...state,
        filterLabel:'',
        filterPrice:action.payload
      }
    case SEARCH_TERM:
      return {
        ...state,
        searchTerm:action.payload
      }
    default:
      return state;
  }
};

export default proReducer
