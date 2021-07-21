import { Component } from 'react';
import './App.css';
import CharacterContainer from './CharacterContainer';
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
        <CharacterContainer characters={this.state.characters}/>
      </div>
    );
  }  
}

export default App;
