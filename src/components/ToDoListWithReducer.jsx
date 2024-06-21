import { useEffect, useReducer } from "react";
import {
	subscribeToMessagingEvents,
	unScribeFromMessagingEvents,
} from "../tools/eventEmmiter";
import { TodoReducer } from "./TodoReducer";
export default function ToDoListWithReducer() {
	const [toDos, dispatch] = useReducer(TodoReducer, []);

	useEffect(() => {
		function AddTodo(message) {
			dispatch({ type: "add", payload: message });
		}
		subscribeToMessagingEvents(AddTodo);
		return () => {
			unScribeFromMessagingEvents(AddTodo);
		};
	}, []);

	return (
		<div>
			<h2>Todo list</h2>
			<ul>
				{toDos.map((todo, i) => {
					return (
						<li
							key={i}
							className={todo.done ? "done" : ""}
							onClick={() => {
								dispatch({ type: "toggle", payload: i });
							}}
						>
							{todo.message}
							<button
								onClick={(e) => {
									e.stopPropagation();
									dispatch({ type: "remove", payload: i });
								}}
							>
								Remove
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
