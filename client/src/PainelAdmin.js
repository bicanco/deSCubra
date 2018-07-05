import React from 'react';
import {ListaPercursos} from './ListaPercursos.js';
import M from 'materialize-css';
import axios from 'axios';
import Client from './Client.js';

export class PainelAdmin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			percursos: [],
		}
		//inicializacao de elementos do materialize
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
		var options = {};
		M.Modal.init(elems, options);
 		 });
	}

	componentDidMount(){
		Client.listPercursos(res => {
			this.setState({percursos: res.percursos})
		})
	}

	render(){
		return(
		<div className="red accent-4">
 	     		<div className="painel_admin_header" >
 	     			<div align='center'>
   	    			<div id="tituloPainelAdmin" className='white-text'>
								<h1>Painel de Administração</h1>
								<h4>PERCURSOS DISPONÍVEIS</h4>
							</div>

						<button className="btn red">Cadastrar Percurso</button><br /><br />
      		</div>

					<ListaPercursos percursos={this.state.percursos} />
					{/*render da colecao dos percursos disponiveis no sistema*/}

			</div>
		</div>
		);
	}
}
