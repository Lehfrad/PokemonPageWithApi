import React, { Component } from 'react'
import './ListType.css'
import { Link } from 'react-router-dom';

// image type
import normal from './image/types/normal.svg';
import fighting from './image/types/fighting.svg';
import flying from './image/types/flying.svg';
import poison from './image/types/poison.svg';
import ground from './image/types/ground.svg';
import rock from './image/types/rock.svg';
import bug from './image/types/bug.svg';
import ghost from './image/types/ghost.svg';
import steel from './image/types/steel.svg';
import fire from './image/types/fire.svg';
import water from './image/types/water.svg';
import grass from './image/types/grass.svg';
import electric from './image/types/electric.svg';
import psychic from './image/types/psychic.svg';
import ice from './image/types/ice.svg';
import dragon from './image/types/dragon.svg';
import dark from './image/types/dark.svg';
import fairy from './image/types/fairy.svg';


export default class ListType extends Component {
	render() {
		return (
			<div>
				<h2 className="menu_type_title">Pokemon par types</h2>
				<div className="list_types">
					<div className="type">
						<Link to={`type/1`}>
							<img className="type_image" src={normal} alt="Type Normal"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/2`}>
							<img className="type_image" src={fighting} alt="Type Fighting"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/3`}>
							<img className="type_image" src={flying} alt="Type Flying"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/4`}>
							<img className="type_image" src={poison} alt="Type Poison"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/5`}>
							<img className="type_image" src={ground} alt="Type Ground"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/6`}>
							<img className="type_image" src={rock} alt="Type Rock"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/7`}>
							<img className="type_image" src={bug} alt="Type Bug"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/8`}>
							<img className="type_image" src={ghost} alt="Type Ghost"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/9`}>
							<img className="type_image" src={steel} alt="Type Steel"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/10`}>
							<img className="type_image" src={fire} alt="Type Fire"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/11`}>
							<img className="type_image" src={water} alt="Type Water"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/12`}>
							<img className="type_image" src={grass} alt="Type Grass"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/13`}>
							<img className="type_image" src={electric} alt="Type Electric"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/14`}>
							<img className="type_image" src={psychic} alt="Type Psychic"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/15`}>
							<img className="type_image" src={ice} alt="Type Ice"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/16`}>
							<img className="type_image" src={dragon} alt="Type Dragon"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/17`}>
							<img className="type_image" src={dark} alt="Type Dark"></img>
						</Link>
					</div>
					<div className="type">
						<Link to={`type/18`}>
							<img className="type_image" src={fairy} alt="Type Fairy"></img>
						</Link>
					</div>
				</div>
			</div>
			
		)
	}
}
