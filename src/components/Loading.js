import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Loading extends Component {
	render(){
		const { pokemonName } = this.props.match.params;
		console.log("Clear and Loading!");
		return(
			<div style={{padding: "0", marginTop: "5vh" }}>
				<h1>LOADING !!!!</h1>
				<Redirect to={`../search/${pokemonName}`}/>
			</div>
		);
	}

}

