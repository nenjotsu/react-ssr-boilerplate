import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter
} as any);

export default rootReducer;
