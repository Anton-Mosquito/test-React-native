import {FETCH_NEWS} from './types';

const initialState = {
  news: [],
};

export const newsReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {...state, news: state.news.concat(action.payload)};
    default:
      return state;
  }
};
