import useCounter from "../hooks/useCounter";

export default function Counter() {
	const { count, decrement, increment } = useCounter();
	return (
		<div>
			<button onClick={decrement}>-</button>
			<input type="number" value={count} />
			<button onClick={increment}>+</button>
		</div>
	);
}
