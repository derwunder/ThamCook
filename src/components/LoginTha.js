import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {startLogin,startLogout} from '../actions/actions';

import '../css/logintha.css';


class Login extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      hover: false
    };*/
   this.onLogin = this.onLogin.bind(this);
   this.onLogout = this.onLogout.bind(this);
  }
  onLogin(){
    var {dispatch} = this.props;
    dispatch(startLogin());
  }
  onLogout(){
    var {dispatch} = this.props;
    dispatch(startLogout());
  }
  render() {

    var {authReducer} = this.props;
    var name="Log In", imgURL="", textMS="Inicia sesion rapido y seguro";
    var classGH="fa fa-github", classLO="fa fa-sign-out";
    if(authReducer.email){
      name=authReducer.displayName;
      imgURL=authReducer.photoURL;
      textMS="Inicio Satisfactorio. Click en Home para administrar";
      classGH="fa ";
      classLO="fa fa-sign-out";
    }else{
      classGH="fa fa-github";
      classLO="fa ";
    }
    return (
      <div id="login-tha">
        
        <h1>Wellcome</h1>
        <h2>{name}</h2>
        <div>
          <img src={imgURL}/>
          <p>{textMS}</p>
          <ul>
            <li>
                <Link  to="/" className=""><i className="fa fa-home" /></Link>
            </li>
            <li>
              <Link onClick={this.onLogin} to="" className=""><i id="gh" className={classGH} /></Link>
            </li>
            <li>
              <Link  onClick={this.onLogout} to="" className=""><i id="lo" className={classLO} /></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
  return state;
})(Login);
