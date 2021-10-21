import { counterReducer } from './count'
import { addToDoReducer } from './todo';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({ counterReducer, addToDoReducer });