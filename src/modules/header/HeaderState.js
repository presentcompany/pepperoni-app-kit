import {fromJS} from 'immutable';

// Actions
const HOME_BUTTON = 'HeaderViewState/HOME_BUTTON';

// Action creators
export function homeTapped() {
  return {
    type: HOME_BUTTON,
    payload: home
  };
}

// reducers for tabs and scenes are separate
const initialState = fromJS({
  
});

export default function HeaderReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_BUTTON: {
      // Push a route into the scenes stack.
      const home = action.payload;
      return state;
    }

    default:
      return state;
  }
}