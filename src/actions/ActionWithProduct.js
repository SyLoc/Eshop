import axios from '../link/axios'

import {
  SET_PRODUCT_LIST,
  SET_SINGLE_PRODUCT,
  ADD_CUSTOMER,
  GET_ALL_USER
} from '../constant/constants'

export const getProductList = () => async (dispatch) => {
  try {
    const res = await axios.get('/products');
    dispatch({type: SET_PRODUCT_LIST, payload: res})
  } catch (error) {
    console.log(error)
  }
}

export const getSingleProduct = (endPoint) => async (dispatch) => {
  try {
    const res = await axios.get(`/products/${endPoint}`);
    dispatch({type: SET_SINGLE_PRODUCT, payload: res})
  } catch (error) {
    console.log(error)
  }
}

// login

export const addUser = (user) => async (dispatch) =>{
  try {
    const res = await axios.post(`/users`, user)
    dispatch({type: ADD_CUSTOMER, payload:res})
  } catch (error) {
    console.log(error)
  }
}

export const getAll_User = async() => {
  try {
    const res = await axios.get(`/users`)
    return res
  } catch (error) {
    console.log(error)
  }
}
