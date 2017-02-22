import React, { Component } from 'react';

import NavMenu from '../components/navmenu/NavMenu';
import Foot from '../components/Foot';

class PageMain extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        {this.props.children}  {/*it will allow routes pages...*/}
        <Foot/>
      </div>
    );
  }
}
export default PageMain;
