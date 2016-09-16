import {fromJS} from 'immutable';

// Actions
const PUSH_ROUTE = 'CalculatorSelectorState/PUSH_ROUTE';

// Action creators
export function pushRoute() {
  return {
    type: PUSH_ROUTE,
    payload: route
  };
}

// reducers for tabs and scenes are separate
const initialState = fromJS({
  tabs: {
    index: 0,
    routes: [
      {key: 'Borrow', title: 'BORROW'},
      {key: 'Repay', title: 'REPAY'},
      {key: 'Stamp', title: 'STAMP'}
    ]
  },
  BorrowModal: {
    index: 0,
    routes: [{key: 'Borrow', title: 'Borrow Page'}]
  },
  RepayModal: {
    index: 0,
    routes: [{key: 'Repay', title: 'Repay Page'}]
  },
  StampModal: {
    index: 0,
    routes: [{key: 'Stamp', title: 'Stamp Page'}]
  }
});

export default function CalculatorSelectorReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE: {
      // Push a route into the scenes stack.
      const route = action.payload;
      return state;
    }

    default:
      return state;
  }
}