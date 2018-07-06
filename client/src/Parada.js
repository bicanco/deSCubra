import React, {Component} from 'react';
import M from 'materialize-css';
import Client from './Client.js';
import uspPH from './img/usp-placeholder.jpg';
import { Link } from "react-router-dom";

//classe de tela de uma parada do explorador
export class Enigma extends Component{
  constructor(props){
      super(props);
      this.state ={
          percurso: props.aux.match.params.idPercurso,
          id: props.aux.match.params.idParada,
          nome: "",
          descricao: "",
          enigma: "",
          resposta: "",
          imgSrc: "",
          next: "",
          status: "answering"
      }
  }

  componentDidMount(){
    this.setState({
      percurso: this.props.aux.match.params.idPercurso,
      id: this.props.aux.match.params.idParada,
    })
    console.log(this.state.percurso);
    Client.selectParada(this.state.percurso,this.state.id, res =>{
      console.log(res);
      console.log("Selecionou Parada");
      if(res.sucess === 'True'){
        this.setState({
          nome: res.nome,
          descricao: res.descricao,
          enigma: res.pergunta,
          resposta: res.resposta,
          imgSrc: res.imagem,
        });
        this.conferirFinalPercurso();
      }else{
        console.log("Erro ao tentar selecionar Parada");
      }
    });
  }

  conferirResposta(){
    var x = document.getElementById("formRespostaParada").elements[0].value;
    var acertou = false
    console.log("Resposta digitada "+x)
    var possiveisRespostas = this.state.resposta.split(";");
    for(var i = 0 ; i < possiveisRespostas.length; i++){
      if(x === possiveisRespostas[i]){
        this.setState({status: "correct"})
        acertou = true
        break;
      }
    }
    if(!acertou){
      this.setState({status: "wrong"})
    }
  }

  conferirFinalPercurso(){
    Client.lastParada(this.state.percurso, res=>{
        if(this.state.id == res.lastParada){
          this.setState({next: "/explorar/finalPercurso/"+this.state.percurso});
        }else{
          const nextID = parseInt(this.state.id) + 1;
          this.setState({next: "/explorar/Parada/"+this.state.percurso+"/"+nextID});
        }
    });
  }

  render(){
    if(this.state.status === "answering"){
      return(
        <div>
          <nav className="red">
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

          {/*texto do enigma da parada*/}
          <div className="container">
            <br />
            <div className="row">
              <div className="col s12 m6 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="badge red white-text left" data-badge-caption="° ENIGMA">{parseInt(this.state.id) + 1}</span>
                    <br /><h6>{this.state.enigma}</h6>
                  </div>
                </div>
              </div>

              <div className="col s12 m6 l6">
                <div className="card">
                  <div className="card-content">
                    <span className="badge green white-text left" data-badge-caption="DIGITE SUA RESPOSTA"></span>
                    <br />
                    {/*resposta do enigma da parada*/}
                    <form id="formRespostaParada">
                      <input type="text" />
                    </form>
                    <br />
                    {/*botoes de pular e responder*/}
                      <button className="btn red white-text" onClick={() => this.setState({status: "info"}) }>
                        <i className="material-icons left">call_missed_outgoing</i>Pular
                      </button>
                    <button className="btn green white-text" onClick={() => this.conferirResposta()}>
                      <i className="material-icons left">explore</i>Responder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(this.state.status === "correct"){
      return (
        <div id="RespostaCorreta">
          <i className="material-icons large green-text">offline_pin</i><br />
          <h4 className="green-text">Resposta Correta</h4>
          <h5>Parabéns, você acertou!</h5>
          <button className="btn-flat green-text" onClick={() => this.setState({status: "info"})}>Ver Parada</button>
          <br />
      </div>
      )
    } else if(this.state.status === "info"){
      return (
        <div id="Descricao">
          <div>
            <div className="row"><div className="col s12 m8 l8 offset-m2 offset-l2">
              <img src={uspPH} className="responsive-img" alt="Imagem do Percurso" />
            </div></div>
            <h4>{this.state.nome}</h4>
            <p>{this.state.descricao}</p>
          </div>
          {/*botao de proximo enigma*/}
          <Link to={this.state.next}>
            <span className="btn-flat green-text">Próximo Enigma</span>
          </Link>
          <br />
        </div>
      )
    } else if(this.state.status === "wrong"){
      return(
        <div id="RespostaErrada">
          <i className="material-icons large red-text">error</i><br />
          <h4 className="red-text">Resposta Incorreta</h4>
          <h5>Infelizmente, essa não é a resposta... Tente de novo!</h5>
          <div>
              <button className="btn red white-text" onClick={() => this.setState({status: "info"}) }>
                <i className="material-icons left">call_missed_outgoing</i>Pular
              </button>
            <button className="btn-flat green-text" onClick={() => this.setState({status: "answering"}) }>Tentar Novamente</button>
          </div>
          <br />
        </div>
      )
    }
  }
}

const Parada = {Enigma};
export default Parada;
