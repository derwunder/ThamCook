import React, { Component } from 'react';
//import $ from 'jquery';
import '../../css/navmenu.css';
import Walkway from 'walkway.js';
import $ from 'jquery';
//var LogoImg = require('../../svg/cooker.svg');

import HeadRoom from 'react-headroom';
import { Link } from 'react-router';

import {connect} from 'react-redux';
//import {startSetHomeBoxLayouts} from '../actions/actions';

import {editorMode,uploadBoxLayout} from '../../actions/actions';


class NavMenu extends Component {
  constructor(props) {
      super(props);
      this.state = {
        tap: false
      };
      this.handleTap = this.handleTap.bind(this);
      this.handleEditor = this.handleEditor.bind(this);

    }
    componentDidMount(){
         new Walkway({
          selector: '#logo_img',
          duration: 5500,
          easing: 'easeInOutCubic'
        }).draw(function() {
          //console.dir('Finished diamond!');
        });
    }
    handleTap(){
    var d = document.getElementById("menu");
    if(this.state.tap===false){
      d.classList.add("menu_center_in");
      d.classList.remove("menu_center_out");
      this.setState({tap:true});
    }
    else{
      d.classList.add("menu_center_out");
      d.classList.remove("menu_center_in");
      this.setState({tap:false});
    }

  }
  handleEditor(){
    var d = document.getElementById("editor-mode");
    //var mv = document.getElementsByClassName("editor-mode");
    //var rs = document.getElementsByClassName("editor-mode");

    var {dispatch, authReducer}= this.props;
    if(authReducer.pass){
      if(!authReducer.editorMode){
        d.classList.remove("fa-hand-pointer-o");
        d.classList.add("fa-floppy-o");
        $('.handler-box').removeClass('editor_off');
        $('.handler-box-editor').removeClass('editor_off');
        $('.handler-gall-editor').removeClass('editor_off');
        $('.addRecipe').removeClass('editor_off');
        $('.editRecipe').removeClass('editor_off');
        $('.react-resizable-handle').removeClass('editor_off');
        $('.addBox').removeClass('editor_off');
        dispatch(editorMode());
      }
      else{
        d.classList.remove("fa-floppy-o");
        d.classList.add("fa-hand-pointer-o");
        $('.handler-box').addClass('editor_off');
        $('.handler-box-editor').addClass('editor_off');
        $('.handler-gall-editor').addClass('editor_off');
        $('.addRecipe').addClass('editor_off');
        $('.editRecipe').addClass('editor_off');
        $('.react-resizable-handle').addClass('editor_off');
        $('.addBox').addClass('editor_off');
        dispatch(editorMode());
        dispatch(uploadBoxLayout());
      }
    }
    else{
      // Expect Comment or message !
    }
  }
  render() {
      /*fa fa-comment  icon de message
        fa fa-arrows  icon arrows*/
        //var d = document.getElementById("editor-mode");
        var classImen="fa fa-comment";
        var classImen2="fa";
    var {authReducer} = this.props;
      //console.log("Testing emailHs: "+authReducer.email);

    if(authReducer.pass){
      //console.log("pass Existe");
      classImen="fa fa-arrows";
      classImen2="fa fa-hand-pointer-o";
    //  d.classList.add("fa-hand-pointer-o");

    }else{
      //console.log("pass Inexistente");
      classImen="fa fa-comment";
      classImen2="fa";
      //d.classList.remove("fa-hand-pointer-o");
    }
          //dispatch(startSetHomeBoxLayouts(testObject));
    return (
      <HeadRoom style={{zIndex:'100'}}>
        <nav id="menu" className="menu menu_center_out handle">
          <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"
            onChange={this.handleTap}/>
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="hamburger hamburger-1"></span>
            <span className="hamburger hamburger-2"></span>
            <span className="hamburger hamburger-3"></span>
          </label>
          <Link onClick={this.handleEditor} to="" className="menu-item">
            <i className={classImen}></i>
            <i id="editor-mode" className={classImen2} /></Link>
          <Link  to="/3" className="menu-item"><i className="fa fa-gift"></i></Link>
          <Link  to="/Recipes" className="menu-item"><i className="fa fa-book"></i></Link>
          <Link  to="/" className="menu-item"><i className="fa fa-home"></i></Link>


        </nav>
        <div className="logo_box">
        {/*  <img  src={LogoImg} alt="logo" role="presentation"/> */}
        <svg version="1.1" id="logo_img" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
        	 viewBox="0 0 463 463" height="45px" width="55px">
        <g>
        	<g>
        		<path d="M367.5,116c-14.435,0-28.741,3.323-41.735,9.655c-19.933-21.896-46.566-35.999-75.529-40.273
        			c-0.008-0.001-0.015-0.002-0.023-0.003c-1.501-0.221-3.007-0.418-4.52-0.586c-0.045-0.005-0.09-0.011-0.135-0.016
        			c-1.487-0.163-2.978-0.302-4.475-0.414c-0.185-0.014-0.37-0.023-0.555-0.036c-1.226-0.086-2.455-0.154-3.687-0.205
        			c-0.361-0.015-0.722-0.03-1.084-0.042c-1.416-0.048-2.834-0.08-4.257-0.08c-1.423,0-2.841,0.032-4.257,0.079
        			c-0.362,0.012-0.723,0.027-1.084,0.042c-1.232,0.051-2.461,0.119-3.687,0.205c-0.185,0.013-0.371,0.022-0.555,0.036
        			c-1.497,0.112-2.988,0.251-4.475,0.414c-0.045,0.005-0.09,0.011-0.135,0.016c-1.513,0.168-3.019,0.365-4.52,0.586
        			c-0.008,0.001-0.015,0.002-0.023,0.003c-28.963,4.274-55.596,18.376-75.529,40.273C124.241,119.323,109.935,116,95.5,116
        			C42.841,116,0,158.841,0,211.5c0,34.256,18.584,65.836,48,82.75v61.25c0,12.958,10.542,23.5,23.5,23.5h320
        			c12.958,0,23.5-10.542,23.5-23.5v-61.25c29.416-16.914,48-48.494,48-82.75C463,158.841,420.159,116,367.5,116z M263.5,364h-64
        			c-9.098,0-16.5-7.402-16.5-16.5c0-9.098,7.402-16.5,16.5-16.5h64c9.098,0,16.5,7.402,16.5,16.5C280,356.598,272.598,364,263.5,364
        			z M400,355.5c0,4.687-3.813,8.5-8.5,8.5H290.319c2.965-4.802,4.681-10.454,4.681-16.5c0-17.369-14.131-31.5-31.5-31.5h-64
        			c-17.369,0-31.5,14.131-31.5,31.5c0,6.046,1.716,11.698,4.681,16.5H71.5c-4.687,0-8.5-3.813-8.5-8.5V299h337V355.5z M402.303,284
        			h-65.915c2.89-4.173,5.533-8.513,7.903-12.996c1.936-3.662,0.536-8.2-3.126-10.135c-3.662-1.936-8.2-0.536-10.136,3.125
        			c-3.763,7.119-8.298,13.834-13.504,20.005H145.476c-5.206-6.171-9.742-12.886-13.504-20.005
        			c-1.937-3.662-6.474-5.063-10.136-3.126c-3.662,1.936-5.062,6.473-3.126,10.135c2.37,4.483,5.013,8.823,7.903,12.996H60.697
        			C32.889,270.625,15,242.347,15,211.5c0-44.388,36.112-80.5,80.5-80.5c11.028,0,21.966,2.313,32.077,6.724
        			c-5,7.044-9.346,14.65-12.897,22.771c-1.659,3.795,0.072,8.217,3.868,9.877c3.793,1.66,8.217-0.073,9.876-3.867
        			c15.687-35.879,48.621-60.649,86.543-66.285c0.005,0,0.011-0.001,0.016-0.002c2.604-0.387,5.232-0.678,7.879-0.881
        			c0.283-0.022,0.567-0.04,0.851-0.059c0.989-0.069,1.982-0.123,2.976-0.166c0.341-0.014,0.682-0.031,1.024-0.042
        			c1.259-0.042,2.521-0.07,3.788-0.07c1.267,0,2.529,0.028,3.788,0.07c0.342,0.011,0.683,0.028,1.024,0.042
        			c0.995,0.043,1.987,0.097,2.976,0.166c0.284,0.02,0.567,0.037,0.851,0.059c2.647,0.203,5.275,0.494,7.879,0.881
        			c0.005,0.001,0.011,0.002,0.016,0.002c37.922,5.635,70.856,30.406,86.543,66.285c1.232,2.817,3.986,4.497,6.876,4.497
        			c1.003,0,2.023-0.203,3-0.63c3.795-1.66,5.527-6.082,3.868-9.877c-3.551-8.121-7.897-15.727-12.897-22.771
        			c10.112-4.411,21.05-6.724,32.077-6.724c44.388,0,80.5,36.112,80.5,80.5C448,242.347,430.111,270.625,402.303,284z"/>
        	</g>
        </g>
        </svg><div>
        <span>ThamCook</span></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo_box_svg" >
          <defs>
            <filter id="shadowed-goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                <feBlend in2="shadow" in="goo" result="goo" />
                <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>

      </HeadRoom>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(NavMenu);
