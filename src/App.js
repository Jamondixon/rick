import { Component } from 'react';
import './App.css';
// import CharacterContainer from './CharacterContainer';
const baseURL = "https://rickandmortyapi.com/api/character"

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
      <div >
        {this.state.characters.map(character => {
          return <div className="character-card"></div>
        })}
        {/* <CharacterContainer charcters={this.state.characters}/> */}
      </div>
    );
  }  
}

export default App;
