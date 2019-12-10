import { createStore, combineReducers } from "redux";

// import reducers

import PlayerReducer from '../features/player/reducer';

const rootReducer = combineReducers({
  player : PlayerReducer
});


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);