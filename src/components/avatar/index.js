require('./style.scss');
import React from 'react';

export default class Animal extends React.Component {

  render() {
    return(
      <div className="avatar">
        <img className="avatar--image" src={"./src/img/" + this.props.selectedAvatar + ".jpg"} title={this.props.selectedAvatar} width="100"/>
      </div>
    )
  }
}
