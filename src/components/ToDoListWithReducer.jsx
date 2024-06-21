import { useEffect, useReducer, useState } from "react";
import {
	subscribeToMessagingEvents,
	unScribeFromMessagingEvents,
} from "../tools/eventEmmiter";

export default function ToDoListWithReducer() {
	const [toDos, setToDos] = useReducer((currentState, action) => {}, []);

	useEffect(() => {
		function AddTodo(message) {
			setToDos((currentTodo) => {
				return [...currentTodo, message];
			});
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
					return <li key={i}>{todo}</li>;
				})}
			</ul>
		</div>
	);
}
