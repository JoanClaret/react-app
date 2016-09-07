import React from 'react';
import Input from '../input';

export default class ListFilter extends React.Component{
	handleInputChange(value){
		console.log(value);
		this.props.onValueChange(value)
	}
	render(){
		return(
			<Input onChange={this.handleInputChange.bind(this)} placeholder={this.props.placeholder}/>
		)
	}
}
