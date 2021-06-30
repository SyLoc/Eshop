
import {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ALL,
  EDIT_ITEM
}from '../constant/constants'


const initialState = {
  data: [],
  alert: '',
  isAlert: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newData = [action.payload,...state.data]
      return {
        ...state,
        data: newData
      };
    case EDIT_ITEM:
      return{
        ...state,
        data: action.payload
      }
    case REMOVE_ITEM:
      return{
        ...state,
        data: action.payload
      }
    case REMOVE_ALL:
      return {
        ...state,
        data:[]
      }
    default:
      return state;
  }
};

export default reducer