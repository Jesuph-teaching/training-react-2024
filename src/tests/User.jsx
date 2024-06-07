import { Component } from "react";
import PropTypes from "prop-types";

export default class User extends Component {
	render() {
		const user = this.props;
		return (
			<div className="User">
				<h1>
					{user.firstName} {user.lastName}
				</h1>
				<p>Age: {user.age}</p>
				<p>Job: {user.job}</p>
			</div>
		);
	}
}

User.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	job: PropTypes.string.isRequired,
};
