/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import { Reducer } from 'redux';
import { UserState, UserActionTypes, User } from './types';

const INITIAL_STATE: UserState = {
  currentUser: {
    _id: '',
    username: '',
    email: '',
    token: ''
  },
  loading: true,
  error: false
};

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      const currentUser: User = {
        _id: action.payload._id,
        email: action.payload.email,
        username: action.payload.username,
        token: ''
      };

      return {
        ...state,
        currentUser,
        loading: false
      };

    case UserActionTypes.SET_AUTH_TOKEN:
      const uToken: User = {
        ...state.currentUser,
        token: action.payload
      };

      return {
        ...state,
        currentUser: uToken,
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
