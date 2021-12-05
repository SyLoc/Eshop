import axios from 'link/axios';
import {
    GET_LIST_OF_USERS,
    GET_LIST_OF_USERS_1
} from 'constant/constants';


export const getListOfUsers = (page) => async (dispatch) => {
    try {
      const res = await axios.get(`/users?_page=${page}&_limit=10`);
      dispatch({ type: GET_LIST_OF_USERS, payload: res })
    } catch (error) {
      console.log(error)
    }
}

export const getListOfUsers_1 = () => async (dispatch) => {
  try {
    const res = await axios.get(`/users`);
    dispatch({ type: GET_LIST_OF_USERS_1, payload: res })
  } catch (error) {
    console.log(error)
  }
}

export const getUserDetailsApi = async (id) => {
  try {
    const res = await axios.get(`/users/${id}`);
    return res
  } catch (error) {
    console.log(error)
  }
}


export const createUserApi = async (data) => {
  try {
    const res = await axios.post(`/users`, data);
    return res
  } catch (error) {
    console.log(error)
  }
}

export const updateUserApi = async (id, data) => {
  try {
    const res = await axios.put(`/users/${id}`, data);
    return res
  } catch (error) {
    console.log(error)
  }
}

export const removeUserApi = async (id) => {
  try {
    const res = await axios.delete(`/users/${id}`);
    return res
  } catch (error) {
    console.log(error)
  }
}