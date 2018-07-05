import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import Client from './Client.js';
import './App.css';

import {PerfilPercurso} from './PerfilPercurso.js';
import LoginAdmin from './LoginAdmin.js';
import {PerfilParada} from './PerfilParada.js';
import {TopMenu,FootMenu} from './Menu.js';
import {Percurso} from './Percurso.js';
import About from './About.js';
import {ListaPercursos} from './ListaPercursos.js';
import {Parada} from './Parada.js'

class App extends Component {

  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }

  // App "actions" (functions that modify state)
  signIn = (username, password, type) => {
    // calling setState will re-render the entire app (efficiently!)
    if(type === 'adm'){
      Client.admLogin(username, password, res => {
        console.log(res.sucess)
        if(res.sucess === 'True'){
          console.log("Fez login como administrador")
          this.setState({
            user: {
              username,
              type
            }
          })
          this.props.history.push('/listaPercursos')
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
              type
            }
          })
        } else {
          console.log("Erro ao fazer login de explorador")
        }
      })
    }
  }

  signOut = () => {
    // clear out user from state
    this.setState({user: null})
    this.props.history.push('/')
  }

  render() {
    return (
        <div>
          <header>
            <TopMenu user={this.state.user} callbackSignIn={this.signIn} callbackSignOut={this.signOut}/>
          </header>
            <main className="App">
              {/*rota inicial*/}
              <Route exact path="/" component={PerfilPercurso} />
              {/*rota de administradores*/}
              <Route path="/adminLogin" component={() => <LoginAdmin onSignIn={this.signIn.bind(this)} />}/>
              <Route path="/listaPercursos" component={() => <ListaPercursos user={this.state.user} />} />
    					<Route exact path="/editarPercurso/:idPercurso" component={PerfilPercurso} />
    					<Route exact path="/editarPercurso/:idPercurso/:idParada" component={PerfilParada} />
              {/*rota exploradores*/}
              <Route path="/Percursos" component={Percurso} />
            </main>
          <footer>
            <FootMenu />
          </footer>
        </div>
    );
  }
}

export default withRouter(App);
