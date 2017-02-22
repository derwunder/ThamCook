import React, { Component } from 'react';
//import '../css/homeitem1.css';

class TwitterBox extends Component {
  constructor(props) {
      super(props);
      /*this.state = {
        tap: false
      };*/
    //  this.onVisible = this.onVisible.bind(this);
    }

    componentDidMount(){

    }
  render(){

    return(
      <div className="twitter-widget">
        <a className="twitter-timeline"  href="https://twitter.com/Derwunder"
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
      </div>
    );
  }
}
export default TwitterBox;
