import React, { Component } from 'react';
import { Route, withRouter, Redirect } from "react-router-dom";
import Client from './Client.js';
import './App.css';

import {PerfilPercurso} from './PerfilPercurso.js';
import LoginAdmin from './LoginAdmin.js';
import {PerfilParada} from './PerfilParada.js';
import {TopMenu,FootMenu} from './Menu.js';
import {Percurso, FinalPercurso} from './Percurso.js';
import About from './About.js';
import {Enigma} from './Parada.js';
import {PainelAdmin} from './PainelAdmin.js';
import {HomeExplorador} from './HomeExplorador.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
<Route
  {...rest}
  render={props =>
    Auth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/",
          state: { from: props.location }
        }}
      />
    )
  }
/>
);

const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

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
          //onsole.log("Fez login como administrador")
          Auth.authenticate();
          this.setState({
            user: {
              username,
              type
            }
          })
          this.props.history.push('/PainelAdmin')
        } else {
          console.log("Administrador nao cadastrado")
        }
      })
    } else if (type === 'exp'){
      Client.expLogin(username, password, res => {
        var name = password
        if(res.sucess === 'True'){
          //console.log("Fez login como explorador")
          Auth.authenticate();
          this.setState({
            user: {
              username,
              name,
              type
            }
          })
          this.props.history.push('/explorar/ListaPercursos')
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
    Auth.signout();
  }

  render() {
    return (
        <div>
          <header>
            <TopMenu user={this.state.user} callbackSignIn={this.signIn} callbackSignOut={this.signOut}/>
          </header>
            <main className="App">
              {/*rota inicial*/}
              <Route exact path="/" component={About} />
              {/*rota de administradores*/}
              <Route path="/adminLogin" component={() => <LoginAdmin onSignIn={this.signIn.bind(this)} />}/>
              <PrivateRoute path="/painelAdmin" component={() => <PainelAdmin user={this.state.user} />} />
              <PrivateRoute exact path="/adicionarPercurso" component={(match) => <PerfilPercurso aux={match} />} />
    					<PrivateRoute exact path="/editarPercurso/:idPercurso" component={(match) => <PerfilPercurso aux={match} />} />
    					<PrivateRoute exact path="/editarParada/:idPercurso/:idParada" component={PerfilParada} />
              <PrivateRoute exact path="/adicionarParada/:idPercurso" component={(match) => <PerfilPercurso aux={match} />} />
              {/*rota exploradores*/}
              <PrivateRoute path="/explorar/ListaPercursos" component={() => <HomeExplorador user={this.state.user} />} />
              <PrivateRoute path="/explorar/Percurso/:idPercurso" component={Percurso} />
              <PrivateRoute path="/explorar/Parada/:idPercurso/:idParada" component={(match) =><Enigma aux={match} />} />
              <PrivateRoute path="/explorar/finalPercurso/:idPercurso" component={(match) =><FinalPercurso aux={match} />} />
            </main>
          <footer>
            <FootMenu />
          </footer>
        </div>
    );
  }
}

export default withRouter(App);
