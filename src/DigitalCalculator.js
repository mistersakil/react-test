import React, {useState} from 'react'

const DigitalCalculator = () => {
	let newDate = new Date().toLocaleTimeString();
	let [currentTime, setCurrentTime] = useState(newDate);
	const handleDigitalClock = () => {
		newDate = new Date().toLocaleTimeString();
		setCurrentTime(newDate);
	}
	setInterval(handleDigitalClock,1000);

	return (
		<>
			<h1>{currentTime}</h1>			
		</>
	)
}

export default DigitalCalculator