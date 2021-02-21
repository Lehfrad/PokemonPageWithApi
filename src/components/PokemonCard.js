import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './PokemonCard.css'

export default class PokemonCard extends Component {
	state = {
		name: '',
		url: '',
		image: '',
	}
	async componentDidMount(){
		const { name, url } = this.props;
		
		let result = await axios.get(url)
		let newName = name.charAt(0).toUpperCase() + name.substr(1);
		for(let i = 0; i < newName.length; i++){
			if(newName.charAt(i) === "-"){
				newName = newName.substr(0, i) + " " + newName.charAt(i+1).toUpperCase() + newName.substr(i+2)
			}
		}
		let pokemonId = result.data["id"]

		this.setState({
			name: newName,
			url: url,
			imageUrl: result.data["sprites"]["other"]["official-artwork"]["front_default"],
			pokemonId: pokemonId
		})
		
	}
	render(){
		return(
			<div className="card_div">
				<Link to={`../pokemon/${this.state.pokemonId}`}>
					<div className="card_top">
						<img className="card_image_top" src={this.state.imageUrl} alt="Image pokemon indisponible"></img>
					</div>
					<div className="card_bottom">
						<h4 className="card_bottom_text">{this.state.name}</h4>
					</div>
				</Link>
			</div>
		);
	}

}

