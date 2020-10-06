import { action } from 'typesafe-actions';
import { UserActionTypes, User } from './types';

export const setUser = (user: User) => action(UserActionTypes.SET_USER, user);
