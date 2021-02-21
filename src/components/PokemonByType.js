import React, { Component } from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard'
import './PokemonByType.css'


export default class PokemonByType extends Component {
	state = {
		pokemon : '', 
		typeId: 1,
	}

	async componentDidMount(){
		/* Récupération de l'Id */
		const { typeId } = this.props.match.params
		
		/* API */
		const pokemonUrl = `https://pokeapi.co/api/v2/type/${typeId}`
		const result = await axios.get(pokemonUrl)

		let h1 = ""
		switch(parseInt(typeId)){
			case 1:
				h1 = "Type : Normal"
				break;
			case 2:
				h1 = "Type : Fighting"
				break;
			case 3:
				h1 = "Type : Flying"
				break;
			case 4:
				h1 = "Type : Poison"
				break;
			case 5:
				h1 = "Type : Ground"
				break;
			case 6:
				h1 = "Type : Rock"
				break;
			case 7:
				h1 = "Type : Bug"
				break;
			case 8:
				h1 = "Type : Ghost"
				break;
			case 9:
				h1 = "Type : Steel"
				break;
			case 10:
				h1 = "Type : Fire"
				break;
			case 11:
				h1 = "Type : Water"
				break;
			case 12:
				h1 = "Type : Grass"
				break;
			case 13:
				h1 = "Type : Electric"
				break;
			case 14:
				h1 = "Type : Psychic"
				break;
			case 15:
				h1 = "Type : Ice"
				break;
			case 16:
				h1 = "Type : Dragon"
				break;
			case 17:
				h1 = "Type : Dark"
				break;
			case 18:
				h1 = "Type : Fairy"
				break;
			default:
				h1 = "Erreur"
				break;
		}
		this.setState({
			pokemon: result.data["pokemon"],
			h1: h1
		})
	}

	render() {
		return(
			<React.Fragment>
				<h1>{this.state.h1}</h1>
				{this.state.pokemon ? ( 
				<div className="all_card">
					{this.state.pokemon.map(pokemon =>(
						<PokemonCard key={pokemon.pokemon.name} url={pokemon.pokemon.url} name={pokemon.pokemon.name}/>
					))}
				</div>
				) : (
					<h1>Pokemon is Loading</h1>
				)}
			</React.Fragment>
		);
	}
}
