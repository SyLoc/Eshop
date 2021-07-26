import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_CUSTOMER,
  LOGIN,
  LOGOUT,
  GET_ALL_USER,
  UPDATE_USER
}from '../constant/constants'


const initialState = {
  users:[],
  userCurrent:{},
  openModal:false,
  modalContent:'',
  isLogin:false,
  infoCustomer:{id:'',name:'',email:'',img:''},
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:{
      return {
        ...state,
        users:action.payload.data
      }
    }
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
        name:action.payload.data.info[0].name,
        email:action.payload.data.email,
        img:action.payload.data.img
      }
      localStorage.setItem('login',JSON.stringify(infoUser))
      const newCustomer = [...state.users, action.payload.data]
      return {
        ...state,
        infoCustomer: infoUser,
        isLogin:true,
        users: newCustomer
      }
    case LOGIN:
      const nameUser = action.payload.info ? action.payload.info[0].name : action.payload.name
      const newInfo = {
        id:action.payload.id,
        name: nameUser,
        email: action.payload.email,
        img: action.payload.img
      }
      localStorage.setItem('login',JSON.stringify(newInfo))
      return {
        ...state,
        infoCustomer:newInfo,
        isLogin:true,
        userCurrent:action.payload
      }
    case LOGOUT:
      const resetInfoCustomer = {
        id:'',
        name:'',
        email:'',
        img:''
      }
      localStorage.removeItem('login')
      localStorage.removeItem('order')
      return{
        ...state,
        isLogin:false,
        infoCustomer: resetInfoCustomer,
        modalContent:''
      }
    case UPDATE_USER:
      return {
        ...state,
        userCurrent:action.payload.data
      }
    default:
      return state;
  }
};

export default LoginReducer;