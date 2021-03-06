/* eslint-disable no-underscore-dangle */
import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ChannelState } from './ducks/channel/types';
import { MessageState } from './ducks/message/types';
import rootReducer from './ducks/root.reducer';
import { UserState } from './ducks/user/types';

export interface AppState {
  user: UserState;
  channel: ChannelState;
  message: MessageState;
}

const store: Store<AppState> = createStore(rootReducer, composeWithDevTools());

export default store;
