import React, { Component } from 'react'
import PokemonAlea from './PokemonAlea'

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="container">
       				<PokemonAlea/>
				</div>
			</div>
		);
	}
}
