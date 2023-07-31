import {combineReducers} from 'redux';
import {newsReducer} from './newsReducer';

export const RootReducer = combineReducers({mainNews: newsReducer});
