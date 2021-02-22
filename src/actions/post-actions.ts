import { ActionTypes } from './index';
import { PostInfo, PostActionTypes } from '../types'

// makes new post
export function makePost(newPost: PostInfo): PostActionTypes {
  return {
    type: ActionTypes.MAKE_POST,
    payload: newPost
  }
}

// deletes post
export function deletePost(delPost: PostInfo): PostActionTypes {
  return {
    type: ActionTypes.DELETE_POST,
    payload: delPost
  }
}