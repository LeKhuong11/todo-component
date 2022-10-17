import React, { Component } from 'react';
import TodoCheck from './TodoICheck';
import './TodoEdit.css';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			show: this.props.check,
			edit: false,
			updateTodo: '',
			text: this.props.text
		}
		this.handleChangeUpdateForm = this.handleChangeUpdateForm.bind(this);
	}

	handleToggleStatus = (event) => {
		const store = JSON.parse(localStorage.getItem('todos'));

		store.forEach( (newData, index) => {
			if(newData.id === this.props.id){
				newData.check = !newData.check
				this.setState({
					show: newData.check
				})
				localStorage.setItem('todos', JSON.stringify(store))
				this.props.onHandleToggle(index, newData.check, this.props.id)
				return 
			}
		});
	}

	handleEditClick = () => {
		this.setState({
			edit: true
		})
	}

	//Xoa todo
	handleDeleteClick = () => {
		this.props.onHandleDeleteClick(this.props);
	}

	//Update value tren localstorage
	handleClickUpdateForm = () => {
		const store = JSON.parse(localStorage.getItem('todos'));

		store.forEach( e => {
			if(e.id === this.props.id){
				e.text = this.state.updateTodo
				return
			}
		});

		if(this.state.updateTodo)
			localStorage.setItem('todos', JSON.stringify(store))
		else 
			alert("Please enter something...")

		this.setState({
			edit: false,
			text: this.state.updateTodo ? this.state.updateTodo : this.props.text
		})
	}

	//Luu value tu nguoi dung nhap
	handleChangeUpdateForm = (e) => {
		this.setState({
			updateTodo: e.target.value
		})
	}

	render() {
		return (
			<div className="todo-item-container">
				<span className="todo-item-toggle" onClick={(e) => this.handleToggleStatus(e)}>
					{this.state.show && <TodoCheck /> }
				</span>				
				<div className="todo-item-content " >
				{this.state.edit ?
					<div>
						<form className='todo-content' onSubmit={this.handleClickUpdateForm}>
							<input type="text" placeholder='Update value...' autoFocus className='todo-update complet' onChange={this.handleChangeUpdateForm} />
							<input type="submit" value="Update" className="toto-btn-update" />	
						</form> 
					</div> :
					<div className='todo-content'>
						<div className={this.state.show ? '' : 'completed'}>{this.state.text}</div>
						<div className="todo-item-options">
							<span className="icon-btn" onClick={() => this.handleEditClick()}>
								<img src="assets/edit.svg" alt="edit" />
							</span>
							<span className="icon-btn" onClick={() => this.handleDeleteClick()}>
								<img src="assets/delete.svg" alt="close" />
							</span>
						</div>
					</div>}
				</div>
			</div>
		);
	}
}

export default TodoItem;
