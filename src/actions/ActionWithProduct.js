import axios from '../link/axios'

import {
  SET_PRODUCT_LIST,
  SET_SINGLE_PRODUCT,
  ADD_CUSTOMER,
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_CART
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

// product 

export const getAllCart = async() =>{
  try {
    const res = await axios.get('/favorites')
    return res
  } catch (error) {
    console.log("error@: ", error)
  }
}

export const addToCart = (value,callBack) => async (dispatch) =>{
  try {
    const res = await axios.post('/favorites', value)
    dispatch({type:ADD_TO_CART, payload:res})
    return callBack(res)
  } catch (error) {
    console.log("error@: ", error)
  }
}

export const updateCart = (id,value,callBack) => async (dispatch) =>{
  try {
    const res = await axios.patch(`/favorites/${id}`, value)
    dispatch({type: UPDATE_CART, payload:res})
    return callBack(res)
  } catch (error) {
    console.log("error@: ", error)
  }
}

export const deleteCart = (value) => async (dispatch) =>{
  try {
    const res = await axios.delete('favorites/', value)
    dispatch({type: DELETE_CART, payload:res})
  } catch (error) {
    console.log("error@: ", error)
  }
}