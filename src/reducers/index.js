import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import loginReducer from './loginReducer';

const appReducer = combineReducers({
  sampleReducer,
  loginReducer,
});

export default appReducer;
