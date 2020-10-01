import produce from 'immer';
import { SIGNIN_LOADING, SIGNIN_SUCCESS, SIGNIN_ERROR } from './constants';

export const initialState = {
  user: null,
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const signinReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGNIN_LOADING:
        draft.loading = true;
        break;
      case SIGNIN_SUCCESS:
        draft.loading = false;
        draft.user = action.user;
        break;
      case SIGNIN_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default signinReducer;
