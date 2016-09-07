require('./style.scss');

import React from 'react';

export default class Button extends React.Component{

	render(){
		return(
			<button className='button' type={this.props.type}>{this.props.text}</button>
		)
	}
}
