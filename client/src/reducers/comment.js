import {
ADD_COMMENT_SUCCESS,
ADD_COMMENT_FAIL,
GET_COMMENTS_SUCCESS,
GET_COMMENTS_FAIL
  } from "../actions/types";

  const comments = [];
  const initialState = comments ? { isComment: true, comments }
  : { isComment: false, comments: null };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_COMMENT_SUCCESS:
          return {
            ...state,
            isComment: true,
            comments: payload,
          };
        case ADD_COMMENT_FAIL:
          return {
            ...state,
            isComment: false,
            comments: null,
          };
        case GET_COMMENTS_SUCCESS:
          return {
            ...state,
            comments: payload,
          };
        case GET_COMMENTS_FAIL:
          return {
            ...state,
            comments: null,
          };
        
        default:
          return state;
      }
  
  }


