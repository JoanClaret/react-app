import React from 'react';
require('./style.scss');

function logChange(val) {
    console.log("Selected: " + val);
}

export default class Select extends React.Component {

  handleChange(e) {
    let value = e.target.value
    this.props.onValueChange(value)
    console.log("Selected: " + value);
  }
  render() {
    let selectOptions = this.props.data.map(function(animal) {
      return (
        <option key={animal.type} value={animal.type}>{animal.sound}</option>
      )
    })
    return(
      <div className="select">
        <select value={this.props.value} onChange={this.handleChange.bind(this)}>
        {selectOptions}
        </select>
      </div>
    )
  }
}
