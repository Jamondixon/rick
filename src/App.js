import { Component } from 'react';
import './App.css';
// import CharacterContainer from './CharacterContainer';
const baseURL = "https://star-wars-cafe-api.herokuapp.com/characters"

class App extends Component {



  state = {
    characters: []
  }

  componentDidMount() {
    fetch(baseURL)
    .then(response => response.json())
    .then(characters => this.setState({characters}))
  }

  render () {
    console.log(this.state.characters)
    return (
      <div  className="App">
        {this.state.characters.map(character => {
          return <div className="character-card">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        })}
      </div>
    );
  }  
}

export default App;
