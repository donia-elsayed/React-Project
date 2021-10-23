import { counterReducer } from './count'
import { addToDoReducer } from './todo';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ counter:counterReducer, todos:addToDoReducer });
export default rootReducer;