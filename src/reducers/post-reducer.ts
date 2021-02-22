/* eslint-disable no-case-declarations */
import { ActionTypes } from '../actions';
import {
    PostState,
    PostActionTypes,
    PostInfo,
  } from '../types';

const initialState: PostState = {
    posts: []
};

const PostReducer = (state = initialState, action:PostActionTypes):PostState => {
  switch (action.type) {
    case ActionTypes.MAKE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload as PostInfo ]
      }
    case ActionTypes.DELETE_POST:

      // filter state by deleting post of corresponding id
      const newPosts = state.posts.filter(post => post.id !== action.payload.id);
      
      return { 
        ...state,
        posts: newPosts,
      }
    default:
      return state;
  }
};

export default PostReducer;