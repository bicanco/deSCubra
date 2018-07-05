import React, {Component} from 'react';
import M from 'materialize-css';
import Client from './Client.js';
import { Link } from "react-router-dom";

export class Parada extends Component{
  constructor(props){
      super(props);//passar como props nome do percurso, id da parada, nome da parada, direcoes e enigma da prada, imagem da parada, descricao da parada e possiveis respostas da parada
      this.state = {
          percurso: "Percurso de Teste 1",
          id: 0,
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
    return(
      <div>
        <nav>
          {/*barra de voltar para tela principal*/}
          <div className="nav-wrapper red">
            <ul className="left">
            <li><a href="#">
              <i className="material-icons">keyboard_backspace</i>
            </a></li>
            <li>Percurso: {this.state.percurso}</li>
            </ul>
          </div>
        </nav>
        {/*texto do enigma da parada*/}
        <h2>Enigma {this.state.id}</h2>
        <h4>Direções: {this.state.direcoes}</h4>
        <h4>{this.state.enigma}</h4>
        {/*resposta do enigma da parada*/}
        <form id="formRespostaParada">
          <input type="text" />
        </form>
        {/*botoes de pular e responder*/}
        <button class="btn-flat red-text modal-trigger" data-target="modalDescricao">Pular</button>
        <button class="btn-flat green-text" onClick={() => this.conferirResposta()}>Responder</button>
        {/*modal de reposta errada*/}
        <div id="modalRespostaErrada" class="modal">
          <div class="modal-content">
            <h1>Resposta Incorreta</h1>
          </div>
          {/*botoes de pular e tentar novamente*/}
          <div class="modal-footer">
            <a class="btn-flat red-text modal-trigger" href="#modalDescricao">Pular</a>
            <a class="btn-flat green-text modal-close" href="#!">Tentar Novamente</a>
          </div>
        </div>
        {/*modal de resposta correta*/}
        <div id="modalRespostaCorreta" class="modal">
          <div class="modal-content">
            <h1>RespostaCorreta</h1>
          </div>
          {/*botao de ver parada*/}
          <div class="modal-footer">
            <a class="btn-flat green-text modal-trigger" href="#modalDescricao">Ver Parada</a>
          </div>
        </div>
        {/*modal de descricao de parada*/}
        <div id="modalDescricao" class="modal modal-fixed-footer">
          <div class="modal-content">
            <img className="responsive-img" alt="Imagem do Percurso" />
            <h4>{this.state.nome}</h4>
            <p>{this.state.descricao}</p>
          </div>
          {/*botao de proximo enigma*/}
          <div class="modal-footer">
            <Link to="./Parada" class="btn-flat green-text">Próximo Enigma</Link>
          </div>
        </div>
        <p><br /></p>
      </div>
    );
  }
}

export default Parada;
