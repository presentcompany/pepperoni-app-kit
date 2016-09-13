import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {generateRandomNumber} from '../../services/randomNumberService';

// Initial state
const initialState = Map({
  value: '',
  loading: false,
  text: 'what'
});

// Actions
const CHANGE = 'TextState/CHANGE';
const RESET = 'TextState/RESET';

// Action creators
export function change(text) {
  console.log('action creactor');
  return {
    type: CHANGE,
    text: text
  };
}

export function reset() {
  return {type: RESET};
}

// Reducer
export default function TextStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE:
      return state.update('value', value => action.text);

    case RESET:
      return initialState;

    default:
      return state;
  }
}
