import { Reducer } from 'redux';
import { UserState, UserActionTypes } from './types';

const INITIAL_STATE: UserState = {
  currentUser: null,
  loading: true,
  error: false
};

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case UserActionTypes.SET_USER:
      console.log('action.payload', action.payload);
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default userReducer;
