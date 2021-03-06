import React, { Component } from 'react';
import '../../css/homeitem1.css';

import Walkway from 'walkway.js';

import ImageGallery from 'react-image-gallery';

import '../../css/homegall.css';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";





class HomeItem1 extends Component {
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
  /*  var browserWidth = window.outerWidth;
    var itemWidth = browserWidth*2;
    var browserWidthHalf = browserWidth/2;
*/

    const images = [
      {
        original: 'https://www.gourmetfoodstore.com/images/gfs/topcat/home-right-chocolate-cake-2.jpg'//'images/land1test.jpg'

      },
      {
        original: 'http://eatingtherainbow-g15t10.weebly.com/uploads/2/7/2/5/27254417/6495241_orig.jpg'
      },
      {
        original: 'http://eatingtherainbow-g15t10.weebly.com/uploads/2/7/2/5/27254417/3446623_orig.jpg'
      }
    ];
    return(
      <div className="home-item" >
        <div className="bl_inline">
          <svg version="1.1" id="svg_ic" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
          	  viewBox="0 0 97.788 97.788" >
          <g>
          	<g>
          		<path d="M77.718,85.783c-0.838-12.09-4.475-20.664-8.808-26.196c2.197-0.388,3.504-1.33,3.504-1.33
          			c-4.245-0.961-5.888-5.616-5.888-5.616c3.733,0.891,5.888-1.047,5.888-1.047c-2.555-0.627-5.271-3.877-6.589-5.636
          			c1.938-0.981,3.075-3.369,3.548-6.13c0.652-3.819-0.589-5.806-2.864-6.412l0.074-7.314c3.396-1.535,6.065-4.271,6.294-9.183
          			c0.254-5.424-4.401-9.832-9.832-9.832c-1.616,0-3.139,0.398-4.481,1.09C57.773,3.516,53.725,0,48.888,0c-0.002,0-0.002,0-0.002,0
          			c-0.084,0-0.166,0.001-0.25,0.003c-4.777,0.118-8.67,3.627-9.441,8.169c-1.344-0.688-2.864-1.049-4.477-1.086
          			c-0.062-0.001-0.125-0.001-0.187-0.001c-4.635,0-9.631,3.969-9.631,9.328c0,4.657,2.432,8.174,6.303,9.689l0.043,7.323
          			c-2.256,0.616-3.483,2.602-2.836,6.403c0.471,2.743,1.578,5.147,3.549,6.133c-1.316,1.759-4.033,5.005-6.586,5.632
          			c0,0,2.154,1.937,5.888,1.047c0,0-1.643,4.655-5.888,5.616c0,0,1.351,0.97,3.608,1.346c-4.532,5.706-8.214,14.234-8.915,26.184
          			c-0.191,3.271,2.033,6.084,4.92,6.274c0.102,0.009,5.645,0.289,5.645,0.289c3.283,3.612,9.813,5.439,18.141,5.439
          			c7.844,0,14.938-1.528,18.383-5.439c0,0,5.543-0.28,5.648-0.289C75.687,91.869,77.944,89.056,77.718,85.783z M48.892,53.949
          			c-6.982,0-12.164-6.954-12.759-16.794c3.271-0.773,5.485-2.035,6.989-3.309h5.617c2.697,2.422,7.035,5.323,12.631,5.708
          			C60.07,47.896,55.465,53.949,48.892,53.949z M60.232,57.124c-3.258,2.903-7.18,4.534-11.338,4.534
          			c-4.225,0-8.176-1.605-11.432-4.469l2.326-1.709c2.641,2.143,5.76,3.326,9.104,3.326c3.458,0,6.533-1.203,9.11-3.322
          			L60.232,57.124z M61.572,28.863H36.203l-0.011-1.915H61.59L61.572,28.863z M29.884,16.412c0-1.454,0.905-2.495,1.445-2.986
          			c0.922-0.837,2.148-1.358,3.201-1.358l0.072,0.001c0.881,0.02,1.66,0.202,2.318,0.539c0.713,0.366,1.493,0.549,2.273,0.549
          			c0.764,0,1.529-0.176,2.232-0.528c1.419-0.711,2.415-2.056,2.681-3.621c0.381-2.241,2.29-3.909,4.558-4.011
          			c2.729,0.021,4.591,1.698,4.984,4.015c0.266,1.567,1.264,2.913,2.686,3.624c0.701,0.351,1.465,0.526,2.229,0.526
          			c0.782,0,1.563-0.185,2.281-0.553c0.691-0.356,1.434-0.538,2.2-0.538c1.379,0,2.716,0.57,3.662,1.563
          			c0.58,0.608,1.258,1.631,1.191,3.053c-0.113,2.432-1.09,3.843-3.369,4.874c-1.423,0.643-2.43,1.908-2.782,3.387H36.038
          			c-0.374-1.564-1.478-2.884-3.019-3.487C30.427,20.446,29.884,18.155,29.884,16.412z M72.312,86.892
          			c-0.747,0.041-3.888,0.2-5.015,0.257v-5.225c0-0.717-0.58-1.296-1.297-1.296s-1.297,0.579-1.297,1.296v5.359l-1.443,1.639
          			c-2.028,2.303-7.446,3.682-14.49,3.682c-6.828,0-12.173-1.398-14.303-3.742l-1.387-1.524v-5.412c0-0.717-0.582-1.296-1.297-1.296
          			c-0.717,0-1.297,0.579-1.297,1.296v5.226c-1.115-0.058-4.209-0.215-5.014-0.258c-0.092-0.109-0.248-0.393-0.227-0.842
          			c0.721-13.928,5.009-21.204,8.811-24.951c3.203,2.799,6.964,4.647,10.945,5.385v2.537h7.779v-2.533
          			c3.961-0.729,7.744-2.562,10.945-5.389c3.838,3.729,8.09,10.938,8.81,24.951C72.562,86.499,72.403,86.781,72.312,86.892z"/>
          		<circle cx="48.89" cy="84.197" r="2.723"/>
          		<circle cx="48.89" cy="75.731" r="2.723"/>
          	</g>
          </g>
          </svg>
          <div className="item-box-title">
            <h3>Amante a la cosina </h3>
          </div>
        </div>
        <div className="desc-text bl_inline">
            <h4>El Detalle mas Simple</h4>
            <p>Esto es un texto de prueba el cual describe brevemente como llevar acabo un parrafo simple y minimalista.</p>
        </div>
        <div className="image-gallery-item1 bl_inline">
          <ImageGallery
                     items={images}
                     infinite={true}
                     showBullets={false}
                     showPlayButton={false}
                     showThumbnails={false}
                     disableSwipe={true}
                     autoPlay={true}
                     showNav={false}
                     showFullscreenButton={false}
                     slideInterval={8000}/>
        </div>


      </div>
    );
  }
}
export default HomeItem1;
