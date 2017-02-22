import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import Router from './Router';
import firebase from './FireBaseA';
import {configureStore} from './store/ConfigStore';
import {login, logout,downloadBoxLayout,startSetHomBoxItems} from './actions/actions';
import {downloadGallBox} from './actions/actionsHomeBoxItems';

import '../node_modules/react-mdl/extra/material.css';
import '../node_modules/react-mdl/extra/material.js';
import './index.css';
import './css/handlerbox.css';
import './css/handlerboxeditor.css';




var store = configureStore();

firebase.auth().onAuthStateChanged(function(user){
  if(user){
    var pass = ("der.wunder.nv@gmail.com"===user.email) ? true : false;
    var editorMode = false;
    var userData ={uid:user.uid,email:user.email,displayName:user.displayName,photoURL:user.photoURL,pass:pass,editorMode:editorMode};
    //console.log("User UID: "+JSON.stringify(user));
    store.dispatch(login(userData));
    //store.dispatch(startAddTodos());
  //  hashHistory.replace('/'); //this should be an action "Edit Mode"
  }else{
    store.dispatch(logout());
    //hashHistory.replace('/');  this should be an action "Exit Edit Mode"
  }
});

store.dispatch(downloadBoxLayout());
store.dispatch(startSetHomBoxItems());
store.dispatch(downloadGallBox());

ReactDOM.render(<Provider store={store}>
  <Router/></Provider>,
  document.getElementById('root')
);
