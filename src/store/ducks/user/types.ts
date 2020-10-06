export enum UserActionTypes {
  SET_USER = '[User] Set current user',
  CLEAR_USER = '[User] Clear user'
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface UserState {
  readonly currentUser: User | null;
  readonly loading: boolean;
  readonly error: boolean;
}
