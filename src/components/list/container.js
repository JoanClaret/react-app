
import React from 'react';
import List from './list';
import ListFilter from './filter';
import ListAdd from './add';


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

export default class ListContainer extends React.Component{

	constructor(){
		super()
		this.state = {
			data: planets
		}
	}

	handleAddItem(value){
		console.log('uola')
		//this.setState(newState);
		this.setState({
			data: this.state.data.concat({name: value})
		})

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

					<ListFilter placeholder='Filter planets list' onValueChange={this.handleInputChange.bind(this)}/>
					<List items={this.state.data}/>
					<ListAdd onAddItem={this.handleAddItem.bind(this)}/>

			</div>
		)
	}
}
