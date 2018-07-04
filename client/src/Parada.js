import React, {Component} from 'react';
import M from 'materialize-css';

export class Parada extends Component{
  constructor(props){
      super(props);
      this.state = {
          percurso: "percurso 1",
          id: 1,
          nome: "Nome parada",
          direcoes: "vire a esquerda",
          enigma: "Local de encontro para muitos estudantes de qual curso?",
          imgSrc: "",
          descricao: "fdsfkndsokfndsonfosdnfiodniofnsdaoifnnnnnnnn\nnnn\nnnnnnnnnnnnnnnnnnn\nnnn\\\\\nnnnn\nnnnnnn\nnnn\n\n\n\\n\n\n\n\n\n\n\n\n\nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnaaaaaaaaaaaaaaaaaaaaaa",
          resposta: "resposta"
      }

      document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.modal');
      var options = {};
      M.Modal.init(elems, options);
       });
  }

  conferirResposta(){
    /*falta conferir todas as possiveis respostas*/
    var x = document.getElementById("formRespostaParada");
    var elem = document.getElementById(x.elements[0].value===this.state.resposta?"modalRespostaCorreta":"modalRespostaErrada");
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
        <h2>Enigma {this.state.id}</h2>
        <h4>Direções: {this.state.direcoes}</h4>
        <h4>{this.state.enigma}</h4>
        <form id="formRespostaParada">
          <input type="text" />
        </form>
        <button class="btn-flat red-text modal-trigger" data-target="modalDescricao">Pular</button>
        <button class="btn-flat green-text" onClick={() => this.conferirResposta()}>Responder</button>
        <div id="modalRespostaErrada" class="modal">
          <div class="modal-content">
            <h1>Resposta Incorreta</h1>
          </div>
          <div class="modal-footer">
            <a class="btn-flat red-text modal-trigger" href="#modalDescricao">Pular</a>
            <a class="btn-flat green-text modal-close" href="#!">Tentar Novamente</a>
          </div>
        </div>
        <div id="modalRespostaCorreta" class="modal">
          <div class="modal-content">
            <h1>RespostaCorreta</h1>
          </div>
          <div class="modal-footer">
            <a class="btn-flat green-text modal-trigger" href="#modalDescricao">Ver Parada</a>
          </div>
        </div>
        <div id="modalDescricao" class="modal modal-fixed-footer">
          <div class="modal-content">
            <img className="responsive-img" alt="Imagem do Percurso" />
            <h4>{this.state.nome}</h4>
            <p>{this.state.descricao}</p>
          </div>
          <div class="modal-footer">
            <a class="btn-flat green-text modal-trigger">Próximo Enigma</a>
          </div>
        </div>
        <p><br /></p>
      </div>
    );
  }
}

export default Parada;
