import React, { Component } from 'react'
import axios from 'axios';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './PokemonInfo.css'

export default class PokemonInfo extends Component {
	
	state = {
		pokemonId: '',
		types: [
		],
		height: '',
		weight: '',
		abilities: [
		]
	}
	async componentDidMount(){
		/* Récupération de l'Id */
		const { pokemonId } = this.props.match.params
		
		/* API */
		const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
		const result = await axios.get(pokemonUrl)

		/* Stylisation du Nom */
		this.state.name = result.data.name.charAt(0).toUpperCase() + result.data.name.substr(1);
		for(let i = 0; i < this.state.name.length; i++){
			if(this.state.name.charAt(i) === "-"){
				this.state.name = this.state.name.substr(0, i) + " " + this.state.name.charAt(i+1).toUpperCase() + this.state.name.substr(i+2)
			}
		}

		/* Stylisation de la Taille */
		let height = result.data.height.toString()
		if(height.length === 1){
			this.state.height = "0."+ height + " m"
		}
		else{
			let lastChar = height.charAt(height.length - 1)
			this.state.height = height.slice(0, -1) + "." + lastChar + " m"
		}

		/* Stylisation du Poids */
		let weight = result.data.weight.toString()
		if(weight.length === 1){
			this.state.weight = "0."+ weight + " kg"
		}
		else{
			let lastChar = weight.charAt(weight.length - 1)
			this.state.weight = weight.slice(0, -1) + "." + lastChar + " kg"
		}

		/* Stylisation des Types */
		for(let i = 0; i < result.data.types.length; i++){
			if(result.data.types[i]["type"].name === "bug"){
				let tab = ["Bug", "#a8b820", "../type/7"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "grass"){
				let tab = ["Grass", "#78c850", "../type/12"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "psychic"){
				let tab = ["Psychic", "#f85888", "../type/14"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "fairy"){
				let tab = ["Fairy", "#fdb9e9", "../type/18"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "normal"){
				let tab = ["Normal", "#a8a878", "../type/1"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "ground"){
				let tab = ["Ground", "#e0c068", "../type/5"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "electric"){
				let tab = ["Electric", "#f8d030", "../type/13"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "flying"){
				let tab = ["Flying", "#a890f0", "../type/3"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "fighting"){
				let tab = ["Fighting", "#c03028", "../type/2"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "steel"){
				let tab = ["Steel", "#b8b8d0", "../type/9"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "dark"){
				let tab = ["Dark", "#705848", "../type/17"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "fire"){
				let tab = ["Fire", "#f08030", "../type/10"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "rock"){
				let tab = ["Rock", "#b8a038", "../type/6"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "water"){
				let tab = ["Water", "#6890f0", "../type/11"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "ghost"){
				let tab = ["Ghost", "#705898", "../type/8"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "dragon"){
				let tab = ["Dragon", "#7038f8", "../type/16"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "poison"){
				let tab = ["Poison", "#a040a0", "../type/4"]
				this.state.types.push(tab)
			}
			if(result.data.types[i]["type"].name === "ice"){
				let tab = ["Ice", "#98d8d8", "../type/15"]
				this.state.types.push(tab)
			}
		}

		/* Récupération des Compétences */
		let abilities = result.data.abilities
		for(let i = 0; i < abilities.length; i++){
			let abilitiesName = abilities[i].ability.name
			let linkAbilities = `https://pokeapi.co/api/v2/ability/` + abilitiesName
			let resultAbility = await axios.get(linkAbilities)

			abilitiesName = resultAbility.data.name.charAt(0).toUpperCase() + resultAbility.data.name.substr(1);
			for(let i = 0; i < abilitiesName.length; i++){
			if(abilitiesName.charAt(i) === "-"){
				abilitiesName = abilitiesName.substr(0, i) + " " + abilitiesName.charAt(i+1).toUpperCase() + abilitiesName.substr(i+2)
				}
			}
			let j = 0
			let abilityDesc = '';
			let abilityDescLanguage = '';
			do {
				abilityDescLanguage = resultAbility.data["flavor_text_entries"][j]["language"]["name"]
				abilityDesc = resultAbility.data["flavor_text_entries"][j]["flavor_text"]
				j = j + 1;
			} while (abilityDescLanguage !== "en");
			let tabAbilities = [abilitiesName, abilityDesc]
			this.state.abilities.push(tabAbilities)
		}

		/* Affichage des Compétences*/
		for(let i = 0; i < this.state.abilities.length; i++){
			let div = document.createElement("div");
			div.className = "ability"
			let titreAbility = document.createElement("h3");
			titreAbility.textContent = this.state.abilities[i][0]
			titreAbility.className = "ability_titre"
			div.appendChild(titreAbility)
			let descAbility = document.createElement("p");
			descAbility.textContent = this.state.abilities[i][1]
			descAbility.className = "ability_desc"
			div.appendChild(descAbility)
			let parentDiv = document.getElementById("columnAbilities")
			parentDiv.appendChild(div)
		}

		/* Sprites et stats*/
		this.setState({
			image1 : result.data["sprites"]["other"]["official-artwork"]["front_default"],
			image2 : result.data["sprites"]["front_default"],
			image3 : result.data["sprites"]["back_default"],
			image4 : result.data["sprites"]["front_shiny"],
			image5 : result.data["sprites"]["back_shiny"],
			statsPV : result.data["stats"][0]["base_stat"],
			statsAttaque : result.data["stats"][1]["base_stat"],
			statsDefense : result.data["stats"][2]["base_stat"],
			statsAttaqueSpe : result.data["stats"][3]["base_stat"],
			statsDefenseSpe : result.data["stats"][4]["base_stat"],
			statsVitesse : result.data["stats"][5]["base_stat"]

		})

		/* Création div Types */
		for(let i=0; i<this.state.types.length; i++){
			let div = document.createElement("div");
			div.className = "type_div"
			div.id = this.state.types[i][0]
			div.style.backgroundColor = this.state.types[i][1]
			let typeContent = document.createTextNode(this.state.types[i][0]);
			div.appendChild(typeContent)
			let a = document.createElement('a');
			a.appendChild(div)
			a.href = this.state.types[i][2]
			let parentDiv = document.getElementById('type_list')
			parentDiv.appendChild(a)	
		}
	}
	

	render() {
		return (
			<div className="pokedex">
				<div className="slide-container" style={{width:"40vw", height:"auto"}}>
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
					<div className="stats">
						<div className="statsDiv">
							<label className="statsLabel">Hit Point</label>
							<progress className="statsProgress" id="statsPV" value={this.state.statsPV} max="320"></progress>
						</div>
						<div className="statsDiv">
							<label className="statsLabel">Attack</label>
							<progress className="statsProgress" id="statsAttaque" value={this.state.statsAttaque} max="190"></progress>
						</div>
						<div className="statsDiv">
							<label className="statsLabel">Defense</label>
							<progress className="statsProgress" id="statsDefense" value={this.state.statsDefense}  max="250"></progress>
						</div>
						<div className="statsDiv">
							<label className="statsLabel">Special Attack</label>
							<progress className="statsProgress" id="statsAttaqueSpe" value={this.state.statsAttaqueSpe}  max="194"></progress>
						</div>
						<div className="statsDiv">
							<label className="statsLabel">Special Defense</label>
							<progress className="statsProgress" id="statsDefenseSpe" value={this.state.statsDefenseSpe}  max="250"></progress>
						</div>
						<div className="statsDiv">
							<label className="statsLabel">Speed</label>
							<progress className="statsProgress" id="statsVitesse" value={this.state.statsVitesse}  max="200"></progress>
						</div>
					</div>
      			</div>
				<div className="rightPart">
					<h1 className="pokemonName">{this.state.name}</h1>
					<label className="label">Type</label>
					<div className="types" id="type_list">
					</div>
					<div className="rowInfo">
						<div className="rowColumnInfo">
							<label className="label">Height</label>
							<p className="label_info">{this.state.height}</p>
						</div>
						<div className="rowColumnInfo">
							<label className="label">Weight</label>
							<p className="label_info">{this.state.weight}</p>
						</div>
					</div>
					<div id="columnAbilities">
						<label className="label">Abilities</label>
					</div>
				</div>
			</div>
		)
	}
}
