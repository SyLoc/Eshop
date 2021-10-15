

import {
  GET_COMMENTS,
  NO_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENTS
} from '../constant/constants'

const initialState = {
  comments:{},
  isExist: false
}

const CommentReducer =  (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      const Comments = action.payload
      return {
        ...state,
        isExist: true,
        comments:Comments 
      };
    case NO_COMMENTS:
      return {
        ...state,
        isExist: false,
        comments:{}
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments:action.payload,
        isExist: true
      }
    case UPDATE_COMMENTS: 
    const CommentsAfterUpdate = action.payload
    return {
      ...state,
      comments:CommentsAfterUpdate 
    }
    default:
      return state;
  }
};


export default CommentReducer