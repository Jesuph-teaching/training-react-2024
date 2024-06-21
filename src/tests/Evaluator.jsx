import { Component } from "react";
import ProtoTypes from "prop-types";
export default class Evaluator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Hello World",
			inputValue: 0,
		};
	}
	onInputChange = (event) => {
		const value = event.target.value;
		this.setState({
			...this.state,
			inputValue: Number(value),
		});
	};
	componentDidMount() {
		console.log("mounted");
	}
	componentDidUpdate() {
		console.log("updated");
		if (
			this.state.inputValue >= 10 &&
			this.state.message !== "Value is greater than 10"
		) {
			this.setState({
				...this.state,
				message: "Value is greater than 10",
			});
		}
	}

	render() {
		const anotherMessage = this.props.message;
		const message = this.state.message;
		const inputValue = this.state.inputValue;
		return (
			<div>
				<h1>My Evaluator</h1>
				<input type="number" value={inputValue} onChange={this.onInputChange} />
				{message}
				<br />
				{anotherMessage}
			</div>
		);
	}
}
Evaluator.propTypes = {
	message: ProtoTypes.string,
};
