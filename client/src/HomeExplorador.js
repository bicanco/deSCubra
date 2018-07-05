import React from 'react';
import M from 'materialize-css';
import axios from 'axios';
import uspPH from './img/usp-placeholder.jpg';
import {ListaCartasPercursos} from './ListaCartasPercursos.js';

export class HomeExplorador extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			percursos: [
				{"nome":"Percurso 1",
					"descricao":"Descricao 1 do primeiro percurso, sou um cartão!"},
			  {"nome":"Percurso 2",
					"descricao":"Descricao 2 do primeiro percurso, sou um cartão!"}
      ],
			nomeUsuario: "Juliana Crivelli"
		}
		//inicializacao de elementos do materialize
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
		var options = {};
		M.Modal.init(elems, options);
 		 });
	}

	render(){
		return(
				<div>
						<div id="tituloHome" class='black-text'>
							<h1>Olá, {this.state.nomeUsuario}!</h1>
							<h4>Onde você quer explorar hoje?</h4>
						</div>
          <ListaCartasPercursos percursos={this.state.percursos} />
				</div>
	 );
	}
}