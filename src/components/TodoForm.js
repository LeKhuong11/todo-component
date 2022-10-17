import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			input: e.target.value,
		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: this.state.input,
			check: false
		})		
		this.setState({
			input: ''
		})
	}

	
	render() {
		return (
			<div className="todo-form-container">
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text" 
						placeholder="What need to be done?" 
						value={this.state.input}  
						onChange={this.handleChange}	
					/>
					<input type="submit" value='Add todo'/>
				</form>
			</div>
		);
	}
}

export default TodoForm;
