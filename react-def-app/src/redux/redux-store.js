import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

const redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
