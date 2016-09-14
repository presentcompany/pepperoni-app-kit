import {Map} from 'immutable';
import {combineReducers} from 'redux-loop';
import NavigationStateReducer from '../modules/navigation/NavigationState';
import AuthStateReducer from '../modules/auth/AuthState';
import CalculatorStateReducer from '../modules/screens/calculator/CalculatorState';
import CounterStateReducer from '../modules/counter/CounterState';
import TextStateReducer from '../modules/text/TextState';
import PageStateReducer from '../modules/page/PageState';
import SessionStateReducer, {RESET_STATE} from '../modules/session/SessionState';

const reducers = {
  // Authentication/login state
  auth: AuthStateReducer,

  // Counter sample app state. This can be removed in a live application
  counter: CounterStateReducer,

  // @NOTE: By convention, the navigation state must live in a subtree called
  //`navigationState`
  navigationState: NavigationStateReducer,

  text: TextStateReducer,

  page: PageStateReducer,

  session: SessionStateReducer,

  calculator: CalculatorStateReducer

};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  if (action.type === RESET_STATE) {
    return namespacedReducer(action.payload, action);
  }

  return namespacedReducer(state || void 0, action);
}
