import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
	state = {
		category: ""
	};

	handleCategoryChange = e => {
		this.setState(
			{
				category: e.target.value
			},
			() => {
				this.props.getNews(this.state.category);
			}
		);
	};

	render() {
		return (
			<div className="search-section row">
				<div className="col s12 m8 offset-m2">
					<form>
						<h2>Search the latest news by category</h2>
						<div className="input-field col s12 m8 offset-m2">
							<select onChange={this.handleCategoryChange}>
								<option value="general">General</option>
								<option value="technology">Technology</option>
								<option value="business">Business</option>
								<option value="entertainment">Entertainment</option>
								<option value="science">Science</option>
								<option value="health">Health</option>
								<option value="sports">Sports</option>
							</select>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

Form.propTypes = {
	getNews: PropTypes.func.isRequired
};

export default Form;
