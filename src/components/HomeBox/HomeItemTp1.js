import React, { Component } from 'react';
import '../../css/homeitem1.css';

import TpI1 from '../svgCom/TpI1';
import TpI2 from '../svgCom/TpI2';
import TpI3 from '../svgCom/TpI3';

import ImageGallery from 'react-image-gallery';
import $ from 'jquery';

import '../../css/homegall.css';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

import {connect} from 'react-redux';
import {downloadBoxLayout,setResetHomeBoxLayouts} from '../../actions/actions';



class HomeItemTp1 extends Component {

    componentDidMount(){
      $('.handler-box').addClass('editor_off');
      $('.react-resizable-handle').addClass('editor_off');
      var {dispatch}=this.props;

      dispatch(setResetHomeBoxLayouts());
        dispatch(downloadBoxLayout());
    }
  render(){
  /*  var browserWidth = window.outerWidth;
    var itemWidth = browserWidth*2;
    var browserWidthHalf = browserWidth/2;
*/
    var images = []; var helperCount=0, styleWidth={};
    for(var key in this.props.item){
      if(key==='urlImg1' || key==='urlImg2'|| key==='urlImg3' ){
        images.push({original:this.props.item[key]}); helperCount++;
//        console.log('Img arry: '+JSON.stringify({[key]:this.props.item[key]}));
      }
    } if(helperCount===0){styleWidth={width:'390px'};}

    return(
      <div className="home-item" style={styleWidth} >
        <div className="bl_inline">

          {(this.props.item.typeIcon==='tpi1')?<TpI1/>:<div/>}
          {(this.props.item.typeIcon==='tpi2')?<TpI2/>:<div/>}
          {(this.props.item.typeIcon==='tpi3')?<TpI3/>:<div/>}

          <div className="item-box-title">
            <h3>{this.props.item.titulo} </h3>
          </div>
        </div>
        <div className="desc-text bl_inline">
            <h4>{this.props.item.subtitulo}</h4>
            <p>{this.props.item.texto}</p>
        </div>
        {(images.length > 0)?
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
          :<div/>}
      </div>
    );
  }
}
export default connect(

)(HomeItemTp1);
