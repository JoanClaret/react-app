require('./style.scss');
import React from 'react';

export default class Input extends React.Component {

	handleChange(e){
		this.props.onChange(e.target.value) // send input value as a prop to be used by the parent component
	}
	render(){
		return(
			<div className='input'>
				<input type='text' placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)} />
			</div>
		)
	}
}
