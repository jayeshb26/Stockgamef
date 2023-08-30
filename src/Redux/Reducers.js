import { combineReducers } from 'redux';
import AuthReducers from './Auth/AuthReducers';

const rootReducer = combineReducers({
  auth: AuthReducers,
});

export default rootReducer;