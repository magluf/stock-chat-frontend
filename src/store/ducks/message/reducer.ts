import { Reducer } from 'redux';
import { MessageState, MessageActionTypes } from './types';

const INITIAL_STATE: MessageState = {
  generalMessages: [],
  trivialMessages: [],
  loading: true,
  error: false
};

const messageReducer: Reducer<MessageState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case MessageActionTypes.SET_MESSAGES_GENERAL:
      return {
        ...state,
        generalMessages: action.payload,
        loading: false
      };

    case MessageActionTypes.SET_MESSAGES_TRIVIAL:
      return {
        ...state,
        trivialMessages: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default messageReducer;
