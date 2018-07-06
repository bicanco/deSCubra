import React, {Component} from 'react';
import M from 'materialize-css';
import Client from './Client.js';
import uspPH from './img/usp-placeholder.jpg';
import { Link } from "react-router-dom";

//classe de tela de uma parada do explorador
export class Parada extends Component{
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
      }

      document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.modal');
      var options = {};
      M.Modal.init(elems, options);
       });
  }

  componentDidMount(){
    Client.selectParada(this.state.percurso,this.state.id, res =>{
      console.log(res);
      //console.log("Selecionou Parada");
      if(res.sucess === 'True'){
        this.setState({
          nome: res.nome,
          descricao: res.descricao,
          enigma: res.pergunta,
          resposta: res.resposta,
          imgSrc: res.imagem,
          next: this.conferirFinalPercurso(),
        });
      }else{
        //console.log("Erro ao tentar selecionar Parada");
      }
    });
  }

  mudarParada(){
    /*atualizar status*/
  }

  conferirResposta(){
    var x = document.getElementById("formRespostaParada").elements[0].value;
    var modal = "modalRespostaErrada";
    var possiveisRespostas = this.state.resposta.split(";");
    for(var i = 0 ; i < possiveisRespostas.length; i++){
      if(x === possiveisRespostas[i]){
        modal = "modalRespostaCorreta";
        break;
      }
    }
    var elem = document.getElementById(modal);
    var instance = M.Modal.getInstance(elem);
    instance.open();
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
    const nextID = parseInt(this.state.id) + 1;
    const next = "/explorar/Parada/"+this.state.percurso+"/"+nextID;
    //console.log(nextID);
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
                  <button className="btn red white-text modal-trigger" data-target="modalDescricao"><i className="material-icons left">call_missed_outgoing</i>Pular</button>     <button className="btn green white-text" onClick={() => this.conferirResposta()}><i className="material-icons left">explore</i>Responder</button>
                </div>
              </div>
            </div>
          </div>

          {/*modal de reposta errada*/}
          <div id="modalRespostaErrada" className="modal">
            <div className="modal-content">
              <i className="material-icons large red-text">error</i><br />
              <h4 className="red-text">Resposta Incorreta</h4>
              <h5>Infelizmente, essa não é a resposta... Tente de novo!</h5>
            </div>
            {/*botoes de pular e tentar novamente*/}
            <div className="modal-footer">
              <button className="btn-flat red-text modal-trigger" data-target="modalDescricao">Pular</button>
              <button className="btn-flat green-text modal-close" data-target="modalRespostaErrada">Tentar Novamente</button>
            </div>
          </div>
          {/*modal de resposta correta*/}
          <div id="modalRespostaCorreta" className="modal">
            <div className="modal-content">
              <i className="material-icons large green-text">offline_pin</i><br />
              <h4 className="green-text">Resposta Correta</h4>
              <h5>Parabéns, você acertou!</h5>
            </div>
            {/*botao de ver parada*/}
            <div className="modal-footer">
              <button className="btn-flat green-text modal-trigger" data-target="modalDescricao">Ver Parada</button>
            </div>
          </div>
          {/*modal de descricao de parada*/}
          <div id="modalDescricao" className="modal modal-fixed-footer">
            <div className="modal-content">
              <div className="row"><div className="col s12 m8 l8 offset-m2 offset-l2">
                <img src={uspPH} className="responsive-img" alt="Imagem do Percurso" />
              </div></div>
              <h4>{this.state.nome}</h4>
              <p>{this.state.descricao}</p>
            </div>
            {/*botao de proximo enigma*/}
            <div className="modal-footer">
              <Link to={"/explorar/Parada/"+this.state.nome+"/"+this.state.next}>
                <span className="btn-flat green-text" onClick={() => this.mudarParada()}>Próximo Enigma</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parada;
