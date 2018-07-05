import React, {Component} from 'react';
import M from 'materialize-css';
import Client from './Client.js';
import uspPH from './img/usp-placeholder.jpg';
import { Link } from "react-router-dom";

export class Parada extends Component{
  constructor(props){
      super(props);
      this.state ={
          percurso: props.aux.match.params.idPercurso,
          id: props.aux.match.params.idParada,
      }

      document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.modal');
      var options = {};
      M.Modal.init(elems, options);
       });
  }

  componentDidMount(){
    Client.selectParada(this.state.percurso,this.state.id, res =>{
      console.log(res.sucess);
      console.log("Selecionou Parada");
      if(res.sucess === 'True'){
        this.setState({
          nome: res.nome,
          descricao: res.descricao,
          enigma: res.pergunta,
          resposta: res.resposta,
          imgSrc: res.imagem,
        });
      }else{
        console.log("Erro ao tentar selecionar Parada");
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

  render(){
    const nextID = parseInt(this.state.id) + 1;
    const next = "/explorar/Parada/"+this.state.percurso+"/"+nextID;
    console.log(nextID);
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

        {/*texto do enigma da parada*/}
        <div class="container">
          <br />
          <div class="row">
            <div class="col s12 m6 l6">
              <div class="card">
                <div class="card-content">
                  <span class="badge red white-text left" data-badge-caption="° ENIGMA">{parseInt(this.state.id) + 1}</span>
                  <br /><h6>{this.state.enigma}</h6>
                </div>
              </div>
            </div>

            <div class="col s12 m6 l6">
              <div class="card">
                <div class="card-content">
                  <span class="badge green white-text left" data-badge-caption="DIGITE SUA RESPOSTA"></span>
                  <br />
                  {/*resposta do enigma da parada*/}
                  <form id="formRespostaParada">
                    <input type="text" />
                  </form>
                  <br />
                  {/*botoes de pular e responder*/}
                  <button class="btn red white-text modal-trigger" data-target="modalDescricao"><i class="material-icons left">call_missed_outgoing</i>Pular</button>     <button class="btn green white-text" onClick={() => this.conferirResposta()}><i class="material-icons left">explore</i>Responder</button>
                </div>
              </div>
            </div>
          </div>

          {/*modal de reposta errada*/}
          <div id="modalRespostaErrada" class="modal">
            <div class="modal-content">
              <i class="material-icons large red-text">error</i><br />
              <h4 class="red-text">Resposta Incorreta</h4>
              <h5>Infelizmente, essa não é a resposta... Tente de novo!</h5>
            </div>
            {/*botoes de pular e tentar novamente*/}
            <div class="modal-footer">
              <button class="btn-flat red-text modal-trigger" data-target="modalDescricao">Pular</button>
              <button class="btn-flat green-text modal-close" data-target="modalRespostaErrada">Tentar Novamente</button>
            </div>
          </div>
          {/*modal de resposta correta*/}
          <div id="modalRespostaCorreta" class="modal">
            <div class="modal-content">
              <i class="material-icons large green-text">offline_pin</i><br />
              <h4 class="green-text">Resposta Correta</h4>
              <h5>Parabéns, você acertou!</h5>
            </div>
            {/*botao de ver parada*/}
            <div class="modal-footer">
              <button class="btn-flat green-text modal-trigger" data-target="modalDescricao">Ver Parada</button>
            </div>
          </div>
          {/*modal de descricao de parada*/}
          <div id="modalDescricao" class="modal modal-fixed-footer">
            <div class="modal-content">
              <div class="row"><div class="col s12 m8 l8 offset-m2 offset-l2">
                <img src={uspPH} className="responsive-img" alt="Imagem do Percurso" />
              </div></div>
              <h4>{this.state.nome}</h4>
              <p>{this.state.descricao}</p>
            </div>
            {/*botao de proximo enigma*/}
            <div class="modal-footer">
              <a href={next} class="btn-flat green-text" onClick={() => this.mudarParada()}>Próximo Enigma</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parada;
