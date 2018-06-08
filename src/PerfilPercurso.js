import React from 'react';
import {ParadasPercurso} from './ParadasPercurso';
import M from 'materialize-css';

export class PerfilPercurso extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: props.name,
			paradas: [1,2,3,4,5,6],
		}
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
		var options = {};
		M.Modal.init(elems, options);
 		 });
	}
	render(){
		return(
		<div class="red accent-4">
 	     		<div className="perfil_percurso" >
 	     			<div align='center'>
   	    			 	<img src={this.props.imgSrc} alt="Imagem do Percurso" />
      					<h1 class="white-text">{this.state.name}    <button data-target="modalTrocarNomePercurso" class="btn modal-trigger red"><i class="material-icons">create</i></button></h1>
					<div id="modalTrocarNomePercurso" class="modal">
						<div class="modal-content">
							<p>Trocar imagem:</p>
							<input type="file" name="pic" accept="image/*" />
 							<input type="submit" />
							<p>Definir novo nome para o percurso:</p>
							<input type="text" />
						</div>
						<div class="modal-footer">
							<a href="#!" class="modal-close waves-effect waves-green btn-flat red-text">Cancelar</a>
							<button  class="modal-close waves-effect waves-green btn-flat green-text">Trocar nome</button>
						</div>
					</div>
      				</div>
      				<ParadasPercurso paradas={this.state.paradas} />
      				<div align='center'>
					<button class="btn green">Nova Parada</button>    <button data-target="modalRemoverPercurso" class="btn modal-trigger red">Remover Percurso</button>
					<div id="modalRemoverPercurso" class="modal">
						<div class="modal-content">
	    						<h4>Tem certeza que deseja remover?</h4>
							<p>Digite o nome do percurso para removê-lo:</p>
							<input type="text" />
	   					</div>
    						<div class="modal-footer">
							<a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
							<a href="#!" class="modal-close waves-effect waves-green btn-flat red-text">Remover</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}
