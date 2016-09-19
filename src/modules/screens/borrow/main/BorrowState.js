import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';

// Initial state
const initialState = {
  loanType: '',
  applicationType: '',
  dependants: 0,
  annualIncome: {
    valid: false,
    value: 0
  },
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
const UPDATE_INCOME = 'BorrowState/UPDATE_INCOME';
// Action creators
export function change(state) {
  return {
    type: CHANGE,
    borrow: state.borrow
  };
}

// Action creators
export function updateIncome(state) {
  return {
    type: UPDATE_INCOME,
    annualIncome: state.annualIncome
  };
}

export function reset() {
  return {type: RESET};
}

// Reducer
export default function BorrowStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.borrow;

    case RESET:
      return initialState;

    case UPDATE_INCOME:
      return Object.assign({}, state, action.annualIncome);
    default:
      return state;
  }
}
