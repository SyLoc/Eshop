import {combineReducers} from 'redux'
import reducers from './TodoReducer'
import proReducer from './ProductReducer'
import loginReducer from './LoginReducer'

export default combineReducers({
  todo: reducers,
  pro: proReducer,
  lo:loginReducer
})