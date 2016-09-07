require('./style.scss');

import React from 'react';

export default class List extends React.Component {

	render(){
		return(
			<ul className="list">
				{this.props.items.map((item, index) => (
						<li key={index} className="list--item">{item.name} - {item.diameter} km</li>
				))}
			</ul>
		)
	}
}
