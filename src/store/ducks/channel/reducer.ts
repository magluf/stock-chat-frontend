import { Reducer } from 'redux';
import { ChannelState, ChannelActionTypes } from './types';

const INITIAL_STATE: ChannelState = {
  channels: [
    {
      _id: '5f7e24055a8ac8114e8e9cd8',
      channelName: 'general',
      creatorID: '5f7e23375a8ac8114e8e9cd7',
      description: 'Generalities.'
    },
    {
      _id: '5f7e243a5a8ac8114e8e9cd9',
      channelName: 'trivial',
      creatorID: '5f7e23375a8ac8114e8e9cd7',
      description: 'Trivialities.'
    }
  ],
  currentChannel: {
    _id: '5f7d63d29672610b98fe42cc',
    channelName: 'general',
    creatorID: '5f7e23375a8ac8114e8e9cd7',
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
