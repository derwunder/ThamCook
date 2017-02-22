import React, { Component } from 'react';
import '../../css/homeitem3.css';

import Cooker64 from '../../svg/cooker64.png';
import Walkway from 'walkway.js';





class HomeItem3 extends Component {
  constructor(props) {
      super(props);
      this.state = {
        tap: false
      };
      //this.handleTap = this.handleTap.bind(this);
    }
    componentDidMount(){
         new Walkway({
          selector: '#svg_ic',
          duration: 5500,
          easing: 'easeInOutCubic'
        }).draw(function() {
          console.dir('Finished diamond!');
        });
    }
  render(){

    return(
      <div className="home-item3">
        <div className="bl_inline ">
          <div className="box-item3"
            style={{background:'url(images/ingredients_01.jpg)',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'100% 100%'}}>
            <h3>Secretos Majestuosos</h3>
          </div>
        </div>
        <div className="bl_inline ">
          <div className="box-item3"
            style={{background:'url(images/preparation_01.jpg)',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'100% 100%'}}>
            <h3>Pasos sencillos</h3>
          </div>
        </div>
        <div className="bl_inline">
          <div className="box-item3"
            style={{background:'url(images/time_01.JPG)',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'100% 100%'}}>
            <h3>Ahorra tiempo</h3>
          </div>
        </div>


      </div>
    );
  }
}
export default HomeItem3;
