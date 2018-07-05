import React from 'react';
import Client from './Client.js';
import {ListaPercursos} from './ListaPercursos.js';
import M from 'materialize-css';
import axios from 'axios';

export class PainelAdmin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			percursos: [1, 2],
		}
		//inicializacao de elementos do materialize
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
				var options = {};
				M.Modal.init(elems, options);
 		});
	}

	componentDidMount(){
		Client.selectPercursos(res => {
			console.log(res.sucess);
			if(res.sucess = "True"){
				console.log("Percursos obtidos")
				this.setState( { percursos: res.percursos } )
			} else{
				console.log("Não foi possível encontrar os percursos")
			}
		})
	}

	render(){
		return(
		<div class="red accent-4">
 	     		<div className="painel_admin_header" >
 	     			<div align='center'>
   	    			<div id="tituloPainelAdmin" class='white-text'>
								<h1>Painel de Administração</h1>
								<h4>PERCURSOS DISPONÍVEIS</h4>
							</div>

						<button class="btn red">Cadastrar Percurso</button><br /><br />
      		</div>

					<ListaPercursos percursos = {this.state.percursos} />
					{/*render da colecao dos percursos disponiveis no sistema*/}

			</div>
		</div>
		);
	}
}
