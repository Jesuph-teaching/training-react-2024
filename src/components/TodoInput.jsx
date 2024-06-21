import { useEffect, useState } from "react";
import { sendMessage } from "../tools/eventEmmiter";

export default function TodoInput() {
	const [inputValue, setInputValue] = useState("");
	useEffect(() => {
		console.log("Todo mounted");

		return () => {
			console.log("Todo unmounted");
		};
	}, []);
	return (
		<div>
			<input
				type="text"
				placeholder="Enter your todo"
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					sendMessage(inputValue);
					setInputValue("");
				}}
			>
				Add
			</button>
		</div>
	);
}
