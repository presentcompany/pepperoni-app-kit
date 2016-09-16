import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';

// Initial state
const initialState = {
  loanType: '',
  applicationType: '',
  dependants: 0,
  incomeAnnual: 0,
  incomeOther: 0,
  expenses: {
    estimate: 0,
    personal: 0,
    creditCard: 0,
    monthlyRepayments: 0
  },
  interestRate: 0,
  loanTerm: 0
};

// Actions
const CHANGE = 'BorrowState/CHANGE';
const RESET = 'BorrowState/RESET';

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
export default function BorrowStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.page;

    case RESET:
      return initialState;

    default:
      return state;
  }
}
