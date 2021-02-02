import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonInfo from './components/PokemonInfo';

function App() {
  return (
    <Router>
      <div className="App">
				<Navbar />
        <div className="dashboard">
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path="/pokemon/:pokemonId" component={PokemonInfo}>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
