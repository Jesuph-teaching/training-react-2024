import { useReducer } from "react";

export default function AdvancedCounter() {
	const [state, dispatch] = useReducer(
		function CounterReducer(currentState, action) {
			const { type } = action;
			switch (type) {
				case "increment": {
					currentState.counter++;
					break;
				}
				case "decrement": {
					currentState.counter--;
					break;
				}
				case "reset": {
					currentState.counter = 0;
					break;
				}
				default: {
					throw new Error("Invalid action type " + type);
				}
			}
			if (currentState.counter >= 10) currentState.message = "its over 10";
			return { ...currentState };
		},
		{
			counter: 0,
			message: "",
		}
	);
	const { counter, message } = state;
	const increment = () => {
		dispatch({ type: "increment" });
	};
	return (
		<div>
			<div>
				<button onClick={increment}>+</button>
				{counter}
				<button
					onClick={(e) => {
						dispatch({ type: "decrement" });
					}}
				>
					-
				</button>
			</div>
			<button
				onClick={() => {
					dispatch({ type: "reset" });
				}}
			>
				reset
			</button>
			<p>{message}</p>
		</div>
	);
}
