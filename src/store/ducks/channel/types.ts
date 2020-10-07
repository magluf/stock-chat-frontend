export enum ChannelActionTypes {
  CREATE_CHANNEL = '[Chanel] Create channel',
  SET_CHANNEL = '[Chanel] Set channel'
}

export enum ChannelID {
  GENERAL = '5f7ce99e430700baa6e31f2f',
  TRIVIAL = '5f7ce9b9430700baa6e31f33'
}

export interface Channel {
  _id: string;
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
