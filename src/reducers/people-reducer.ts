/* eslint-disable no-case-declarations */
import { ActionTypes } from '../actions';
import {
    PeopleState,
    PeopleActionTypes,
    Profile,
  } from '../types';
import data from '../store/data.json';

const initialState: PeopleState = {
    people: data
};

const PeopleReducer = (state = initialState, action:PeopleActionTypes):PeopleState => {
  switch (action.type) {
    case ActionTypes.MAKE_PERSON:
      return {
        ...state,
        people: [...state.people, action.payload as Profile ]
      }
    case ActionTypes.UPDATE_PERSON:

      // filter and update person json
      const i = state.people.findIndex((p) => p.name == action.payload);
      const newState = [ ...state.people ];

      // follow if not followed, unfollow if followed
      if (newState[i].follow === '1') {
        newState[i].follow = '0';
      } else {
        newState[i].follow = '1';
      }
      
      return {
        ...state,
        people: newState,
      }
    default:
      return state;
  }
};

export default PeopleReducer;
