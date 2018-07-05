import React from 'react';
import {ListaPercursos} from './ListaPercursos.js';
import M from 'materialize-css';
import axios from 'axios';
export class PainelAdmin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			percursos: ['percurso 1', 'percurso B', 'percurso III'],
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
		<div class="container">
 	     			<div align='center'>
   	    			<div id="tituloPainelAdmin" class='black-text'>
								<h3>Painel de Administração</h3>
								<h5>Percursos Disponíveis</h5>
							</div>

					<ListaPercursos percursos={this.state.percursos} />
					{/*render da colecao dos percursos disponiveis no sistema*/}

					<button class="btn green">Cadastrar Novo Percurso</button><br /><br />
			</div>
		</div>
		);
	}
}
