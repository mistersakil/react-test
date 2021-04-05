import React, {useState} from 'react'

const Form = () => {

	let [name, setName] = useState('');
	const handleName = (e) => {
		name = e.target.value;
		setName(name);
	}
	return (
		<>
			<h1>Hello {name ? `- ${name}` : name} </h1>
			<input type="text" placeholder="Input some text" value={name} onChange={handleName} autoFocus/>
			<input type="submit" value="Submit"/>
			
		</>
	)
}

export default Form