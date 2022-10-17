import React from 'react'
import './TodoEdit.css'

export default function TodoEdit() {
    const handleDeleteClick = () => {
        
    }
  return (
    <div className="todo-edit">
        <h2>Edit Content</h2>
        <form action="">
            <input type="text" placeholder='Change content' />
            <input type="submit" value="Change" />
            <span className="todo-icon-btn" onClick={() => handleDeleteClick()}>
				<img src="assets/delete.svg" alt="close" />
			</span>
        </form>
    </div>
  )
}
