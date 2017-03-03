import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {startLoginGitHub,startLoginFace,startLogout} from '../actions/actions';

import '../css/logintha.css';


class Login extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      hover: false
    };*/
   this.onLoginGit = this.onLoginGit.bind(this);
   this.onLogout = this.onLogout.bind(this);
   this.onLoginFace=this.onLoginFace.bind(this);
  }
  onLoginGit(){
    var {dispatch} = this.props;
    dispatch(startLoginGitHub());
  }
  onLoginFace(){
    var {dispatch} = this.props;
    dispatch(startLoginFace());
  }
  onLogout(){
    var {dispatch} = this.props;
    dispatch(startLogout());
  }
  render() {

    var {authReducer} = this.props;
    var name="Log In", imgURL="", textMS="Inicia sesion rapido y seguro";
    var classGH="fa fa-github", classLO="fa fa-sign-out", classFA="fa-facebook-official";
    if(authReducer.uid){
      name=authReducer.displayName;
      imgURL=authReducer.photoURL;
      textMS="Inicio Satisfactorio. Click en Home para administrar";
      classGH="fa ";
      classLO="fa fa-sign-out";
      classFA="fa "
    }else{
      imgURL="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FScreenshot_20170302-203202.png?alt=media&token=3c589ec6-cab6-43ec-b4b4-38d502d8c079";
      classGH="fa fa-github";
      classLO="fa ";
      classFA="fa fa-facebook-official"
    }
    return (
      <div id="login-tha">

        <h1>Wellcome</h1>
        <h2>{name}</h2>
        <div>
          <img alt="Profile Pic" src={imgURL}/>
          <p>{textMS}</p>
          <ul>
            <li>
                <Link  to="/" className=""><i className="fa fa-home" /></Link>
            </li>
            <li>
              <Link onClick={this.onLoginFace} to="" className=""><i id="fa" className={classFA} /></Link>
            </li>
            <li>
              <Link onClick={this.onLoginGit} to="" className=""><i id="gh" className={classGH} /></Link>
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
