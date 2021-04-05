import React, {useState} from 'react'
import './todo.css'

const Todo = () => {
	const [todoItems, todoItemsSet] = useState([]);
	const [todoInput, todoInputSet] = useState('');
	const [error, errorSet] = useState(false);
	const formSubmitHandler = event => {
		event.preventDefault();
		console.log('Form submitted');
		if(todoInput) {
		 todoItemsSet(todoItemsOld => [...todoItemsOld, todoInput])
		 todoInputSet('');
		 errorSet(false);
		}else{
			errorSet(true);
		}

	}
	const todoInputHandler = event => {
		todoInputSet(event.target.value);
	}

	return (

		<>
			<div className="todoApp">
				<h1>Todo App</h1>
				<small>Create your task as many as you want</small>
				<hr />
				<form onSubmit={formSubmitHandler}>
					<input type="text" placeholder="Add new task" value={todoInput} onChange={todoInputHandler}/>
					{error && <span className="errorMessage"> Task field should not be empty</span> }
					
					<input type="submit" value="+" title="Save" />

				</form>
				<ul>
					
				{
					todoItems.map(item => {
						return (
						<li key={item}> 
							<span className="">{item}</span>
							<div className="actions">
								<span className="done">-</span><span className="delete">x</span> 
							</div>
						</li>
						)
					})
				}


					
				</ul>
			</div>
			
		</>
	)
}

export default Todo