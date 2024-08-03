
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import postsReducer from './Action/PostReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(rootReducer, applyMiddleware(thunk)); // without using composeWithDevttools
export default store;
