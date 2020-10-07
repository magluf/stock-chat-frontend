import { combineReducers } from 'redux';

import user from './user/reducer';
import channel from './channel/reducer';
import message from './message/reducer';

export default combineReducers({ user, channel, message });
