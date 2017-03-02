import React, { Component } from 'react';
import {connect} from 'react-redux';
import ImageGallery from 'react-image-gallery';

import '../../css/homegall.css';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

import '../../css/homegalleditor.css';
import HomeGallEditor from './HomeGallEditor';

import {hombeBoxItemInfo} from '../../actions/actionsHomeBoxItems';



class HomeGall extends Component {
  constructor(props) {
      super(props);
      this.renderVideo = this.renderVideo.bind(this);
    }
    componentWillMount(){
      var {dispatch}=this.props;
      dispatch(hombeBoxItemInfo({isOpenDialogGallEdit: false}));
    }
    componentDidMount(){

    }


  renderVideo(item) {
    return (
      <div className='image-gallery-image'>
        {
        //  this.state.showVideo[item.embedUrl] ?
            <div className='video-wrapper' >

                <iframe style={{width:'100%', height:'330px'}}
                  //width='560'
                  //height='315'
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                >
                </iframe>
            </div>
        }
      </div>
    );
  }
  render() {
      var { homeGallReducer}=this.props;

      var youtube_parser = (url) =>{
          //var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
          //var match = url.match(regExp);
          //return (match&&match[7].length===11)? match[7] : false;

          var match = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
          return match[1];
      }

      var gallery=[], autoPLAY= false;
      if(  homeGallReducer.hasOwnProperty(3)){
        gallery=[]; autoPLAY= false; //console.log("url id: "+youtube_parser(homeGallReducer[0]['urlEmb']));
        if(homeGallReducer[0]['urlEmb']!==''){ autoPLAY= false;
          var embedUrl= "https://www.youtube.com/embed/"+youtube_parser(homeGallReducer[0]['urlEmb'])+"?autoplay=1&showinfo=0"
          gallery.push({original:'',embedUrl: embedUrl,renderItem: this.renderVideo.bind(this)});
        }
        else{
          autoPLAY= true;
        }
        if(homeGallReducer[1]['original']!==''){
          gallery.push({original: homeGallReducer[1]['original']});
        }
        if(homeGallReducer[2]['original']!==''){
          gallery.push({original: homeGallReducer[2]['original']});
        }
        if(homeGallReducer[3]['original']!==''){
          gallery.push({original: homeGallReducer[3]['original']});
        }
      }
    /*var images = [
      {
        original: 'https://chrismartinphotography.files.wordpress.com/2013/01/2012-landscapes-c2a9-christopher-martin-93441.jpg'
      },
      {
        original: ''
        ,description: 'Hola Video',
        embedUrl: 'https://www.youtube.com/embed/ErDkRerNKvQ?autoplay=1&showinfo=0',
        renderItem: this.renderVideo.bind(this)
      },
      {
        original: 'http://palaisroyale.org/image/data/gallery/world-class-cuisine/Dessert%20Buffet_Photo%20by%20Peter%20Thurin.jpg'
      },
      {
        original: 'https://s-media-cache-ak0.pinimg.com/736x/2e/6e/ed/2e6eed1865e82b56a968aa8deaaa9753.jpg'
      }
    ];*/

    return (
      <div className="galbox"><HomeGallEditor/>
        <ImageGallery
                   items={gallery}
                   infinite={true}
                   showBullets={true}
                   showPlayButton={false}
                   showThumbnails={false}
                   autoPlay={autoPLAY}
                   showFullscreenButton={false}
                   slideInterval={autoPLAY?8000:4000}
                 />
    </div>

    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(HomeGall);
