import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
import auth from '../reducers/authReducer';

const rootReducer = combineReducers({
  form,
  auth
});

export default rootReducer;