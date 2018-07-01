import React,{Component} from 'react';
import logo from './img/logo.png';

export class Percurso extends React.Component{
  constructor(props){
    super(props);//passar como props nome, descricao, nParadas e estimativa
    this.state = {
      nome: "USP - Campus 1",
      descricao: "A casa de milhares de estudantes por ano.",
      nParadas: 8,
      estimativa: "2:30",
    }
  }

  render(){
      return(
        <div class="white">
          <nav>
            {/*barra de voltar para tela principal*/}
            <div className="nav-wrapper red">
              <ul className="left">
              <li><a href="#">
                <i className="material-icons">keyboard_backspace</i>
              </a></li>
              <li>Percurso: {this.state.nome}</li>
              </ul>
              </div>
          </nav>
          {/*imagem do percurso*/}
          <img className="responsive-img" src={logo} alt="Imagem do Percurso" />
          {/*nome do percurso*/}
          <h3>{this.state.nome}</h3>
          {/*descricao do percurso*/}
          <p>{this.state.descricao}</p>
          {/*informacoes do percurso*/}
          <p>{this.state.nParadas} paradas - Estimativa: {this.state.estimativa}</p>
          <br />
          {/*botão de começar percurso*/}
          <a class="btn-flat waves-effect waves-green green-text">Começar Percurso</a>
          <p><br /></p>
        </div>
      );
  }
}
