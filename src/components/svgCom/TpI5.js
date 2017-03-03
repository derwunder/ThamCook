import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Walkway from 'walkway.js';

class TpI5 extends Component {
  onVisible(){
      new Walkway({
      selector: '#hourGlass-1',
      duration: 1500,
      easing: 'easeInOutCubic'
    }).draw(function() {
      //console.dir('Finished diamond!');
    });
  }
  render(){
    return(
      <VisibilitySensor onChange={this.onVisible}
        minTopValue={30}
        minRightValue={30}
        scrollDelay={200}
        delayedCall={true}
         partialVisibility={true} scrollCheck={true} >
         <svg version="1.1" id="hourGlass-1" className="tpi5" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 453.872 453.871"
           >
         <g>
          <g id="Layer_8_7_">
            <path d="M369.822,42.794h17.744V0H66.305v42.794h17.746v11.105c0,69.716,23.859,133.656,63.155,171.591
              c-39.296,37.942-63.155,101.877-63.155,171.596v13.992H66.305v42.793h321.261v-42.793h-17.744v-13.992
              c0-69.719-23.863-133.653-63.154-171.596c39.291-37.935,63.154-101.864,63.154-171.591V42.794z M276.738,214.327l-14.735,11.163
              l14.735,11.163c36.771,27.885,61.451,84.345,64.71,146.425H112.431c3.257-62.074,27.926-118.534,64.708-146.425l14.727-11.163
              l-14.727-11.163c-36.776-27.888-61.451-84.34-64.708-146.42h229.008C338.189,129.987,313.508,186.439,276.738,214.327z
               M141.955,90.167h169.96c-2.457,47.136-21.202,90.009-49.143,111.183c0,0-4.784,2.066-11.173,8.47
              c-13.218,18.876-13.923,87.873-13.945,90.915c9.49,1.013,19.743,5.018,29.904,14.299c35.85,32.755,46.252,36.618,47.503,60.396
              H146.965c1.25-23.772,21.646-40.785,47.5-60.396c0,0,12.3-10.795,29.552-13.79c-0.314-0.542-0.498-0.908-0.498-0.908
              c0-64.99-21.248-92.857-21.248-92.857l-15.103-8.47C159.236,177.821,144.42,137.304,141.955,90.167z"/>
          </g>
         </g>

         </svg>
    </VisibilitySensor>
    );
  }
}

export default TpI5;
