import axios from 'link/axios';
import {
    GET_LIST_OF_PRODUCT,
    GET_LIST_OF_PRODUCT_1
} from 'constant/constants';


export const getListOfproducts = (page) => async (dispatch) => {
    try {
      const res = await axios.get(`/products?_page=${page}&_limit=10`);
      dispatch({ type: GET_LIST_OF_PRODUCT, payload: res })
    } catch (error) {
      console.log(error)
    }
}

export const getListOfproducts_1 = () => async (dispatch) => {
  try {
    const res = await axios.get(`/products`);
    dispatch({ type: GET_LIST_OF_PRODUCT_1, payload: res })
  } catch (error) {
    console.log(error)
  }
}


export const removeProductApi = async (id) => {
  try {
    const res = await axios.delete(`/products/${id}`);
    return res
  } catch (error) {
    console.log(error)
  }
}

export const getCategoriesApi = async ()=> {
  try {
    const res = await axios.get(`/categories`);
    return res
  } catch (error) {
    console.log(error)
  }
}


export const createProductApi = async (data)=> {
  try {
    const res = await axios.post(`/products`, data);
    return res
  } catch (error) {
    console.log(error)
  }
}

export const getProductDetailsApi = async (id) => {
  try {
    const res = await axios.get(`/products/${id}`);
    return res
  } catch (error) {
    console.log(error)
  }
}

export const updateProductApi = async (id, data) => {
  try {
    const res = await axios.put(`/products/${id}`, data);
    return res
  } catch (error) {
    console.log(error)
  }
}
