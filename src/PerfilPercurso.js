import React from 'react';
import {ParadasPercurso} from './ParadasPercurso';
import M from 'materialize-css';

export class PerfilPercurso extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			paradas: [1,2,3,4,5,6],
		}
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
		var options = {};
		var instances = M.Modal.init(elems, options);
 		 });
	}
	render(){
		return(
		<header style={{backgroundColor: 'red'}}>
 	     		<div className="perfil_percurso" >
 	     			<div align='center'>
   	    			 	<img src={this.props.imgSrc} alt="Imagem do Percurso" />
      					<h1 class="white-text">{this.props.name}    <button class="btn red"><i></button></h1>
      				</div>
      				<ParadasPercurso paradas={this.state.paradas} />
      				<div align='center'>
					<button class="btn green">Nova Parada</button>    <button data-target="modal1" class="btn modal-trigger red">Remover Percurso</button>
					<div id="modal1" class="modal">
						<div class="modal-content">
	    						<h4>Tem certeza que deseja remover?</h4>
							<p>Digite o nome do percurso para removê-lo.</p>
							<input type="text" />
	   					</div>
    						<div class="modal-footer">
							<a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
							<a href="#!" class="modal-close waves-effect waves-green btn-flat red-text">Remover</a>
						</div>
					</div>
				</div>
			</div>
		</header>
		);
	}
}
