import React, {Component} from 'react';
import logo from './logo.svg';

import Header from './components/Header'

import './App.css';

export default class App extends Component {
  state = {
    user: {},
    name: "",
    apellido: "",
    age: ""
  }

  getDataFromGitHub = () => {
    fetch('https://api.github.com/users/jsebasct') {
      
    }
  }

  componentDidMount() {
    this.getDataFromGitHub()
  }

  render() {
    return (
      <div>
        <Header></Header>
      </div>
    );
  }
  
}

// export default App;
