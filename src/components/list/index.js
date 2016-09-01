require('./style.scss');

import React from 'react';
import Input from '../input';

let planets = [
	{name: 'Mercury', diameter: '4,879'},
	{name: 'Venus', diameter: ' 12,100'},
	{name: 'Earth', diameter: '12,742'},
	{name: 'Mars', diameter: '6,752'},
	{name: 'Jupiter', diameter: '139,822'},
	{name: 'Uranus', diameter: '51,118'},
	{name: 'Neptune', diameter: '49,244'},
	{name: 'Pluto', diameter: '2,374'}
]
export default class List extends React.Component{
	constructor(){
		super()
		this.state = {
			data: planets
    }
	}
	handleInputChange(value){
		// console.log(value);
		this.setState ({
      data: planets.filter(x => x.name.indexOf(value) >= 0) // filtra tots els items en que l'indexOf tinguin un valor igual o major que 0
    })
	}

	render() {
		return(

			<div>
				<h2>Planets list</h2>
				<Input onChange={this.handleInputChange.bind(this)} placeholder='Filter planets list'/>
				<ul className="list">
					{this.state.data.map((data, index) => (
							<li key={index} className="list--item">{data.name} - {data.diameter} km</li>
					))}
				</ul>
			</div>
		)
	}
}
