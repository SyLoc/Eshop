import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_CUSTOMER,
  LOGIN,
  LOGOUT
}from '../constant/constants'


const initialState = {
  openModal:false,
  modalContent:'',
  isLogin:false,
  infoCustomer:{id:'',name:'',email:'',img:''},
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        openModal: true,
        modalContent: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
        modalContent:''
      }
    case ADD_CUSTOMER:
      const infoUser = {
        id:action.payload.data.id,
        name:action.payload.data.name,
        email:action.payload.data.email,
        img:action.payload.data.img
      }
      localStorage.setItem('login',JSON.stringify(infoUser))
      return {
        ...state,
        infoCustomer: infoUser,
        isLogin:true
      }
    case LOGIN:
      const newInfo = {
        id:action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        img: action.payload.img
      }
      localStorage.setItem('login',JSON.stringify(newInfo))
      return {
        ...state,
        infoCustomer:newInfo,
        isLogin:true
      }
    case LOGOUT:
      const resetInfoCustomer = {
        id:'',
        name:'',
        email:'',
        img:''
      }
      localStorage.removeItem('login')
      localStorage.removeItem('carts')
      return{
        ...state,
        isLogin:false,
        infoCustomer: resetInfoCustomer,
        modalContent:''
      }
    default:
      return state;
  }
};

export default LoginReducer;