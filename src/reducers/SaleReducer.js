
import {
  ADD_TO_CART,
  UPDATE_CART
}from '../constant/constants'

const initialState = {
  cart:[]
}

const SaleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCart = [...state.cart, action.payload.data]
      return {
        ...state,
        cart: newCart
      }
    case UPDATE_CART:
      const updateCart = action.payload.data
      return{
        ...state,
        cart: updateCart
      };
    case 'ALL_TO_CART':
      // console.log(action.payload)
      return{
        ...state,
        cart: action.payload
      }
    default:
      return state;
  }
};

export default SaleReducer