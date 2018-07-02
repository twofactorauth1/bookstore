import {
    SEARCH_BOOKS_SUCCESS,
    SEARCH_BOOKS_REQUESTED,
    SEARCH_BOOKS_FAILURE
 } from '../actions/book';

//set initial state
const initialState = {
    data: [],
    errors: {},
    isLoading: false
};

export default function books(state = initialState, { type, payload }) {
    switch (type) {
        case SEARCH_BOOKS_REQUESTED:
          return { ...state,isLoading: true }
        case SEARCH_BOOKS_SUCCESS:
          return { ...state, data: [{ 'name': 'test book'}]};
        case SEARCH_BOOKS_FAILURE:
            return { ...state, errors: { ...payload } }
        default:
          return { ...state };
    }
}