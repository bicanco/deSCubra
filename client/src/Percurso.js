import React,{Component} from 'react';
import logo from './img/logo.png';
import uspimg from './img/usp-campus1.jpg';
import Client from './Client.js';

export class Percurso extends React.Component{
  constructor(props){
    console.log(props.match)
    super(props);//passar como props nome, descricao, nParadas e estimativa
    this.state = {
      nome: props.match.params.idPercurso,
      descricao: "A casa de milhares de estudantes por ano. Conheça mais o campus, seus prédios e um pouco da sua história.",
      nParadas: 8,
      estimativa: "2:30",
    }
  }

  componentDidMount(){
    console.log("teste")
		Client.selectPercurso(this.state.nome, res => {
			this.setState({
        nome: res.percursos[0][0],
        descricao: res.percursos[0][1],
        nParadas: res.percursos[0][2]
      })
			console.log(res)
		})
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
              <div className="card s12 m4 offset-m4 l4 offset-l4">
                <div className="card-image">
                  <img src={uspimg} />
                  <span className="card-title">{this.state.nome}</span> {/*nome do percurso*/}
                </div>
              <div className="card-content">
                {/*informacoes do percurso*/}
                <span className="badge green white-text left" data-badge-caption="PARADAS">{this.state.nParadas}</span>
                <span className="badge blue white-text left" data-badge-caption="CAMINHADA"></span>

                <br /><h6>{this.state.descricao}</h6> {/*descricao do percurso*/}
              </div>
              <div className="card-action">
                <a href={"/explorar/Parada/"+this.state.nome+"/0"} className="btn waves-effect waves-light red white-text"><i className="material-icons left">directions_run</i>INICIAR</a>
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
        percurso: "percurso",
      }
  }

  recomecarPercurso(){
    /*fazer mudanca status*/
  }

  render(){
    return(
      <div>
        <nav>
          {/*barra de voltar para tela principal*/}
          <div className="nav-wrapper red">
            <ul className="left">
            <li><a href={"explorar/Percurso/"+this.state.percurso}>
              <i className="material-icons">keyboard_backspace</i>
            </a></li>
            <li>Percurso: {this.state.percurso}</li>
            </ul>
          </div>
        </nav>
        {/*mensagem de parabenizacao*/}
        <h2>Parabéns!</h2>
        <h4>Você terminou o percurso {this.state.percurso} </h4>
        {/*botao de recomecar percurso*/}
        <a href={"/explorar/Percurso/"+this.state.percurso} className="btn-flat red-text" onClick={()=>this.recomecarPercurso()}>Recomeçar Percurso</a>
      </div>
    );
  }
}

const Percursos = {Percurso, FinalPercurso};
export default Percursos;
