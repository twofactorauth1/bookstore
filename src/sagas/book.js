import { put, call, takeEvery } from 'redux-saga/effects';
import { TEST, SEND_TEST } from "../actions/book";
import getRequest from '../utils/http-helper';

export function* getBooks() {
    yield call(getRequest, { url: 'search/index.xml?q=rich'});
    yield put({ type: SEND_TEST});
}

export function* bookSaga() {
    yield takeEvery(TEST, getBooks);
}