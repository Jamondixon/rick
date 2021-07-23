import { Component } from 'react';
import './App.css';
import CharacterContainer from './CharacterContainer';
import FavoritesContainer from './FavoritesContainer';
import Heading from './Heading';

const baseURL = "https://rickandmortyapi.com/api/character"

class App extends Component {



  state = {
    characters: [],
    favorites: []
  }

  componentDidMount() {
    fetch(baseURL)
    .then(response => response.json())
    .then(({results}) => this.setState({
      characters:results
    }))
  }

  addFavorite = (character) => {
    this.setState({
      favorites: [...this.state.favorites, character],
    })
  }

  removeFavorite = (favoriteToRemove) => {
    let filteredFavorites = this.state.favorites.filter(favorite => {
      return favorite !== favoriteToRemove
    })
    this.setState({
      favorites: filteredFavorites
    })
  }

  render () {
    console.log(this.state.characters)
    return (
      <div  className="App">
        <Heading />
        <FavoritesContainer favorites={this.state.favorites} characters={this.state.characters} removeFavorite={this.removeFavorite} />
        <CharacterContainer characters={this.state.characters} addFavorite={this.addFavorite}/>
      </div>
    );
  }  
}

export default App;
