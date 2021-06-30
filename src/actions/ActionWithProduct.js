import axios from '../link/axios'

import {SET_PRODUCT_LIST,SET_SINGLE_PRODUCT} from '../constant/constants'

export const getProductList = (endPoint) => async (dispatch) => {
  try {
    const res = await axios.get(`/${endPoint}`);
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
