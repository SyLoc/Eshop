import {combineReducers} from 'redux'
import proReducer from './ProductReducer'
import loginReducer from './LoginReducer'
import saleProduct from './SaleReducer'
import commentReducer from './CommentReducer'

export default combineReducers({
  pro: proReducer,
  lo:loginReducer,
  sale:saleProduct,
  comment: commentReducer
})