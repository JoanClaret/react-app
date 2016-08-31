require('./style.scss');
import React from 'react';

export default class Animal extends React.Component {

  render() {

    // default image?
    let url = this.props.avatarUrl ? this.props.avatarUrl : './../dist/img/default.jpg';

    return(
      <div className="avatar">
        <img className="avatar--image" src={url} title={this.props.title} width="100"/>
      </div>
    )
  }
}
