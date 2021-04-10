import { combineReducers } from 'redux';

const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const reducers = {
  counter: counterReducer,
};

export default combineReducers(reducers);
