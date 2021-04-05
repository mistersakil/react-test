import React, {useState} from 'react'

const Form2 = () => {
	const [display, setDisplay] = useState(false);
	const [user, setUser] = useState({name:'', email: ''});
	const handleFormSubmit = event => {
		event.preventDefault();
		setDisplay(true);

	}
	const inputHandler = event => {
		event.preventDefault();
		let {name, value} = event.target;		
		setUser(oldUser => ({...oldUser, [name] : value}) );
		setDisplay(false);

	}

	return (
		<>		
			{	
				display && 
				<h1>Hello {`${user.name}`} <small>{`${user.email}`}</small></h1>
			}
			<form onSubmit={handleFormSubmit}>
				<input type="text" name="name" value={user.name} onChange={inputHandler} />
				<input type="text" name="email" value={user.email} onChange={inputHandler} />
				<input type="submit" value="Submit" />
			</form>
		</>
	)
}

export default Form2