import {
    GET_LIST_OF_ORDER
  } from 'constant/constants';


const initialState = {
    orders:[],
    loading: false,
    pagination: {}
}

const AdminUsersReducer =  (state = initialState, action) => {
    switch (action.type) {
      case GET_LIST_OF_ORDER:
        const orders = action.payload?.data?.data;
        const pagination = action.payload?.data?.pagination;
        return {
          ...state,
          orders:orders,
          pagination: pagination
        };
      default:
        return state;
    }
  };
  
  
export default AdminUsersReducer