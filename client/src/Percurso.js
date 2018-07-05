import React,{Component} from 'react';
import logo from './img/logo.png';
import uspimg from './img/usp-campus1.jpg';

export class Percurso extends React.Component{
  constructor(props){
    super(props);//passar como props nome, descricao, nParadas e estimativa
    this.state = {
      nome: "USP - Campus 1",
      descricao: "A casa de milhares de estudantes por ano. Conheça mais o campus, seus prédios e um pouco da sua história.",
      nParadas: 8,
      estimativa: "2:30",
    }
  }

  render(){
      return(
        <div className="white">
          <nav className="red">
            {/*barra de voltar para tela principal*/}
            <div className="nav-wrapper red container">
              <ul className="left">
              <li><a href="#">
                <i className="material-icons">keyboard_backspace</i>
              </a></li>
              <li>Percurso: {this.state.nome}</li>
              </ul>
            </div>
          </nav>
          {/*imagem do percurso*/}
          <div className="container">
            <br />
            <div className="row">
              <div class="card s12 m4 offset-m4 l4 offset-l4">
                <div class="card-image">
                  <img src={uspimg} />
                  <span class="card-title">{this.state.nome}</span> {/*nome do percurso*/}
                </div>
              <div class="card-content">
                {/*informacoes do percurso*/}
                <span class="badge green white-text left" data-badge-caption="PARADAS">{this.state.nParadas}</span>
                <span class="badge blue white-text left" data-badge-caption="CAMINHADA"></span>

                <br /><h6>{this.state.descricao}</h6> {/*descricao do percurso*/}
              </div>
              <div class="card-action">
                <a href="#" className="btn waves-effect waves-light red white-text"><i class="material-icons left">directions_run</i>INICIAR</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
