export enum UserActionTypes {
  SET_USER = '[User] Set current user',
  CLEAR_USER = '[User] Clear user',
  SET_AUTH_TOKEN = '[Úser] Set authorization token'
}

export interface User {
  _id: string;
  username: string;
  email: string;
  token?: string;
}

export interface UserState {
  readonly currentUser: User;
  readonly loading: boolean;
  readonly error: boolean;
}
