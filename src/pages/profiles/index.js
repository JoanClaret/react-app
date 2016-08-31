
import React from 'react';
import Select from './../../components/select';
import Avatar from './../../components/avatar';

let profiles = [
  {type: 'dog', sound: 'Rooff', url:'./../dist/img/dog.jpg'},
  {type: 'cat', sound: 'Meow', url:'./../dist/img/cat.jpg'},
  {type: 'lamb', sound: 'Baaa', url:'./../dist/img/lamb.jpg'},
  {type: 'duck', sound: 'Quack'}
];

export default class Profiles extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedUser: 'cat', // initial state
			data: profiles
    }
    this.update = this.update.bind(this)
  }
  update(value){
    this.setState({
      selectedUser: value,
			selectedUrl: this.state.selectedUrl
    })
  }
  render() {
		var url = profiles.filter(x => x.type == this.state.selectedUser )[0].url;
    return(
      <div>
        <h1>Profiles</h1>
        <Select data={this.state.data} value={this.state.selectedUser} onValueChange={this.update} />
        <Avatar avatarUrl={url} title={this.state.selectedUser}/>
      </div>
    )
  }
}
