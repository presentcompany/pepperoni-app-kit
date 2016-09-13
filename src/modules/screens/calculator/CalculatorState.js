import {Map} from 'immutable';
// Initial state
const initialState = Map({
  value: 0
});

// Actions
const UPDATE_VALUE = 'CalculatorState/UPDATE_VALUE';
const RESET_VALUE = 'CalculatorState/RESET_VALUE';

// Action creators
export function updateValue(add) {
  return {
    type: UPDATE_VALUE,
    payload: add
  };
}

export function resetValue() {
  return {
    type: RESET_VALUE
  };
}

// Reducer
export default function CalculatorStateReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VALUE: {
      return state.update('value', value => value = (value*10) + action.payload);
    }

    case RESET_VALUE: {
      return state.update('value', value => value = 0);
    }

    default:
      return state;
  }
}
