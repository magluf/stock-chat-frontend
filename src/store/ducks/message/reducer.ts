import { Reducer } from 'redux';
import { MessageState, MessageActionTypes } from './types';

const INITIAL_STATE: MessageState = {
  messages: [],
  loading: true,
  error: false
};

const messageReducer: Reducer<MessageState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case MessageActionTypes.CREATE_MESSAGE:
      return {
        ...state,
        data: state.messages.concat(action.payload.team),
        loading: false
      };

    default:
      return state;
  }
};

export default messageReducer;
