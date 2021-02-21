import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SearchResult extends Component {
	state = {
		pokemon : [],
		url: 'https://pokeapi.co/api/v2/pokemon/',
		detailPokemon : [],
		pokemonId: '',
	}
	async componentDidMount(){
		const { pokemonName } = this.props.match.params
		let name = pokemonName.toLowerCase()
		this.state.api = this.state.url + name
		console.log(this.state.api)

		let divError = document.getElementById("caseError")
		await axios.get(this.state.api).then((response) => {
			console.log(response.data)
			this.setState({ pokemon: response.data} )

			this.state.pokemon.name = this.state.pokemon.name.charAt(0).toUpperCase() + this.state.pokemon.name.substr(1);
			for(let i = 0; i < this.state.pokemon.name.length; i++){
				if(this.state.pokemon.name.charAt(i) === "-"){
					this.state.pokemon.name = this.state.pokemon.name.substr(0, i) + " " + this.state.pokemon.name.charAt(i+1).toUpperCase() + this.state.pokemon.name.substr(i+2)
				}
			}

			this.setState({
				imageUrl : this.state.pokemon["sprites"]["other"]["official-artwork"]["front_default"],
				altImage : "Image " + this.state.pokemon.name,
				numéro : "No." + this.state.pokemon.id
			})
			divError.style.display = "none"

		}, (error) => {
			console.log(error)
			let div = document.getElementById("mainResult")
			div.style.display = "none"
		});
	}

	render(){
		return(
			<div>
				<div id="caseError">
					<h2 style={{color: "#F61801", textAlign: "center", margin: "5vw auto", fontSize: "8vw"}}>Le pokemon que vous avez demandé n'existe pas</h2>
				</div>
				<div id="mainResult" style={{padding: "0", marginTop: "5vh" }}>
					<h2 className="card-text" style={{textAlign: "center", margin: "2vh auto"}}>Résultat de votre recherche</h2>
					<div className="card" style={{padding: "0", margin: "0 auto" , height: "auto", width: "50vw"}}>
						<img className="card-img-top" src={this.state.imageUrl} alt={this.state.altImage} style={{ margin: "0 auto", height: "20vw", width: "20vw"}}></img>
						<div className="card-body" style={{width: "50vw", height: "auto", padding: "0"}}>
							<p style={{width: "50vw", margin: "auto", textAlign:"center"}}>{this.state.numéro}</p>
							<h3 className="card-text" style={{textAlign: "center"}}>{this.state.pokemon.name}</h3>
							<Link to={`../pokemon/${this.state.pokemon.id}`}>
								<p className="btn btn-primary btn-lg" style={{margin:"2vh 17.5vw", width: "15vw"}}>Voir Plus</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

