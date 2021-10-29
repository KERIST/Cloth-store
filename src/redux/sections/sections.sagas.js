import { put, takeLatest, all, call } from 'redux-saga/effects';

import { getAllItemsApi } from '../../api/items';
import { fetchItemsSuccess, fetchItemsFailure } from './sections.actions';
import SectionTypes from './sections.types';

export function* fetchItemsAsync() {
  try {
    const itemsData = yield getAllItemsApi().then(response => response.json())

    yield put(fetchItemsSuccess(itemsData));
  } catch (error) {
    yield put(fetchItemsFailure(error));
  }
}

export function* onFetchItemsStart() {
  yield takeLatest(SectionTypes.FETCH_ITEMS_START, fetchItemsAsync);
}

export function* sectionsSagas() {
  yield all([
    call(onFetchItemsStart)
  ])
}