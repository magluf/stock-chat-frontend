import { Reducer } from 'redux';
import { UserState, UserActionTypes } from './types';

const INITIAL_STATE: UserState = {
  currentUser: null,
  loading: true,
  error: false
};

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      };

    case UserActionTypes.CLEAR_USER:
      return {
        ...INITIAL_STATE,
        loading: false
      };
    default:
      return state;
  }
};

export default userReducer;
