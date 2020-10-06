import { Reducer } from 'redux';
import { ChannelState, ChannelActionTypes } from './types';

const INITIAL_STATE: ChannelState = {
  channels: [
    {
      id: 1,
      channelName: 'general',
      creatorID: '5f7ce955430700baa6e31f28',
      description: 'Generalities.'
    },
    {
      id: 2,
      channelName: 'trivial',
      creatorID: '5f7ce955430700baa6e31f28',
      description: 'Trivialities.'
    }
  ],
  currentChannel: {
    id: 1,
    channelName: 'general',
    creatorID: '5f7ce955430700baa6e31f28',
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
        data: state.channels.concat(action.payload.team),
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
