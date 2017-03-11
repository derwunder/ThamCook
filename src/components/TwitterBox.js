import React, { Component } from 'react';
//import '../css/homeitem1.css';

import { Timeline } from 'react-twitter-widgets'

class TwitterBox extends Component {


    componentDidMount(){

    }
    componentWillMount(){

    }
  render(){

    return(
      <div className="twitter-widget">
        <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'thama111'
            }}
            options={{
              height: '300'
            }}
            onLoad={() => {}}
          />
        {/*<a className="twitter-timeline"  href="https://twitter.com/Derwunder"
        data-widget-id="507356316059181056">Tweets por @Derwunder.</a>
        {
          !function(d,s,id){
            var js,fjs=d.getElementsByTagName(s)[0],
            p=/^http:/.test(d.location)?'http':'https';
            if(!d.getElementById(id)){
            js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js,fjs);}
          }(document,"script","twitter-wjs")
        }
        */}
      </div>
    );
  }
}
export default TwitterBox;
