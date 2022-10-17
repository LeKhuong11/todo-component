import React, { Component } from 'react';

class TodoFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: this.props.todos
		}
		this.myRef = React.createRef()

		this.hanleTodoActive = this.hanleTodoActive.bind(this)
		this.hanleTodoCompleted = this.hanleTodoCompleted.bind(this)
	}
	handleTodos = () => {
		this.props.onHandleFilter(this.state.todos)
	}
	hanleTodoActive = (e) => {
		this.sendDataToApp(false);	
	}
	hanleTodoCompleted = () => {
		this.sendDataToApp(true);	
	}

	sendDataToApp = (check) => {
		const todos = this.state.todos;
		
		const todoCompleted = [];

		todos.forEach( e => {
			if(e.check === check) {
				todoCompleted.push(e)
			}
		});
		this.props.onHandleFilter(todoCompleted)
	}

	render() {
		return (
			<div className="todo-footer-container">
				<div className="todo-count">{this.props.amount} items left</div>
				<div className="todo-menus">
					<span className="active" onClick={this.handleTodos}>All</span>
					<span onClick={this.hanleTodoActive}>Active</span>
					<span onClick={this.hanleTodoCompleted}>Complete</span>
				</div>
			</div>
		);
	}
}

export default TodoFilter;
