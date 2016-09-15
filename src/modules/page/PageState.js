import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {generateRandomNumber} from '../../services/randomNumberService';

// Initial state
const initialState = 0;

// Actions
const CHANGE = 'PageState/CHANGE';
const RESET = 'PageState/RESET';

// Action creators
export function change(state) {
  return {
    type: CHANGE,
    page: state.page
  };
}

export function reset() {
  return {type: RESET};
}

// Reducer
export default function PageStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.page;

    case RESET:
      return initialState;

    default:
      return state;
  }
}
