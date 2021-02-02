import React, { Component } from 'react'

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-light bg-light fixed-top justify-content-between">
					<a className="navbar-brand" href="/">Pokemon</a>

					<form className="form-inline my-2 my-lg-0">
      				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    				</form>
				</nav>
			</div>
		)
	}
}
