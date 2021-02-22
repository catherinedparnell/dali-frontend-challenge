import { ActionTypes } from './index';
import { Profile, PeopleActionTypes } from '../types'

// makes new profile of person
export function makePerson(newPerson: Profile): PeopleActionTypes {
  return {
    type: ActionTypes.MAKE_PERSON,
    payload: newPerson
  }
}

// follows or unfollows person based on whether previously following or not
export function followPerson(name: string): PeopleActionTypes {
  return {
    type: ActionTypes.UPDATE_PERSON,
    payload: name
  }
}
