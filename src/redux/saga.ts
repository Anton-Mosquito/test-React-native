import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_NEWS_FROM_INDIA, FETCH_NEWS} from './types';
import {fetchNewsJson} from '../api/newsAPI';

export function* sagaObserver() {
  yield takeEvery(FETCH_NEWS_FROM_INDIA, sagaWorker);
}

function* sagaWorker() {
  try {
    const news = yield call(fetchNewsJson);
    yield put({type: FETCH_NEWS, payload: news});
  } catch (e) {
    console.log(e);
  }
}
