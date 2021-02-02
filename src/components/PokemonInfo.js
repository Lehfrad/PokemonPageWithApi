import React, { Component } from 'react'
import axios from 'axios';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './PokemonInfo.css'

export default class PokemonInfo extends Component {
	
	state = {
		pokemonId: '',
		types: [
		]
	}
	async componentDidMount(){
		/* Récupération de l'Id */
		const { pokemonId } = this.props.match.params
		
		/* API */
		const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
		const result = await axios.get(pokemonUrl)
		console.log(result.data.types)

		/* Stylisation du Nom */
		this.state.name = result.data.name.charAt(0).toUpperCase() + result.data.name.substr(1);
		for(let i = 0; i < this.state.name.length; i++){
			if(this.state.name.charAt(i) === "-"){
				this.state.name = this.state.name.substr(0, i) + " " + this.state.name.charAt(i+1).toUpperCase() + this.state.name.substr(i+2)
			}
		}

		/* Stylisation des Types */
		for(let i = 0; i < result.data.types.length; i++){
			if(result.data.types[i]["type"].name === "bug"){
				let tab = ["Insecte", "#a8b820"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "grass"){
				let tab = ["Plante", "#78c850"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "psychic"){
				let tab = ["Psy", "#f85888"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "fairy"){
				let tab = ["Fée", "#fdb9e9"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "normal"){
				let tab = ["Normal", "#a8a878"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "ground"){
				let tab = ["Sol", "#e0c068"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "electric"){
				let tab = ["Électrik", "#f8d030"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "flying"){
				let tab = ["Vol", "#a890f0"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "fighting"){
				let tab = ["Combat", "#c03028"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "steel"){
				let tab = ["Acier", "#b8b8d0"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "dark"){
				let tab = ["Ténèbres", "#705848"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "fire"){
				let tab = ["Feu", "#f08030"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "rock"){
				let tab = ["Roche", "#b8a038"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "water"){
				let tab = ["Eau", "#6890f0"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "ghost"){
				let tab = ["Spectre", "#705898"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "dragon"){
				let tab = ["Dragon", "#7038f8"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "poison"){
				let tab = ["Poison", "#a040a0"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "ice"){
				let tab = ["Glace", "#98d8d8"]
				this.state.types.push(tab)
			}
		}

		/* Sprites */
		this.setState({
			image1 : result.data["sprites"]["other"]["official-artwork"]["front_default"],
			image2 : result.data["sprites"]["front_default"],
			image3 : result.data["sprites"]["back_default"],
			image4 : result.data["sprites"]["front_shiny"],
			image5 : result.data["sprites"]["back_shiny"],
		})

		/* Création div Types */
		for(let i=0; i<this.state.types.length; i++){
			let div = document.createElement("div");
			div.className = "type_div"
			div.style.backgroundColor = this.state.types[i][1]
			let typeContent = document.createTextNode(this.state.types[i][0]);
			div.appendChild(typeContent)
			let parentDiv = document.getElementById('type_list')
			parentDiv.appendChild(div)
		}
	}
	

	render() {
		return (
			<div className="pokedex">
				<div className="slide-container" style={{width:"40vw", height:"40vw"}}>
					<Slide style={{duration: 3000,transitionDuration: 750}}>
						<div className="each-slide">
							<div>
								<img style={{width:"40vw", height:"40vw"}} src={this.state.image1} alt="Official Artwork Indisponible"></img>
							</div>
						</div>
						<div className="each-slide">
							<div>
								<img style={{width:"40vw", height:"40vw"}} src={this.state.image2} alt="Sprite Default Indisponible"></img>
							</div>
						</div>
						<div className="each-slide">
							<div>
								<img style={{width:"40vw", height:"40vw"}} src={this.state.image3} alt="Sprite Back Default Indisponible"></img>
							</div>
						</div>
						<div className="each-slide">
							<div>
								<img style={{width:"40vw", height:"40vw"}} src={this.state.image4} alt="Sprite Shiny Indisponible"></img>
							</div>
						</div>
						<div className="each-slide">
							<div>
								<img style={{width:"40vw", height:"40vw"}} src={this.state.image5} alt="Sprite Back Shiny Indisponible"></img>
							</div>
						</div>
					</Slide>
      			</div>
				<div className="rightPart">
					<h1 className="pokemonName">{this.state.name}</h1>
					<label className="label">Type</label>
					<div className="types" id="type_list">

					</div>
				</div>
			</div>
		)
	}
}
