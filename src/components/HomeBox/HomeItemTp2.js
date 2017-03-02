import React, { Component } from 'react';
import '../../css/homeitem3.css';

import $ from 'jquery';

import {connect} from 'react-redux';
import {downloadBoxLayout,setResetHomeBoxLayouts} from '../../actions/actions';



class HomeItemTp2 extends Component {



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
    var helperCount=0, styles={}, stylesBox={};
    for(var key in this.props.item){
      if(key==='urlImg' ){
         helperCount++;
//        console.log('Img arry: '+JSON.stringify({[key]:this.props.item[key]}));ss
      }
    } if(helperCount===0){styles={color:'rgba(204, 36, 125, 0.8)',border:'0', margin: '1%',fontSize: '34px'};
                          stylesBox={border:'0px', textAlign:'center'}}

    //console.log("your item2: "+JSON.stringify(this.props.item));

    return(
      <div className="home-item3">
        <div className="">
          <div className="box-item3"
            style={{background:`url(${this.props.item.urlImg})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'100% 100%',
                    ...stylesBox}}>
            <h3 style={styles}>{this.props.item.titulo}</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
)(HomeItemTp2);
