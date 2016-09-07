require('./style.scss');
import React from 'react';

export default class Input extends React.Component {

	handleChange(e){
		let value = e.target.value
		this.props.onChange(value) // send input value as a prop to be used by the parent component
	}

	render(){
		return(
			<div className='input'>
				<input type='text'
					value={this.props.value}
					placeholder={this.props.placeholder}
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		)
	}
}
