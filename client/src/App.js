import React, { Component } from 'react';
import logo from './images1.png';
import Client from './Client.js';
import './App.css';
import {PerfilPercurso} from './PerfilPercurso.js';

class App extends Component {
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }

  // App "actions" (functions that modify state)
  signIn(username, password) {
    // calling setState will re-render the entire app (efficiently!)
    Client.admLogin(username, password, res => {
      console.log(res.sucess)
      if(res.sucess === 'True'){
        console.log("Fez login")
        this.setState({
          user: {
            username,
            password,
          }
        })
      } else {
        console.log("Usuario nao cadastrado")
      }
    })
  }

  signOut() {
    // clear out user from state
    this.setState({user: null})
  }

  render() {
    return (
      <div className="App">
        <PerfilPercurso name="aaa" imgSrc={logo}/>
      </div>
    );
  }
}

export default App;
