import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			query: "charmander"
		}
	}

	handleInput = e => {
		this.setState({query: e.target.value})
	}

	render() {
		return(
			<div className="form-inline my-2 my-lg-0">
				<input
					type={"text"}
					className="form-control mr-sm-2"
					placeholder={"ex: Charmander"}
					onChange={this.handleInput}
				/>
				<Link to={`../loading/${this.state.query}`}>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type={"button"}
						onClick={this.handleSearch}>
						Search
					</button>
				</Link>
			</div>
		)
	}
}

export default Search
