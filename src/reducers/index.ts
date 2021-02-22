import { combineReducers } from 'redux';

import PostReducer from './post-reducer';
import PeopleReducer from './people-reducer';

export const rootReducer = combineReducers({
  posts: PostReducer,
  people: PeopleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
