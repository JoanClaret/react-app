require('./style.scss');

import React from 'react';
import Nav from '../nav';

export default class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="container">
          Hello World
          <Nav />
        </div>
      </header>
    )
  }
}
