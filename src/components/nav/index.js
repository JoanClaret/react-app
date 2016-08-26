require('./style.scss');

import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return(
      <nav>
        <IndexLink activeClassName='active' to='/'>Home</IndexLink>
        <Link activeClassName='active' to='/gallery'>Gallery</Link>
        <Link activeClassName='active' to='/about'>About</Link>
      </nav>
    )
  }
}
