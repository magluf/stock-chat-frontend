import { Reducer } from 'redux';
import { ChannelState, ChannelActionTypes } from './types';

const INITIAL_STATE: ChannelState = {
  channels: [
    {
      _id: '5f7d63d29672610b98fe42cc',
      channelName: 'general',
      creatorID: '5f7d62f39672610b98fe42c5',
      description: 'Generalities.'
    },
    {
      _id: '5f7d63c49672610b98fe42ca',
      channelName: 'trivial',
      creatorID: '5f7d62f39672610b98fe42c5',
      description: 'Trivialities.'
    }
  ],
  currentChannel: {
    _id: '5f7d63d29672610b98fe42cc',
    channelName: 'general',
    creatorID: '5f7d62f39672610b98fe42c5',
    description: 'Generalities.'
  },
  loading: true,
  error: false
};

const channelReducer: Reducer<ChannelState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ChannelActionTypes.CREATE_CHANNEL:
      return {
        ...state,
        data: state.channels.concat(action.payload),
        loading: false
      };

    case ChannelActionTypes.SET_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default channelReducer;
