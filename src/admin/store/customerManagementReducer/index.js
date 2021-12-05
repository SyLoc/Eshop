import {
    GET_LIST_OF_USERS,
    GET_LIST_OF_USERS_1
  } from 'constant/constants';


const initialState = {
    users:[],
    users_1:[],
    loading: false,
    pagination: {}
}

const AdminUsersReducer =  (state = initialState, action) => {
    switch (action.type) {
      case GET_LIST_OF_USERS:
        const users = action.payload?.data?.data;
        const pagination = action.payload?.data?.pagination;
        return {
          ...state,
          users:users,
          pagination: pagination
        };
      case GET_LIST_OF_USERS_1:
        const users_1 = action.payload?.data;
        return {
          ...state,
          users_1:users_1,
        };
      default:
        return state;
    }
  };
  
  
export default AdminUsersReducer