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
              <li><a href="/explorar/ListaPercursos">
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
                <a href={"/explorar/Parada/"+this.state.nome+"/0"} className="btn waves-effect waves-light red white-text"><i class="material-icons left">directions_run</i>INICIAR</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export class FinalPercurso extends Component{
  constructor(props){
      super(props);//passar como props nome do percurso
      this.state={
        percurso: "Andando para Testar II,V: O Retorno Está De Volta",
      }
  }

  recomecarPercurso(){
    /*fazer mudanca status*/
  }

  render(){
    return(
      <div>
      <nav class="red">
        {/*barra de voltar para tela principal*/}
        <div className="nav-wrapper red container">
          <ul className="left">
          <li><a href={"/explorar/Percurso/"+this.state.percurso}>
            <i className="material-icons">keyboard_backspace</i>
          </a></li>
          <li>Percurso: {this.state.percurso}</li>
          </ul>
        </div>
      </nav>

      {/*estrelas para telas grandes*/}
      <div class="container hide-on-small-only">
        <br />
        <i class="material-icons large blue-text">grade</i><i class="material-icons large blue-text">grade</i><i class="material-icons large blue-text">grade</i><i class="material-icons large blue-text">grade</i><i class="material-icons large blue-text">grade</i>
      </div>

      {/*estrelas para telas pequenas*/}
      <div class="container hide-on-med-and-up">
        <i class="material-icons medium blue-text">grade</i><i class="material-icons medium blue-text">grade</i><i class="material-icons medium blue-text">grade</i><i class="material-icons medium blue-text">grade</i><i class="material-icons medium blue-text">grade</i>
      </div>

      <div class="container">
        {/*mensagem de parabenizacao*/}
        <h2 class="blue-text">Parabéns!</h2>
        <h5>Você terminou o percurso {this.state.percurso}.</h5>
        {/*botao de recomecar percurso*/}
        <br />
        <a href={"/explorar/Percurso/"+this.state.percurso} class="btn red white-text" onClick={()=>this.recomecarPercurso()}><i class="material-icons left">replay</i> Recomeçar Percurso</a> <a class="btn green white-text" onClick={()=>this.recomecarPercurso()}><i class="material-icons left">playlist_play</i>Lista de Percursos</a>
      </div>

        <br />
      </div>
    );
  }
}

const Percursos = {Percurso, FinalPercurso};
export default Percursos;
