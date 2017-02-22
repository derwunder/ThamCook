import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


import PageMain from './views/PageMain';
import Home from './views/Home';
import LoginTha from './components/LoginTha';

import firebase from './FireBaseA';

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var requireLogout = (nextState,replace,next)=>{
  if(firebase.auth().currentUser){
    replace('/');
  }
    next();
};




class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={PageMain}>
          <IndexRoute component={Home}/>
          {/*<Route path="todos" component={TodoApp} onEnter={requireLogin}/>
          <IndexRoute component={Login} onEnter={requireLogout}/>

          DERNV example
          <Router history={AppHistory} >
            <Route path="/" component={PageMain}>
              <IndexRoute  component={AboutPage}/>
              <Route path="/portfolio" component={PortfolioPage}/>
            </Route>
          </Router>
          */}
        </Route>
        <Route path="/LoginTha"  component={LoginTha}/>
      </Router>


    );
  }
}

export default Routes;
