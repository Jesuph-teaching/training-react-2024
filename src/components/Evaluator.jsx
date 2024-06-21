import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
export default function Evaluator({ anotherMessage = "" }) {
	const [message, setMessage] = useState("Hello World");
	const [inputValue, setInputValue] = useState(0);
	/* useEffect(() => {
		console.log("mounted");
		return () => {
			console.log("unmounted");
		};
	}, []); */
	useEffect(() => {
		// console.log("input value changed");
		if (inputValue >= 10) {
			setMessage("Value is greater than 10");
		}
	}, [inputValue]);
	/* 	useEffect(() => {
		console.log("message changed ", message);
	}, [message]); */
	const onInputChange = (event) => {
		const value = event.target.value;
		setInputValue(Number(value));
	};

	return (
		<div>
			<h1>My Evaluator</h1>
			<input type="number" value={inputValue} onChange={onInputChange} />
			{message}
			<br />
			{anotherMessage}
		</div>
	);
}
