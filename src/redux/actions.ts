import {FETCH_NEWS, FETCH_NEWS_FROM_INDIA} from './types';

export function fetchNews(news) {
  return {
    type: FETCH_NEWS,
    payload: news,
  };
}

export function fetchNewsIndia() {
  return {
    type: FETCH_NEWS_FROM_INDIA,
  };
}
