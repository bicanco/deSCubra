import React, {Component} from 'react';
import M from 'materialize-css';
import gitlogo from './img/github.png';
import logo32 from './img/logo32.png';
import LoginSocial from './LoginSocial.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class TopMenu extends React.Component{
    constructor(props){
      super(props);
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var options ={};
        var instances = M.Sidenav.init(elems, options);
      });
    }

    renderOptions(user){
      console.log("Renderizando menu para " + user)
      if(!user){
        return(
          <LoginSocial onSignIn={this.props.callbackSignIn}/>
        );
      }
      if(user.type == 'adm'){
        console.log("Login adm")
        return(
          <div>
          <li><a>Log Out</a></li>
          </div>
        );
      }else if(user.type == 'exp'){
        console.log("Login exp")
        return(
          <div>
          {/*
            <Link to="/"><li>Sobre</li></Link>
            <Link to="/Percursos"><li>Percursos</li></Link>
          */}
          <li><a>Sobre</a></li>
          <li><a>Percursos</a></li>
          <li><a onClick={this.props.callbackSignOut}>Log Out</a></li>
          </div>
        );
      }
    }

    render(){
      return(
        <div className="navbar">
          <nav>
            <div className="nav-wrapper red accent-4">
              <ul className="left hide-on-med-and-down">
                <li><a href="#" className="brand-logo left">
                  <img src={logo32} alt="deSCubra logo" />
                  #deSCubra
                </a></li>
              </ul>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">Menu</i></a>
              <ul className="right hide-on-med-and-down">
                {this.renderOptions(this.props.user)}
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            {this.renderOptions(this.props.user)}
          </ul>
        </div>
      );
    }
}

export class FootMenu extends React.Component{
  render(){
  return(
      <footer className="page-footer red accent-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">deSCubra</h5>
              <p className="grey-text text-lighten-4">Projeto da disciplina SSC0130 - Engenharia de Software</p>
              <p className="grey-text text-lighten-4">Professora: Drª. Simone do Rocio Senger de Souza</p>
              <p className="grey-text text-lighten-4">Estagiário PAE: Leo Natan Paschoal</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Integrantes</h5>
              <ul>
                <li>David Souza Rodrigues</li>
                <li>Fernanda Tostes Marana</li>
                <li>Gabriel Toschi de Oliveira</li>
                <li>Juliana de Mello Crivelli</li>
                <li>Marcelo de Moraes C. da Silva</li>
                <li>Marcos Wendell S. de O. Santos</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2018 Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/gabrieltoschi/deSCubra">
              <img src={gitlogo} alt="git logo" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
