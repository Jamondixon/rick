import { Component } from 'react';
import './App.css';
import CharacterContainer from './CharacterContainer';
import FavoritesContainer from './FavoritesContainer';

const baseURL = "https://star-wars-cafe-api.herokuapp.com/characters"

class App extends Component {



  state = {
    characters: [],
    favorites: []
  }

  componentDidMount() {
    fetch(baseURL)
    .then(response => response.json())
    .then(characters => this.setState({characters}))
  }

  addFavorite = (character) => {
    this.setState({
      favorites: [...this.state.favorites, character],

    })
  }

  render () {
    console.log(this.state.characters)
    return (
      <div  className="App">
        <FavoritesContainer favorites={this.state.favorites} characters={this.state.characters} />
        <CharacterContainer characters={this.state.characters} addFavorite={this.addFavorite}/>
      </div>
    );
  }  
}

export default App;
