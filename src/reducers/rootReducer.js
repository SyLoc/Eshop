import {combineReducers} from 'redux'
import reducers from './TodoReducer'
import proReducer from './ProductReducer'
import loginReducer from './LoginReducer'
import saleProduct from './SaleReducer'

export default combineReducers({
  todo: reducers,
  pro: proReducer,
  lo:loginReducer,
  sale:saleProduct
})