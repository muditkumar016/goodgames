import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {games} from './games';

class App extends Component{
	constructor(){
		super()
		this.state={
			games: games,
			searchfield: ''
		}
	}

	onSearchChange= (event)=>{
		this.setState({searchfield: event.target.value})
	}

	render(){
		const filteredgames= this.state.games.filter(games=>{
			return games.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1>GoodGames</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList games={filteredgames}/>
			</div>
		);
	}
}

export default App;