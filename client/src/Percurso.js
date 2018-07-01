import React,{Component} from 'react';
import M from 'materialize-css';
import logo from './img/logo.png';

export class Percurso extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nome: "USP - Campus 1",
      descricao: "A casa de milhares de estudantes por ano.",
      nParadas: 8,
      estimativa: "2:30",
    }
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var options ={};
      var instances = M.Sidenav.init(elems, options);
    });
  }

  render(){
      return(
        <div class="white">
          <nav>
            <div className="nav-wrapper red">
              <ul className="left">
              <li><a href="#">
                <i className="material-icons">keyboard_backspace</i>
              </a></li>
              <li>Percurso: {this.state.nome}</li>
              </ul>
              </div>
          </nav>
          <img className="responsive-img" src={logo} alt="Imagem do Percurso" />
          <h3>{this.state.nome}</h3>
          <p>{this.state.descricao}</p>
          <p>{this.state.nParadas} paradas - Estimativa: {this.state.estimativa}</p>
          <br />
          <a class="btn-flat waves-effect waves-green green-text">Começar Percurso</a>
          <p><br /></p>
        </div>
      );
  }
}
