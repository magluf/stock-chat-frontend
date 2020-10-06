export enum ChannelActionTypes {
  CREATE_CHANNEL = '[Chanel] Create channel',
  SET_CHANNEL = '[Chanel] Set channel'
}

export interface Channel {
  id: number;
  channelName: string;
  description: string;
  creatorID: string;
}

export interface ChannelState {
  readonly channels: Channel[];
  readonly currentChannel: Channel | null;
  readonly loading: boolean;
  readonly error: boolean;
}
