import React, {useState} from 'react'

const Timer = () => {
	let currentTime = new Date().toLocaleTimeString();
	const [time,setTime] = useState(currentTime);
	const handleCurrentTime = () => {
		currentTime = new Date().toLocaleTimeString();
		setTime(currentTime);
	}
	return (
		<>
			<h1>Current Time: {`${time}`}</h1>
			<button onClick={() => handleCurrentTime()}>Change Time</button>
			
		</>
	)
}

export default Timer