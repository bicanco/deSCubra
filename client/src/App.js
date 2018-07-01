import React, { Component } from 'react';
import Client from './Client.js';
import './App.css';
import {PerfilPercurso} from './PerfilPercurso.js';
import LoginSocial from './LoginSocial.js';
import LoginAdmin from './LoginAdmin.js';
import {PerfilParada} from './PerfilParada.js';
import {TopMenu,FootMenu} from './Menu.js';

class App extends Component {
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }

  // App "actions" (functions that modify state)
  signIn(username, password, type) {
    // calling setState will re-render the entire app (efficiently!)
    if(type === 'adm'){
      Client.admLogin(username, password, res => {
        console.log(res.sucess)
        if(res.sucess === 'True'){
          console.log("Fez login como administrador")
          this.setState({
            user: {
              username,
              password,
              type
            }
          })
        } else {
          console.log("Administrador nao cadastrado")
        }
      })
    } else if (type === 'exp'){
      Client.expLogin(username, password, res => {
        console.log(res.sucess)
        if(res.sucess === 'True'){
          console.log("Fez login como explorador")
          this.setState({
            user: {
              username,
              password,
              type
            }
          })
        } else {
          console.log("Erro ao fazer login de explorador")
        }
      })
    }

  }

  signOut() {
    // clear out user from state
    this.setState({user: null})
  }

  render() {
    return (
      <div>
        <header>
          <TopMenu isAdmin={true} />
        </header>
        <main className="App">
          <LoginAdmin />
        </main>
        <footer>
          <FootMenu />
        </footer>
      </div>
    );
  }
}

export default App;
