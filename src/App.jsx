import { Component } from "react";
import "./App.css";
import Evaluator from "./Evaluator";
export default class App extends Component {
	render() {
		return (
			<div>
				<Evaluator message="Evalution 1" />
			</div>
		);
	}
}
