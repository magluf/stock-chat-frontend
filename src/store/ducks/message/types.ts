export enum MessageActionTypes {
  SET_MESSAGES_GENERAL = '[Message] Set messages @ General',
  SET_MESSAGES_TRIVIAL = '[Message] Set messages @ Trivial'
}

export interface Message {
  _id: string;
  content: string;
  authorId: string;
  channelId: string;
  username: string;
  createdAt: string;
}

export interface MessageState {
  readonly generalMessages: Message[];
  readonly trivialMessages: Message[];
  readonly loading: boolean;
  readonly error: boolean;
}
