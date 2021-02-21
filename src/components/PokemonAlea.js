import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokemonAlea extends Component {
	state = {
		pokemon : [],
		alea: Math.floor(Math.random() * 1118) + 0 ,
		url: 'https://pokeapi.co/api/v2/pokemon?limit=1&offset=',
		detailPokemon : [],
		pokemonId: '',
	}
	async componentDidMount(){
		this.state.api = this.state.url + this.state.alea.toString()
		const request = await axios.get(this.state.api);
		this.setState({ pokemon: request.data['results'][0]} )

		const requestDetail = await axios.get(this.state.pokemon.url);
		this.setState({ detailPokemon: requestDetail.data} )
		this.state.pokemonId = this.state.detailPokemon["id"] 

		this.state.pokemon.name = this.state.pokemon.name.charAt(0).toUpperCase() + this.state.pokemon.name.substr(1);
		for(let i = 0; i < this.state.pokemon.name.length; i++){
			if(this.state.pokemon.name.charAt(i) === "-"){
				this.state.pokemon.name = this.state.pokemon.name.substr(0, i) + " " + this.state.pokemon.name.charAt(i+1).toUpperCase() + this.state.pokemon.name.substr(i+2)
			}
		}

		this.setState({
			imageUrl : this.state.detailPokemon["sprites"]["other"]["official-artwork"]["front_default"],
			altImage : "Image " + this.state.pokemon.name,
			numéro : "No." + this.state.pokemonId
		  })
	}

	render(){
		return(
			<div style={{padding: "0", marginTop: "5vh" }}>
				<h2 className="card-text" style={{textAlign: "center", margin: "2vh auto"}}>Zoom sur un Pokemon</h2>
				<div className="card" style={{padding: "0", margin: "0 auto" , height: "auto", width: "50vw"}}>
					<img className="card-img-top" src={this.state.imageUrl} alt={this.state.altImage} style={{ margin: "0 auto", height: "20vw", width: "20vw"}}></img>
					<div className="card-body" style={{width: "50vw", height: "auto", padding: "0"}}>
						<p style={{width: "50vw", margin: "auto", textAlign:"center"}}>{this.state.numéro}</p>
						<h3 className="card-text" style={{textAlign: "center"}}>{this.state.pokemon.name}</h3>
						<Link to={`pokemon/${this.state.pokemonId}`}>
							<p className="btn btn-primary btn-lg" style={{margin:"2vh 17.5vw", width: "15vw"}}>Voir Plus</p>
						</Link>
					</div>
				</div>
			</div>
		);
	}

}

