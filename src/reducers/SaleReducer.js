

import {
  ADD_TO_CART
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
    default:
      return state;
  }
};

export default SaleReducer