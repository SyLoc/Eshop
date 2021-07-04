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
  infoCustomer:{name:'',email:'',img:''},
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
      console.log(action.payload.data)
      const infoUser = {
        name:action.payload.data.name,
        email:action.payload.data.email,
        img:action.payload.data.img
      }
      localStorage.setItem('login',JSON.stringify(infoUser))
      return {
        ...state,
        infoCustomer: infoUser,
        isLogin:true,
      }
    case LOGIN:
      localStorage.setItem('login',JSON.stringify(action.payload))
      return {
        ...state,
        infoCustomer:action.payload,
        isLogin:true
      }
    case LOGOUT:
      const resetInfoCustomer = {
        name:'',
        email:'',
        img:''
      }
      localStorage.removeItem('login')
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