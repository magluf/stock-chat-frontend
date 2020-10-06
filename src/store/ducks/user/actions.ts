import { action } from 'typesafe-actions';
import { UserActionTypes, User } from './types';

export const setUser = (user: User) => action(UserActionTypes.SET_USER, user);

export const clearUser = () => action(UserActionTypes.CLEAR_USER);
