import axios from '../link/axios'

import {
  GET_ALL_USER,
  SET_PRODUCT_LIST,
  SET_SINGLE_PRODUCT, 
  ADD_CUSTOMER,
  UPDATE_USER,
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_CART,
  GET_ALL_CART,
  ADD_ORDER,
  GET_ORDER,
  UPDATE_ORDER
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

export const UpdateUser = (id,value) => async (dispatch) =>{
  try {
    const res = await axios.put(`/users/${id}`, value)
    dispatch({type: UPDATE_USER, payload:res}) 
  } catch (error) {
    console.log(error)
  }
}

export const getAll_User = () => async (dispatch) => {
  try {
    const res = await axios.get(`/users`)
    dispatch({type: GET_ALL_USER, payload:res})
  } catch (error) {
    console.log(error)
  }
}

// product 

export const getAllCart = () => async (dispatch) =>{
  try {
    const res = await axios.get('/favorites')
    dispatch({type: GET_ALL_CART,payload:res})
  } catch (error) {
    console.log("error: ", error)
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
    const res = await axios.put(`/favorites/${id}`, value)
    dispatch({type: UPDATE_CART, payload:res})
    return callBack(res)
  } catch (error) {
    console.log("error@: ", error)
  }
}

export const deleteCart = (value) => async (dispatch) =>{
  try {
    const res = await axios.delete('/favorites/', value)
    dispatch({type: DELETE_CART, payload:res})
  } catch (error) {
    console.log("error@: ", error)
  }
}

// order

export const addOrder = (value,callBack) => async (dispatch) =>{
  try {
    const res = await axios.post('/order', value)
    dispatch({type: ADD_ORDER, payload:res})
    return callBack(res)
  } catch (error) {
    console.log("error@: ", error)
  }
}

export const getOrder = () => async (dispatch) =>{
  try {
    const res = await axios.get('/order')
    dispatch({type: GET_ORDER, payload:res})
  } catch (error) {
    console.log("error@: ", error)
  }
}


export const updateOrder = (id,value,callBack) => async (dispatch) =>{
  try {
    const res = await axios.put(`/order/${id}`, value)
    dispatch({type: UPDATE_ORDER, payload:res})
    return callBack(res)
  } catch (error) {
    console.log("error@: ", error)
  }
}

// ========================
