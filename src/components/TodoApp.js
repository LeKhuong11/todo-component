import React, { Component } from 'react';
import TodoFilter from './TodoFilter';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

class TodoApp extends Component {
	constructor() {
		super();
		const store = JSON.parse(localStorage.getItem('todos'));

		this.state = {
			todos: store ? store : [],
			amount: store.length
		}
		this.addTodo = this.addTodo.bind(this); 
		this.deleteTodo = this.deleteTodo.bind(this); 
		this.handleFilter = this.handleFilter.bind(this); 
	}
	
	//Them item
	addTodo = (todo) => {
		const newTodos = [todo, ...this.state.todos];
		localStorage.setItem('todos', JSON.stringify(newTodos))
		this.setState({
			todos: newTodos,
			amount: newTodos.length
		})
	} 
	// Xoa item
	deleteTodo = (todo) => {
		const todos = this.state.todos;
		const newTodos = todos.filter( item => {
			return item.id !== todo.id;
		})
		localStorage.setItem('todos', JSON.stringify(newTodos));
		this.setState({
			todos: newTodos, 
			amount: newTodos.length

		})
	}

	handleFilter = (todo) => {
		this.setState({
			todos: todo
		})
	}

	handleToggle = (index,status, id) => {
		const newData = this.state.todos;
		newData[index].check = status
		console.log(newData);
		this.setState({
			todos: newData			
		}) 
	}
	
	render() {
		return (
			<>
				<div className="app-container">
					<TodoHeader />

					<div className="todo-container">
						<TodoForm onSubmit={this.addTodo}/>
						<TodoFilter 
							onHandleFilter={this.handleFilter} 
							amount={this.state.amount} 
							todos={this.state.todos} 
						/>
						<TodoList 
							onHandleToggle={this.handleToggle} 
							onDelete={this.deleteTodo} 
							todos={this.state.todos}
						/>
					</div>
				</div>

				<TodoFooter />
			</>
		);
	}
}

export default TodoApp;
