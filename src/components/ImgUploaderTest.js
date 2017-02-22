import React, { Component } from 'react';
import '../css/homeitem1.css';

//import Cooker64 from '../svg/cooker64.png';
//import Walkway from 'walkway.js';

//import ImageGallery from 'react-image-gallery';

//import '../css/homegall.css';
//import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

import Dropzone from 'react-dropzone';

import firebase, {firebaseRef,fireStorageRef} from '../FireBaseA';

var preview="";


class ImgUploaderTest extends Component {
  constructor(props) {
      super(props);
      this.state = {
        tap: false
      };
      this.onDrop = this.onDrop.bind(this);
    }
    componentDidMount(){
         /*new Walkway({
          selector: '#svg_ic',
          duration: 5500,
          easing: 'easeInOutCubic'
        }).draw(function() {
          console.dir('Finished diamond!');
        }); */
    }
    onDrop(acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);
      console.log('your preview: '+acceptedFiles[0]["preview"]);
      console.log('your file: '+ acceptedFiles[0]);
      preview=acceptedFiles[0]["preview"];
      var fileImg = acceptedFiles[0];
      var uploadTask = fireStorageRef.child('images/' + fileImg.name).put(fileImg);
      uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // See below for more detail
      }, function(error) {
        // Handle unsuccessful uploads
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        var downloadURL = uploadTask.snapshot.downloadURL;
        console.log('your ImgURL: '+downloadURL);
      });
    }
  render(){
  /*  var browserWidth = window.outerWidth;
    var itemWidth = browserWidth*2;
    var browserWidthHalf = browserWidth/2;
*/


    return(
      <div className="home-item" >
        <Dropzone
          multiple={false}
          accept={'image/*'}
          onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
                <img src={preview}/>
        </Dropzone>

      </div>
    );
  }
}
export default ImgUploaderTest;
