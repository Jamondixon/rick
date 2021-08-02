import { Component } from 'react';
import './App.css';
import CharacterContainer from './CharacterContainer';
import FavoritesContainer from './FavoritesContainer';
import Heading from './Heading';

const baseURL = "https://rickandmortyapi.com/api/character/?Page=2"

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

  removeFromFavorites = (clickedFavorite) => {
    const newFavorites = this.state.favorites.filter(favorite => clickedFavorite.id !== favorite.id)
    this.setState({ favorites: newFavorites })
  }  

  render () {
    console.log(this.state.characters)
    return (
      <div  className="App">
        <Heading />
        <FavoritesContainer favorites={this.state.favorites} characters={this.state.characters} removeFromFavorites={this.removeFromFavorites} />
        <CharacterContainer characters={this.state.characters} addFavorite={this.addFavorite}/>
      </div>
    );
  }  
}

export default App;
