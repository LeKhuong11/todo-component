import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import './styles.css';

ReactDOM.render(
	<React.StrictMode>
		<TodoApp />
	</React.StrictMode>,
	document.querySelector('#root')
);
