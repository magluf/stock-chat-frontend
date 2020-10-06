import { combineReducers } from 'redux';

import user from './user/reducer';
import channel from './channel/reducer';

export default combineReducers({ user, channel });
