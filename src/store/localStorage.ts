import { RootState } from '../reducers';

// load state from local storage
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 

// save state in local storage
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const saveState = (state:RootState) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
};