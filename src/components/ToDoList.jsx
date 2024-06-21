import { useEffect, useState } from "react";
import {
	subscribeToMessagingEvents,
	unScribeFromMessagingEvents,
} from "../tools/eventEmmiter";

export default function ToDoList() {
	useEffect(() => {
		function AddTodo(message) {
			setToDos((currentTodo) => {
				/* const newTodo = currentTodo;
				newTodo.push(message);
				return newTodo; */
				return [...currentTodo, message];
			});
		}
		subscribeToMessagingEvents(AddTodo);
		return () => {
			unScribeFromMessagingEvents(AddTodo);
		};
	}, []);

	const [toDos, setToDos] = useState([]);

	return (
		<div>
			<h2>Todo list</h2>
			<ul>
				{toDos.map((todo, i) => {
					return <li key={i}>{todo}</li>;
				})}
			</ul>
		</div>
	);
}
