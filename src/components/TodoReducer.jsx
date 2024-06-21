export function TodoReducer(currentState, action) {
	const { type, payload } = action;
	switch (type) {
		case "add": {
			// payload is a string
			if (typeof payload !== "string") throw new Error("Invalid payload type");
			return [
				...currentState,
				{
					message: payload,
					done: false,
				},
			];
		}
		case "remove": {
			// payload is a number
			if (typeof payload !== "number") throw new Error("Invalid payload type");
			return currentState.filter((_, i) => i !== payload);
		}
		case "clear": {
			return [];
		}
		case "toggle": {
			// payload is a number
			if (typeof payload !== "number") throw new Error("Invalid payload type");
			const newTodo = [...currentState];
			newTodo[payload].done = !newTodo[payload].done;
			return newTodo;
		}
		default: {
			return currentState;
		}
	}
}
