import './App.css';
import Exemple from './Exemple';
import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);

    this.state= {
      display: true,
    }
  }
  render() {
    return (
      <div>
        {this.state.display && <Exemple />}

        <br/>
        <br/>
        <br/>

        <button onClick={() => this.setState({display: !this.state.display})}>Afficher</button>
      </div>
    );
  }
}

export default App;

