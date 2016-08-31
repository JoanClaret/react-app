
import React from 'react';
import Select from './../../components/select';
import Avatar from './../../components/avatar';

var profiles = [
  {type: 'dog', sound: 'Rooff'},
  {type: 'cat', sound: 'Meow'},
  {type: 'lamb', sound: 'Baaa'}
];

export default class Profiles extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedUser: 'cat', // initial state
			data: profiles // set data to pass trough the component
    }
    this.update = this.update.bind(this)
  }
  update(value){
    this.setState({
      selectedUser: value
    })
  }
  render() {
    return(
      <div>
        <h1>Profiles</h1>
        <Select data={this.state.data} value={this.state.selectedUser} onValueChange={this.update} />
        <Avatar selectedAvatar={this.state.selectedUser} />
      </div>
    )
  }
}
