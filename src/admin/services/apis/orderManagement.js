import axios from 'link/axios';
import {
    GET_LIST_OF_ORDER
} from 'constant/constants';

export const getListOfOrders = (page) => async (dispatch) => {
    try {
      const res = await axios.get(`/orders?_page=${page}&_limit=10`);
      dispatch({ type: GET_LIST_OF_ORDER, payload: res })
    } catch (error) {
      console.log(error)
    }
}