export enum UserActionTypes {
  SET_USER = '[User] Set current user'
}

export interface User {
  id: string;
  username: string;
  email: string;
  token: string;
}

export interface UserState {
  readonly currentUser: User | null;
  readonly loading: boolean;
  readonly error: boolean;
}
