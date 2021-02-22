import { ActionTypes } from '../actions';

// post types
export interface PostInfo {
    text: string,
    title: string,
    user: string,
    id: string,
}

export interface PostState {
    posts: PostInfo[]
}

// post action types
export interface MakePostAction {
    type: typeof ActionTypes.MAKE_POST,
    payload: PostInfo
}
  
export interface DeletePostAction {
    type: typeof ActionTypes.DELETE_POST,
    payload: PostInfo
}

export type PostActionTypes = MakePostAction | DeletePostAction;

// people types
export interface Profile {
    [name: string]: string,
    quote: string,
    year: string,
    home: string,
    role: string,
    picture: string,
    follow: string
}

export interface PeopleState {
    people: Profile[]
}

// people action types
export interface MakePeopleAction {
    type: typeof ActionTypes.MAKE_PERSON,
    payload: Profile
}
  
export interface UpdatePeopleAction {
    type: typeof ActionTypes.UPDATE_PERSON,
    payload: string
}

export type PeopleActionTypes = MakePeopleAction | UpdatePeopleAction;