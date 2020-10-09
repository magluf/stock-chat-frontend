import { action } from 'typesafe-actions';
import { UserActionTypes, User } from './types';

export const setUser = (user: User) => action(UserActionTypes.SET_USER, user);
export const setAuthToken = (token: string) =>
  action(UserActionTypes.SET_AUTH_TOKEN, token);

export const clearUser = () => action(UserActionTypes.CLEAR_USER);
