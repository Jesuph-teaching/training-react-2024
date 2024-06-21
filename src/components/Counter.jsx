import { useState } from "react";

export default function Counter() {
	const [state, setState] = useState(0);
	return (
		<div>
			<button onClick={() => setState(state - 1)}>-</button>
			<input type="number" value={state} />
			<button onClick={() => setState(state + 1)}>+</button>
		</div>
	);
}
