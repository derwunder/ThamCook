import React, { Component } from 'react';
import HomeGall from '../components/HomeBox/HomeGall';
import HomeBox from '../components/HomeBox/HomeBox';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeGall />
        <HomeBox/>
      </div>
    );
  }
}
export default Home;
