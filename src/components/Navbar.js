import React from 'react'
import Search from './Search'

export default class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-light bg-light fixed-top justify-content-between">
					<a className="navbar-brand" href="/">Pokemon</a>
					<Search/>
				</nav>
			</div>
		)
	}
}
