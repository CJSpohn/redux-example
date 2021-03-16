import ideaReducer from './ideas';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  ideaReducer,
  loggedReducer
})

export default rootReducer
