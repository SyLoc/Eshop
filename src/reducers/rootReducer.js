import {combineReducers} from 'redux'
import reducers from './TodoReducer'
import proReducer from './ProductReducer'

export default combineReducers({
  todo: reducers,
  pro: proReducer
})