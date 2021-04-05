import React, {useState}  from 'react'

const Counter = props => {
	const [count, setCount] = useState(0)
	const handleCount = () => {
		setCount(count + 1);
		// setCount((currentCount) => currentCount + 1);
		// console.log(`clicked ${count} times`);
	}
	return (
		<>
		<h1>{count}</h1>
		<button onClick={handleCount}>Counter</button>
		</>
	)
}

export default Counter;