import React, { Component } from 'react';
import TodoItem from './TodoItem';



class TodoList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			todos: this.props.todos
		}
		this.deleteTodo = this.deleteTodo.bind(this)
	}

	deleteTodo = (e) => {
		this.props.onDelete(e);
	}

	render() {
		return (
			<div className="todo-list-container">
			{this.props.todos ? this.props.todos.map((todo) => (
				<TodoItem 
					text={todo.text} 
					id={todo.id} 
					check={todo.check} 
					key={todo.id} 
					onHandleDeleteClick={this.deleteTodo}
					onHandleToggle={this.props.onHandleToggle}
				/>
			 )): null}
		</div>
		);
	}
}

export default TodoList;
