import React from 'react';
import Input from '../input';
import Button from '../button';



export default class ListAdd extends React.Component {

	constructor(){
		super()
		this.update = this.update.bind(this)
		this.state = {
			value: ''
		}
	}

	update(value){
		console.log(value);
		this.setState({
			value: value
		})
	}

	handleSubmit(e){
		this.props.onAddItem(this.state.value)
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>
				<Input
					onChange={this.update}
					placeholder='Insert a new item'
					value={this.state.value}
				/>
				<Button type='submit' text='Add'/>
			</form>
		)
	}
}
