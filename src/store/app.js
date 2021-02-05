import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AuthReducer from '../reducers/auth';
import Characters from '../reducers/characters';


const rootReducer = combineReducers({
  auth: AuthReducer,
  characters: Characters,
});

const configureStore = createStore(
    rootReducer,
    compose( applyMiddleware(thunk))
  );

export default configureStore;