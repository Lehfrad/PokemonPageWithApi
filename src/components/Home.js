import React, { Component } from 'react'
import PokemonAlea from './PokemonAlea'
import ListType from './ListType'

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div>
					<PokemonAlea/>
					<ListType />
				</div>
			</div>
		);
	}
}
