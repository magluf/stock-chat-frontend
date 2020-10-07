export enum MessageActionTypes {
  CREATE_MESSAGE = '[Chanel] Create message'
}

export interface Message {
  _id: string;
  content: string;
  authorID: string;
  channelID: string;
}

export interface MessageState {
  readonly messages: Message[];
  readonly loading: boolean;
  readonly error: boolean;
}
