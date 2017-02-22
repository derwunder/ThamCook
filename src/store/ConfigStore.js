//import {combineReducers,createStore} from 'redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import {authReducer,homeBoxReducer,homeBoxItemsReducer,
  homeBoxItemEditorReducer,homeGallReducer} from '../reducers/reducers';

export var configureStore = (initialState = {}) =>{
  var reducer= redux.combineReducers({
    authReducer: authReducer,
    homeGallReducer:homeGallReducer,
    homeBoxReducer: homeBoxReducer,
    homeBoxItemsReducer:homeBoxItemsReducer,
    homeBoxItemEditorReducer: homeBoxItemEditorReducer
  });

  var store = redux.createStore(
      reducer,
      initialState,
      redux.compose(
        redux.applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f=>f
      )
  );

  return store;
};
