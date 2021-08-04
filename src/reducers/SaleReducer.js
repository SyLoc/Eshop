
import {
  GET_ALL_CART,
  ADD_TO_CART,
  UPDATE_CART,
  SET_CART,
  ADD_ORDER,
  GET_ORDER,
  UPDATE_ORDER
}from '../constant/constants'

const initialState = {
  cart:[],
  cartInfo:{
    id:0,
    idUser:'',
    products:[]
  },
  order:[]
}

const SaleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CART:
      const data = action.payload.data
      return {
        ...state,
        cartInfo: confi(data)
      }
    case SET_CART:{
      return {
        ...state,
        cart: action.payload
      }
    }
    case ADD_TO_CART:
      const afterAdd  = action.payload.data
      var newAfterAdd = {
        id:afterAdd.id,
        idUser:afterAdd.idUser,
        products:afterAdd.products
      }
      return {
        ...state,
        cartInfo:newAfterAdd
      }
    case UPDATE_CART:
      const afterUpdate = action.payload.data
      const newAfterUpdate = {
        id:afterUpdate.id,
        idUser:afterUpdate.idUser,
        products:afterUpdate.products
      }
      return{
        ...state,
        cartInfo:newAfterUpdate
      };
    case GET_ORDER:
      return {
        ...state,
        order:action.payload.data
      }
    case ADD_ORDER:
      const newOrder = [...state.order,action.payload.data]
      return {
        ...state,
        order:newOrder
      }
    case UPDATE_ORDER:
      const abc = state.order.filter(item => item.id !== action.payload.data.id)
      const updateOrder = [...abc, action.payload.data]
      return {
        ...state,
        order: updateOrder
      }
    default:
      return state;
  }
};


const confi = (data) =>{
  const infoUser = JSON.parse(localStorage.getItem('login')) || {}
  const exist = data.find(item => item.idUser === infoUser.id)
  let newCartInfo = {
    id: 0,
    idUser:'',
    products:[]
  }
  if(exist){
    return newCartInfo = {
      id: exist.id,
      idUser:exist.idUser,
      products:exist.products
    }
  }else{
    return newCartInfo
  }
}


export default SaleReducer